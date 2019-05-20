---
id: SplunkLegacy
title: Splunk Legacy
---
Use legacy mode to temporarily work around issues introduced by the new integration of the user interface with the main splunkd service. To integrate Splunk Legacy with Zenduty, complete the following steps:

1. Copy the code below:
``
    $ZENDUTY_KEY = 56168771-2f6b-495a-b21a-32f080dbea77
``
2. Go to $SPLUNK_HOME/bin/ and open "setSplunkEnv" file and paste above copied line after "esac" or before "case".
3. Download Below File.
    
4. Paste the downloaded file into $SPLUNK_HOME/bin/scripts
5. Sign In to Splunk. In the "Search and Report" app, search for the monitor metrics for Zenduty incidents to report on.
6. Save this as an "Alert" from the "Save As" window in the top right corner.
7. Fill in the form and Click the "Add Actions" button under "Trigger Actions", select "Run a script" and write the name of the file which you have pasted in $SPLUNK_HOME/bin/scripts and save.
8. Integrated with Zenduty.