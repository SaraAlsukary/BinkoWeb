from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    name=models.CharField(max_length=250)
    username=models.EmailField(unique=True)
    password=models.CharField(max_length=100)
    image=models.ImageField(null=True ,upload_to='imgs/CustomUser')
    is_manager = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    discriptions=models.CharField(max_length=250 , null=True)


    def __str__(self):
        return self.username