---
id: NewRelic
title: New Relic
---

New Relic allows you to monitor the performance of your applications. To integrate New Relic with Zenduty, complete the following steps:

## In Zenduty:

1. To add a new New Relic integration, go to "Teams" on Zenduty and click on the "Manage" button corresponding to the team you want to add the integration to.

2. Next, go to "Services" and click on the "Manage" button correspoding to the relevant Service.

3. Go to "Integrations" and then "Add New Integration". Give it a name and select the application "New Relic" from the dropdown menu.

4. Go to "Configure" under your integrations and copy the webhooks URL generated.

## In New Relic:

5. Log into New Relic.

6. Go to "Alerts" and create a new notification channel

7. From Channel details, select the type of channel as Webhook. Specify the payload type as JSON

![](/img/Integrations/NewRelic/1.png)

8. Select Create channel. Optional: Select Send a test notification.

![](/img/Integrations/NewRelic/2.png)

9. Add the notification channel to one or more alert policies.

11. Your New Relic integration is now setup. Zenduty will create incidents for all New Relic alerts and auto-acknowledge and auto-resolve whenever the incident is resolved in New Relic.
