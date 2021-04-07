from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
# model imports
from django.contrib.auth.models import User

class Movie(models.Model):
    title = models.CharField(max_length=30)
    description = models.TextField(max_length=300)
    year_published = models.DateField(blank=True, null=True)

    def num_of_ratings(self):
        ratings = Rating.objects.filter(movie=self)
        return len(ratings)
    
    def avg_ratings(self):
        sum = 0
        ratings = Rating.objects.filter(movie=self)
        for rating in ratings:
            sum += rating.stars
        if len(ratings) > 0:
            return sum / len(ratings)
        else:
            return 0

class Rating(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    stars = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    class Meta:
        # rating a specific movie by a specific user -- keep rating unique and not multiple
        unique_together = (('user', 'movie'),)
        index_together = (('user', 'movie'),)