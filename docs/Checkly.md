---
id: Checkly
title: Checkly
---

Checkly allows you to monitor the performance and correctness of your API endpoints & vital site transactions from a single, simple dashboard. To integrate Checkly with Zenduty, complete the following steps:

## In Zenduty:

1. To add a new Checkly integration, go to "Teams" on Zenduty and click on the "Manage" button corresponding to the team you want to add the integration to.

2. Next, go to "Services" and click on the "Manage" button correspoding to the relevant Service.

3. Go to "Integrations" and then "Add New Integration". Give it a name and select the application "Checkly" from the dropdown menu.

4. Go to "Configure" under your integrations and copy the webhooks URL generated.

## In Checkly:

5. Log into Checkly.

6. Click on "Create Check" and select "API check".

7. Give your Check a name. Set the method as “GET” and enter the url of API we need to check.

![](/img/Integrations/Checkly/1.png)

8. Set the "assertions" and the "data center locations" where you want to run the check.

![](/img/Integrations/Checkly/2.png)

![](/img/Integrations/Checkly/3.png)

9. Under the "Request Body Settings", select the body type as "JSON".

![](/img/Integrations/Checkly/4.png)

10. Set the "Check Schedule" as 5 mins and click on Run & Save.

![](/img/Integrations/Checkly/5.png)

11. Checkly is now integrated.