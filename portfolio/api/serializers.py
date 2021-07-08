from .models import BlogPost, Project
from rest_framework import serializers


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'project_title', 'project_id', 'summary_text', 'date_finished', 'last_updated')

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ('id', 'time_posted', 'last_updated', 'title', 'content')

    def create(self, validated_data):
        return BlogPost(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.content = validated_data.get('content', instance.content)
        instance.save()
        return instance
        

class CreateBlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ('title', 'content')