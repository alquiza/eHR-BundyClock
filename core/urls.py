"""core URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns

router = routers.DefaultRouter()

from core.attendance import views
router.register(r'attendaces/daily/IN', views.DailyTimeInViewSet)
router.register(r'attendaces/daily/OUT', views.DailyTimeOutViewSet)


from core.employee import views
router.register(r'identities', views.IdentityViewSet)
router.register(r'basics', views.BasicInfoViewSet)
router.register(r'contacts', views.ContactInfoViewSet)
router.register(r'records', views.RecordInfoViewSet)


from core.api import views
router.register(r'projects', views.ProjectViewSet)
router.register(r'principals', views.PrincipalViewSet)
router.register(r'contractors', views.ContractorViewSet)


from core.user import views
router.register(r'users', views.UserViewSet)


from core.api import views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', ObtainAuthToken.as_view()),
    path('api/', include(router.urls)),
    path('', include('rest_framework.urls', namespace='rest_framework')),
    path('projects/', views.ProjectList.as_view()),
    path('project/<int:pk>', views.ProjectDetail.as_view()),
    path('principals/', views.PrincipalList.as_view()),
    path('principal/<int:pk>', views.PrincipalDetail.as_view()),
    path('contractors/', views.ContractorList.as_view()),
    path('contractor/<int:pk>', views.ContractorDetail.as_view()),
    path('employee/identities/', views.IdentityList.as_view()),
    path('employee/identitity/<int:pk>', views.IdentityDetail.as_view()),
    path('employee/basics/', views.BasicInfoList.as_view()),
    path('employee/basic/<int:pk>', views.BasicInfoDetail.as_view()),
    path('employee/contacts/', views.ContactInfoList.as_view()),
    path('employee/contact/<int:pk>', views.ContactInfoDetail.as_view()),
    path('employee/records/', views.RecordInfoList.as_view()),
    path('employee/record/<int:pk>', views.RecordInfoDetail.as_view()),
    path('users/', views.UserList.as_view()),
    path('user/<int:pk>', views.UserDetail.as_view()),
]
