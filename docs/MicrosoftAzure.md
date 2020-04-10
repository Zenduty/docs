---
id: MicrosoftAzure
title: Microsoft Azure Alerts
---
Microsoft Azure alerts helps you monitor applications, infrastructure, and servers for various metrics. For an alert rule on a metric value, when the value of a specified metric crosses a threshold assigned, the alert rule becomes active and sends a notification to Zenduty. For an alert rule on events, a rule can send a notification on every event, or, only when a certain number of events happen. To integrate Azure Monitor with Zenduty, complete the following steps:

## In Zenduty:

1. To add a new Microsoft Azure integration, go to "Teams" on Zenduty and click on the "Manage" button corresponding to the team you want to add the integration to.

2. Next, go to "Services" and click on the "Manage" button correspoding to the relevant Service.

3. Go to "Integrations" and then "Add New Integration". Give it a name and select the application "Microsoft Azure" from the dropdown menu.

4. Go to "Configure" under your integrations and copy the webhooks URL generated. 

## In Microsoft Azure:

5. Log into Microsoft Azure portal.

![](/img/Integrations/MicrosoftAzure/1.png)

6. Select Alerts (Classic) under the "MONITORING" section. The text and icon may vary slightly for different resources. If Alerts (Classic) is not easily found, they might be found under "Alerts" or "Alert Rules".

7. Paste the URL copied from step 4
![](/img/Integrations/MicrosoftAzure/2.png)

10. Azure monitoring is now integrated. 