# Generated by Django 3.2.3 on 2021-05-15 04:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20210514_1740'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogpost',
            name='title',
            field=models.CharField(max_length=250, unique=True),
        ),
    ]
