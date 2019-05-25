from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer, MemberSerializer
from .models import Todo, Member

# Create your views here.


class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()


class MemberView(viewsets.ModelViewSet):
    serializer_class = MemberSerializer
    queryset = Member.objects.all()
