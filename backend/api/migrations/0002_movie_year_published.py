# Generated by Django 3.2 on 2021-04-07 23:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='year_published',
            field=models.DateField(blank=True, null=True),
        ),
    ]
