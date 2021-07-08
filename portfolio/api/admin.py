from .models import BlogPost, ContactMessage, Project, ProjectTag
from django.contrib import admin

# Register your models here.
admin.site.register(Project)
admin.site.register(ProjectTag)
admin.site.register(BlogPost)
admin.site.register(ContactMessage)