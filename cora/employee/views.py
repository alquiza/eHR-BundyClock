from rest_framework import viewsets
from core.employee.models import Identity, BasicInfo, ContactInfo, RecordInfo
from core.employee.serializers import IdentitySerializer, BasicInfoSerializer, ContactInfoSerializer, RecordInfoSerializer

class IdentityViewSet(viewsets.ModelViewSet):
    queryset = Identity.objects.all()
    serializer_class = IdentitySerializer


class BasicInfoViewSet(viewsets.ModelViewSet):
    queryset = BasicInfo.objects.all()
    serializer_class = BasicInfoSerializer


class ContactInfoViewSet(viewsets.ModelViewSet):
    queryset = ContactInfo.objects.all()
    serializer_class = ContactInfoSerializer

class RecordInfoViewSet(viewsets.ModelViewSet):
    queryset = RecordInfo.objects.all()
    serializer_class = RecordInfoSerializer
