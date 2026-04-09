from django.core.management.base import BaseCommand

from api.models import Category, Product


class Command(BaseCommand):
    help = 'Seed database with 4 categories and 20 products'

    def handle(self, *args, **options):
        Category.objects.all().delete()
        Product.objects.all().delete()

        electronics = Category.objects.create(name='Electronics')
        clothing = Category.objects.create(name='Clothing')
        books = Category.objects.create(name='Books')
        home = Category.objects.create(name='Home & Garden')

        products = [
            Product(name='Smartphone', price=699.99, description='Latest smartphone with OLED display', count=50, is_active=True, category=electronics),
            Product(name='Laptop', price=1299.99, description='Powerful laptop for work and gaming', count=30, is_active=True, category=electronics),
            Product(name='Wireless Headphones', price=149.99, description='Noise-cancelling wireless headphones', count=100, is_active=True, category=electronics),
            Product(name='Tablet', price=499.99, description='Lightweight tablet with stylus support', count=40, is_active=True, category=electronics),
            Product(name='Smartwatch', price=249.99, description='Fitness tracking smartwatch', count=60, is_active=True, category=electronics),
            Product(name='T-Shirt', price=19.99, description='Cotton t-shirt in various colors', count=200, is_active=True, category=clothing),
            Product(name='Jeans', price=49.99, description='Classic denim jeans', count=150, is_active=True, category=clothing),
            Product(name='Sneakers', price=89.99, description='Comfortable running sneakers', count=80, is_active=True, category=clothing),
            Product(name='Jacket', price=129.99, description='Waterproof winter jacket', count=60, is_active=True, category=clothing),
            Product(name='Hoodie', price=39.99, description='Warm fleece hoodie', count=120, is_active=True, category=clothing),
            Product(name='Python Crash Course', price=29.99, description='Beginner-friendly Python programming book', count=90, is_active=True, category=books),
            Product(name='Clean Code', price=34.99, description='A handbook of agile software craftsmanship', count=70, is_active=True, category=books),
            Product(name='The Pragmatic Programmer', price=39.99, description='Classic software development guide', count=55, is_active=True, category=books),
            Product(name='Design Patterns', price=44.99, description='Gang of Four design patterns book', count=45, is_active=True, category=books),
            Product(name='JavaScript: The Good Parts', price=24.99, description='Essential JavaScript concepts', count=85, is_active=True, category=books),
            Product(name='Table Lamp', price=34.99, description='Modern LED table lamp', count=70, is_active=True, category=home),
            Product(name='Plant Pot', price=14.99, description='Ceramic plant pot for indoor plants', count=150, is_active=True, category=home),
            Product(name='Throw Pillow', price=19.99, description='Decorative throw pillow set', count=100, is_active=True, category=home),
            Product(name='Wall Clock', price=29.99, description='Minimalist wall clock', count=80, is_active=True, category=home),
            Product(name='Garden Tools Set', price=49.99, description='5-piece stainless steel garden tools', count=40, is_active=True, category=home),
        ]
        Product.objects.bulk_create(products)

        self.stdout.write(self.style.SUCCESS(
            f'Created {Category.objects.count()} categories and {Product.objects.count()} products'
        ))
