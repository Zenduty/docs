---
id: Freshdesk
title: Freshdesk
---
Freshdesk is an online cloud-based customer service software providing helpdesk support with all smart automations to get things done faster. To integrate Freshdesk with Zenduty, complete the following steps:

## On the Zenduty Dashboard:

1. To add a new Freshdesk integration, go to "Teams" on Zenduty and click on the "Manage" button corresponding to the team you want to add the integration to.

2. Next, go to "Services" and click on the "Manage" button correspoding to the relevant Service.

3. Go to "Integrations" and then "Add New Integration". Give it a name and select the application "Freshdesk" from the dropdown menu.

4. Go to "Configure" under your integrations and copy the webhooks URL generated.

## In Freshdesk: 

5. Log into Freshdesk. Click on the "Admin" button and select "Dispatch’r" under "Helpdesk Productivity Settings". 

![](/img/Integrations/Freshdesk/1.png)

6. Select "New Rule" and pick "Rule Name" and "Description".

7. Set Conditions as: 
	
	**Type Is Incident**

![](/img/Integrations/Freshdesk/2.png)

8. Select "Trigger Webhook" from the Actions"  dropdown, and set "Request Type" to "POST". 

	Under the "Callback URL", paste the webhook url you copied earlier.

	Set the "Encoding" as "JSON" and content as "Simple".
	
	Under "Content", select the following fields- Ticket ID, Subject, Description, Status.

This is shown in the screenshot below: 

![](/img/Integrations/Freshdesk/3.png)

9. Save. 

10. Click on the "Admin" button on and select "Observer" under "Helpdesk Productivity Settings".

![](/img/Integrations/Freshdesk/4.png)

11. Select "New Rule" and pick a "Rule Name" and "Description". 

	Set "Action Performed By" to "Agent" and an "Event". For example, here we have picked:"Status is Changed" from "Any Status" to "Any Status".

![](/img/Integrations/Freshdesk/5.png)

12. Select "Trigger Webhook" from the "Actions" dropdown and set the "Request Type" to "POST".
	
	Under the callback URL,paste the webhook link you copied earlier.
	
	Set the Encoding to "JSON" and Content to "Simple".
	
	Under Content, Select the following fields- Ticket ID, Subject, Description, Status.

This is shown in the screenshot below: 

![](/img/Integrations/Freshdesk/6.png)

13. Save.

Freshdesk is now integrated to your Zenduty account.