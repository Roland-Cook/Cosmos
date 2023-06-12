# Generated by Django 4.2.2 on 2023-06-12 21:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("planet", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="PlanetSystem",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                (
                    "planets",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="planets",
                        to="planet.planet",
                    ),
                ),
            ],
        ),
    ]
