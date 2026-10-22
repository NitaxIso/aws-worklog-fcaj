---
title: "Worklog Tuần 1"
date: 2026-09-14
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---

### Mục tiêu tuần 1:

* **Onboarding & Văn hóa:** Nắm vững nội quy văn phòng HCM, quy chế điểm danh, tiêu chuẩn bảo mật và lộ trình đánh giá.
* **Hạ tầng Cloud cơ bản:** Khởi tạo tài khoản AWS Free Tier, cấu hình bảo mật Root MFA và phân quyền IAM người dùng.
* **Kiểm soát ngân sách:** Thiết lập công cụ AWS Budgets và CloudWatch Billing Alarm để giám sát chi phí học tập $0.
* **Hỗ trợ kỹ thuật:** Nắm rõ các gói dịch vụ AWS Support và quy trình mở ticket hỗ trợ kỹ thuật hoặc tài khoản.
* **Tài liệu báo cáo:** Dựng website Worklog cá nhân và thiết lập tự động hóa CI/CD với GitHub Actions.

### Các công việc cần triển khai trong tuần này:
| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 2 | - Tham gia buổi Onboarding với mentor và đội ngũ FCAJ HCM.<br>- Đọc, ghi nhớ và cam kết tuân thủ quy chế thực tập, tác phong làm việc.<br>- Tạo và hoàn tất hồ sơ cá nhân trên hệ thống Portal thực tập. | 14/09/2026 | 14/09/2026 | HCM Rules & Instructions |
| 3 | - Nghiên cứu chính sách tài khoản AWS Free Tier và cơ chế cấp credit.<br>- Đăng ký thành công tài khoản AWS cá nhân cho kỳ thực tập.<br>- Làm quen với AWS Management Console và cấu hình Region Singapore. | 15/09/2026 | 15/09/2026 | AWS Free Tier Account Setup |
| 4 | - Kích hoạt Multi-Factor Authentication (MFA) bảo vệ Root Account.<br>- Tạo IAM User / Group quản trị thường nhật theo quy chuẩn Least Privilege.<br>- Kích hoạt Billing Preferences, cấu hình AWS Budgets và CloudWatch Alarm. | 16/09/2026 | 16/09/2026 | AWS Budgets & Cost Alarm |
| 5 | - Tìm hiểu mô hình AWS Support Center, thời gian SLA các gói hỗ trợ.<br>- Thực hành các bước tạo Support Case khi gặp vấn đề dịch vụ/billing.<br>- Nghiên cứu cấu trúc chuẩn của bộ tài liệu Worklog, Proposal, Workshop. | 17/09/2026 | 17/09/2026 | AWS Support Guide, Workshop Sample |
| 6 | - Clone và thiết lập theme Worklog trên máy cá nhân.<br>- Cấu hình pipeline GitHub Actions tự động build & deploy lên GitHub Pages.<br>- Soạn thảo hoàn thiện nội dung Worklog Tuần 1 và đồng bộ lên trang web. | 18/09/2026 | 18/09/2026 | Hugo & Pages Deployment |

### Kết quả đạt được tuần 1:

* **1. Ý thức tổ chức & Tuân thủ quy định thực tập:**
  * Nắm vững quy định giờ giấc làm việc, quy trình xin phép và hình thức điểm danh hàng ngày tại FCAJ Hồ Chí Minh.
  * Hiểu rõ bộ quy tắc ứng xử (Code of Conduct), quy định bảo mật dữ liệu doanh nghiệp và trách nhiệm của thực tập sinh.
  * Kích hoạt đầy đủ các kênh giao tiếp nội bộ và hoàn thành đăng ký hồ sơ trên portal.

* **2. Quản trị tài khoản Cloud & Tối ưu an toàn thông tin:**
  * **Root Account Security:** Đã khóa hoàn toàn việc sử dụng thông tin xác thực Root hàng ngày bằng cách kích hoạt ứng dụng xác thực MFA phần cứng/phần mềm.
  * **IAM Best Practices:** Khởi tạo IAM User cá nhân gán nhóm quyền AdministratorAccess, áp dụng chính sách mật khẩu phức tạp để thực hành thay cho Root.
  * **Giám sát chi phí:** Khởi tạo thành công AWS Budget theo dõi ngưỡng chi phí và CloudWatch Alarm qua SNS Topic để gửi email cảnh báo tức thì nếu phát sinh phí vượt ngân sách.
  * **Quy trình hỗ trợ:** Nắm vững cách phân loại sự cố và các bước gửi yêu cầu trợ giúp kỹ thuật qua AWS Support Center.

* **3. Xây dựng nền tảng xuất bản tài liệu tự động:**
  * Xây dựng cấu trúc dự án báo cáo dạng Static Site dựa trên giao diện chuẩn FCAJ.
  * Triển khai thành công quy trình CI/CD với GitHub Actions (`deploy.yml`) với đầy đủ quyền Pages và ID Token.
  * Khắc phục lỗi cấu hình triển khai ban đầu và chính thức đưa trang báo cáo hoạt động ổn định trên GitHub Pages.

* **4. Đánh giá tiến độ & Kế hoạch tuần tiếp theo:**
  * **Tiến độ tuần 1:** 100% Đạt - Hoàn thành đầy đủ các chỉ tiêu Onboarding, tài khoản Cloud và nền tảng website cá nhân theo đúng hạn.
  * **Mục tiêu tuần 2:** Bắt đầu nghiên cứu các dịch vụ Compute & Networking cốt lõi của AWS (Amazon EC2, VPC, Subnet, Route Table, Security Group) và triển khai bài lab đầu tiên.
