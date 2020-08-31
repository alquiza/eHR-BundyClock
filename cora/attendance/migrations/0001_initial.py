# Generated by Django 3.0.9 on 2020-08-04 10:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DailyTimeIN',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time_in', models.DateTimeField(auto_created=True, auto_now_add=True)),
                ('employee_id', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='DailyTimeOUT',
            fields=[
                ('time_out', models.DateTimeField(auto_created=True, auto_now_add=True)),
                ('id', models.OneToOneField(blank=True, default=' ', on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='attendance.DailyTimeIN')),
                ('employee_id', models.CharField(max_length=20)),
            ],
        ),
    ]