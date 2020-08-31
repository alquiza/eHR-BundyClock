from rest_framework import serializers
from core.attendance.models import DailyTimeIN, DailyTimeOUT

class DailyTimeINSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyTimeIN
        fields = ['employee_id', 'time_in']


class DailyTimeOUTSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyTimeOUT
        fields = ['employee_id', 'time_out']
