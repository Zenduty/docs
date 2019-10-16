---
id: Cloudwatch
title: AWS Cloudwatch
---
Amazon CloudWatch is a monitoring and management service built for developers, system operators, site reliability engineers (SRE), and IT managers. To integrate AWS CloudWatch with Zenduty, complete the following steps:

## In Zenduty:

1. To add a new AWS CloudWatch integration, go to "Teams" on Zenduty and click on the "Manage" button corresponding to the team you want to add the integration to.

2. Next, go to "Services" and click on the "Manage" button correspoding to the relevant Service.

3. Go to "Integrations" and then "Add New Integration". Give it a name and select the application "AWS CloudWatch" from the dropdown menu.

4. Go to "Configure" under your integrations and copy the webhooks URL generated.

## In AWS CloudWatch:

5. Login to your AWS account. Go to your SNS dashboard. On the left panel, click on "Topics". Click on "Create topic". For topic and display names, enter "Zenduty".

![](/img/Integrations/Cloudwatch/1.png)

6. Go back top the SNS dashboard and click on "Create Subscription". 

7. In the Topic ARN, choose the topic created in Step 3. Select the protocol as HTTPS. In the endpoint field, past the URL you copied earlier.

![](/img/Integrations/Cloudwatch/2.png)

8. Click on "create subscription" to find a list of your subscriptions. Refresh this page to confirm.

9. Whenever you create an Alarm in Cloudwatch, choose the above created SNS topic. All Alarms will trigger an incident on Zenduty, and the incident will auto-resolve when the Alarm returns to its normal state.