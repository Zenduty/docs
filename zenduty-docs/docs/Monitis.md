---
id: Monitis
title: Monitis
---
Monitis helps you monitor your web performance and reliability for websites, servers, networks & applications. To integrate Monitis with Zenduty, complete the following steps:

## In Zenduty: 

1. To add a new Monitis integration, go to "Teams" on Zenduty and click on the "Manage" button corresponding to the team you want to add the integration to.
2. Next, go to "Services" and click on the "Manage" button correspoding to the relevant Service.
3. Go to "Integrations" and then "Add New Integration". Give it a name and select the application "Monitis" from the dropdown menu.
4. Go to "Configure" under your integrations and copy the webhooks URL generated.

## In Monitis: 

5. Log in to Monitis. Click on "Alerts" dropdown menu from the dashboard and then "Contacts".

6. Click on "New Contact". Set the contact type as "Webhook" and enter the contact name.

7. Under Webhook URL, paste the link copied earlier.

![](/img/Integrations/Monitis/1.png)

8. Set the Request type as POST and Data format as JSON and click on Next. Click OK.

![](/img/Integrations/Monitis/2.png)

10. Click on "Monitors" dropdown menu from the dashboard and select "Monitor list".

11. Select the Monitor which needs to monitored and then Settings. 

![](/img/Integrations/Monitis/3.png)

12. Select "Threshold" and "Add Threshold". Set the "Threshold Values" for the "Monitor Metrics" and Click OK.

![](/img/Integrations/Monitis/4.png)

13. Monitis is now integrated. 