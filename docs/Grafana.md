---
id: Grafana
title: Grafana
---
Grafana allows you to query, visualize, alert on and understand your metrics no matter where they are stored. To integrate Grafana with Zenduty, complete the following steps:

## In Zenduty: 

1. To add a new Grafana integration, go to "Teams" on Zenduty and click on the "Manage" button corresponding to the team you want to add the integration to.

2. Next, go to "Services" and click on the "Manage" button correspoding to the relevant Service.

3. Go to "Integrations" and then "Add New Integration". Give it a name and select the application "Grafana" from the dropdown menu.

4. Go to "Configure" under your integrations and copy the webhooks URL generated. 

## In Grafana: 

5. Log in to Grafana. Go to "Notification Channels". Add New Channel.Select type as "Webhook". 

6. Enter the webhook url copied from the previous step. Paste the URL copied and click on Save.

![](/img/Integrations/Grafana/Webhook.png)

```
    IMPORTANT WARNING - Sometimes Grafana may not fire an alert if the "Include Image" parameter is selected. First check if the alert is working with the parameter not selected, and then try selecting the parameter and see if the alerts are fired to Zenduty.
```

7. Next, from the left side menu, select Configuration->Data Sources. Select the data source you want to configure.

8. As an example, we will select PostgreSQL. Fill in the form as shown below:

![](/img/Integrations/Grafana/PostgreSql.png)

9. Finally, go to Dashboards->Home. Click on "New Dashboard Copy", and edit panel title. 

![](/img/Integrations/Grafana/EditPanel.png)

10. Fill in the graph details as per your use case. An example is given below. 

![](/img/Integrations/Grafana/EditGraph.png)

11. Your Grafana is now integrated. Zenduty will automatically create incidents from your Grafana rules. 

![](/img/Integrations/Grafana/Test.png)
