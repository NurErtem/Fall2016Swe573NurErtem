from django.contrib.auth.models import User
from django.db import models
from django.utils import timezone

from core import constants


class BaseModel(models.Model):
    id = models.AutoField(primary_key=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        abstract = True


class RootModel(BaseModel):
    create_date = models.DateTimeField(editable=False, null=False, default=timezone.now)

    class Meta:
        abstract = True


class UserProfile(RootModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    birth_date = models.DateField(null=True, blank=True)
    height = models.IntegerField(null=True, blank=True)
    weight = models.DecimalField(max_digits=3, decimal_places=1, null=True)
    gender = models.CharField(max_length=1, choices=constants.GENDERS)
    note = models.TextField(max_length=200)

    bmi = models.DecimalField(max_digits=4, decimal_places=1, null=True)

    class Meta:
        ordering = ['create_date']

    def __str__(self):
        result = [('%s=%s' % (key, value)) for key, value in self.__dict__.items()]
        return result.__str__()


class UserWeightHistory(RootModel):
    user = models.ForeignKey(UserProfile)
    weight = models.DecimalField(max_digits=3, decimal_places=1)
    height = models.IntegerField(null=True, blank=True)
    bmi = models.DecimalField(max_digits=4, decimal_places=2)
    date = models.DateField(default=timezone.now)
    note = models.TextField(max_length=100)

    class Meta:
        ordering = ['date']

    def __str__(self):
        result = [('%s=%s' % (key, value)) for key, value in self.__dict__.items()]
        return result.__str__()