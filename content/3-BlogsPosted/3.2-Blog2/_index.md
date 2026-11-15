---
report_key: "blogEntries"
report_language: "en"
report_fields: {"title":"AWS CLOUDTRAIL – HOW DOES AWS RECORD EVERY ACTION IN YOUR ACCOUNT?","date":"","url":"https://1drv.ms/w/c/b0f7e1f2c77d799c/IQANtZk0Ub8DSYDaoiFIAGCDAZJjVecLEt7lWJ3r-zDSJZ4?e=ld5YUt","summary":"Summary: AWS CloudTrail records API activity for auditing, including management events and data events; trails store logs in Amazon S3, and CloudTrail Lake supports queries for compliance.","content":""}
report_index: 1
report_shared: {"num":2}
title: "AWS CLOUDTRAIL – HOW DOES AWS RECORD EVERY ACTION IN YOUR ACCOUNT?"
date: ""
weight: 2
chapter: false
pre: " <b> 3.2. </b> "
---

# AWS CLOUDTRAIL – HOW DOES AWS RECORD EVERY ACTION IN YOUR ACCOUNT?

When operating systems on AWS, you often ask: Who deleted that S3 bucket? Who opened a security group to the entire internet? Who created a new IAM user at 3 a.m.? Without an activity log, you cannot answer these questions, let alone investigate an incident.

For example:

An employee accidentally commits an access key to GitHub. An attacker uses that key to call APIs to create EC2 instances in a previously unused Region, then covers their tracks by disabling CloudTrail. Without independent logs, you will not know what happened, from which IP address, or at what time.

To address the problem that "you cannot investigate what is not recorded," AWS provides **AWS CloudTrail** — a service that records every API call in your AWS account, operates automatically as soon as the account is created, and forms the foundation for most other security services.

## WHAT MAKES AWS CLOUDTRAIL NOTEWORTHY?

CloudTrail acts as the AWS account's "black box," recording all management and data access activities.

**Core capabilities:**

- **Free built-in Event history:** As soon as an account is created, you can view the most recent 90 days of management events directly in the CloudTrail console, with no additional configuration.
- **Records every API call:** Whether from the Console, CLI, SDK, or AWS services calling one another, everything is recorded with details of who made the call, from which IP address, at what time, and with what outcome.
- **Trails for long-term storage:** Create a Trail to send logs to an S3 bucket, enabling permanent storage, analysis with Athena, or forwarding to SIEM tools.
- **CloudTrail Lake:** Query logs using SQL directly in CloudTrail, without additional setup.

**Event categories:**

- **Management events:** Resource management operations (creating EC2 instances, modifying IAM policies, deleting S3 buckets). Recorded by default.
- **Data events:** Operations on data (GetObject and PutObject on S3; Invoke on Lambda). Must be enabled separately and incur charges.

## USE CASES AND PRACTICAL BENEFITS

CloudTrail is the foundation for all security and operations workflows:

**Incident Response:** When unusual activity is detected (by GuardDuty or a manual report), CloudTrail is the first place to look up who did what, from which IP address, and at what time.

**Compliance Audit:** Many standards (PCI DSS, HIPAA, SOC) require complete activity logs that cannot be deleted. CloudTrail provides audit evidence.

**Detecting dangerous configuration changes:** You can create alerts when someone disables CloudTrail, deletes a Trail, or changes the retention policy of the S3 log bucket.

**Key benefits:**

- **Automatic, with no configuration required:** Event history is available immediately, with nothing to enable.
- **Free at the basic level:** 90 days of free event history; a Trail sending logs to S3 incurs only S3 storage charges.
- **A foundation for other services:** GuardDuty analyzes CloudTrail events to detect threats; Security Hub aggregates findings from CloudTrail.

## WHEN SHOULD YOU USE IT, AND WHAT SHOULD YOU CONSIDER?

**CloudTrail does not automatically detect attacks:** It only records activity. To detect anomalies, you need GuardDuty or custom rules on CloudTrail Lake/EventBridge.

**Logs need protection:** If an attacker deletes the Trail or the S3 bucket containing logs, you lose evidence. Enable **log file validation and MFA delete** on the S3 bucket, and send logs to a separate account (Log Archive Account) within AWS Organizations.

**Costs:** The 90-day event history is free. Trails sending management events to S3 are free (only S3 storage charges apply). Data events (S3 object-level operations, Lambda Invoke) are charged separately, so enable them selectively according to your needs.

## CONCLUSION

AWS CloudTrail is the **most foundational** service in AWS security: without CloudTrail, you cannot investigate or audit, and services such as GuardDuty have no data to analyze. For beginners, the first step after creating an account is to **open CloudTrail Event history** and review a few recent events to understand how it works.

Combine CloudTrail with **IAM** (permission control) and **GuardDuty** (anomaly detection), and you have the minimum foundational security trio: **permissions are controlled, actions are recorded, and anomalies are detected**.

## REFERENCES

- AWS – What is AWS CloudTrail?: https://docs.aws.amazon.com/awscloudtrail/latest/userguide/cloudtrail-user-guide.html
- AWS – AWS CloudTrail Pricing: https://aws.amazon.com/cloudtrail/pricing/
- AWS – CloudTrail event history: https://docs.aws.amazon.com/awscloudtrail/latest/userguide/view-cloudtrail-events.html

#AWS #CloudTrail #CloudSecurity #AWSAudit #AWSStudyGroupVN #FCAJ

[Open source document (OneDrive)](https://1drv.ms/w/c/b0f7e1f2c77d799c/IQANtZk0Ub8DSYDaoiFIAGCDAZJjVecLEt7lWJ3r-zDSJZ4?e=ld5YUt)

> Source document provided by the user; the publication date or AWS Study Group post link has not been verified.

### Architecture diagram

![Architecture diagram](images/cloudtrail-architecture.png)
