---
id: Atatus
title: Atatus
---
Atatus is a monitoring service to view uptime, downtime and the response times. To integrate Atatus with Zenduty, complete the following steps:

## In Zenduty:

1. To add a new Atatus integration, go to "Teams" on Zenduty and click on the "Manage" button corresponding to the team you want to add the integration to.
2. Next, go to "Services" and click on the "Manage" button correspoding to the relevant Service.
3. Go to "Integrations" and then "Add New Integration". Give it a name and select the application "Atatus" from the dropdown menu.
4. Go to "Configure" under your integrations and copy the webhooks URL generated. 

## In Atatus: 

5. Login to Atatus.

6. Click on New Project -> Select Infrastructure.

7. Follow the steps to configure the server and click on “I’m done”.

![](/img/Integrations/Atatus/1.png)

8. Click on "Alerting" in the dashboard.

9. Click on "Notification Channels" and click "create new notification channel".

10. Select "Webhook" from the "Channel type" drop-down menu and give your channel a name.

11. Paste the copied link in the "URL" field and click "Create Channel".

![](/img/Integrations/Atatus/2.png)

12. Click on "Alert Policies". Give the Alert policy a name and set the incident preference as “By policy”.

![](/img/Integrations/Atatus/3.png)

13. Select the Notification Channel and click "Create Policy".

14. Select the product and the metric. Set a threshold for "Critical" and "Warning".

![](/img/Integrations/Atatus/4.png)

15. Enter the rule name and click "Create Rule".

![](/img/Integrations/Atatus/5.png)

16. Atatus is now integrated.
