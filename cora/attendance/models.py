from django.db import models
from core.employee.models import Identity


class DailyTimeIN(models.Model):
    ## employee_id = models.OneToOneField(Identity, on_delete=models.CASCADE, primary_key=True)
    ## employee_id = models.CharField(max_length=20, primary_key=True)
    employee_id = models.CharField(max_length=20)
    time_in = models.DateTimeField(auto_created=True, auto_now_add=True)

    def __unicode__(self):
        return self(DailyTimeIN)

class DailyTimeOUT(models.Model):
    id = models.OneToOneField(DailyTimeIN, on_delete=models.CASCADE, primary_key=True)
    employee_id = models.CharField(max_length=20)
    time_out = time_out = models.DateTimeField(auto_created=True, auto_now_add=True)

    def __unicode__(self):
        return self(DailyTimeOUT)
