---
id: OktaSSO
title: Single Sign On with Okta
---
## How to set up Okta as your SAML Identity Provider

Here's a walk-through of setting up Okta as your SAML Identity Provider. This allows your team to log into Zenduty without a new email / password combination.

1. Log in to Okta as an administrator, go to Admin > Applications (menu) > Applications (item).

2. Click the Add Application button.

![](/img/Integrations/Okta/1.png)

3. Click Create New App under the "Can't find an app?" heading on the left.

![](/img/Integrations/Okta/2.png)

4. Select SAML 2.0 as the sign on method and click Create.

![](/img/Integrations/Okta/3.png)

5. Enter Zenduty as the name of the new app. If you wish to upload a Zenduty logo select an image, download the logo file below and click on the Upload Logo button, then Next.

![](/img/Integrations/Okta/ZDOkta.png)

![](/img/Integrations/Okta/4.png)

6. Copy the URL "https://www.zenduty.com/api/account/saml/acs/" and paste it into the "Single sign on URL " input box. Copy the URL "https://www.zenduty.com" and paste it into the "Audience URI (SP Entity ID)" input box. Keep the "Default RelayState" box as blank. For Name Id format, choose "EmailAddress". For "Application username", choose "Okta username".

![](/img/Integrations/Okta/5.png)

7. On the same screen, but a little bit further down the page, you'll see the ATTRIBUTE STATEMENTS (OPTIONAL) section. You want to add three attributes there:

Name: " first_name", Name format: "Unspecified", Value: " user.firstName"
Name: " last_name", Name format: "Unspecified", Value: " user.lastName"
Name: " email", Name format: "Unspecified", Value: "user.email". 

Click the Next button to save the app settings.

![](/img/Integrations/Okta/6.png)

8. On the final set up screen pick I'm an Okta customer adding an internal app to answer the question "Are you a customer or partner?", and click Finish.

![](/img/Integrations/Okta/7.png)

9. The app is now created, but none of your Users can access it yet. Assign them to the app either individually via the People tab.

10. Navigate to the Sign On tab. Open a text editor. Click the View Setup Instructions tab and from the new page that opens, copy the "Identity Provider Single Sign-On URL", "Identity Provider Issuer" and the X.509 Certificate values into the text editor. You will need these to complete step.

![](/img/Integrations/Okta/8.png)

![](/img/Integrations/Okta/9.png)

11. Log out from Okta (you might want to test with a non-admin user in a moment).

12. Log into your Zenduty account as the owner. On the top right corner, click on the drowdown under your name and click on "Account". On the left panel, click on "Single Sign On"

13. In the SSO form, select "Okta SSO" under "Select SSO Provider"

14. In "SAML endpoint" input, paste the "Identity Provider Single Sign-On URL" you saved from Step 10. In "SAML Entity ID" input, paste "Identity Provider Issuer" you saved from Step 10. In the "Certificate" input, paste the X.509 Certificate copied from step 10.

15. Click on "Save Integration" to complete your SSO setup!

16. Logout of your Zenduty account and click on Login. Click on "Login with your identity provider". Enter your account domain name and click on "Continue". Authenticate your Okta credentials. 

17. You are now logged in with Okta SSO!