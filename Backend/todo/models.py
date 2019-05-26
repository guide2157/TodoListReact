from django.db import models

# Create your models here.


class Member(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    googleID = models.CharField(max_length=30)

    def __str__(self):
        return self.first_name


class Todo(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    completed = models.BooleanField(default=False)
    deadline = models.DateTimeField()

    def __str__(self):
        return self.title

