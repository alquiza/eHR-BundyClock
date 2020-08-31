from rest_framework import viewsets, generics
from rest_framework.response import Response
from django.contrib.auth.models import User
from core.employee.models import Identity, BasicInfo, ContactInfo, RecordInfo
from core.employee.serializers import IdentitySerializer, BasicInfoSerializer, ContactInfoSerializer, RecordInfoSerializer
from core.user.serializers import UserSerializer
from core.api.models import Project, Principal, Contractor
from core.api.serializers import ProjectSerializer, PrincipalSerializer, ContractorSerializer
from core.attendance.models import DailyTimeIN, DailyTimeOUT
from core.attendance.serializers import DailyTimeINSerializer, DailyTimeOUTSerializer


class DailyTimeINList(generics.ListCreateAPIView):
    queryset = DailyTimeIN.objects.all()
    serializer_class = DailyTimeINSerializer


class DailyTimeOUTList(generics.ListCreateAPIView):
    queryset = DailyTimeOUT.objects.all()
    serializer_class = DailyTimeOUTSerializer


class DailyTimeINDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = DailyTimeIN.objects.all()
    serializer_class = DailyTimeINSerializer


class DailyTimeOUTDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = DailyTimeOUT.objects.all()
    serializer_class = DailyTimeOUTSerializer


class RecordInfoList(generics.ListCreateAPIView):
    queryset = RecordInfo.objects.all()
    serializer_class =  RecordInfoSerializer


class RecordInfoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = RecordInfo.objects.all()
    serializer_class = RecordInfoSerializer


class ContactInfoList(generics.ListCreateAPIView):
    queryset = ContactInfo.objects.all()
    serializer_class = ContactInfoSerializer


class ContactInfoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ContactInfo.objects.all()
    serializer_class = ContactInfoSerializer


class BasicInfoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = BasicInfo.objects.all()
    serializer_class = BasicInfoSerializer


class BasicInfoList(generics.ListCreateAPIView):
    queryset = BasicInfo.objects.all()
    serializer_class = BasicInfoSerializer


class IdentityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Identity.objects.all()
    serializer_class = IdentitySerializer


class IdentityList(generics.ListCreateAPIView):
    queryset = Identity.objects.all()
    serializer_class = IdentitySerializer

    def list(self, request):
        queryset = Identity.objects.all()
        employee_id = serializer.PrimaryKeyRelatedField(queryset, many=True)
        return Response(serializer.data)


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ProjectList(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class PrincipalDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Principal.objects.all()
    serializer_class = PrincipalSerializer


class PrincipalList(generics.ListCreateAPIView):
    queryset = Principal.objects.all()
    serializer_class = PrincipalSerializer


class PrincipalViewSet(viewsets.ModelViewSet):
    queryset = Principal.objects.all()
    serializer_class = PrincipalSerializer


class ContractorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer


class ContractorList(generics.ListCreateAPIView):
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer


class ContractorViewSet(viewsets.ModelViewSet):
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer
