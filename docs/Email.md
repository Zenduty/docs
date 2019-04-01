---
id: Email
title: Email
---
To create incidents via Email with Zenduty, complete the following steps:

1. Go to your service page and click on Add integration.

2. Select Email.

3. Zenduty will generate an email endpoint in the format - integration-key@integrations.zenduty.com.

4. Copy the email address and paste it the email notification section of your tool.

5. Zenduty will create an alert and incident for every email received.
.
6. The subject of the email(with keywords and special characters removed) will be the entity_id for the incident.

7. If any subsequent emails contain the same subject but with an additional keyword 'acknowledged', Zenduty will automatically acknowledge the associated incident.

8. If any subsequent emails contain the same subject but with an additional keyword 'resolved', Zenduty will automatically resolve the associated incident.
