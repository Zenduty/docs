---
id: Zendesk2Way
title: Zendesk Outgoing(two way)
---
Zendesk is a customer service software and support ticketing system. To integrate Zendesk with Zenduty Outgoing two-way integration, complete the following steps:

## In Zenduty: 

1. To add a new Zendesk integration, go to "Teams" on Zenduty and click on the "Manage" button corresponding to the team you want to add the integration to.

2. Next, go to "Services" and click on the "Manage" button corresponding to the relevant Service.

3. Go to "Outgoing Integrations" and then "Add New Integration". Give it a name and select the application "Zendesk Outgoing(2-way)" from the dropdown menu.

4. Go to "Configure".

## Open your Zendesk in a new tab.	

[Optional: Create a dedicated user in Zendesk for Zenduty. Follow the steps below.]
 
5. Log in to Zendesk. Click on the Admin Icon, then select Channels > API. Click the Settings tab, and make sure Token Access is enabled. Click the + button to the right of Active API Tokens. Optionally, enter a description under API Token Description. The token is generated, and displayed for you. Copy this API token.

6. Go back to the Zenduty tab in the Zendesk config page. 

7. Paste the API key copied in step 5 in the "API key" section.

8. Enter your Zendesk subdomain name. If your Zendesk subdomain is acme.zendesk.com, enter "acme"

9. Enter your Zendesk email address. Click on "Next".

10. Proceed to map the Incident response from  Zenduty to Zendesk and from Zendesk to Zenduty. This  will determine what action will change the ticket status and vice versa with Zenduty incident statuses.

11. Copy the Webhook URL at the bottom of the page.

12. Go back to yout Zendesk Tab.

13. Go to Settings-> Extensions. 

![](/img/Integrations/Zendesk/Webhook1.png)

14. Click on "Add Target" and select HTTP target. Fill in the form as shown below. In the url field, paste the webhooks url you copied earlier.
	Make sure to change the method to POST.

![](/img/Integrations/Zendesk/Webhook2.png)

15. Go to Zendesk -> Settings -> Business Rules -> Triggers

16. Click on "Add Trigger". Give the trigger name as "Zenduty trigger". 

![](/img/Integrations/Zendesk/4.png)

17. Under "Meet ALL of the conditions", choose "Type" is "Incident" or some other value according to your requirements.

18. Under "Meet ANY of the following conditions", add two conditions - "Ticket is Created" and "Ticket is Updated"

19. Under Actions, select "Notify target", and select the target created in step 6.

20. In JSON body, paste the JSON below:

```

{"title":"{{ticket.title}}", "description":"{{ticket.description}}","url":"{{ticket.url}}", "id":"{{ticket.id}}", "status":"{{ticket.status}}"}

```

21. Click on "Save". Your Zendesk two-way account is integrated. Zenduty will now create an incident for every new ticket created on Zendesk and any action taken on Zenduty(Ack, Resolve) will reflect in your Zendesk tickets.
