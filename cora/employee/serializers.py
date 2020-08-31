from rest_framework import serializers
from core.employee.models import Identity, BasicInfo, ContactInfo, RecordInfo


class IdentitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Identity
        fields = '__all__'


class BasicInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = BasicInfo
        fields = '__all__'


class ContactInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInfo
        fields = '__all__'


class RecordInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecordInfo
        fields = '__all__'
