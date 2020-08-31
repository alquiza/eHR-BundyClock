from django.db import models
from core.employee.models import Identity


class DailyTimeIN(models.Model):
    employee_id = models.ForeignKey(Identity, on_delete=models.CASCADE)
    time_in = models.DateTimeField(auto_created=True, auto_now_add=True)

    def __unicode__(self):
        return self(DailyTimeIN)


class DailyTimeOUT(models.Model):
    employee_id = models.ForeignKey(Identity, on_delete=models.CASCADE)
    time_out = models.DateTimeField(auto_created=True, auto_now_add=True)

    def __unicode__(self):
        return self(DailyTimeOUT)
