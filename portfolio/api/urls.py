from django.urls import path

from .views import BlogPostView, CreateBlogPostView, ProjectView

urlpatterns = [
    path('project/', ProjectView.as_view()),
    path('blogpost/', BlogPostView.as_view()),
    path('blogpost/create', CreateBlogPostView.as_view())
]
