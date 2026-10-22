---
title: "Worklog Tuần 2"
date: 2026-09-21
weight: 2
chapter: false
pre: " <b> 1.2. </b> "
---

### Mục tiêu tuần 2:

* **Kiến trúc mạng Amazon VPC:** Nắm vững nguyên lý VPC, cấu trúc dải IP CIDR (`/16`, `/24`), quy tắc 5 IP bảo lưu và thiết kế Subnet đa vùng sẵn sàng (Multi-AZ).
* **Định tuyến & Kết nối Internet:** Thiết lập Route Table, Internet Gateway (IGW) cho Public Subnet và giải pháp NAT Gateway cho Private Subnet.
* **Bảo mật mạng (Firewall in VPC):** Phân biệt chi tiết cơ chế hoạt động của Security Group (Stateful, cấp Instance/ENI) và Network ACL (Stateless, cấp Subnet).
* **Dịch vụ máy chủ Amazon EC2:** Tìm hiểu chu kỳ sống EC2, phân loại Instance Types (C, R, T, M), so sánh ổ đĩa EBS và Instance Store, bảo mật truy cập Key Pair.
* **Triển khai thực hành (Hands-on Lab):** Xây dựng hoàn chỉnh kiến trúc mạng tùy chỉnh 2-Tier VPC và khởi tạo máy chủ EC2 kiểm tra luồng kết nối an toàn.

### Các công việc cần triển khai trong tuần này:
| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 2 | - Tìm hiểu khái niệm tổng quan Amazon VPC, phân biệt Default VPC và Custom VPC.<br>- Nghiên cứu quy tắc phân bổ dải mạng CIDR Block (IPv4) cho VPC (ví dụ `10.0.0.0/16`).<br>- Tìm hiểu nguyên lý chia Subnet và quy tắc AWS bảo lưu 5 địa chỉ IP trong mỗi subnet (`.0, .1, .2, .3, .255`). | 21/09/2026 | 21/09/2026 | VPC Subnets Overview, FCAJ Week 2 Sample |
| 3 | - Nghiên cứu cơ chế định tuyến với Route Table (Main Route Table vs Custom Route Table).<br>- Cấu hình Internet Gateway (IGW), đính kèm vào VPC và trỏ route `0.0.0.0/0` cho Public Subnet.<br>- Tìm hiểu vai trò, cơ chế hoạt động và cách triển khai NAT Gateway trong Public Subnet để cấp internet cho Private Subnet. | 22/09/2026 | 22/09/2026 | Route Table Guide, NAT Gateway Setup |
| 4 | - So sánh chi tiết hai lớp tường lửa trên AWS: Security Group vs Network ACL (NACL).<br>- Tìm hiểu tính chất Stateful của Security Group (tự động cho phép traffic phản hồi).<br>- Tìm hiểu tính chất Stateless và quy tắc số thứ tự (Rule number) của NACL ở cấp độ Subnet.<br>- Thiết kế quy tắc Inbound/Outbound tối ưu theo nguyên tắc bảo mật phòng thủ chiều sâu. | 23/09/2026 | 23/09/2026 | Security Groups, Network ACLs |
| 5 | - Thực hành bài lab: Khởi tạo Custom VPC (`10.0.0.0/16`) trải rộng 2 Availability Zones.<br>- Tạo 2 Public Subnets và 2 Private Subnets, gán Route Tables tương ứng.<br>- Tạo và gán Internet Gateway; thiết lập Security Group cho phép HTTP (Port 80) và SSH (Port 22 từ My IP). | 24/09/2026 | 24/09/2026 | VPC Preparation Lab, Create Security Group |
| 6 | - Tìm hiểu dịch vụ Amazon EC2: Các nhóm cấu hình (General Purpose, Compute, Memory, Storage), chu kỳ sống instance (Lifecycle).<br>- Khởi tạo máy chủ EC2 trong Public Subnet, cấu hình Key Pair bảo mật và Security Group.<br>- Thực hành kết nối an toàn vào máy chủ qua SSH Terminal và kiểm tra luồng kết nối Internet. | 25/09/2026 | 25/09/2026 | Deploy EC2 Server |

### Kết quả đạt được tuần 2:

* **1. Nền tảng mạng chuyên sâu Amazon VPC:**
  * Hiểu rõ kiến trúc phân chia dải mạng: Thiết kế VPC CIDR block `10.0.0.0/16` (65,536 địa chỉ) và chia thành các subnet `/24` (251 IP khả dụng sau khi trừ 5 IP hệ thống).
  * Nắm vững mô hình High Availability (HA): Thiết kế Subnet trải dài trên tối thiểu 2 Availability Zones (AZ-a, AZ-b) để đảm bảo tính sẵn sàng cao cho ứng dụng.
  * Làm chủ cơ chế định tuyến Route Table: Cấu hình bảng định tuyến độc lập cho Public Subnet (qua IGW) và Private Subnet (chặn trực tiếp internet).

* **2. Kiến trúc Bảo mật & Kiểm soát lưu lượng (Firewall in VPC):**
  * **Security Group (Lớp bảo vệ Instance):** Nắm vững cơ chế Stateful (chỉ cần mở Inbound rule là gói tin phản hồi Outbound tự động được cho phép). Cấu hình rule truy cập giới hạn theo IP nguồn cụ thể (My IP).
  * **Network ACL (Lớp bảo vệ Subnet):** Nắm vững tính chất Stateless (phải mở cả Inbound và Outbound rules, bao gồm cổng Ephemeral `1024–65535`). Đánh giá thứ tự rule theo số thứ tự (Rule number tăng dần).
  * Phối hợp đồng thời Security Group và NACL tạo thành mô hình phòng thủ chiều sâu (Defense-in-Depth) chặt chẽ cho hạ tầng Cloud.

* **3. Điện toán máy chủ Amazon EC2 & Lưu trữ dữ liệu:**
  * Hiểu cách lựa chọn họ máy chủ phù hợp với workload: dòng T/M cho web server thông thường, dòng C cho tính toán nặng, dòng R cho bộ nhớ đệm/database.
  * Phân biệt rõ ràng giữa EBS Volume (ổ cứng độc lập, bền vững, hỗ trợ snapshot) và Instance Store (ổ cứng gắn trực tiếp, tốc độ cao nhưng mất dữ liệu khi stop máy chủ).
  * Quản lý bảo mật máy chủ an toàn với Key Pair (`.pem`) và thực hành kết nối an toàn vào máy chủ qua SSH Terminal.

* **4. Đánh giá tiến độ & Kế hoạch tuần tiếp theo:**
  * **Tiến độ tuần 2:** 100% Đạt - Nắm vững toàn bộ lý thuyết cốt lõi về VPC, Subnets, Route Table, Firewall và hoàn thành khởi tạo máy chủ EC2 theo thiết kế.
  * **Mục tiêu tuần 3:** Tiếp tục nghiên cứu dịch vụ lưu trữ đối tượng Amazon S3, cơ chế phân quyền S3 Bucket Policy, CORS và triển khai mô hình Static Website Hosting.
