---
id: Zabbix
title: Zabbix
---
For monitoring IT components, like servers, networks, virtual machines and cloud services use Zabbix's open-source monitoring software tool. To integrate Zabbix with Zenduty, complete the following steps:

## In Zenduty:

1. To add a new Zabbix integration, go to "Teams" on Zenduty and click on the "Manage" button corresponding to the team you want to add the integration to.

2. Next, go to "Services" and click on the "Manage" button corresponding to the relevant Service.

3. Go to "Integrations" and then "Add New Integration". Give it a name and select the application "Zabbix" from the dropdown menu.

4. Go to "Configure" under your integrations and copy the API KEY generated.

## In Zabbix:

5. Clone [this Repository](https://github.com/Zenduty/zabbix-zenduty-script.git)

    https://github.com/Zenduty/zabbix-zenduty-script.git

6. Copy the Script file and paste it into Zabbix server's AlertScriptsPath. You can see your AlertScriptsPath path from Zabbix server configuration file.

![](/img/Integrations/Zabbix/1.png)

**Create the Zenduty media type:**

7. In Zabbix Go to the Administration tab.

![](/img/Integrations/Zabbix/2.png)

8. Under Administration, go to the Media types page and click the Create Media Type button.

![](/img/Integrations/Zabbix/3.png)

9. On the following Media Type configuration page, enter “Zenduty” for Name, Select script in "type" and write the name of the file which you have pasted in AlertScriptPath.

10. Click the Add link in the Script parameters box two times to create two configurable parameters for the script, and enter the following template values for the two parameters in exactly the following order:

  ```
  {ALERT.SENDTO}
  {ALERT.SUBJECT}
  ```
11. Click the Add button at the bottom to save and create the Zenduty media type.

**Create the Zenduty user and user group for alerting:**

12. Go to the Administration tab.

![](/img/Integrations/Zabbix/4.png)

13. Under Administration, go to the Users Groups page and click the Create user group button.

![](/img/Integrations/Zabbix/5.png)

14. Enter a name in the Group name field that identifies it as part of the integration. In this guide, we use “Zenduty Service”.

![](/img/Integrations/Zabbix/6.png)

15. Grant read permissions on Host Groups to the user group, to choose which hosts will produce Zenduty notifications when they have alerts, as follows:

  1. Click to the Permissions tab.

  2. Select the Read permission level and click on the Select button.

  3. Select which Host Groups you would like the Zenduty to have read access to for monitoring, then click the Select button. In this example, we grant the Zenduty group read access to the Linux servers group.

![](/img/Integrations/Zabbix/7.png)

16. Click on Add to save your new user group.

17. Click on the Users tab (under Administration) and click the Create User button.

18. Fill in the details of this new user, and call it “Zenduty User”. The default settings for Zenduty User should suffice as this user will not be logging into Zabbix.

![](/img/Integrations/Zabbix/8.png)

19. Click the Select button next to Groups.

![](/img/Integrations/Zabbix/9.png)

21. Click on the Media tab and, inside of the Media box, click the Add button. 

![](/img/Integrations/Zabbix/10.png)

22. Select the type that you have created in step 7, paste the key that you have copied from Zenduty in "Send to".

![](/img/Integrations/Zabbix/11.png)

**Create the alert action:**

23. Go to the Configuration tab.

24. Under Configuration, go to the Actions page, and click on Create Action.

25. Give the action a Name such as Zenduty Notifications.

26. Go to the Operations tab, and configure as follows:

    1. Delete the contents of the Default message field, and insert the following:

    ```
    {
        "problem": " {EVENT.NAME}",
        "problem_started_at": "{EVENT.TIME} on {EVENT.DATE}",
        "problem_name": "{EVENT.NAME}",
        "host": "{HOST.NAME}",
        "severity": "{EVENT.SEVERITY}",
        "original_problem_id": "{TRIGGER.ID}",
        "event_status":"{EVENT.STATUS}",
        "host_ip":"{HOST.IP1}",
        "item_name":"{ITEM.NAME1}",
        "item_value":"{ITEM.VALUE1}",
        "trigger_description":"{TRIGGER.DESCRIPTION}",
        "trigger_expression":"{TRIGGER.EXPRESSION}",
        "trigger_status":"{TRIGGER.STATUS}",
        "trigger_url":"{TRIGGER.URL}",
        "trigger_value":"{TRIGGER.VALUE}"
    }
    ```
    2. Under Operations, click New, and in the resulting operation details configuration, under Send to User groups, click Add. In the pop-up window, check the box by the Zenduty service user group, click Select, and then click Add at the bottom of the Operations section.

![](/img/Integrations/Zabbix/12.png)

27. Go to the Recovery Operations tab and configure the rest of the options in the same way as in steps I-II in the Operations configuration (see above). For instance, the content of the Recovery message should be the same as the Default message.

28. Go to the Acknowledgment Operations tab and configure the rest of the options in the same way as with the Operations and Recovery operations, above.

![](/img/Integrations/Zabbix/13.png)

29. Click the Add button at the bottom of any of the action tabs to save your action.

30. Zabbix is now be integrated with Zenduty. 