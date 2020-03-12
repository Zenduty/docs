---
id: Lightstep
title: Lightstep
---
To help diagnose anamolies and slowdowns with Lightstep's best in-class observability, for modern applications. To integrate Lightstep with Zenduty, complete the following steps:

## In Zenduty:

1. To add a new Lightstep integration, go to "Teams" on Zenduty and click on the "Manage" button corresponding to the team you want to add the integration to.

2. Next, go to "Services" and click on the "Manage" button corresponding to the relevant Service.

3. Go to "Integrations" and then "Add New Integration". Give it a name and select the application "Lightstep" from the dropdown menu.

4. Go to "Configure" under your integrations and copy the webhooks URL generated. 

## In Lightstep:

5. Log into Lightstep.

6. Go to "Monitoring" and Select -> "Destinations".

![](/img/Integrations/Lightstep/1.png)

7. Then select "New message destinations" and create "New destinations". 

![](/img/Integrations/Lightstep/2.png)

8. Give a label to "WEBHOOK" and set the request as "POST".

9. Then paste the copied link in the "URL" field and click on "Notifier". 

10. Now go to "Explorer" and create "New Streams". 

![](/img/Integrations/Lightstep/3.png)

![](/img/Integrations/Lightstep/4.png)

11. Then go to "Conditions" and create "New conditions".

![](/img/Integrations/Lightstep/5.png)

![](/img/Integrations/Lightstep/6.png)

12. Lightstep is now Integrated. 