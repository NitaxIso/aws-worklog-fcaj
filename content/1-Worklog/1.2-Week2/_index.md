---
title: "Week 2 Worklog"
date: 2026-09-21
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

### Week 2 Objectives:

* **Amazon VPC Network Architecture:** Master VPC principles, CIDR block IPv4 structures (`/16`, `/24`), the 5 AWS reserved IPs rule, and Multi-AZ subnet design.
* **Routing & Internet Connectivity:** Configure Route Tables, attach Internet Gateway (IGW) for Public Subnets, and implement NAT Gateway solutions for Private Subnets.
* **Network Security (Firewalls in VPC):** Deeply analyze and contrast the mechanisms of Security Groups (Stateful, Instance/ENI level) and Network ACLs (Stateless, Subnet level).
* **Amazon EC2 Compute Services:** Explore the EC2 lifecycle, classify Instance Families (C, R, T, M), compare EBS Volumes vs Instance Store, and secure access with Key Pairs.
* **Hands-on Lab Implementation:** Build an end-to-end custom 2-Tier VPC network architecture and launch an EC2 instance to verify secure network connectivity.

### Tasks to be carried out this week:
| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 2 | - Explore Amazon VPC overview and distinguish between Default VPC and Custom VPC.<br>- Study CIDR block (IPv4) allocation rules for VPC (e.g., `10.0.0.0/16`).<br>- Learn subnet partitioning principles and the 5 AWS reserved IP addresses in each subnet (`.0, .1, .2, .3, .255`). | 21/09/2026 | 21/09/2026 | VPC Subnets Overview, FCAJ Week 2 Sample |
| 3 | - Research routing mechanisms with Route Tables (Main Route Table vs Custom Route Table).<br>- Configure and attach Internet Gateway (IGW) to VPC, routing `0.0.0.0/0` for Public Subnet.<br>- Understand the role, mechanics, and deployment of NAT Gateway in Public Subnet to grant internet egress for Private Subnet. | 22/09/2026 | 22/09/2026 | Route Table Guide, NAT Gateway Setup |
| 4 | - Conduct detailed comparison between AWS firewall layers: Security Group vs Network ACL (NACL).<br>- Understand Stateful property of Security Groups (automatic return traffic allowance).<br>- Understand Stateless property and Rule Number ordering of NACL at subnet tier.<br>- Design optimal Inbound/Outbound rules adhering to Defense-in-Depth security principles. | 23/09/2026 | 23/09/2026 | Security Groups, Network ACLs |
| 5 | - Execute hands-on lab: Initialize Custom VPC (`10.0.0.0/16`) spanning 2 Availability Zones.<br>- Create 2 Public Subnets and 2 Private Subnets, associating corresponding Route Tables.<br>- Create and attach Internet Gateway; configure Security Group permitting HTTP (Port 80) and SSH (Port 22 from My IP). | 24/09/2026 | 24/09/2026 | VPC Preparation Lab, Create Security Group |
| 6 | - Explore Amazon EC2 service: Instance configuration families (General Purpose, Compute, Memory, Storage) and instance lifecycle.<br>- Launch EC2 instance in Public Subnet, configuring secure Key Pair and Security Group.<br>- Practice secure SSH connection to the server via Terminal and verify outbound internet connectivity. | 25/09/2026 | 25/09/2026 | Deploy EC2 Server |

### Week 2 Achievements:

* **1. Advanced Amazon VPC Network Infrastructure:**
  * Mastered IP Subnetting Architecture: Designed VPC CIDR block `10.0.0.0/16` (65,536 addresses) and partitioned into `/24` subnets (251 usable IPs after reserving 5 system IPs).
  * High Availability (HA) Model: Deployed subnets spanning across at least 2 Availability Zones (AZ-a, AZ-b) to guarantee high availability for cloud applications.
  * Route Table Mastery: Implemented isolated route tables for Public Subnet (routed via IGW) and Private Subnet (blocking direct internet access).

* **2. Security Architecture & Traffic Control (Firewall in VPC):**
  * **Security Group (Instance Protection Layer):** Mastered stateful behavior and configured ingress rules restricted to specific source IP (My IP).
  * **Network ACL (Subnet Protection Layer):** Mastered stateless behavior and ascending Rule Number evaluation.

* **3. Amazon EC2 Compute & Data Storage Operations:**
  * Differentiated between EBS Volume and Instance Store, and practiced secure SSH connectivity using Key Pairs (`.pem`).
