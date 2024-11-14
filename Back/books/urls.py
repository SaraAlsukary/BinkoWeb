from django.urls import path
from .views import favorite_books , add_favorite_book , get_books_by_category , get_all_books

urlpatterns = [
    path('favorite-books/<int:user_id>/', favorite_books, name='favorite-books'),
    path('add-favorite/', add_favorite_book, name='add-favorite'),
    path('books/category/<int:category_id>/',get_books_by_category, name='get_books_by_category'),
    path('books/',get_all_books, name='get_all_books'),
]