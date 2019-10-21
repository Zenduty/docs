---
id: Freshdesk
title: Freshdesk Outgoing
---
Freshdesk is an online cloud-based customer service software providing helpdesk support with all smart automations to get things done faster. To integrate Two-Way Freshdesk with Zenduty, complete the following steps:

## On the Zenduty Dashboard:

1. To add a new Freshdesk integration, go to "Teams" on Zenduty and click on the "Manage" button corresponding to the team you want to add the integration to.

2. Next, go to "Services" and click on the "Manage" button correspoding to the relevant Service.

3. Go to "Integrations" and then "Add New Outgoing Integration". Give it a name and select the application "Freshdesk Two-Way" from the dropdown menu.

![](/img/Integrations/FreshdeskOutgoing/FreshDesk7.png)

4. Go to "Configure" under your integrations to edit it.

5. Enter your API Key, which can be obtained from "My Profile Settings" Which can be found after logging into Fresh Desk and clicking on your profile icon on the top-right of your screen

![](/img/Integrations/FreshdeskOutgoing/FreshDesk1.png)

6. Then we need to enter the Domain name, which can be obtained from your link itself. It would look like "https://{YourDomainName}.freshdesk.com"

![](/img/Integrations/FreshdeskOutgoing/FreshDesk3.png)

7. Click Next to Authenticate your credentials.

![](/img/Integrations/FreshdeskOutgoing/FreshDesk2.png)

8. Proceed to map the Incident response from  Zenduty to FreshDesk and from FreskDesk to Zenduty. This  will determine what action will change the ticket status and vice versa with Incident status.

This is shown in the screenshot below:
![](/img/Integrations/FreshdeskOutgoing/FreshDesk4.png)

9. Copy the generated webhook URL to be applied onto FreshDesk.

10. Then click "Save Integration".

## In Freshdesk:

5. Log into Freshdesk. Click on the "Admin" button and select "Automations" under "Helpdesk Productivity Settings".

![](/img/Integrations/Freshdesk/1.png)

6. Click on the "Create the first rule" button.

![](/img/Integrations/Freshdesk/2.png)

7. Select "New Rule" and pick "Rule Name" and "Description". Set Conditions as:

	**Type Is Incident**

![](/img/Integrations/Freshdesk/3.png)

8. Select "Trigger Webhook" from the Actions"  dropdown, and set "Request Type" to "POST".

	Under the "URL", paste the webhook url you copied earlier.

	Set the "Encoding" as "JSON" and content as "Simple".

	Under "Content", select the following fields- Ticket ID, Subject, Description, Status, Ticket URL.

This is shown in the screenshot below:

![](/img/Integrations/Freshdesk/4.png)

9. Save.

10. From the same window, move to "Ticket Updates" sections and click on "New Rule" button.

![](/img/Integrations/Freshdesk/5.png)

11. Select "New Rule" and pick a "Rule Name" and "Description".

	Set "When an Action Performed By" to "Agent or Requester".Then set "Involved any of these events" for "Status is Changed" from "Any Status" to "Any Status".

12. In the "On tickets with these properties" section, set condition as "Type Is" and "Incident".

![](/img/Integrations/FreshdeskOutgoing/FreshDesk5.png)

12. Select "Trigger Webhook" from the "Actions" dropdown and set the "Request Type" to "POST".

	In the URL textbox, paste the webhook link you copied earlier.

	Set the Encoding to "JSON" and Content to "Simple".

	Under Content, Select all the fields under Content, including and especially Ticket ID, Subject, Description, Status and Ticket URL.

This is shown in the screenshot below:

![](/img/Integrations/FreshdeskOutgoing/FreshDesk6.png)

13. Save.

Freshdesk is now integrated to your Zenduty account.
