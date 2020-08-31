from rest_framework import serializers
from core.employee.models import Identity
from core.attendance.models import DailyTimeIN, DailyTimeOUT


class DailyTimeINSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyTimeIN
        fields = '__all__'

class DailyTimeOUTSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyTimeOUT
        fields = '__all__'
