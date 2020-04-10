---
id: Uptrends
title: Uptrends
---
Uptrends is a monitoring service to monitor website uptime, optimize performance and monitor multiple steps. To integrate Uptrends with Zenduty, complete the following steps:

## In Zenduty:

1. To add a new Uptrends integration, go to "Teams" on Zenduty and click on the "Manage" button corresponding to the team you want to add the integration to.
2. Next, go to "Services" and click on the "Manage" button corresponding to the relevant Service.
3. Go to "Integrations" and then "Add New Integration". Give it a name and select the application "Uptrends" from the dropdown menu.
4. Go to "Configure" under your integrations and copy the webhooks URL generated. 

## In Uptrends: 

5. Login to Uptrends. In the "Alerts" dropdown, click on the "Integrations" button.

![](/img/Integrations/Uptrends/1.png)

6. Click on Add Integration -> "Integration from scratch" to create a new webhook.

7. After naming the integration, click on the "Customizations" tab to add the Zenduty URL and the alert payload.
	This is the alert payload:
	```
	{
	    "alert_type": "{{@alert.type}}",
	    "alert_id": "{{@alert.alertGuid}}",
	    "alert_description": "{{@alert.description}}"
	}
	```

8. Finally, save the new webhook.

![](/img/Integrations/Uptrends/2.png)

9. In the Alerts dropdown, click on the "Alert Definitions" button. Then Add alert definition.

10. After naming the integration, configure the required conditions for escalation by navigating to the "Escalation Level" tabs. 

11. Select the newly created webhook in the "Alerting By Integrations" section and then save.

![](/img/Integrations/Uptrends/3.png)

12. We are now ready to generate new alerts. 
	* As an example, goto Monitors -> Add Monitor.
	* Select the Https monitor and configure the Alert conditions as required.
	* Once this monitor is saved, any alerts will appear on the Zenduty incidents page.

![](/img/Integrations/Uptrends/4.png)

13. Uptrends is now integrated.