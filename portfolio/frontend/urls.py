from django.urls import path
from .views  import index

urlpatterns = [
    path('', index),
    path('blog/', index),
    path('blog-admin/', index)
]