from django.contrib import admin
from .models import Todo, Member

# Register your models here.


class MemberAdmin(admin.ModelAdmin):
    fields = ('first_name', 'last_name', 'email', 'googleID')


class TodoAdmin(admin.ModelAdmin):
    fields = ('title', 'description', 'deadline', 'owner')


admin.site.register(Todo, TodoAdmin)
admin.site.register(Member, MemberAdmin)
