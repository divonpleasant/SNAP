# SNAP DEVELOPERS GUIDE

## INTRODUCTION

This document is meant to provide notes, guidelines, and warnings for potential code contributors. The information here is not meant to imply 100% up-to-the-minute status details on the state of the code or the stability of any deployment. Hopefully it will help orient anyone interested in contributing to the project and encourage others to help build SNAP into the best TSE-support tool it can be.

## KEY POINTS

A few things to keep in mind when contributing to SNAP:

1. The initial developers and contributors were not full-time front-end developers, just curious people trying to solve a problem. If something about SNAP isn't working or isn't to your taste, please help make SNAP better.
    1. If you aren't skilled in web development, submit a [feature request or bug report](https://github.com/divonpleasant/SNAP/issues).
    1. If you are development-inclined, please do consider contributing code.
    1. If you have extensive experience in web development (particularly Javascript), we'd love to leverage your experience to make SNAP the best it can be. Please reach out to the code owner to arrange a thorough code review.
1. As of 3.1 there are two versions of the main index page that exist side-by-side with very minor distinctions. The SANDBOX version has its own HTML doc and CCS file. This will change in future versions to something more elegant, for the time being make sure if you intend to change the HTML or CSS, test it first in SANDBOX and then migrate the change to SNAP.html in your next commit/PR.
    1. You can limit the impact of code changes by limiting your testing to the sandbox envrionment: 
        `if (sandbox) { /* do something in sandbox only ... */ }`
    1. If you make changes to SNAP.html directly, you must backport those changes to SNAP_sandbox.html as well or your PR will be rejected.
    1. Use SANDBOX for testing CSS changes as well. Don't forget to include all changes in the *_darkmode.css files (the darkmode css files have a conversion guide at the top to help with styling).
1. SNAP 3.1 has implemented a templating system for Zeiss instrument data and various text blobs to be merged with various form data.
    1. If at all possible, do not hard-code templatized verbiage. If it doesn't go directly into the SNAP.html page, it should be in a JSON template.
    1. If you're creating a new template or set of templates, make sure it doesn't fit better in an existing JSON template object. If you still think creating a new template object is the correct way to go, create a new descriptively-named file for your template object.
    1. The current approach does not use data binding, so make sure your code (re-)initializes any template to reflect the current state of the form data at the time the data is needed.
1. We're trying to move toward using the [TypeScript style guide](https://google.github.io/styleguide/tsguide.html), but it's a work in progress. If you see egregious (i.e. widespread) exceptions to the style guidelines, ask before making massive find/replace commits.

## GETTING STARTED

If you're not invetigating the SNAP codebase to fix a specific bug, but want to contribute in some way, you may find it easiest (after reading the Key Points, above) to look through the [Issues Page](https://github.com/divonpleasant/SNAP/issues) and choose one to work through.

## NAMING CONVENTIONS

SNAP has a few semi-informal naming conventions. If your commits/merges don't adhere to these, the request may be rejected or they may be changed at a later time to conform to the convention.

### HTML

  * **IDs:** Element IDs are generally not abbreviated (unless there is a common technical, Zeiss-, or TSE acronym such as "PM") and separated by a hyphen. We try to keep them on the short side, as long as they are easily understood.
    * _Good Examples:_ desktop-ip-address; carrier-pigeon-number; fse-dispatch-time
    * _Bad Examples:_ ``cust-no`` (better: ``customer-number``); ``percentage_of_value`` (better: ``percentage-of-value``); ``number-of-zombies-destroyed-in-first-round`` (better: ``zombies-destroyed-first``)
  * **File Names:** Underscore-separated, letters lowercase unless referencing SNAP (e.g. ``SNAP.html``, ``SNAP_sandbox.html``). The shorter the better, as long as the purpose of the file is easily discernible from the name.
    * _Good Examples:_ ``SNAP_data.html``; ``reports.html``; ``bike_show.html``
    * _Bad Examples:_ ``cncrt_att.html`` (better: ``concert_attendance.html``); ``UTILITY.html`` (better: ``utility.html``); ``List%20of%20ip%20ADDRESSES_.html`` (better: ``ip_addresses.html``)

### JAVASCRIPT

  * **Variables:** All lower case, underscore separated, descriptive without being overly long, some abbreviations acceptable. Avoid labeling variables with the expected variable type.
    * _Good Examples:_ ``tse_status``; ``email_address``; ``port_no``
    * _Bad Examples:_ ``UNDERvalued-fin-c-am`` (better: ``undervalued_financial_collection_amt``); ``CoStMsg`` (better: ``color_status_msg``); ``array_of_values_resulting_from_output_of_processing_function`` (better: ``output_values``)
  * **Functions:** Functions use "camel case" (no word separation, each word other than the first is capitalized), should be descriptive without being verbose, use abbreviations sparingly. It is highly recommended that you run a search before creating a new function to ensure a similar or similarly-named function doesn't already exist.
    * _Good Examples:_ ``generateCartList``; ``updateTimeZone``; ``processUserInput``
    * _Bad Examples:_ ``hide_unused-FORM-element`` (better: ``hideUnusedFormElement``); ``cA`` (better: ``catchAll``); ``accept_user_input_and_validate_data_for_pii`` (better: ``validateUserInput``)