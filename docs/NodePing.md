---
id: NodePing
title: NodePing
---
NodePing provides uptime monitoring for websites and servers. To integrate NodePing with Zenduty, complete the following steps:

1. To add a new NodePing integration, go to "Teams" on Zenduty and click on the "Manage" button corresponding to the team you want to add the integration to.

2. Next, go to "Services" and click on the "Manage" button correspoding to the relevant Service.

3. Go to "Integrations" and then "Add New Integration". Give it a name and select the application "NodePing" from the dropdown menu.

4. Go to "Configure" under your integrations and copy the webhooks URL generated. 

5. Log in to NodePing, and go to "Checks and Contacts" -> "Contacts". Click the "Add New Contact" button.

![](/img/Integrations/Nodeping/1.png)

6. Select "Webhook" from the notifications dropdwn, and choose the "POST" request from the "Requests" dropdown menu. 

7. Enter the webhook url you copied earlier in the "URL" field. 

![](/img/Integrations/Nodeping/2.png)

8. Click the "Headers" tab. In the "New Key" field, enter "Content Type", and in the "Value" field, enter "application/json" as shown below.

![](/img/Integrations/Nodeping/3.png)

9. Finally, navigate to the "Body" tab and enter the following payload:

```
{
 "check_id":"{_id}",
 "state":"{event}",
 "label":"{label}",
 "message":"{m}"
}
```

The screen will look something like this: 

![](/img/Integrations/Nodeping/4.png)

Your webhook for Zenduty is now set up. 

10. In order to use the webhook to monitor an endpoint, go to "Checks and Contacts" -> "Checks". Click on the "Add New Check" button. 

11. Under the "Select a new contact to add" dropdown menu, pick the newly added webhook. 

![](/img/Integrations/Nodeping/5.png)

12. After filling out the remainder of the form and saving it, the new check is created. 
Zenduty will notify you whenever an alert is generated.


