from rest_framework import serializers
from core.api.models import Project, Principal, Contractor


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class PrincipalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Principal
        fields = '__all__'


class ContractorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contractor
        fields = '__all__'
