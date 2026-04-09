from django.urls import path
from .views.fbv import products_list, product_detail

# urlpatterns = [
#     path("products/", products_list),
#     path("products/<int:product_id>/", product_detail),
# ]

from .views.cbv import ProductListAPIView, ProductDetailAPIView

urlpatterns = [
    path("products/", ProductListAPIView.as_view()),
    path("products/<int:product_id>/", ProductDetailAPIView.as_view()),
]

# from .views.mixins import ProductListAPIView, ProductDetailAPIView
#
# urlpatterns = [
#     path("products/", ProductListAPIView.as_view()),
#     path("products/<int:product_id>/", ProductDetailAPIView.as_view()),
# ]

# from .views.generics import (
#     ProductListAPIView,
#     ProductDetailAPIView,
#     CategoryListAPIView,
#     CategoryDetailAPIView,
#     CategoryProductsAPIView,
# )
#
# urlpatterns = [
#     path("products/", ProductListAPIView.as_view()),
#     path("products/<int:product_id>/", ProductDetailAPIView.as_view()),
#     path("categories/", CategoryListAPIView.as_view()),
#     path("categories/<int:category_id>/", CategoryDetailAPIView.as_view()),
#     path("categories/<int:category_id>/products/", CategoryProductsAPIView.as_view()),
# ]

# from django.urls import include, path
# from rest_framework.routers import DefaultRouter
# from .views import ProductViewSet, CategoryViewSet
#
# router = DefaultRouter()
# router.register(r"products", ProductViewSet)
# router.register(r"categories", CategoryViewSet)
#
# urlpatterns = [
#     path("", include(router.urls)),
# ]