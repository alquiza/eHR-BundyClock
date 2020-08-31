from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=128)
    desc = models.TextField()
    year = models.IntegerField()

    def __unicode__(self):
        return self(Project)


class Principal(models.Model):
    name = models.CharField(max_length=128)
    address = models.TextField()
    url = models.URLField()
    email = models.EmailField()
    mobile = models.CharField(max_length=64)

    def __unicode__(self):
        return self(Principal)


class Contractor(models.Model):
    name = models.CharField(max_length=128)
    email = models.EmailField()
    mobile = models.CharField(max_length=64)

    def __unicode__(self):
        return self(Contractor)
