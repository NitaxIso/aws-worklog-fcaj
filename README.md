# AWS First Cloud AI Journey (FCAJ) - Internship Report
## Báo cáo thực tập tốt nghiệp :: Lê Công Luyến

Trang web báo cáo thực tập chính thức được chuẩn hóa 100% theo khung chương trình **AWS First Cloud AI Journey (FCAJ)**.

---

### 🌐 1. Địa chỉ Website chính thức (GitHub Pages)

Website được triển khai tự động qua **GitHub Pages** tại đường dẫn:

👉 **[https://nitaxiso.github.io/aws-worklog-fcaj/](https://nitaxiso.github.io/aws-worklog-fcaj/)**

* **Nhật ký công việc (Worklog):** [https://nitaxiso.github.io/aws-worklog-fcaj/#/worklog](https://nitaxiso.github.io/aws-worklog-fcaj/#/worklog)
* **Đề xuất đồ án (Proposal):** [https://nitaxiso.github.io/aws-worklog-fcaj/#/proposal](https://nitaxiso.github.io/aws-worklog-fcaj/#/proposal)
* **Bài viết Blog kỹ thuật:** [https://nitaxiso.github.io/aws-worklog-fcaj/#/blogs-posted](https://nitaxiso.github.io/aws-worklog-fcaj/#/blogs-posted)
* **Sự kiện tham gia:** [https://nitaxiso.github.io/aws-worklog-fcaj/#/events](https://nitaxiso.github.io/aws-worklog-fcaj/#/events)

---

### 📋 2. Thông tin sinh viên & Kỳ thực tập (Năm 2026)

* **Họ và tên sinh viên:** Lê Công Luyến
* **Trường:** Trường Đại học FPT
* **Chuyên ngành:** An toàn thông tin
* **Đơn vị thực tập:** Công ty TNHH Amazon Web Services (AWS) Việt Nam
* **Chương trình:** Workforce Bootcamp - First Cloud AI Journey (FCAJ)
* **Mã số sinh viên:** SE190809
* **Số điện thoại:** 0347047101
* **Email:** lecongluyen9a1@gmail.com
* **Thời gian thực tập:** Từ **14/09/2026** đến **14/12/2026**

---

### 📅 3. Tóm tắt Nội dung Tuần 1 (Week 1)

#### Mục tiêu tuần (Week 1 Objectives):
* **Onboarding & Văn hóa:** Nắm vững nội quy văn phòng HCM, quy chế điểm danh, tiêu chuẩn bảo mật và lộ trình đánh giá.
* **Hạ tầng Cloud cơ bản:** Khởi tạo tài khoản AWS Free Tier, cấu hình bảo mật Root MFA và phân quyền IAM người dùng.
* **Kiểm soát ngân sách:** Thiết lập công cụ AWS Budgets và CloudWatch Billing Alarm để giám sát chi phí học tập $0.
* **Hỗ trợ kỹ thuật:** Nắm rõ các gói dịch vụ AWS Support và quy trình mở ticket hỗ trợ kỹ thuật hoặc tài khoản.
* **Tài liệu báo cáo:** Dựng website Worklog cá nhân và thiết lập tự động hóa CI/CD với GitHub Actions.

#### Nội dung công việc từng ngày (Tasks):
* **Thứ 2 (14/09/2026):**
  * Tham gia buổi Onboarding với mentor và đội ngũ FCAJ HCM.
  * Đọc, ghi nhớ và cam kết tuân thủ quy chế thực tập, tác phong làm việc.
  * Tạo và hoàn tất hồ sơ cá nhân trên hệ thống Portal thực tập.
  * *Tài liệu:* HCM Rules & Instructions
* **Thứ 3 (15/09/2026):**
  * Nghiên cứu chính sách tài khoản AWS Free Tier và cơ chế cấp credit.
  * Đăng ký thành công tài khoản AWS cá nhân cho kỳ thực tập.
  * Làm quen với AWS Management Console và cấu hình Region Singapore.
  * *Tài liệu:* AWS Free Tier Account Setup
* **Thứ 4 (16/09/2026):**
  * Kích hoạt Multi-Factor Authentication (MFA) bảo vệ Root Account.
  * Tạo IAM User / Group quản trị thường nhật theo quy chuẩn Least Privilege.
  * Kích hoạt Billing Preferences, cấu hình AWS Budgets và CloudWatch Alarm.
  * *Tài liệu:* AWS Budgets & Cost Alarm
* **Thứ 5 (17/09/2026):**
  * Tìm hiểu mô hình AWS Support Center, thời gian SLA các gói hỗ trợ.
  * Thực hành các bước tạo Support Case khi gặp vấn đề dịch vụ/billing.
  * Nghiên cứu cấu trúc chuẩn của bộ tài liệu Worklog, Proposal, Workshop.
  * *Tài liệu:* AWS Support Guide | Workshop Sample
* **Thứ 6 (18/09/2026):**
  * Clone và thiết lập theme Worklog trên máy cá nhân.
  * Cấu hình pipeline GitHub Actions tự động build & deploy lên GitHub Pages.
  * Soạn thảo hoàn thiện nội dung Worklog Tuần 1 và đồng bộ lên trang web.
  * *Tài liệu:* Hugo & Pages Deployment

---

### 📅 4. Tóm tắt Nội dung Tuần 2 (Week 2)

* **Thời gian:** 21/09/2026 – 25/09/2026
* **Chủ đề đào tạo:** Amazon VPC & Amazon EC2

#### Mục tiêu tuần (Week 2 Objectives):
* **Kiến trúc mạng Amazon VPC:** Nắm vững nguyên lý VPC, cấu trúc dải IP CIDR (/16, /24), quy tắc 5 IP bảo lưu và thiết kế Subnet đa vùng sẵn sàng (Multi-AZ).
* **Định tuyến & Kết nối Internet:** Thiết lập Route Table, Internet Gateway (IGW) cho Public Subnet và giải pháp NAT Gateway cho Private Subnet.
* **Bảo mật mạng (Firewall in VPC):** Phân biệt chi tiết cơ chế hoạt động của Security Group (Stateful, cấp Instance/ENI) và Network ACL (Stateless, cấp Subnet).
* **Dịch vụ máy chủ Amazon EC2:** Tìm hiểu chu kỳ sống EC2, phân loại Instance Types (C, R, T, M), so sánh ổ đĩa EBS và Instance Store, bảo mật truy cập Key Pair.
* **Triển khai thực hành (Hands-on Lab):** Xây dựng hoàn chỉnh kiến trúc mạng tùy chỉnh 2-Tier VPC và khởi tạo máy chủ EC2 kiểm tra luồng kết nối an toàn.

#### Nội dung công việc từng ngày (Tasks):
* **Thứ 2 (21/09/2026):**
  * Tìm hiểu khái niệm tổng quan Amazon VPC, phân biệt Default VPC và Custom VPC.
  * Nghiên cứu quy tắc phân bổ dải mạng CIDR Block (IPv4) cho VPC (ví dụ 10.0.0.0/16).
  * Tìm hiểu nguyên lý chia Subnet và quy tắc AWS bảo lưu 5 địa chỉ IP trong mỗi subnet (.0, .1, .2, .3, .255).
  * *Tài liệu:* VPC Subnets Overview | FCAJ Week 2 Sample
* **Thứ 3 (22/09/2026):**
  * Nghiên cứu cơ chế định tuyến với Route Table (Main Route Table vs Custom Route Table).
  * Cấu hình Internet Gateway (IGW), đính kèm vào VPC và trỏ route 0.0.0.0/0 cho Public Subnet.
  * Tìm hiểu vai trò, cơ chế hoạt động và cách triển khai NAT Gateway trong Public Subnet để cấp internet cho Private Subnet.
  * *Tài liệu:* Route Table Guide | NAT Gateway Setup
* **Thứ 4 (23/09/2026):**
  * So sánh chi tiết hai lớp tường lửa trên AWS: Security Group vs Network ACL (NACL).
  * Tìm hiểu tính chất Stateful của Security Group (tự động cho phép traffic phản hồi).
  * Tìm hiểu tính chất Stateless và quy tắc số thứ tự (Rule number) của NACL ở cấp độ Subnet.
  * Thiết kế quy tắc Inbound/Outbound tối ưu theo nguyên tắc bảo mật phòng thủ chiều sâu.
  * *Tài liệu:* Security Groups | Network ACLs
* **Thứ 5 (24/09/2026):**
  * Thực hành bài lab: Khởi tạo Custom VPC (10.0.0.0/16) trải rộng 2 Availability Zones.
  * Tạo 2 Public Subnets và 2 Private Subnets, gán Route Tables tương ứng.
  * Tạo và gán Internet Gateway; thiết lập Security Group cho phép HTTP (Port 80) và SSH (Port 22 từ My IP).
  * *Tài liệu:* VPC Preparation Lab | Create Security Group
* **Thứ 6 (25/09/2026):**
  * Tìm hiểu dịch vụ Amazon EC2: Các nhóm cấu hình (General Purpose, Compute, Memory, Storage), chu kỳ sống instance (Lifecycle).
  * Khởi tạo máy chủ EC2 trong Public Subnet, cấu hình Key Pair bảo mật và Security Group.
  * Thực hành kết nối an toàn vào máy chủ qua SSH Terminal và kiểm tra luồng kết nối Internet.
  * *Tài liệu:* Deploy EC2 Server

#### Kết quả đạt được (Key Achievements):
1. **Nền tảng mạng chuyên sâu Amazon VPC:**
   * Hiểu rõ kiến trúc phân chia dải mạng: Thiết kế VPC CIDR block 10.0.0.0/16 (65,536 địa chỉ) và chia thành các subnet /24 (251 IP khả dụng sau khi trừ 5 IP hệ thống).
   * Nắm vững mô hình High Availability (HA): Thiết kế Subnet trải dài trên tối thiểu 2 Availability Zones (AZ-a, AZ-b) để đảm bảo tính sẵn sàng cao cho ứng dụng.
   * Làm chủ cơ chế định tuyến Route Table: Cấu hình bảng định tuyến độc lập cho Public Subnet (qua IGW) và Private Subnet (chặn trực tiếp internet).
2. **Kiến trúc Bảo mật & Kiểm soát lưu lượng (Firewall in VPC):**
   * Security Group (Lớp bảo vệ Instance): Nắm vững cơ chế Stateful (chỉ cần mở Inbound rule là gói tin phản hồi Outbound tự động được cho phép). Cấu hình rule truy cập giới hạn theo IP nguồn cụ thể (My IP).
   * Network ACL (Lớp bảo vệ Subnet): Nắm vững tính chất Stateless (phải mở cả Inbound và Outbound rules, bao gồm cổng Ephemeral 1024–65535). Đánh giá thứ tự rule theo số thứ tự (Rule number tăng dần).
   * Phối hợp đồng thời Security Group và NACL tạo thành mô hình phòng thủ chiều sâu (Defense-in-Depth) chặt chẽ cho hạ tầng Cloud.
3. **Điện toán máy chủ Amazon EC2 & Lưu trữ dữ liệu:**
   * Hiểu cách lựa chọn họ máy chủ phù hợp với workload: dòng T/M cho web server thông thường, dòng C cho tính toán nặng, dòng R cho bộ nhớ đệm/database.
   * Phân biệt rõ ràng giữa EBS Volume (ổ cứng độc lập, bền vững, hỗ trợ snapshot) và Instance Store (ổ cứng gắn trực tiếp, tốc độ cao nhưng mất dữ liệu khi stop máy chủ).
   * Quản lý bảo mật máy chủ an toàn với Key Pair (.pem) và thực hành kết nối an toàn vào máy chủ qua SSH Terminal.
4. **Đánh giá tiến độ & Kế hoạch tuần tiếp theo:**
   * Tiến độ tuần 2: 100% Đạt - Nắm vững toàn bộ lý thuyết cốt lõi về VPC, Subnets, Route Table, Firewall và hoàn thành khởi tạo máy chủ EC2 theo thiết kế.
   * Kỹ năng thu được: Thành thạo - Tự tay thiết kế và cấu hình topo mạng Multi-AZ trên AWS Console; thành thạo gán Security Group, định tuyến bảng Route và kết nối máy chủ qua SSH.
   * Mục tiêu tuần 3: Kế hoạch - Tiếp tục nghiên cứu dịch vụ lưu trữ đối tượng Amazon S3, cơ chế phân quyền S3 Bucket Policy, CORS và triển khai mô hình Static Website Hosting.

---

### ⚙️ 5. Tính năng kỹ thuật của Website

1. **Chỉnh sửa trực tiếp trên Web:**
   * Hỗ trợ sửa nhanh Mục tiêu tuần, Thành tích đạt được qua Modal chuyên nghiệp.
   * Thêm / Sửa / Xóa từng dòng công việc linh hoạt.
   * Xuất / Nhập dữ liệu sao lưu định dạng JSON.
2. **Hỗ trợ chuyển đổi song ngữ:**
   * Tiếng Việt / English mượt mà, lưu trạng thái tự động.
3. **Triển khai tự động:**
   * GitHub Actions Workflow `.github/workflows/deploy.yml` tự động build và xuất bản lên GitHub Pages khi push mã nguồn.
