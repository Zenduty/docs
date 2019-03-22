---
id: Sumologic
title: Sumo Logic
---
Sumo Logic is industry's leading, secure, cloud-based service for logs & metrics management for modern apps, providing real-time analytics and insights. To integrate Sumologic with Zenduty, complete the following steps:

## In Zenduty: 

1. To add a new Sumologic integration, go to "Teams" on Zenduty and click on the "Manage" button corresponding to the team you want to add the integration to.

2. Next, go to "Services" and click on the "Manage" button correspoding to the relevant Service.

3. Go to "Integrations" and then "Add New Integration". Give it a name and select the application "Sumologic" from the dropdown menu.

4. Go to "Configure" under your integrations and copy the webhooks URL generated.

## In Sumologic: 

5. After logging in, go to Manage Data -> Settings -> Connections

6. Click the '+' button at the top right of the screen to add a webhook.

![](/img/Integrations/Sumologic/1.png)

7. Add a Host Metrics source in Sumo Logic. The host metric depends on the user. 
	Here's a screenshot of a sample metric to monitor CPU activity.

![](/img/Integrations/Sumologic/2.png)

8. After this is setup, go to Manage Data -> Alerts and click on the "Add Monitor" button at the top right of the screen.

9. The Metric Query and Rules depend on the Host Metrics source. 

![](/img/Integrations/Sumologic/3.png)

10. And that's it! The rules should trigger alerts which will then be visible on the Zenduty incidents page.