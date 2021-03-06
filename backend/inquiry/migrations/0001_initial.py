# Generated by Django 3.0.6 on 2020-06-01 02:01

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Inquiry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('body', models.CharField(max_length=3000)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
        migrations.CreateModel(
            name='InquiryComment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.CharField(max_length=1000)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('inquiry', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='inquiry.Inquiry')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='InquiryTagStudyAbroadCountry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='Inquiry_country_study_abroad', to='account.Country')),
                ('inquiry', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='inquiry.Inquiry')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='InquiryTagStatus',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.CharField(choices=[('FU', 'Future Student'), ('CU', 'Current Student'), ('AL', 'Alumni')], default='CU', max_length=20)),
                ('inquiry', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='inquiry.Inquiry')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='InquiryTagStartYear',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lower_bound', models.IntegerField(blank=True, null=True)),
                ('upper_bound', models.IntegerField(blank=True, null=True)),
                ('inquiry', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='inquiry.Inquiry')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='InquiryTagSchool',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Inquiry_school', to='account.School')),
                ('inquiry', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='inquiry.Inquiry')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='InquiryTagMajor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='Inquiry_school', to='account.Major')),
                ('inquiry', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='inquiry.Inquiry')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='InquiryTagHomeCountry',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('body', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='Inquiry_country_origin', to='account.Country')),
                ('inquiry', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='inquiry.Inquiry')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='InquiryTagEndYear',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('lower_bound', models.IntegerField(blank=True, null=True)),
                ('upper_bound', models.IntegerField(blank=True, null=True)),
                ('inquiry', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='inquiry.Inquiry')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='InquiryLike',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('inquiry', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='inquiry.Inquiry')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='InquiryCommentLike',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('comment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='likes', to='inquiry.InquiryComment')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
