# SNAP 3.1 TODO

- Migrate EOS template to use new Instruments model (v3.1.1+)
- Migrate more process docs into template, including screenshots/diagrams, especially the overview information sheets for each device (3.1.1+)
- Figure out how to make sidebar work properly w/ overflow on larger screens (v3.1.1+)
- Add form history/dates (invisible?) field (v3.1.2+)
- Add process cues to process expand links in sidebar (v3.1.3+)
- Add email templates to Request Came From -> Email options (3.1.3+)
- Add instrument-specific processes and common call types (v3.2)

##ATLAS FIELDS
FORM | HTM | XML | ID                                | FIELD TYPE | ADDITIONAL FIELD INFO
 [ ] | [ ] | [ ] | atlas-network-adapter-status      | SELECT     | Enabled|Disabled
 [ ] | [ ] | [ ] | atlas-netowrk-status              | SELECT     | Enabled|Disabled
 [ ] | [ ] | [ ] | atlas-dhcp                        | CHECKBOX   |
 [ ] | [ ] | [ ] | atlas-domain                      | INPUT      |
 [ ] | [ ] | [ ] | atlas-wireless-network            | INPUT      |
 [ ] | [ ] | [ ] | atlas-mapped-drive                | TEXTAREA   | Prompt: "Drive Letter; Network Path; Format; Drive Space, etc"
 [ ] | [ ] | [ ] | atlas-forum-message               | TEXTAREA   |
 [ ] | [ ] | [ ] | atlas-dicom-network               | SELECT     | None|Forum|DICOM EMR
 [ ] | [ ] | [ ] | atlas-local-ae-station-name       | INPUT      |
 [ ] | [ ] | [ ] | atlas-local-ae-title              | INPUT      |
 [ ] | [ ] | [ ] | atlas-local-port                  | INPUT      |
 [ ] | [ ] | [ ] | atlas-remote-mwl-ae-title         | INPUT      |
 [ ] | [ ] | [ ] | atlas-remote-mwl-ae-host          | INPUT      |
 [ ] | [ ] | [ ] | atlas-remote-mwl-ae-port          | INPUT      |
 [ ] | [ ] | [ ] | atlas-remote-storage-ae-title     | INPUT      |
 [ ] | [ ] | [ ] | atlas-remote-storage-ae-host      | INPUT      |
 [ ] | [ ] | [ ] | atlas-remote-storage-ae-port      | INPUT      |
 [ ] | [ ] | [ ] | atlas-remote-ae-additional-info   | TEXTAREA   |

##CLARUS FIELDS
-DHCP

##COPY FIELDS
###INPUT/TEXTAREA
  <customMetaData>
    <key>key</key>
    <value>${document.getElementById('id').value}</value>
  </customMetaData>
  
###SELECT
  <customMetaData>
    <key>key</key>
    <value>${document.getElementById('id')[document.getElementById('id').selectedIndex].value}</value>
  </customMetaData>
  
###CHECKBOX
  <customMetaData>
    <key>key</key>
    <value>${document.getElementById('id').checked}</value>
  </customMetaData>