---
report_key: "blogEntries"
report_language: "vi"
report_fields: {"title":"1AWS END USER MESSAGING NOTIFY – GỬI OTP TRONG VÀI PHÚT, KHÔNG CẦN ĐĂNG KÝ SỐ GỬI RIÊNG","date":"","url":"https://1drv.ms/w/c/b0f7e1f2c77d799c/IQAPyphz-uwZRar_iN0SDkmLAbw84B65MQLlPHdUTEXavBA?e=Xk3pza","summary":"Tóm tắt: AWS End User Messaging Notify hỗ trợ OTP qua SMS/Voice với danh tính gửi được quản lý tại các thị trường hỗ trợ; bài viết đề cập SMS Protect, giới hạn tốc độ, thời hạn OTP và yêu cầu tuân thủ.","content":""}
report_index: 2
report_shared: {"num":3}
title: "1AWS END USER MESSAGING NOTIFY – GỬI OTP TRONG VÀI PHÚT, KHÔNG CẦN ĐĂNG KÝ SỐ GỬI RIÊNG"
date: ""
weight: 3
chapter: false
pre: " <b> 3.3. </b> "
---

# 1AWS END USER MESSAGING NOTIFY – GỬI OTP TRONG VÀI PHÚT, KHÔNG CẦN ĐĂNG KÝ SỐ GỬI RIÊNG

Khi xây dựng ứng dụng, gửi mã OTP là một trong những cách phổ biến nhất để xác minh người dùng. Tuy nhiên, nếu triển khai SMS theo cách truyền thống trên AWS, bạn có thể phải đăng ký số điện thoại, cấu hình sender ID và hoàn tất các thủ tục với nhà mạng. Tùy quốc gia, quá trình này có thể kéo dài từ vài ngày đến nhiều tuần.

AWS End User Messaging Notify được thiết kế để đơn giản hóa quy trình đó. Đây là tính năng gửi thông báo xác thực được quản lý sẵn, cho phép ứng dụng gửi OTP qua SMS hoặc Voice bằng danh tính gửi do AWS quản lý, tại những quốc gia được hỗ trợ.

Thay vì tự xử lý hạ tầng viễn thông, developer có thể tạo cấu hình, chọn template và bắt đầu gửi OTP chỉ trong vài phút.

## CÓ GÌ ĐÁNG CHÚ Ý?

### 1. Không cần tự đăng ký số gửi

Notify có thể tự động lựa chọn số điện thoại hoặc sender ID do AWS quản lý dựa trên quốc gia nhận tin. Bạn không cần tự mua, đăng ký hay quản lý vòng đời của số gửi tại các thị trường hỗ trợ.

Tuy nhiên, một số quốc gia vẫn yêu cầu doanh nghiệp sử dụng danh tính gửi riêng để đáp ứng quy định địa phương.

### 2. Template OTP được phê duyệt trước

AWS cung cấp các template xác thực đã được phê duyệt trước, hỗ trợ nhiều ngôn ngữ. Bạn chỉ cần chọn template phù hợp và truyền mã OTP thông qua biến {{code}}.

Điều này giúp giảm công việc xây dựng nội dung tin nhắn và xử lý yêu cầu phê duyệt template với nhà mạng.

### 3. Tích hợp SMS Protect chống gian lận

Mỗi cấu hình Notify đều được tích hợp cơ chế bảo vệ chống gian lận bắt buộc, giúp phát hiện và ngăn chặn lưu lượng có dấu hiệu bất thường như:

- **SMS Pumping:** Kẻ tấn công tạo hàng loạt yêu cầu gửi SMS nhằm làm tăng chi phí.
- **Artificially Inflated Traffic (AIT):** Lưu lượng tin nhắn bị tạo ra hoặc thao túng nhằm trục lợi từ phí viễn thông.

SMS Protect được bao gồm trong phí Notify, không có khoản phí SMS Protect riêng. Tuy nhiên, cơ chế này giúp giảm thiểu rủi ro chứ không bảo đảm loại bỏ hoàn toàn mọi hành vi gian lận.

### 4. Hai cách triển khai OTP linh hoạt

Notify hỗ trợ hai phương thức tùy theo nhu cầu của ứng dụng:

