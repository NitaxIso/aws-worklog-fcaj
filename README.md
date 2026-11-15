# ☁️ AWS Worklog FCAJ — Cloud Learning Portfolio

> **Báo cáo thực tập và hành trình học tập AWS First Cloud AI Journey của Lê Công Luyến.**
> Tổng hợp tiến độ, kiến thức và hoạt động cộng đồng qua một website **song ngữ Việt–Anh**, xây dựng bằng **HTML, CSS & JavaScript**.

[![Platform](https://img.shields.io/badge/Platform-GitHub_Pages-blue.svg)](https://nitaxiso.github.io/aws-worklog-fcaj/)
[![Stack](https://img.shields.io/badge/Stack-HTML_CSS_JavaScript-orange.svg)](static/)
[![Languages](https://img.shields.io/badge/Languages-VI_%7C_EN-green.svg)](https://nitaxiso.github.io/aws-worklog-fcaj/)
[![Content](https://img.shields.io/badge/Content-Markdown-blue.svg)](content/)

**[🌐 Xem báo cáo trực tuyến](https://nitaxiso.github.io/aws-worklog-fcaj/)** · **[🎟️ Sự kiện & hoạt động cộng đồng](https://nitaxiso.github.io/aws-worklog-fcaj/#/events)**

---

## 📖 1. Giới thiệu (Overview)

**AWS Worklog FCAJ** là nơi trình bày báo cáo thực tập của **Lê Công Luyến** trong chương trình **AWS First Cloud AI Journey**: nhật ký 12 tuần, đề xuất dự án, bài viết kỹ thuật, hoạt động cộng đồng, workshop, tự đánh giá và phản hồi.

Website được xuất bản trên **GitHub Pages**. Người đọc không cần cài đặt công cụ hay chạy localhost. Tắt máy phát triển hoặc dừng server local **không làm ngừng website online**; website còn phục vụ khi repository và cấu hình GitHub Pages vẫn khả dụng.

| Điểm truy cập | Đường dẫn |
| :--- | :--- |
| Trang báo cáo chính | https://nitaxiso.github.io/aws-worklog-fcaj/ |
| Sự kiện & hoạt động cộng đồng | https://nitaxiso.github.io/aws-worklog-fcaj/#/events |

Phần `#/events` là tuyến điều hướng phía trình duyệt, cho phép mở thẳng mục sự kiện.

---

## 🌟 2. Điểm nổi bật (Key Features)

- 🌐 **Bilingual Experience**
  - Chuyển đổi nội dung **Việt–Anh**, gồm toàn văn ba bài blog.
- 📚 **Learning Portfolio**
  - Nhật ký **12 tuần**, proposal, blog, sự kiện và workshop trong cùng một giao diện.
  - Hoạt động dự định được ghi rõ trạng thái, không đánh đồng với kết quả đã hoàn thành.
- 🖼️ **Reading Experience**
  - Bài viết kèm sơ đồ, trình xem ảnh, giao diện responsive và lựa chọn giao diện sáng/tối.
- 🗂️ **Repository-driven Content**
  - Nội dung lấy từ **Markdown trong repository**, không phụ thuộc dữ liệu báo cáo lưu trong trình duyệt.
  - Website chỉ đọc; có xuất dữ liệu báo cáo, không có trình biên tập hay API ghi nội dung.
- ⚡ **Minimal Static Stack**
  - HTML, CSS và JavaScript thuần; **không React, không Hugo, không database**, không bước biên dịch.

---

## 📂 3. Cấu trúc dự án (Project Structure)

```text
.
├── index.html                   # Điểm vào website
├── README.md                    # Giới thiệu và hướng dẫn
├── content/                     # Nội dung Việt–Anh và hình ảnh
│   ├── 1-Worklog/               # Nhật ký 12 tuần
│   ├── 2-Proposal/              # Đề xuất dự án
│   ├── 3-BlogsPosted/           # Ba bài viết kỹ thuật
│   ├── 4-EventParticipated/     # Sự kiện và minh chứng
│   ├── 5-Workshop/              # Tài liệu workshop
│   ├── 6-Self-evaluation/       # Tự đánh giá
│   └── 7-Feedback/              # Phản hồi
├── static/                      # Tài nguyên giao diện
│   ├── report-runtime.js       # Manifest và xử lý nội dung
│   ├── fcaj-port.js            # Giao diện và điều hướng
│   ├── css/fcaj-port.css       # Responsive và theme
│   └── ui-fcaj/hero.jpg        # Ảnh trang tổng quan
├── checks/                      # Kiểm tra bằng Node.js và Python
└── .github/workflows/           # Triển khai GitHub Pages
```

Cây trên thể hiện các thành phần chính, không liệt kê toàn bộ ảnh và tài nguyên phụ.

---

## 📝 4. Nội dung & quy ước biên tập (Content Guide)

| Nhóm nội dung | Thư mục | Phạm vi |
| :--- | :--- | :--- |
| Hồ sơ | `content/` | Thông tin tổng quan |
| Worklog | `content/1-Worklog/` | Tiến độ từng tuần |
| Proposal | `content/2-Proposal/` | Đề xuất dự án |
| Blog | `content/3-BlogsPosted/` | Bài viết, tham khảo và sơ đồ |
| Events | `content/4-EventParticipated/` | Nội dung và minh chứng sự kiện |
| Workshop | `content/5-Workshop/` | Các bước hướng dẫn thực hành |
| Evaluation | `content/6-Self-evaluation/` | Tự đánh giá |
| Feedback | `content/7-Feedback/` | Phản hồi chương trình |

- Dùng **`_index.vi.md`** cho tiếng Việt và **`_index.md`** cho tiếng Anh trong cùng thư mục.
- Giữ dấu phân cách frontmatter. Giá trị của các trường **`report_*` là JSON trên một dòng**, không phải YAML tùy ý.
- Khi sửa tiêu đề, tóm tắt hoặc dữ liệu xuất hiện ở cả hai nơi, cập nhật đồng bộ metadata và thân bài; giữ nguyên ID và thứ tự không liên quan.
- Khi thêm tài liệu, bổ sung đường dẫn tương ứng vào `reportPaths` trong `static/report-runtime.js`; mục mới có thể cần cập nhật router và danh sách hiển thị.
- Giữ đường dẫn ảnh hợp lệ. Các liên kết tài liệu nguồn vẫn được giữ trong Markdown để đối chiếu, nhưng ẩn khỏi giao diện bài viết.
- Workshop dùng tên thư mục đã chuẩn hóa: `5.2-Prerequisite` và `5.4.2-create-interface-endpoint`; không đổi lại các tên viết sai trước đây.
