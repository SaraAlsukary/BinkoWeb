from rest_framework import serializers
from .models import Book_Fav ,Book
from categories.models import Category
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'name', 'image' ,'description']


class FavoriteBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book_Fav
        fields = ['user', 'book']        



class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class BookCatSerializer(serializers.ModelSerializer):
    categories = serializers.SerializerMethodField()
    class Meta:
        model = Book
        fields = ['id', 'name', 'categories' , 'image' ,'description' ]

    def get_categories(self, obj):
        categories = Category.objects.filter(bookcategory__book=obj)
        return CategorySerializer(categories, many=True).data        