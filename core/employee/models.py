from django.db import models


REGIONS = [
    ('Ilocos Region', 'REG-I',),
    ('Cagayan Valley Region', 'REG-II'),
    ('Cordillera Administrative Region', 'CAR'),
    ('Central Luzon Region', 'REG-I'),
    ('National Capital Region', 'NCR'),
    ('Calabarzon Region', 'REG-IVA'),
    ('Mimaropa Region', 'REG-IVB'),
    ('Bicol Region', 'REG-V'),
    ('Western Visayas Region', 'REG-VI'),
    ('Central Visayas Region', 'REG-VII'),
    ('Eastern Visayas Region', 'REG-VIII'),
    ('Zamboanga Peninsula Region', 'REG-IX'),
    ('Norther Mindanao Region', 'REG-X'),
    ('Davao Region', 'REG-XI'),
    ('Soccsksargen', 'REG-XII'),
    ('Caraga Region', 'REG-XIII'),
    ('Bangsamoro Autonomous Region in Muslim Mindanao', 'BARMM'),
]

GENDERS = [
  ( 'Male', 'M'),
  ( 'Female', 'F'),
]


class Identity(models.Model):
    verbose_name_plural = "Identities"

    employee_id = models.CharField(max_length=20, primary_key=True, unique=True)
    social_id = models.CharField(max_length=24, null=True, blank=True)
    health_id = models.CharField(max_length=24, null=True, blank=True)
    housing_id = models.CharField(max_length=24, null=True, blank=True)
    tax_id = models.CharField(max_length=24, null=True, blank=True)

    def __unicode__(self):
        return self(Identity)


class BasicInfo(models.Model):
    employee_id = models.OneToOneField(Identity, on_delete=models.CASCADE, primary_key=True)
    last_name = models.CharField(max_length=128)
    first_name = models.CharField(max_length=128)
    middle_name = models.CharField(max_length=128)
    gender = models.CharField(max_length=12, choices=GENDERS, verbose_name="Gender")
    birthday = models.DateField()

    def __unicode__(self):
        return self(BasicInfo)


class ContactInfo(models.Model):
    employee_id = models.OneToOneField(Identity, on_delete=models.CASCADE, primary_key=True)
    email = models.EmailField(null=True, blank=True)
    mobile = models.CharField(max_length=24, null=True, blank=True)
    address00 = models.CharField(max_length=128, verbose_name="Apt# and Street")
    address01 = models.CharField(max_length=128, verbose_name="Purok, Sitio, or Village")
    address02 = models.CharField(max_length=128, verbose_name="Barangay")
    address03 = models.CharField(max_length=128, verbose_name="Locality")
    address04 = models.CharField(max_length=128, verbose_name="Province")
    address05 = models.CharField(max_length=128, choices=REGIONS, verbose_name="Region")

    def __unicode__(self):
        return self(ContactInfo)


class RecordInfo(models.Model):
    employee_id = models.OneToOneField(Identity, on_delete=models.CASCADE, primary_key=True)
    photo = models.ImageField(upload_to='src/assets/human/photos/', null=True, blank=True)
    position = models.CharField(max_length=64, null=True, blank=True)
    department = models.CharField(max_length=64, null=True, blank=True)
    started = models.DateField(null=True, blank=True)
    ended = models.DateField(null=True, blank=True)

    def __unicode__(self):
        return self(RecordInfo)
