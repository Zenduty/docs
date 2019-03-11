---
id: Grafana
title: Grafana
---
Grafana allows you to query, visualize, alert on and understand your metrics no matter where they are stored. To integrate Grafana with Zenduty, complete the following steps:

1. To add a new Grafana integration, go to "Teams" on Zenduty and click on the "Manage" button corresponding to the team you want to add the integration to.

2. Next, go to "Services" and click on the "Manage" button correspoding to the relevant Service.

3. Go to "Integrations" and then "Add New Integration". Give it a name and select the application "Grafana" from the dropdown menu.

4. Go to "Configure" under your integrations and copy the webhooks URL generated. 

5. Log in to Grafana. Go to notification channels. Add new channel.Select type as Webhook. Enter the webhook url copied from the previous step.

![](/docs/img/Integrations/Grafana/Webhook.png)

6. Next, from the left side menu, select Configuration->Data Sources. Select the data source you want to configure.

7. As an example, we will select PostgreSQL. Fill in the form as shown below:

![](/docs/img/Integrations/Grafana/PostgreSql.png)

8. Finally, go to Dashboards->Home. Click on "New Dashboard Copy", and edit panel title. 

![](/docs/img/Integrations/Grafana/EditPanel.png)

9. Fill in the graph details as per your use case. An example is given below. 

![](/docs/img/Integrations/Grafana/EditGraph.png)

10. Your Grafana is now integrated. Zenduty will automatically create incidents from your Grafana rules. 

![](/docs/img/Integrations/Grafana/Test.png)