---
id: WaveFront
title: WaveFront
---

WaveFront helps you monitor websites, emails, and web apps to get instant alerts. With the Zenduty integration, you will be able to receive context notifications about new code pushes, pull requests, issues and issue comments. New issues will trigger a new incident.

To integrate WaveFront with Zenduty, complete the following steps:

## In Zenduty:

1. To add a new WaveFront integration, go to "Teams" on Zenduty and click on the "Manage" button corresponding to the team you want to add the integration to.

2. Next, go to "Services" and click on the "Manage" button correspoding to the relevant Service.

3. Go to "Integrations" and then "Add New Integration". Give it a name and select the application "WaveFront" from the dropdown menu.

4. Go to "Configure" under your integrations and copy the webhooks URL generated.

## In WaveFront:

5. Sign up to the wavefront.

6. Go to "Agent" to set up your monitoring agent. e.g. your operating system etc.

7. The next step is to create an alert. You can follow the steps below, or checkout WaveFront's [tutorial videos](https://docs.wavefront.com/videos_alerts.html).

	a.) Go to "Dashboard" and select "your monitoring agent" to see the visualization of metrics value.

	b.) Inside the Dashboard, click on one of the metrics for which you would like to create or fire an alert.

	c.) You will be redirected to the respective metrics' page (or usage graph), on that page under "used_percent" click on "create alert".

8. Now configure your django files according to obtained JSON or any other file format.
9. Run "python manage.py runserver" inside your terminal.
. Now check for "200 OK" message in your Alert target, If you're obtaining "200 OK" then you have completed the integration of wavefront to zenduty.


