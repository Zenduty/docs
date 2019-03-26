---
id: Bugsnag
title: Bugsnag
---

Bugsnag monitors application stability, so you can make data-driven decisions on whether you should be building new features, or fixing bugs. To integrate Bugsnag with Zenduty, complete the following steps:

## In Zenduty:

1. To add a new Bugsnag integration, go to "Teams" on Zenduty and click on the "Manage" button corresponding to the team you want to add the integration to.

2. Next, go to "Services" and click on the "Manage" button correspoding to the relevant Service.

3. Go to "Integrations" and then "Add New Integration". Give it a name and select the application "Bugsnag" from the dropdown menu.

4. Go to "Configure" under your integrations and copy the webhooks URL generated.

## In Bugsnag:

5. Log in to Bugsnag and click on "Settings" from the menu.

6. Select "Projects" and click on "Add Project".

<!--- ![](/img/Integrations/Bugsnag/1.png) --->

7. Under “Where does your application run?”, select "Server" if hosted on a server.

8. Select a programming language. Here we have selected Python and Django as the Python framework to be used.

9. Enter the name of your application and click "Continue".

![](/img/Integrations/Bugsnag/2.png)

10. Click on "Settings" -> Projects and select your project.

![](/img/Integrations/Bugsnag/3.png)

11. Click on "Configure Integrations". Under the available integrations, select "Webhook".

![](/img/Integrations/Bugsnag/4.png)

12. Paste the webhook link copied and click on Save.

![](/img/Integrations/Bugsnag/5.png)

13. Under “notify when...”, select the the conditons when the user needs to be notified.

![](/img/Integrations/Bugsnag/6.png)

14. Bugsnag is now integrated.




