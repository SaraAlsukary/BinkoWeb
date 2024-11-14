from django.db import models

class Chapter(models.Model):
    title=models.CharField(max_length=250)
    content_text=models.CharField(max_length=900000)
    audio=models.FileField(upload_to='audio/', null=True, blank=True)
    class Meta:
        db_table='chapters'