- **Ứng dụng tự tạo mã:** Sử dụng SendNotifyTextMessage hoặc SendNotifyVoiceMessage. Backend tự sinh và quản lý OTP, sau đó truyền mã cho Notify để gửi.
- **AWS tạo và xác thực mã:** Sử dụng SendNotifyCodeVerification và ValidateNotifyCodeVerification. AWS đảm nhiệm việc sinh mã, gửi mã và kiểm tra mã xác thực theo cấu hình đã thiết lập.

Nhờ đó, developer có thể lựa chọn giữa việc duy trì logic OTP hiện có hoặc chuyển phần quản lý mã xác thực sang AWS.

### 5. Hỗ trợ gửi OTP trên nhiều thị trường

Notify hỗ trợ gửi OTP đến nhiều quốc gia thông qua SMS và Voice, với các template đa ngôn ngữ.

Phạm vi sử dụng phụ thuộc vào tier dịch vụ, quốc gia đích và các yêu cầu viễn thông tại từng thị trường.

## DÙNG KHI NÀO VÀ CẦN LƯU Ý GÌ?

Notify đặc biệt hữu ích trong những tình huống cần gửi mã xác thực nhanh chóng:

- Xác minh số điện thoại khi đăng ký hoặc đăng nhập tài khoản.
- Xác thực giao dịch thanh toán, chuyển tiền hoặc thao tác nhạy cảm.
- Khôi phục tài khoản và đặt lại mật khẩu.

## MỘT SỐ LƯU Ý KHI TRIỂN KHAI

Dù Notify giúp đơn giản hóa việc gửi OTP, vẫn có một số điểm cần quan tâm:

- **Tuân thủ quy định:** Doanh nghiệp vẫn phải bảo đảm cơ chế opt-in và đáp ứng yêu cầu của nhà mạng tại quốc gia nhận tin.
- **Kiểm tra quốc gia hỗ trợ:** Không phải quốc gia nào cũng cho phép sử dụng danh tính gửi do AWS quản lý. Một số thị trường yêu cầu số điện thoại hoặc sender ID riêng.
- **Giới hạn yêu cầu OTP:** Nên triển khai thêm rate limiting, thời gian hết hạn mã và giới hạn số lần xác thực sai tại backend.
- **Theo dõi kết quả gửi:** Có thể sử dụng CloudWatch và các sự kiện gửi tin để giám sát trạng thái, phát hiện lỗi và kiểm soát lưu lượng.

## KẾT LUẬN

AWS End User Messaging Notify giải quyết một trong những rào cản lớn khi triển khai OTP trên cloud: thời gian chuẩn bị hạ tầng gửi tin.

Thay vì phải tự đăng ký số gửi, cấu hình sender ID và xử lý nhiều thủ tục viễn thông, developer có thể tận dụng hạ tầng được AWS quản lý để gửi OTP nhanh chóng tại những thị trường hỗ trợ.

Với template được phê duyệt trước, SMS Protect tích hợp sẵn, API hỗ trợ cả sinh mã lẫn xác thực mã và cơ chế kiểm soát chi tiêu, Notify là lựa chọn đáng cân nhắc cho các ứng dụng cần xác thực người dùng qua SMS hoặc Voice.

Tuy nhiên, trước khi đưa vào production, doanh nghiệp vẫn cần đánh giá chi phí thực tế, giới hạn dịch vụ và yêu cầu tuân thủ tại từng quốc gia.

## NGUỒN THAM KHẢO

- AWS – What is AWS End User Messaging?: https://docs.aws.amazon.com/end-user-messaging/latest/userguide/nx-overview.html
- AWS – Getting started with Notify: https://docs.aws.amazon.com/sms-voice/latest/userguide/notify-getting-started.md
- AWS – Notify quotas and limits: https://docs.aws.amazon.com/sms-voice/latest/userguide/notify-quotas.html
- AWS – AWS End User Messaging Pricing: https://aws.amazon.com/end-user-messaging/pricing/

#AWS #EndUserMessaging #Notify #OTP #CloudSecurity #AWSStudyGroupVN #FCAJ

[Mở tài liệu nguồn (OneDrive)](https://1drv.ms/w/c/b0f7e1f2c77d799c/IQAPyphz-uwZRar_iN0SDkmLAbw84B65MQLlPHdUTEXavBA?e=Xk3pza)

> Tài liệu nguồn do người dùng cung cấp; chưa xác nhận ngày xuất bản hoặc liên kết đăng trên AWS Study Group.

### Sơ đồ kiến trúc

![Sơ đồ kiến trúc](images/notify-otp-architecture.png)
