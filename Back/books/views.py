from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Book_Fav , Book ,Book_Category
from account.models import CustomUser
from .serializers import BookSerializer , FavoriteBookSerializer , BookCatSerializer
from account.models import CustomUser
from categories.models import Category
@api_view(['GET'])
def favorite_books(request, user_id):
    try:
        favorite_books = Book_Fav.objects.filter(user_id=user_id).select_related('book')
        serializer = BookSerializer([fav.book for fav in favorite_books], many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except CustomUser.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
@api_view(['POST'])
def add_favorite_book(request):
    serializer = FavoriteBookSerializer(data=request.data)
    
    if serializer.is_valid():
        user_id = request.data.get('user')
        book_id = request.data.get('book')
        
        try:
            user = CustomUser.objects.get(id=user_id)
            book = Book.objects.get(id=book_id)
            
            favorite_book = Book_Fav(user=user, book=book)
            favorite_book.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except CustomUser.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        except Book.DoesNotExist:
            return Response({'error': 'Book not found'}, status=status.HTTP_404_NOT_FOUND)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    



def get_books_by_category(request, category_id):
    try:
        # التحقق من وجود الفئة
        category = Category.objects.get(id=category_id)
        # جلب الكتب المرتبطة بالفئة عبر BookCategory
        book_ids = Book_Category.objects.filter(category=category).values_list('book_id', flat=True)
        books = Book.objects.filter(id__in=book_ids)
        serializer = BookSerializer(books, many=True)
        return JsonResponse(serializer.data, safe=False)
    except Category.DoesNotExist:
        return JsonResponse({"error": "Category not found."}, status=404)
    


def get_all_books(request):
    books = Book.objects.all()
    serializer = BookSerializer(books, many=True)
    return JsonResponse(serializer.data, safe=False)    