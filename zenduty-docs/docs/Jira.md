---
id: Jira
title: Jira (2-Way)
---
Jira is a proprietary issue tracking product developed by Atlassian that allows bug tracking and agile project management.

With the Zenduty 2-Way integration, you will be able to not only create Issues in Jira through Zenduty, but also have it binded 2-Way such that the Issue controls the status of the Incident in Zenduty.

To integrate Jira with Zenduty, complete the following steps:

## In Zenduty:

1. To add a new Jira integration, go to "Teams" on Zenduty and click on the "Manage" button corresponding to the team you want to add the integration to.

2. Next, go to "Services" and click on the "Manage" button correspoding to the relevant Service.

3. Go to "Outgoing Integrations" and then "Add New Outgoing Integration". Give it a name and select the application "Jira(Two-Way)" from the dropdown menu.

4. Go to "Configure" under your Outgoing Integrations.

5. There are Several fields to be added here, Starting off with the "Jira URL". This can be obtained by checking the URL of your Jira Domain, For example, "https://your-domain.atlassian.net/".

6. Then insert the Email to which your Jira Domain is linked to.

7. Next, the Project ID/Project Key, which can be found at the Project table in Jira under "Project Key" for the project you want to implement Jira with.

8. Next Insert the Issue Type the Jira Issue should be Regarded as, The different types of Issue types can be found in the Jira Settings, under a sub category called "Issue Types".

9. Then finally we need the Jira API key, this can be obtained by :
    * Logging in to https://id.atlassian.com/manage/api-tokens
    * Click Create API token.
    * From the dialog that appears, enter a memorable and concise Label for your token and click Create.
    * Click Copy to clipboard, then paste the token.
![](/img/Integrations/Jira/1.png)

10. Proceed by clicking "Save & Next"

11. Next, Incident Response Mapping is needed. Map the appropriate incident status to the loaded statuses that Jira can transition the issue into.

12. Similarly, Issue mapping is also needed for 2-Way integration between Zenduty and Jira. Map the Issue statuses to the Incident statuses so issues can trigger a transition in status in the linked incident.
Do watch out for cyclic mapping of the incidents.

![](/img/Integrations/Jira/2.png)

13. Copy the generated Webhook URL to be added to Jira.

## In Jira:

14. Log in to your Jira account.

15. Go to settings and then click System. Scroll Down towards "Webooks"

16. Click on Create a WebHook.

17. Add a Name for the Zenduty webhook and paste the Generated Webhook URL that was copied earlier.

18. Under "Issue related Events" make sure the "Issue Created" and "Issue Updated" checkbox is ticked.

![](/img/Integrations/Jira/3.png)

19. Scroll down and Save to create the Webhook.





