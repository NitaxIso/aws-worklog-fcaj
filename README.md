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

### ⚙️ 4. Tính năng kỹ thuật của Website

1. **Chỉnh sửa trực tiếp trên Web:**
   * Hỗ trợ sửa nhanh Mục tiêu tuần, Thành tích đạt được qua Modal chuyên nghiệp.
   * Thêm / Sửa / Xóa từng dòng công việc linh hoạt.
   * Xuất / Nhập dữ liệu sao lưu định dạng JSON.
2. **Hỗ trợ chuyển đổi song ngữ:**
   * Tiếng Việt / English mượt mà, lưu trạng thái tự động.
3. **Triển khai tự động:**
   * GitHub Actions Workflow `.github/workflows/deploy.yml` tự động build và xuất bản lên GitHub Pages khi push mã nguồn.
