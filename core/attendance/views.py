from rest_framework import viewsets
from core.attendance.models import DailyTimeIN, DailyTimeOUT
from core.attendance.serializers import DailyTimeINSerializer, DailyTimeOUTSerializer


class DailyTimeInViewSet(viewsets.ModelViewSet):
    queryset = DailyTimeIN.objects.all()
    serializer_class = DailyTimeINSerializer


class DailyTimeOutViewSet(viewsets.ModelViewSet):
    queryset = DailyTimeOUT.objects.all()
    serializer_class = DailyTimeOUTSerializer
