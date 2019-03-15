---
id: Zendesk
title: Zendesk
---
Zendesk is a customer service software and support ticketing system. To integrate Zendesk with Zenduty, complete the following steps:

1. To add a new Zendesk integration, go to "Teams" on Zenduty and click on the "Manage" button corresponding to the team you want to add the integration to.

2. Next, go to "Services" and click on the "Manage" button correspoding to the relevant Service.

3. Go to "Integrations" and then "Add New Integration". Give it a name and select the application "Zendesk" from the dropdown menu.

4. Go to "Configure" under your integrations and copy the webhooks URL generated. 

5. Log in to Zendesk. Go to Settings-> Extensions. 

![](/img/Integrations/Zendesk/Webhook1.png)

6. Click on "Add Target" and select HTTP target. Fill in the form as shown below. In the url field, paste the webhooks url you copied earlier.
	Make sure to change the method to POST.

![](/img/Integrations/Zendesk/Webhook2.png)

7. Your Zendesk account is integrated. Zenduty will now create an incident for every new ticket created on Zendesk.
