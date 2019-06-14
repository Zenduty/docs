---
id: Icinga2 
title: Icinga2
---

To integrate Icinga2 with Zenduty, complete the following steps:

## In Zenduty:

1. To add a new Icinga2 integration, go to "Teams" on Zenduty and click on the "Manage" button corresponding to the team you want to add the integration to.

2. Next, go to "Services" and click on the "Manage" button correspoding to the relevant Service.

3. Go to "Integrations" and then "Add New Integration". Give it a name and select the application "Icinga2" from the dropdown menu.

4. Go to "Configure" under your integrations and copy the webhooks URL generated. 

## In Icinga2: 

5. Install the Icinga2 software on your system. 

6. After this, add an integration to your Zenduty account. This is NOT the integration automatically provided to you. 

7. Then download the Zenduty-Icinga2 files by following the steps given below:
	```
	$ cd /tmp
	$ git clone https://github.com/Zenduty/icinga-zenduty-script.git
	$ cd icinga-zenduty-script
	```
8. Now open the Zenduty-Icinga2 configuration file and enter the provided integration key into the "Pager field".

9. Now move the files into their respective folders inside "/etc/icinga2/."

10. The Zenduty-Icinga2.conf file must go to the conf.d folder (or the objects.d folder, whichever exists).

	```
	$ mv zenduty-icinga2.conf /etc/icinga2/conf.d/
	OR
	$ mv zenduty-icinga2.conf /etc/icinga2/objects.d/
	```
11. The zenduty-webhook-notification.py file must go to the scripts folder.
	```
	$ mv zenduty-webhook-notification.py /etc/icinga2/scripts/
	```
12. Ensure that ‘ICINGAADMINS’ exists as a user group. If not, define it as follows in the users.conf file in conf.d folder.
	```
	$ object UserGroup "icingaadmins" {
	$ display_name = "Icinga 2 Admin Group"
	}
	```
13. Now add the custom attribute "Use_pagerduty" to your configuration’s host and service configuration objects.
	```
	$ vars.enable_zenduty = true
	```
14. If the number of objects is large then you can add the above line to the generic-host and generic-service templates in the templates.conf file in the conf.d folder. 

15. Finally you can import this template to your objects.

16. Restarting Icinga2 service:
	```
	$ /etc/init.d/icinga2 restart
	```
17. Icinga2 is now integrated. 