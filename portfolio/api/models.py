from django.db import models
from django.db.models.fields import CharField, DateField, TextField, DateTimeField
from django.db.models.fields.files import ImageField
from django.db.models.fields.related import ForeignKey

# Create your models here.
class Project(models.Model):
    project_title = CharField(max_length=200)
    project_id = CharField(max_length=50, unique=True)
    # project_logo = ImageField()
    summary_text = TextField()
    # general project categories
    date_finished = DateField(default=None)
    created_at = DateTimeField(auto_now_add=True)
    last_updated = DateTimeField(auto_now=True)

class ProjectTag(models.Model):
    tag = CharField(max_length=50)
    project = ForeignKey(Project, on_delete=models.CASCADE)

class BlogPost(models.Model):
    time_posted = DateTimeField(auto_now_add=True)
    last_updated = DateTimeField(auto_now=True)
    title = CharField(max_length=250)
    content = TextField()
    summary = TextField(default='')
    # primary_image = 
    # image_desc = 
    # images other than primary included in markdown somehow?

class ContactMessage(models.Model):
    name = CharField(max_length=50, help_text='Name')
    email = CharField(max_length=50, help_text='Email')
    message = TextField(help_text='Message')
    timestamp = DateTimeField(auto_now_add=True)