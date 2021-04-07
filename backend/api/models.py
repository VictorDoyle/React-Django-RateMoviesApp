from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
# model imports
from django.contrib.auth.models import User

class Movie(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField(max_length=300)

class Rating(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    stars = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    class Meta:
        # rating a specific movie by a specific user -- keep rating unique and not multiple
        unique_together = (('user', 'movie'),)
        index_together = (('user', 'movie'),)