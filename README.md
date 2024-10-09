# SNAP

## Script and Note Automation Process v3.0.28

[SNAP](https://github.com/divonpleasant/SNAP) is intended to aid Zeiss Technical Support Engineers in managing data gathered during interactions, and helps guide TSEs through their calls.

SNAP's core features include:

- Generating CRM-friendly information blobs for pasting into the ticket creation form
- Creating interaction logs for customer tickets (which can be attached to CRM CCTs)
- Populating common email templates using inputted customer and interaction details
- Guiding new (and experienced!) TSEs through a typical call workflow
- Standardizing data collection, call flows, and customer-facing verbiage across TSE interactions
- Providing call context-aware data prompts (by functional group and/or instrument)
- Offering TSEs easy access to common reference material

### Use Cases and Notes
*Please Note:* SNAP is not inteded to replace our standard CRM/ticketing system. It is a call flow guide and information retention tool meant to interact smoothly with the normal ticket creation process. That does not mean you should expect to ignore CRM until the end of the call or post-create tickets from the SNAP export data exclusively. In testing, SNAP has been most effective as a side-by-side utility with CRM in one browser window and SNAP in another.

Of particular note, as of this release, SNAP does not have the ability to:

- Verify shipping addresses
- Verify or update point of contact details
- Review or confirm warranty or contract details
- Research customer/device support history

### Versions
SNAP uses a variant of semantic versioning (see [semver.org](https://semver.org/)) which includes version numbers that indicate MAJOR.MINOR.PATCH sequences. SNAP does not have a published API which RFC-adherent semantic versioning assumes, but uses a similar structure and naming concept.

1. MAJOR versions indicate significant featureset, maintenance process, or audience scope changes. Once released, all deployments and users should transition to the latest MAJOR version.
2. MINOR versions are release-level modifications, pre-determined development milestones based on bugfixes and enhancement requests. Multiple MINOR version releases can be deployed simultaneously (e.g. soft rollouts/test buckets for release candidates) within one MINOR revision. For example, 2.2.X-stable and 2.3.X-preview for leapfrog deployments, but 2.2.X should not be deployed alongside 2.0.X (or lower) or 2.4.x (or higher) codebases. Users may be able to elect which deployed MINOR version they wish to use.
3. PATCH versions are small, incremental change indicators primarily meant to orient code contributors and project maintainers. These can reach arbitrarily high revision numbers or include alphanumeric riders for release, revision, or deployment clarity (4.1.154rc9 for release candidate 9 on the 154 patch, as an example). Any number of PATCH versions may be released simultaneously and users should be largely indifferent to their current PATCH level unless reporting bugs or making feature requests.

#### Version History and Roadmap

##### Current & In-Development
- MINOR Version 3.1.X - Development milestone for post-release enhancements.
- MINOR Version 3.0.X - Beta release version. Initial deployment.

##### Roadmap
- MAJOR Version 4.0.X - Stable release.
- MINOR Version 3.2.X - Development milestone integrating wider user feedback.

##### History
- MAJOR Version 3.X.X - Code opened for collaboration.
- MAJOR Version 2.X.X - Alpha version following presentation to stakeholders.
- MAJOR Version 1.X.X - Initial development version.


## Contacts and Contributors
Author: Divon Pleasant (divon.pleasant@zeiss.com)

Data/Verbiage Contributors:
- Andrew Yu (andrew.yu@zeiss.com)
- Natasha French (natasha.french@zeiss.com)

Code Contributors:
- Paul Hamilton (paul.hamilton@zeiss.com)

Please help make SNAP better by sending bug reports and feature requests to us on [GitHub](https://github.com/divonpleasant/SNAP/issues)!