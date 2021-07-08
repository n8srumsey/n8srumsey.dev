from django.db.models.query_utils import select_related_descend
from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import BlogPostSerializer, CreateBlogPostSerializer, ProjectSerializer
from .models import BlogPost, Project

# Create your views here.
class ProjectView(generics.CreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class BlogPostView(generics.ListAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

class CreateBlogPostView(APIView):
    serializer_class = CreateBlogPostSerializer
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            title = serializer.data.get('title')
            content = serializer.data.get('content')
            queryset = BlogPost.objects.filter(title=title)
            if queryset.exists():
                post = queryset[0]
                post.content = content
                post.save(update_fields=['content'])
                return Response(BlogPostSerializer(post).data, status=status.HTTP_200_OK)
            else:
                post = BlogPost(title=title, content=content)
                post.save()
                return Response(BlogPostSerializer(post).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
