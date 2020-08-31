from django.contrib import admin
from core.api.models import Project, Principal, Contractor
from core.employee.models import Identity, BasicInfo, ContactInfo, RecordInfo
from core.attendance.models import DailyTimeIN, DailyTimeOUT


admin.site.register(DailyTimeOUT)
admin.site.register(DailyTimeIN)
admin.site.register(Identity)
admin.site.register(BasicInfo)
admin.site.register(ContactInfo)
admin.site.register(RecordInfo)
admin.site.register(Project)
admin.site.register(Principal)
admin.site.register(Contractor)
