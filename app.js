/**
 * AWS FIRST CLOUD AI JOURNEY (FCAJ) - INTERNSHIP REPORT SCRIPT (v26)
 * 100% Aligned with fcj-workshop-template (Hugo Learn) & hcm-rules.awsfcaj.com
 * Hierarchical Tree Routing, Reader/Editor Modes, Planned Content Guidance for Empty Sections
 * Student: Le Cong Luyen (SE190809 - FPT University)
 */

// ==========================================
// 1. I18N DICTIONARY (VIETNAMESE & ENGLISH)
// ==========================================
const I18N_DICTIONARY = {
  vi: {
    brandName: "Báo cáo thực tập",
    brandDesc: "AWS First Cloud AI Journey",
    searchPlaceholder: "Tìm nhanh mục báo cáo (Ctrl + K)...",
    reportContentTitle: "CẤU TRÚC BÁO CÁO (FCAJ)",
    externalLinksTitle: "MORE • CỘNG ĐỒNG AWS",
    metaLastUpdated: "Cập nhật:",

    // Sidebar Top-Level Nav
    navStudentInfo: "Báo cáo thực tập",
    navWorklog: "Nhật ký công việc",
    navProposal: "Bản đề xuất (Proposal)",
    navBlogs: "Các bài blogs đã đăng",
    navEvents: "Các events đã tham gia",
    navWorkshop: "Workshop",
    navSelfAssessment: "Tự đánh giá",
    navFeedback: "Chia sẻ, đóng góp ý kiến",
    navSettings: "Cài đặt & Sao lưu",

    // Sidebar profile
    sidebarCompany: "Công ty TNHH Amazon Web Services (AWS) Việt Nam",
    sidebarViewProfile: "Xem thông tin chi tiết",

    // Header & Hero
    btnPrintPdf: "In / Xuất PDF",
    greetingMorning: "Chào buổi sáng",
    greetingAfternoon: "Chào buổi chiều",
    greetingEvening: "Chào buổi tối",
    officialBadge: "Chính thức • AWS First Cloud AI Journey",
    statWorklogLabel: "Tiến độ Worklog",
    statWeeksUnit: "Tuần",
    statTasksLabel: "Đầu việc đã ghi",
    statClickToView: "Nhấn để xem chi tiết →",

    // Student info section
    infoCardTitle: "Thông tin sinh viên",
    infoCardSubtitle: "Chuẩn biểu mẫu Báo cáo thực tập AWS First Cloud AI Journey",
    btnEditInfoToggle: "Chỉnh sửa hồ sơ",
    btnUploadAvatar: "📷 Cập nhật ảnh đại diện",
    labelFullName: "Họ và tên",
    labelStudentId: "Mã số sinh viên",
    labelPhone: "Số điện thoại",
    labelEmail: "Email",
    labelUniversity: "Trường",
    labelMajor: "Ngành",
    labelClass: "Lớp",
    labelCompany: "Công ty thực tập",
    labelPosition: "Vị trí thực tập",
    labelDuration: "Thời gian thực tập",
    btnSaveInfo: "Lưu cập nhật thông tin",

    // TOC
    tocTitle: "Nội dung báo cáo",
    tocSubtitle: "Cấu trúc 7 hạng mục chuẩn theo fcj-workshop-template và quy định chấm điểm FCAJ:",
    toc1Title: "1. Nhật ký công việc (Worklog)",
    toc1Desc: "Nhật ký chi tiết 12 tuần thực tập (1.1 Tuần 1 → 1.12 Tuần 12): Mục tiêu tuần, Bảng công việc và Kết quả đạt được.",
    toc2Title: "2. Bản đề xuất (Proposal)",
    toc2Desc: "Đề xuất dự án gồm 8 phần chuẩn: Tóm tắt điều hành, Vấn đề, Kiến trúc AWS, Kỹ thuật, Lộ trình, Ngân sách, Rủi ro & Kết quả.",
    toc3Title: "3. Các bài blogs đã đăng",
    toc3Desc: "Danh mục tối thiểu 3 bài viết kỹ thuật / dịch thuật (3.1 Blog 1 → 3.3 Blog 3) chia sẻ trên cộng đồng AWS Study Group.",
    toc4Title: "4. Các events đã tham gia",
    toc4Desc: "Báo cáo thu hoạch các sự kiện/workshop AWS (4.1 Event 1 → 4.3 Event 3) kèm thông tin diễn giả, bài học và ảnh check-in.",
    toc5Title: "5. Workshop",
    toc5Desc: "Hướng dẫn triển khai bài thực hành Hands-on Lab 6 bước (5.1 Tổng quan → 5.6 Dọn dẹp tài nguyên Clean up).",
    toc6Title: "6. Tự đánh giá",
    toc6Desc: "Đánh giá quá trình rèn luyện cá nhân dựa trên bảng 12 tiêu chí năng lực chuẩn FCAJ và định hướng cải thiện.",
    toc7Title: "7. Chia sẻ, đóng góp ý kiến",
    toc7Desc: "Đánh giá chung 6 khía cạnh môi trường thực tập, câu hỏi phản hồi và đề xuất phát triển cho chương trình First Cloud AI Journey.",

    // 1. Worklog
    worklogOverviewTitle: "1. Nhật ký công việc (Worklog)",
    worklogOverviewSubtitle: "Tổng quan lộ trình làm việc và học tập xuyên suốt 12 tuần (3 tháng) tại chương trình AWS First Cloud AI Journey",
    btnOpenWeek1: "Xem chi tiết từ Tuần 1 →",
    worklogSectionSubtitle: "Theo dõi mục tiêu tuần, bảng công việc triển khai và kết quả đạt được theo chuẩn FCAJ",
    btnAddTaskThisWeek: "Thêm công việc",
    btnToggleEditTasks: "Quản lý dòng",
    weekPrefix: "Tuần",
    weekHeadingPrefix: "Worklog Tuần",
    bootcampSubtitle: "Chương trình đào tạo First Cloud AI Journey",
    btnEditWeekMeta: "Sửa mục tiêu & kết quả",
    tasksTableTitle: "📋 Các công việc cần triển khai trong tuần này:",
    thDay: "Thứ",
    thTaskDesc: "Công việc",
    thStartDate: "Ngày bắt đầu",
    thEndDate: "Ngày hoàn thành",
    thRef: "Nguồn tài liệu",
    thActions: "Thao tác",
    btnDelete: "Xóa",
    btnEdit: "Sửa",
    btnClearWeek: "Đặt lại tuần này",
    btnClearSection: "Xóa trống",
    btnToggleEditMode: "Chỉnh sửa nội dung",
    modalMetaTitle: "Chỉnh sửa Mục tiêu & Kết quả tuần",
    modalMetaObjectivesLabel: "Mục tiêu tuần",
    modalMetaObjectivesPlaceholder: "Nhập mục tiêu trọng tâm trong tuần...",
    modalMetaAchievementsLabel: "Kết quả đạt được trong tuần",
    modalMetaAchievementsPlaceholder: "- Hoàn thành nhiệm vụ...\n- Nắm vững kiến thức...",
    btnModalSaveMeta: "Lưu mục tiêu & kết quả",
    modalTitle: "+ Thêm nhiệm vụ vào Worklog",
    modalEditTaskTitle: "✏️ Chỉnh sửa công việc",
    modalWeekSelectLabel: "Chọn tuần áp dụng",
    modalDayLabel: "Thứ trong tuần",
    modalDayPlaceholder: "VD: 2 hoặc Thứ 2",
    modalTaskDescLabel: "Công việc triển khai",
    modalDescPlaceholder: "Mô tả công việc hoặc đầu mục chi tiết...",
    modalStartLabel: "Ngày bắt đầu",
    modalEndLabel: "Ngày hoàn thành",
    modalRefLabel: "Nguồn tài liệu (URL hoặc tên tài liệu)",
    modalRefPlaceholder: "https://cloudjourney.awsstudygroup.com/...",
    btnModalCancel: "Hủy bỏ",
    btnModalSave: "Lưu thông tin",
    btnUpdateTask: "Cập nhật công việc",

    // 2. Proposal
    proposalSectionTitle: "2. Bản đề xuất (Proposal)",
    proposalSectionSubtitle: "Cấu trúc 8 phần chuẩn theo fcj-workshop-template và tiêu chí chấm điểm Proposal FCAJ",
    editorProposalHint: "✏️ Chế độ soạn thảo Bản đề xuất (Proposal) — Điền các mục đã có và nhấn Lưu. Các mục để trống sẽ hiển thị ghi chú dự định thực hiện.",
    btnSaveProposal: "Lưu Bản đề xuất",
    prop0Heading: "Tên đề tài & Khái quát dự án",
    propTitleLabel: "Tên dự án (Project Title)",
    propSubtitleLabel: "Mô tả ngắn / Subtitle",

    // 6. Self-Assessment
    selfSectionTitle: "6. Tự đánh giá (Self-Assessment)",
    selfSectionSubtitle: "Bảng 12 tiêu chí tự đánh giá kết quả thực tập chuẩn fcj-workshop-template",
    btnEditSelfNarrative: "Cập nhật nhận xét",
    assessNarrativeLabel: "1. Đoạn mở đầu tự đánh giá quá trình thực tập",
    needsImprovementLabel: "2. Cần cải thiện (Needs Improvement — Mỗi ý 1 dòng)",
    btnSaveAssessment: "Lưu tự đánh giá",
    selfTableTitle: "📊 Bảng 12 tiêu chí tự đánh giá năng lực thực tập sinh",
    thStt: "STT",
    thCriteria: "Tiêu chí",
    thCriteriaDesc: "Mô tả",
    thGood: "Tốt",
    thFair: "Khá",
    thAverage: "Trung bình",
    needsImprovementHeading: "Cần cải thiện",

    // 7. Feedback
    feedbackSectionTitle: "7. Chia sẻ, đóng góp ý kiến",
    feedbackSectionSubtitle: "Đánh giá trải nghiệm thực tập và đóng góp ý kiến cải tiến cho chương trình First Cloud AI Journey",
    editorFeedbackHint: "✏️ Chỉnh sửa nội dung Chia sẻ & Đóng góp ý kiến (Mục 7)",
    btnSaveFeedback: "Lưu ý kiến đóng góp",
    fbGroup1Title: "Đánh giá chung",
    fb1Label: "1. Môi trường làm việc",
    fb2Label: "2. Sự hỗ trợ của mentor / team admin",
    fb3Label: "3. Sự phù hợp giữa công việc và chuyên ngành học",
    fb4Label: "4. Cơ hội học hỏi & phát triển kỹ năng",
    fb5Label: "5. Văn hóa & tinh thần đồng đội",
    fb6Label: "6. Chính sách / phúc lợi cho thực tập sinh",
    fbGroup2Title: "Một số câu hỏi khác",
    fbQ1Label: "1. Điều bạn hài lòng nhất trong thời gian thực tập?",
    fbQ2Label: "2. Điều bạn nghĩ công ty cần cải thiện cho các thực tập sinh sau?",
    fbQ3Label: "3. Nếu giới thiệu cho bạn bè, bạn có khuyên họ thực tập ở đây không? Vì sao?",
    fbGroup3Title: "Đề xuất & mong muốn",
    fbSuggestionsLabel: "1. Bạn có đề xuất gì để cải thiện trải nghiệm trong kỳ thực tập?",
    fbContinueLabel: "2. Bạn có muốn tiếp tục chương trình này trong tương lai?",
    fbOtherLabel: "3. Góp ý khác (tự do chia sẻ):",

    // Settings
    settingsSectionTitle: "Cài đặt & Quản lý dữ liệu báo cáo",
    settingsSectionSubtitle: "Sao lưu toàn bộ nội dung báo cáo thành file JSON hoặc xuất báo cáo ra PDF",
    settingsCardTitle: "Sao lưu & Xuất file an toàn",
    settingsCardDesc: "Tất cả nội dung báo cáo của bạn đều được lưu trữ trực tiếp trên trình duyệt. Bạn có thể tải file JSON về máy để lưu giữ dự phòng hoặc khôi phục lại bất cứ lúc nào:",
    btnExportJson: "Tải file sao lưu (worklog-fcaj-backup.json)",
    btnImportJson: "Khôi phục từ file JSON",
    btnResetData: "Khôi phục mặc định",

    // Toasts & Confirmations
    toastSaveInfo: "Đã lưu thông tin sinh viên thành công!",
    toastSaveProposal: "Đã lưu nội dung Bản đề xuất (Proposal)!",
    toastClearSection: "Đã xóa trắng nội dung phân mục này!",
    toastSaveBlog: "Đã lưu nội dung bài Blog!",
    toastSaveEvent: "Đã lưu nội dung sự kiện!",
    toastSaveWorkshop: "Đã lưu nội dung bước thực hành Workshop!",
    toastSaveAssessment: "Đã lưu nội dung Tự đánh giá!",
    toastSaveFeedback: "Đã lưu ý kiến đóng góp cho chương trình FCAJ!",
    toastExportJson: "Đã xuất file sao lưu dữ liệu JSON thành công!",
    toastImportSuccess: "Khôi phục dữ liệu báo cáo thành công!",
    toastImportError: "Lỗi đọc file JSON không hợp lệ!",
    toastResetSuccess: "Đã đặt lại dữ liệu mặc định!",
    toastAddTaskSuccess: "Đã thêm công việc vào tuần",
    toastUpdateTaskSuccess: "Đã cập nhật công việc thành công!",
    toastDeleteTask: "Đã xóa công việc.",
    toastSaveMetaSuccess: "Đã lưu mục tiêu & kết quả tuần thành công!",
    toastResetWeekSuccess: "Đã đặt lại nội dung tuần này về trạng thái dự định!",
    toastLangSwitch: "Đã chuyển sang Tiếng Việt",
    confirmReset: "Bạn có chắc chắn muốn đặt lại toàn bộ dữ liệu về mặc định?",
    confirmResetWeek: "Bạn có chắc chắn muốn xóa toàn bộ công việc và mục tiêu của tuần này?",
    confirmClearSection: "Bạn có chắc chắn muốn xóa trống toàn bộ nội dung trong mục này?",
    confirmDeleteTask: "Bạn có chắc muốn xóa dòng công việc này?",
    pageTitleDoc: "Báo cáo thực tập :: Lê Công Luyến - AWS First Cloud AI Journey"
  },

  en: {
    brandName: "Internship Report",
    brandDesc: "AWS First Cloud AI Journey",
    searchPlaceholder: "Quick jump (Ctrl + K)...",
    reportContentTitle: "REPORT STRUCTURE (FCAJ)",
    externalLinksTitle: "MORE • AWS COMMUNITY",
    metaLastUpdated: "Last Updated:",

    // Sidebar Top-Level Nav
    navStudentInfo: "Internship Report",
    navWorklog: "Worklog",
    navProposal: "Proposal",
    navBlogs: "Blogs Posted",
    navEvents: "Events Participated",
    navWorkshop: "Workshop",
    navSelfAssessment: "Self-Assessment",
    navFeedback: "Sharing & Feedback",
    navSettings: "Settings & Backup",

    // Sidebar profile
    sidebarCompany: "Amazon Web Services (AWS) Vietnam Company Limited",
    sidebarViewProfile: "View detailed profile",

    // Header & Hero
    btnPrintPdf: "Print / Export PDF",
    greetingMorning: "Good morning",
    greetingAfternoon: "Good afternoon",
    greetingEvening: "Good evening",
    officialBadge: "Official • AWS First Cloud AI Journey",
    statWorklogLabel: "Worklog Progress",
    statWeeksUnit: "Weeks",
    statTasksLabel: "Logged Tasks",
    statClickToView: "Click to view details →",

    // Student info section
    infoCardTitle: "Student Information",
    infoCardSubtitle: "Official AWS First Cloud AI Journey Internship Report Profile",
    btnEditInfoToggle: "Edit Profile",
    btnUploadAvatar: "📷 Update Avatar Photo",
    labelFullName: "Full Name",
    labelStudentId: "Student ID",
    labelPhone: "Phone Number",
    labelEmail: "Email",
    labelUniversity: "University",
    labelMajor: "Major",
    labelClass: "Class",
    labelCompany: "Internship Company",
    labelPosition: "Internship Position",
    labelDuration: "Internship Duration",
    btnSaveInfo: "Save Profile Changes",

    // TOC
    tocTitle: "Report Content",
    tocSubtitle: "Official 7-section structure aligned with fcj-workshop-template and FCAJ scoring rubric:",
    toc1Title: "1. Worklog",
    toc1Desc: "Detailed 12-week internship worklog (1.1 Week 1 → 1.12 Week 12): Weekly Objectives, Tasks Table, and Achievements.",
    toc2Title: "2. Proposal",
    toc2Desc: "8-part project proposal: Executive Summary, Problem Statement, Solution Architecture, Technical Implementation, Timeline, Budget, Risks & Outcomes.",
    toc3Title: "3. Blogs Posted",
    toc3Desc: "Minimum 3 technical / translated blog posts (3.1 Blog 1 → 3.3 Blog 3) published on the AWS Study Group community.",
    toc4Title: "4. Events Participated",
    toc4Desc: "Reports on attended AWS events & workshops (4.1 Event 1 → 4.3 Event 3) with speakers, takeaways, and check-in photos.",
    toc5Title: "5. Workshop",
    toc5Desc: "Step-by-step Hands-on Lab tutorial across 6 chapters (5.1 Workshop Overview → 5.6 Clean up Resources).",
    toc6Title: "6. Self-Assessment",
    toc6Desc: "Personal performance evaluation based on the official 12-criteria rubric and areas for future improvement.",
    toc7Title: "7. Sharing & Feedback",
    toc7Desc: "General evaluation across 6 workplace dimensions, reflection questions, and suggestions for First Cloud AI Journey.",

    // 1. Worklog
    worklogOverviewTitle: "1. Worklog",
    worklogOverviewSubtitle: "12-week (3-month) internship worklog overview at AWS First Cloud AI Journey",
    btnOpenWeek1: "View Details from Week 1 →",
    worklogSectionSubtitle: "Weekly objectives, daily task execution table, and weekly achievements aligned with FCAJ standard",
    btnAddTaskThisWeek: "Add Task",
    btnToggleEditTasks: "Manage Rows",
    weekPrefix: "Week",
    weekHeadingPrefix: "Week",
    bootcampSubtitle: "First Cloud AI Journey Workforce Bootcamp",
    btnEditWeekMeta: "Edit Objectives & Achievements",
    tasksTableTitle: "📋 Tasks to be carried out this week:",
    thDay: "Day",
    thTaskDesc: "Task",
    thStartDate: "Start Date",
    thEndDate: "Completion Date",
    thRef: "Reference Material",
    thActions: "Actions",
    btnDelete: "Delete",
    btnEdit: "Edit",
    btnClearWeek: "Reset This Week",
    btnClearSection: "Clear Content",
    btnToggleEditMode: "Edit Content",
    modalMetaTitle: "Edit Week Objectives & Achievements",
    modalMetaObjectivesLabel: "Week Objectives",
    modalMetaObjectivesPlaceholder: "Enter key objectives for this week...",
    modalMetaAchievementsLabel: "Week Achievements",
    modalMetaAchievementsPlaceholder: "- Completed tasks...\n- Mastered core concepts...",
    btnModalSaveMeta: "Save Objectives & Achievements",
    modalTitle: "+ Add Task to Worklog",
    modalEditTaskTitle: "✏️ Edit Worklog Task",
    modalWeekSelectLabel: "Select Week",
    modalDayLabel: "Day of Week",
    modalDayPlaceholder: "e.g., 2 or Monday",
    modalTaskDescLabel: "Task Description",
    modalDescPlaceholder: "Describe the task in detail...",
    modalStartLabel: "Start Date",
    modalEndLabel: "Completion Date",
    modalRefLabel: "Reference Material (URL or note)",
    modalRefPlaceholder: "https://cloudjourney.awsstudygroup.com/...",
    btnModalCancel: "Cancel",
    btnModalSave: "Save Changes",
    btnUpdateTask: "Update Task",

    // 2. Proposal
    proposalSectionTitle: "2. Proposal",
    proposalSectionSubtitle: "Official 8-section structure aligned with fcj-workshop-template and FCAJ Proposal rubric",
    editorProposalHint: "✏️ Proposal Editor Mode — Fill in available sections and click Save. Empty sections will display planned content guidance.",
    btnSaveProposal: "Save Proposal",
    prop0Heading: "Project Title & Overview",
    propTitleLabel: "Project Title",
    propSubtitleLabel: "Short Subtitle",

    // 6. Self-Assessment
    selfSectionTitle: "6. Self-Assessment",
    selfSectionSubtitle: "Official 12-criteria internship evaluation table aligned with fcj-workshop-template",
    btnEditSelfNarrative: "Edit Reflection",
    assessNarrativeLabel: "1. Opening Self-Assessment Summary",
    needsImprovementLabel: "2. Needs Improvement (One item per line)",
    btnSaveAssessment: "Save Self-Assessment",
    selfTableTitle: "📊 12-Criteria Intern Self-Assessment Rubric",
    thStt: "No.",
    thCriteria: "Criteria",
    thCriteriaDesc: "Description",
    thGood: "Good",
    thFair: "Fair",
    thAverage: "Average",
    needsImprovementHeading: "Needs Improvement",

    // 7. Feedback
    feedbackSectionTitle: "7. Sharing and Feedback",
    feedbackSectionSubtitle: "Share your internship experience and constructive feedback for First Cloud AI Journey",
    editorFeedbackHint: "✏️ Edit Sharing & Feedback (Section 7)",
    btnSaveFeedback: "Save Feedback",
    fbGroup1Title: "Overall Evaluation",
    fb1Label: "1. Working Environment",
    fb2Label: "2. Support from Mentor / Team Admin",
    fb3Label: "3. Relevance of Work to Academic Major",
    fb4Label: "4. Learning & Skill Development Opportunities",
    fb5Label: "5. Company Culture & Team Spirit",
    fb6Label: "6. Internship Policies / Benefits",
    fbGroup2Title: "Additional Questions",
    fbQ1Label: "1. What satisfied you the most during your internship?",
    fbQ2Label: "2. What do you think the company should improve for future interns?",
    fbQ3Label: "3. Would you recommend your friends to intern here? Why?",
    fbGroup3Title: "Suggestions & Expectations",
    fbSuggestionsLabel: "1. Do you have any suggestions to improve the internship experience?",
    fbContinueLabel: "2. Would you like to continue this program in the future?",
    fbOtherLabel: "3. Other comments (free sharing):",

    // Settings
    settingsSectionTitle: "Settings & Report Data Management",
    settingsSectionSubtitle: "Backup all report content to a JSON file or export to PDF",
    settingsCardTitle: "Safe Backup & File Export",
    settingsCardDesc: "All of your report content is stored directly in your browser. You can download a JSON backup file for safekeeping or restore it anytime:",
    btnExportJson: "Download Backup (worklog-fcaj-backup.json)",
    btnImportJson: "Restore from JSON File",
    btnResetData: "Reset to Default",

    // Toasts & Confirmations
    toastSaveInfo: "Student profile saved successfully!",
    toastSaveProposal: "Project Proposal saved!",
    toastClearSection: "Cleared section content to planned state!",
    toastSaveBlog: "Blog entry saved!",
    toastSaveEvent: "Event report saved!",
    toastSaveWorkshop: "Workshop step saved!",
    toastSaveAssessment: "Self-Assessment saved!",
    toastSaveFeedback: "Sharing & Feedback saved!",
    toastExportJson: "Exported JSON backup file successfully!",
    toastImportSuccess: "Restored report data successfully!",
    toastImportError: "Invalid JSON backup file!",
    toastResetSuccess: "Reset data to default!",
    toastAddTaskSuccess: "Added task to Week",
    toastUpdateTaskSuccess: "Task updated successfully!",
    toastDeleteTask: "Task deleted.",
    toastSaveMetaSuccess: "Saved week objectives & achievements!",
    toastResetWeekSuccess: "Reset this week to planned state!",
    toastLangSwitch: "Switched to English",
    confirmReset: "Are you sure you want to reset all report data to defaults?",
    confirmResetWeek: "Are you sure you want to clear all tasks and objectives for this week?",
    confirmClearSection: "Are you sure you want to clear all content in this section?",
    confirmDeleteTask: "Are you sure you want to delete this task row?",
    pageTitleDoc: "Internship Report :: Le Cong Luyen - AWS First Cloud AI Journey"
  }
};

// ==========================================
// 2. PLANNED CONTENT GUIDANCE FOR EMPTY SECTIONS
//    (Displayed whenever user hasn't uploaded content yet)
// ==========================================
const PLANNED_WEEK_TOPICS = {
  vi: {
    3: "Dự định cập nhật: Nghiên cứu chuyên sâu dịch vụ lưu trữ Amazon S3 (Bucket Policy, Versioning, Lifecycle, Static Website Hosting), thực hành phân quyền IAM Role và ghi nhận bảng công việc Thứ 2 → Thứ 6 của Tuần 3.",
    4: "Dự định cập nhật: Nghiên cứu dịch vụ cơ sở dữ liệu trên AWS (Amazon RDS Multi-AZ, Read Replica, Amazon DynamoDB), kết nối EC2 với RDS trong Private Subnet và ghi nhận nhật ký công việc Tuần 4.",
    5: "Dự định cập nhật: Tìm hiểu nhóm dịch vụ Load Balancing & Auto Scaling (ALB, Target Group, Auto Scaling Group) nhằm đảm bảo tính sẵn sàng cao (High Availability) và ghi nhận nhật ký công việc Tuần 5.",
    6: "Dự định cập nhật: Nghiên cứu dịch vụ phân phối nội dung & DNS (Amazon Route 53, Amazon CloudFront CDN) cùng giám sát hệ thống qua Amazon CloudWatch, AWS CloudTrail trong Tuần 6.",
    7: "Dự định cập nhật: Tìm hiểu kiến trúc Serverless & Container trên AWS (AWS Lambda, Amazon API Gateway, Amazon ECS/ECR) và cập nhật bảng công việc thực hành Tuần 7.",
    8: "Dự định cập nhật: Khảo sát yêu cầu đề tài đồ án nhóm, hoàn thiện sơ đồ kiến trúc Solution Architecture và xây dựng Bản đề xuất (Proposal) cùng dự toán chi phí trên AWS Pricing Calculator trong Tuần 8.",
    9: "Dự định cập nhật: Triển khai giai đoạn 1 của dự án thực tập (Khởi tạo hạ tầng mạng, bảo mật IAM/KMS/WAF và cơ sở dữ liệu nền tảng) và ghi nhận tiến độ Tuần 9.",
    10: "Dự định cập nhật: Triển khai giai đoạn 2 của dự án (Tích hợp dịch vụ ứng dụng, tự động hóa CI/CD pipeline và biên soạn tài liệu hướng dẫn Workshop) trong Tuần 10.",
    11: "Dự định cập nhật: Kiểm thử tải, kiểm toán bảo mật hệ thống (Security Audit), tối ưu hóa chi phí vận hành và hoàn thiện 3 bài viết kỹ thuật trên AWS Study Group trong Tuần 11.",
    12: "Dự định cập nhật: Tổng kết toàn bộ kết quả thực tập 12 tuần, dọn dẹp tài nguyên thực hành (Clean up), hoàn thiện bảng Tự đánh giá 12 tiêu chí và chuẩn bị thuyết trình bảo vệ cuối kỳ trong Tuần 12."
  },
  en: {
    3: "Planned Content: Deep dive into Amazon S3 object storage (Bucket Policies, Versioning, Lifecycle, Static Website Hosting), practice IAM Roles, and log daily tasks from Monday to Friday for Week 3.",
    4: "Planned Content: Study AWS Database services (Amazon RDS Multi-AZ, Read Replicas, Amazon DynamoDB), connect EC2 to RDS in Private Subnets, and record Week 4 worklog.",
    5: "Planned Content: Explore Elastic Load Balancing & Auto Scaling (ALB, Target Groups, Auto Scaling Groups) for High Availability and document Week 5 tasks & achievements.",
    6: "Planned Content: Study Content Delivery & DNS (Amazon Route 53, Amazon CloudFront) alongside observability with Amazon CloudWatch and AWS CloudTrail in Week 6.",
    7: "Planned Content: Explore Serverless & Container architectures on AWS (AWS Lambda, Amazon API Gateway, Amazon ECS/ECR) and update Week 7 hands-on progress.",
    8: "Planned Content: Finalize capstone project requirements, design the AWS Solution Architecture diagram, and complete the Project Proposal & AWS Pricing Calculator estimate in Week 8.",
    9: "Planned Content: Execute Phase 1 of the internship project (Provision networking, IAM/KMS/WAF security, and core databases) and log Week 9 progress.",
    10: "Planned Content: Execute Phase 2 of the project (Application integration, CI/CD pipeline automation, and drafting the step-by-step Hands-on Workshop) in Week 10.",
    11: "Planned Content: Conduct performance testing, security auditing, cost optimization, and finalize 3 technical blog posts on AWS Study Group in Week 11.",
    12: "Planned Content: Consolidate 12-week internship deliverables, clean up cloud lab resources, complete the 12-criteria Self-Assessment, and prepare for the final presentation in Week 12."
  }
};

const SELF_EVAL_CRITERIA = {
  vi: [
    { id: 1, name: "Kiến thức chuyên môn", desc: "Hiểu biết về ngành, áp dụng kiến thức vào thực tế, kỹ năng sử dụng công cụ (AWS Console, CLI, kiến trúc Cloud)" },
    { id: 2, name: "Khả năng học hỏi", desc: "Tiếp thu kiến thức mới, học nhanh, chủ động tìm hiểu tài liệu kỹ thuật AWS" },
    { id: 3, name: "Chủ động", desc: "Tự giác thực hiện nhiệm vụ, nghiên cứu giải pháp mà không chờ nhắc nhở" },
    { id: 4, name: "Tinh thần trách nhiệm", desc: "Hoàn thành công việc đúng hạn, đảm bảo chất lượng đầu ra và an toàn tài khoản" },
    { id: 5, name: "Kỷ luật", desc: "Tuân thủ giờ giấc, nội quy văn phòng FCAJ HCM và quy trình làm việc" },
    { id: 6, name: "Tính cầu thị", desc: "Sẵn sàng nhận feedback từ Mentor và cải thiện bản thân" },
    { id: 7, name: "Giao tiếp", desc: "Trình bày ý tưởng, viết tài liệu báo cáo và báo cáo công việc rõ ràng" },
    { id: 8, name: "Hợp tác", desc: "Làm việc nhóm hiệu quả, hỗ trợ đồng đội trong quá trình làm Project" },
    { id: 9, name: "Ứng xử chuyên nghiệp", desc: "Tôn trọng đồng nghiệp, Mentor, đối tác và môi trường làm việc" },
    { id: 10, name: "Tư duy giải quyết vấn đề", desc: "Xác định nguyên nhân lỗi kỹ thuật, đề xuất giải pháp hợp lý, sáng tạo" },
    { id: 11, name: "Đóng góp vào dự án / tổ chức", desc: "Hiệu quả công việc, sáng kiến cải tiến, chia sẻ bài viết Blog và Workshop" },
    { id: 12, name: "Tổng thể", desc: "Đánh giá chung về toàn bộ quá trình thực tập tại AWS First Cloud AI Journey" }
  ],
  en: [
    { id: 1, name: "Professional Knowledge", desc: "Understanding of the field, applying knowledge in practice, proficiency with tools (AWS Console, CLI, Cloud Architecture)" },
    { id: 2, name: "Ability to Learn", desc: "Absorbing new concepts quickly and proactively researching AWS technical documentation" },
    { id: 3, name: "Proactiveness", desc: "Taking initiative and researching solutions without waiting for reminders" },
    { id: 4, name: "Sense of Responsibility", desc: "Completing tasks on time, ensuring deliverable quality and cloud account security" },
    { id: 5, name: "Discipline", desc: "Adhering to schedules, FCAJ HCM office rules, and work processes" },
    { id: 6, name: "Openness to Feedback", desc: "Willingness to receive feedback from Mentors and continuously improve" },
    { id: 7, name: "Communication", desc: "Presenting ideas, writing technical documentation, and reporting work clearly" },
    { id: 8, name: "Teamwork", desc: "Working effectively with peers and supporting teammates during project execution" },
    { id: 9, name: "Professional Conduct", desc: "Respecting colleagues, Mentors, partners, and the workplace environment" },
    { id: 10, name: "Problem-Solving Skills", desc: "Identifying root causes of technical issues and proposing logical, creative solutions" },
    { id: 11, name: "Contribution to Project / Organization", desc: "Work effectiveness, innovative ideas, and sharing technical Blogs & Workshops" },
    { id: 12, name: "Overall", desc: "General evaluation of the entire internship journey at AWS First Cloud AI Journey" }
  ]
};

const WORKSHOP_CHAPTER_DEFINITIONS = {
  vi: [
    {
      code: "5.1",
      title: "5.1. Tổng quan về Workshop (Workshop Overview)",
      planned: "Dự định trình bày tại mục 5.1:\n- Giới thiệu bài toán thực hành, mục tiêu kỹ thuật và đối tượng hướng tới.\n- Sơ đồ kiến trúc tổng thể (Architecture Diagram) của bài Lab trên AWS.\n- Thời gian thực hiện dự kiến và lưu ý về chi phí (AWS Free Tier / Chi phí ước tính)."
    },
    {
      code: "5.2",
      title: "5.2. Các bước chuẩn bị (Prerequisites)",
      planned: "Dự định trình bày tại mục 5.2:\n- Yêu cầu tài khoản AWS, lựa chọn AWS Region (VD: ap-southeast-1) và phân quyền IAM User/Role cần thiết.\n- Chuẩn bị môi trường máy trạm (AWS CLI, SSH client, IDE, Git, Docker hoặc source code mẫu).\n- Khởi tạo các cặp khóa bảo mật (Key Pair) hoặc thông số cấu hình ban đầu."
    },
    {
      code: "5.3",
      title: "5.3. Triển khai hạ tầng & dịch vụ cốt lõi (Core Infrastructure)",
      planned: "Dự định trình bày tại mục 5.3:\n- Hướng dẫn từng bước (Step-by-step kèm ảnh chụp màn hình AWS Console) khởi tạo hạ tầng mạng (VPC, Subnets, Route Tables, IGW/NAT).\n- Cấu hình các lớp bảo mật (Security Groups, IAM Roles, KMS/WAF) và khởi tạo dịch vụ lưu trữ / cơ sở dữ liệu nền tảng."
    },
    {
      code: "5.4",
      title: "5.4. Triển khai ứng dụng & tích hợp (Application & Integration)",
      planned: "Dự định trình bày tại mục 5.4:\n- Triển khai tầng xử lý ứng dụng (EC2 / Lambda / ECS / API Gateway) và kết nối với cơ sở dữ liệu.\n- Cấu hình định tuyến, cân bằng tải hoặc tự động hóa CI/CD pipeline cho bài Lab."
    },
    {
      code: "5.5",
      title: "5.5. Kiểm thử, bảo mật & dự toán chi phí (Testing & Cost)",
      planned: "Dự định trình bày tại mục 5.5:\n- Kiểm thử hoạt động thực tế của hệ thống (End-to-End Validation) và minh chứng kết quả chạy thành công.\n- Kiểm tra nhật ký giám sát trên Amazon CloudWatch và phân tích chi phí vận hành của kiến trúc."
    },
    {
      code: "5.6",
      title: "5.6. Dọn dẹp tài nguyên (Clean up Resources)",
      planned: "Dự định trình bày tại mục 5.6 (Bắt buộc theo chuẩn Workshop FCAJ):\n- Hướng dẫn thứ tự xóa toàn bộ tài nguyên đã khởi tạo trong bài Lab (EC2, RDS, NAT Gateway, Elastic IP, S3 Bucket, VPC, CloudFormation Stack...).\n- Kiểm tra lại trang Billing Dashboard để đảm bảo không phát sinh chi phí ngoài ý muốn sau khi kết thúc thực hành."
    }
  ],
  en: [
    {
      code: "5.1",
      title: "5.1. Workshop Overview",
      planned: "Planned content for 5.1:\n- Introduce the hands-on lab scenario, learning objectives, and target audience.\n- Present the overall AWS Architecture Diagram for the workshop.\n- Specify estimated completion time and cost considerations."
    },
    {
      code: "5.2",
      title: "5.2. Prerequisites",
      planned: "Planned content for 5.2:\n- AWS account requirements, target AWS Region, and required IAM User/Role permissions.\n- Local environment setup (AWS CLI, SSH client, IDE, Git, or sample repository).\n- Creating initial Key Pairs or baseline configuration parameters."
    },
    {
      code: "5.3",
      title: "5.3. Core Infrastructure & Services Deployment",
      planned: "Planned content for 5.3:\n- Step-by-step instructions (with AWS Console screenshots) to provision networking (VPC, Subnets, Route Tables, IGW/NAT).\n- Configure security controls (Security Groups, IAM Roles) and foundational storage/database services."
    },
    {
      code: "5.4",
      title: "5.4. Application Deployment & Service Integration",
      planned: "Planned content for 5.4:\n- Deploy the compute/application tier (EC2 / Lambda / ECS / API Gateway) and connect to backend storage.\n- Configure routing, load balancing, or CI/CD automation."
    },
    {
      code: "5.5",
      title: "5.5. Validation, Monitoring & Cost Estimation",
      planned: "Planned content for 5.5:\n- Perform end-to-end functional & security testing with verification screenshots.\n- Inspect Amazon CloudWatch metrics/logs and review operational cost estimates."
    },
    {
      code: "5.6",
      title: "5.6. Clean up Resources",
      planned: "Planned content for 5.6 (Mandatory per FCAJ Workshop standard):\n- Step-by-step instructions to terminate and delete all provisioned resources (EC2, RDS, NAT Gateway, Elastic IP, S3, VPC...).\n- Verify Billing Dashboard to ensure zero unexpected charges remain after completing the lab."
    }
  ]
};

// ==========================================
// 3. DEFAULT BILINGUAL REPORT DATA (v26)
//    - Preserves Student Info, Week 1 & 2, Feedback
//    - Leaves Weeks 3-12 & Sections 2-6 empty ("")
// ==========================================
const DEFAULT_BILINGUAL_DATA = {
  studentInfo: {
    fullName: "Lê Công Luyến",
    studentId: "SE190809",
    phone: "0347047101",
    email: "lecongluyen9a1@gmail.com",
    className: "",
    avatarDataUrl: "",
    vi: {
      university: "Trường Đại học FPT",
      major: "An toàn thông tin",
      company: "Công ty TNHH Amazon Web Services (AWS) Việt Nam",
      position: "Workforce Bootcamp - First Cloud AI Journey (FCAJ)",
      duration: "Từ ngày 14/09/2026 đến ngày 14/12/2026"
    },
    en: {
      university: "FPT University",
      major: "Information Assurance",
      company: "Amazon Web Services (AWS) Vietnam Company Limited",
      position: "Workforce Bootcamp - First Cloud AI Journey (FCAJ)",
      duration: "From 14/09/2026 to 14/12/2026"
    }
  },
  currentWeek: 1,
  worklogs: Array.from({ length: 12 }, (_, i) => {
    const weekNum = i + 1;
    if (weekNum === 1) {
      return {
        weekNum: 1,
        vi: {
          objectives: "- Onboarding & Văn hóa: Nắm vững nội quy văn phòng HCM, quy chế điểm danh, tiêu chuẩn bảo mật và lộ trình đánh giá.\n- Hạ tầng Cloud cơ bản: Khởi tạo tài khoản AWS Free Tier, cấu hình bảo mật Root MFA và phân quyền IAM người dùng.\n- Kiểm soát ngân sách: Thiết lập công cụ AWS Budgets và CloudWatch Billing Alarm để giám sát chi phí học tập $0.\n- Hỗ trợ kỹ thuật: Nắm rõ các gói dịch vụ AWS Support và quy trình mở ticket hỗ trợ kỹ thuật hoặc tài khoản.\n- Tài liệu báo cáo: Dựng website Worklog cá nhân và thiết lập tự động hóa CI/CD với GitHub Actions.",
          achievements: "1. Ý thức tổ chức & Tuân thủ quy định thực tập:\n- Nắm vững quy định giờ giấc làm việc, quy trình xin phép và hình thức điểm danh hàng ngày tại FCAJ Hồ Chí Minh.\n- Hiểu rõ bộ quy tắc ứng xử (Code of Conduct), quy định bảo mật dữ liệu doanh nghiệp và trách nhiệm của thực tập sinh.\n- Kích hoạt đầy đủ các kênh giao tiếp nội bộ và hoàn thành đăng ký hồ sơ trên portal.\n\n2. Quản trị tài khoản Cloud & Tối ưu an toàn thông tin:\n- Root Account Security: Đã khóa hoàn toàn việc sử dụng thông tin xác thực Root hàng ngày bằng cách kích hoạt ứng dụng xác thực MFA phần cứng/phần mềm.\n- IAM Best Practices: Khởi tạo IAM User cá nhân gán nhóm quyền AdministratorAccess, áp dụng chính sách mật khẩu phức tạp để thực hành thay cho Root.\n- Giám sát chi phí: Khởi tạo thành công AWS Budget theo dõi ngưỡng chi phí và CloudWatch Alarm qua SNS Topic để gửi email cảnh báo tức thì nếu phát sinh phí vượt ngân sách.\n- Quy trình hỗ trợ: Nắm vững cách phân loại sự cố và các bước gửi yêu cầu trợ giúp kỹ thuật qua AWS Support Center.\n\n3. Xây dựng nền tảng xuất bản tài liệu tự động:\n- Xây dựng cấu trúc dự án báo cáo dạng Static Site dựa trên giao diện chuẩn FCAJ.\n- Triển khai thành công quy trình CI/CD với GitHub Actions (deploy.yml) với đầy đủ quyền Pages và ID Token.\n- Khắc phục lỗi cấu hình triển khai ban đầu và chính thức đưa trang báo cáo hoạt động ổn định trên GitHub Pages.\n\n4. Đánh giá tiến độ & Kế hoạch tuần tiếp theo:\n- Tiến độ tuần 1: 100% Đạt - Hoàn thành đầy đủ các chỉ tiêu Onboarding, tài khoản Cloud và nền tảng website cá nhân theo đúng hạn.\n- Khó khăn & Giải pháp: Đã giải quyết - Gặp lỗi khởi tạo khi kích hoạt GitHub Actions trên GitHub Pages lần đầu; đã cấu hình đúng quyền ghi (permissions) và re-run thành công.\n- Mục tiêu tuần 2: Kế hoạch - Bắt đầu nghiên cứu các dịch vụ Compute & Networking cốt lõi của AWS (Amazon EC2, VPC, Subnet, Route Table, Security Group) và triển khai bài lab đầu tiên.",
          tasks: [
            {
              day: "2",
              desc: "- Tham gia buổi Onboarding với mentor và đội ngũ FCAJ HCM.\n- Đọc, ghi nhớ và cam kết tuân thủ quy chế thực tập, tác phong làm việc.\n- Tạo và hoàn tất hồ sơ cá nhân trên hệ thống Portal thực tập.",
              start: "2026-09-14", end: "2026-09-14",
              ref: "HCM Rules & Instructions"
            },
            {
              day: "3",
              desc: "- Nghiên cứu chính sách tài khoản AWS Free Tier và cơ chế cấp credit.\n- Đăng ký thành công tài khoản AWS cá nhân cho kỳ thực tập.\n- Làm quen với AWS Management Console và cấu hình Region Singapore.",
              start: "2026-09-15", end: "2026-09-15",
              ref: "AWS Free Tier Account Setup"
            },
            {
              day: "4",
              desc: "- Kích hoạt Multi-Factor Authentication (MFA) bảo vệ Root Account.\n- Tạo IAM User / Group quản trị thường nhật theo quy chuẩn Least Privilege.\n- Kích hoạt Billing Preferences, cấu hình AWS Budgets và CloudWatch Alarm.",
              start: "2026-09-16", end: "2026-09-16",
              ref: "AWS Budgets & Cost Alarm"
            },
            {
              day: "5",
              desc: "- Tìm hiểu mô hình AWS Support Center, thời gian SLA các gói hỗ trợ.\n- Thực hành các bước tạo Support Case khi gặp vấn đề dịch vụ/billing.\n- Nghiên cứu cấu trúc chuẩn của bộ tài liệu Worklog, Proposal, Workshop.",
              start: "2026-09-17", end: "2026-09-17",
              ref: "AWS Support Guide\nWorkshop Sample"
            },
            {
              day: "6",
              desc: "- Clone và thiết lập theme Worklog trên máy cá nhân.\n- Cấu hình pipeline GitHub Actions tự động build & deploy lên GitHub Pages.\n- Soạn thảo hoàn thiện nội dung Worklog Tuần 1 và đồng bộ lên trang web.",
              start: "2026-09-18", end: "2026-09-18",
              ref: "Hugo & Pages Deployment"
            }
          ]
        },
        en: {
          objectives: "- Onboarding & Culture: Master HCM office rules, attendance regulations, security standards, and evaluation roadmap.\n- Foundational Cloud Infrastructure: Create AWS Free Tier account, configure Root MFA security, and set up IAM user access control.\n- Budget & Cost Control: Configure AWS Budgets and CloudWatch Billing Alarms to maintain a $0 learning expenditure.\n- Technical Support: Understand AWS Support plans and the formal procedure for opening technical and billing support cases.\n- Reporting Platform: Build a personal Worklog website and configure automated CI/CD deployment with GitHub Actions.",
          achievements: "1. Organizational Discipline & Internship Compliance:\n- Mastered working hours, leave request procedures, and daily check-in protocols at FCAJ Ho Chi Minh.\n- Thoroughly understood the Code of Conduct, corporate data security policies, and intern responsibilities.\n- Successfully activated all internal communication channels and completed onboarding profile on the portal.\n\n2. Cloud Account Governance & Information Security Optimization:\n- Root Account Security: Fully locked daily usage of root credentials by enabling MFA authenticator applications.\n- IAM Best Practices: Created a personal IAM User assigned to AdministratorAccess group with strict password policies for operational tasks.\n- Cost Monitoring: Successfully configured AWS Budgets and CloudWatch Cost Alarm via SNS Topic to receive immediate email notifications on unexpected spend.\n- Support Workflow: Understood issue severity tiers and end-to-end procedures for creating technical/billing support cases in AWS Support Center.\n\n3. Automated Documentation & Publishing Platform:\n- Structured a modern static documentation reporting project adhering to FCAJ standards.\n- Successfully deployed CI/CD automation pipeline with GitHub Actions (deploy.yml) with proper Pages and ID Token permissions.\n- Resolved initial deployment configuration errors and officially published the live report site on GitHub Pages.\n\n4. Progress Review & Next Week Plan:\n- Week 1 Progress: 100% Achieved - Fulfilled all onboarding milestones, cloud accounts, and personal reporting platform on schedule.\n- Challenges & Solutions: Resolved - Addressed initial GitHub Actions workflow deployment permissions and successfully re-executed the pipeline.\n- Week 2 Objectives: Planned - Begin researching core AWS Compute & Networking services (Amazon EC2, VPC, Subnet, Route Table, Security Group) and execute foundational hands-on labs.",
          tasks: [
            {
              day: "2",
              desc: "- Attend Onboarding session with mentors and the FCAJ HCM team.\n- Read, acknowledge, and commit to internship guidelines and workplace conduct.\n- Create and complete personal profile on the internship portal.",
              start: "2026-09-14", end: "2026-09-14",
              ref: "HCM Rules & Instructions"
            },
            {
              day: "3",
              desc: "- Study AWS Free Tier account policies and credit allocation mechanisms.\n- Successfully register a personal AWS account for the internship program.\n- Explore the AWS Management Console and configure Singapore Region.",
              start: "2026-09-15", end: "2026-09-15",
              ref: "AWS Free Tier Account Setup"
            },
            {
              day: "4",
              desc: "- Activate Multi-Factor Authentication (MFA) to protect the Root Account.\n- Create IAM User / Group for daily operations following the principle of Least Privilege.\n- Enable Billing Preferences, configure AWS Budgets and CloudWatch Cost Alarm.",
              start: "2026-09-16", end: "2026-09-16",
              ref: "AWS Budgets & Cost Alarm"
            },
            {
              day: "5",
              desc: "- Learn AWS Support Center model and SLA turnaround times across support tiers.\n- Practice opening a Support Case for service and billing inquiries.\n- Study the standard documentation structure for Worklog, Proposal, and Workshop.",
              start: "2026-09-17", end: "2026-09-17",
              ref: "AWS Support Guide\nWorkshop Sample"
            },
            {
              day: "6",
              desc: "- Clone and set up personal Worklog theme on local machine.\n- Configure GitHub Actions CI/CD pipeline to automatically build & deploy to GitHub Pages.\n- Finalize Week 1 Worklog documentation and publish to the live website.",
              start: "2026-09-18", end: "2026-09-18",
              ref: "Hugo & Pages Deployment"
            }
          ]
        }
      };
    } else if (weekNum === 2) {
      return {
        weekNum: 2,
        vi: {
          objectives: "- Kiến trúc mạng Amazon VPC: Nắm vững nguyên lý VPC, cấu trúc dải IP CIDR (/16, /24), quy tắc 5 IP bảo lưu và thiết kế Subnet đa vùng sẵn sàng (Multi-AZ).\n- Định tuyến & Kết nối Internet: Thiết lập Route Table, Internet Gateway (IGW) cho Public Subnet và giải pháp NAT Gateway cho Private Subnet.\n- Bảo mật mạng (Firewall in VPC): Phân biệt chi tiết cơ chế hoạt động của Security Group (Stateful, cấp Instance/ENI) và Network ACL (Stateless, cấp Subnet).\n- Dịch vụ máy chủ Amazon EC2: Tìm hiểu chu kỳ sống EC2, phân loại Instance Types (C, R, T, M), so sánh ổ đĩa EBS và Instance Store, bảo mật truy cập Key Pair.\n- Triển khai thực hành (Hands-on Lab): Xây dựng hoàn chỉnh kiến trúc mạng tùy chỉnh 2-Tier VPC và khởi tạo máy chủ EC2 kiểm tra luồng kết nối an toàn.",
          achievements: "1. Nền tảng mạng chuyên sâu Amazon VPC:\n- Hiểu rõ kiến trúc phân chia dải mạng: Thiết kế VPC CIDR block 10.0.0.0/16 (65,536 địa chỉ) và chia thành các subnet /24 (251 IP khả dụng sau khi trừ 5 IP hệ thống).\n- Nắm vững mô hình High Availability (HA): Thiết kế Subnet trải dài trên tối thiểu 2 Availability Zones (AZ-a, AZ-b) để đảm bảo tính sẵn sàng cao cho ứng dụng.\n- Làm chủ cơ chế định tuyến Route Table: Cấu hình bảng định tuyến độc lập cho Public Subnet (qua IGW) và Private Subnet (chặn trực tiếp internet).\n\n2. Kiến trúc Bảo mật & Kiểm soát lưu lượng (Firewall in VPC):\n- Security Group (Lớp bảo vệ Instance): Nắm vững cơ chế Stateful (chỉ cần mở Inbound rule là gói tin phản hồi Outbound tự động được cho phép). Cấu hình rule truy cập giới hạn theo IP nguồn cụ thể (My IP).\n- Network ACL (Lớp bảo vệ Subnet): Nắm vững tính chất Stateless (phải mở cả Inbound và Outbound rules, bao gồm cổng Ephemeral 1024–65535). Đánh giá thứ tự rule theo số thứ tự (Rule number tăng dần).\n- Phối hợp đồng thời Security Group và NACL tạo thành mô hình phòng thủ chiều sâu (Defense-in-Depth) chặt chẽ cho hạ tầng Cloud.\n\n3. Điện toán máy chủ Amazon EC2 & Lưu trữ dữ liệu:\n- Hiểu cách lựa chọn họ máy chủ phù hợp với workload: dòng T/M cho web server thông thường, dòng C cho tính toán nặng, dòng R cho bộ nhớ đệm/database.\n- Phân biệt rõ ràng giữa EBS Volume (ổ cứng độc lập, bền vững, hỗ trợ snapshot) và Instance Store (ổ cứng gắn trực tiếp, tốc độ cao nhưng mất dữ liệu khi stop máy chủ).\n- Quản lý bảo mật máy chủ an toàn với Key Pair (.pem) và thực hành kết nối an toàn vào máy chủ qua SSH Terminal.\n\n4. Đánh giá tiến độ & Kế hoạch tuần tiếp theo:\n- Tiến độ tuần 2: 100% Đạt - Nắm vững toàn bộ lý thuyết cốt lõi về VPC, Subnets, Route Table, Firewall và hoàn thành khởi tạo máy chủ EC2 theo thiết kế.\n- Kỹ năng thu được: Thành thạo - Tự tay thiết kế và cấu hình topo mạng Multi-AZ trên AWS Console; thành thạo gán Security Group, định tuyến bảng Route và kết nối máy chủ qua SSH.\n- Mục tiêu tuần 3: Kế hoạch - Tiếp tục nghiên cứu dịch vụ lưu trữ đối tượng Amazon S3, cơ chế phân quyền S3 Bucket Policy, CORS và triển khai mô hình Static Website Hosting.",
          tasks: [
            {
              day: "2",
              desc: "- Tìm hiểu khái niệm tổng quan Amazon VPC, phân biệt Default VPC và Custom VPC.\n- Nghiên cứu quy tắc phân bổ dải mạng CIDR Block (IPv4) cho VPC (ví dụ 10.0.0.0/16).\n- Tìm hiểu nguyên lý chia Subnet và quy tắc AWS bảo lưu 5 địa chỉ IP trong mỗi subnet (.0, .1, .2, .3, .255).",
              start: "2026-09-21", end: "2026-09-21",
              ref: "VPC Subnets Overview\nFCAJ Week 2 Sample"
            },
            {
              day: "3",
              desc: "- Nghiên cứu cơ chế định tuyến với Route Table (Main Route Table vs Custom Route Table).\n- Cấu hình Internet Gateway (IGW), đính kèm vào VPC và trỏ route 0.0.0.0/0 cho Public Subnet.\n- Tìm hiểu vai trò, cơ chế hoạt động và cách triển khai NAT Gateway trong Public Subnet để cấp internet cho Private Subnet.",
              start: "2026-09-22", end: "2026-09-22",
              ref: "Route Table Guide\nNAT Gateway Setup"
            },
            {
              day: "4",
              desc: "- So sánh chi tiết hai lớp tường lửa trên AWS: Security Group vs Network ACL (NACL).\n- Tìm hiểu tính chất Stateful của Security Group (tự động cho phép traffic phản hồi).\n- Tìm hiểu tính chất Stateless và quy tắc số thứ tự (Rule number) của NACL ở cấp độ Subnet.\n- Thiết kế quy tắc Inbound/Outbound tối ưu theo nguyên tắc bảo mật phòng thủ chiều sâu.",
              start: "2026-09-23", end: "2026-09-23",
              ref: "Security Groups\nNetwork ACLs"
            },
            {
              day: "5",
              desc: "- Thực hành bài lab: Khởi tạo Custom VPC (10.0.0.0/16) trải rộng 2 Availability Zones.\n- Tạo 2 Public Subnets và 2 Private Subnets, gán Route Tables tương ứng.\n- Tạo và gán Internet Gateway; thiết lập Security Group cho phép HTTP (Port 80) và SSH (Port 22 từ My IP).",
              start: "2026-09-24", end: "2026-09-24",
              ref: "VPC Preparation Lab\nCreate Security Group"
            },
            {
              day: "6",
              desc: "- Tìm hiểu dịch vụ Amazon EC2: Các nhóm cấu hình (General Purpose, Compute, Memory, Storage), chu kỳ sống instance (Lifecycle).\n- Khởi tạo máy chủ EC2 trong Public Subnet, cấu hình Key Pair bảo mật và Security Group.\n- Thực hành kết nối an toàn vào máy chủ qua SSH Terminal và kiểm tra luồng kết nối Internet.",
              start: "2026-09-25", end: "2026-09-25",
              ref: "Deploy EC2 Server"
            }
          ]
        },
        en: {
          objectives: "- Amazon VPC Network Architecture: Master VPC principles, CIDR block IPv4 structures (/16, /24), the 5 AWS reserved IPs rule, and Multi-AZ subnet design.\n- Routing & Internet Connectivity: Configure Route Tables, attach Internet Gateway (IGW) for Public Subnets, and implement NAT Gateway solutions for Private Subnets.\n- Network Security (Firewalls in VPC): Deeply analyze and contrast the mechanisms of Security Groups (Stateful, Instance/ENI level) and Network ACLs (Stateless, Subnet level).\n- Amazon EC2 Compute Services: Explore the EC2 lifecycle, classify Instance Families (C, R, T, M), compare EBS Volumes vs Instance Store, and secure access with Key Pairs.\n- Hands-on Lab Implementation: Build an end-to-end custom 2-Tier VPC network architecture and launch an EC2 instance to verify secure network connectivity.",
          achievements: "1. Advanced Amazon VPC Network Infrastructure:\n- Mastered IP Subnetting Architecture: Designed VPC CIDR block 10.0.0.0/16 (65,536 addresses) and partitioned into /24 subnets (251 usable IPs after reserving 5 system IPs).\n- High Availability (HA) Model: Deployed subnets spanning across at least 2 Availability Zones (AZ-a, AZ-b) to guarantee high availability for cloud applications.\n- Route Table Mastery: Implemented isolated route tables for Public Subnet (routed via IGW) and Private Subnet (blocking direct internet access).\n\n2. Security Architecture & Traffic Control (Firewall in VPC):\n- Security Group (Instance Protection Layer): Mastered stateful behavior (opening inbound rule automatically permits return outbound response packets). Configured ingress rules restricted to specific source IP (My IP).\n- Network ACL (Subnet Protection Layer): Mastered stateless behavior (requires opening both Inbound and Outbound rules, including Ephemeral ports 1024–65535). Rules evaluated sequentially in ascending Rule Number order.\n- Coordinated Security Group and NACL simultaneously to build a stringent Defense-in-Depth cloud security architecture.\n\n3. Amazon EC2 Compute & Data Storage Operations:\n- Selected optimal instance families based on workload patterns: T/M series for general web servers, C series for compute-intensive workloads, and R series for caching/databases.\n- Clearly differentiated between EBS Volume (independent, durable persistent block storage supporting snapshots) and Instance Store (physically attached, ephemeral high I/O storage that loses data on instance stop).\n- Enforced server security management using Key Pair (.pem) and practiced secure connectivity via SSH Terminal.\n\n4. Progress Review & Next Week Plan:\n- Week 2 Progress: 100% Achieved - Fully mastered foundational theory of VPC, Subnets, Route Tables, Firewalls, and successfully deployed EC2 instances per architectural design.\n- Acquired Skills: Proficient - Independently designed and configured Multi-AZ network topology on AWS Console; proficient in Security Group assignment, Route Table routing, and SSH connectivity.\n- Week 3 Objectives: Planned - Continue researching Amazon S3 object storage service, S3 Bucket Policy permissions, CORS, and deploying a Static Website Hosting model.",
          tasks: [
            {
              day: "2",
              desc: "- Explore Amazon VPC overview and distinguish between Default VPC and Custom VPC.\n- Study CIDR block (IPv4) allocation rules for VPC (e.g., 10.0.0.0/16).\n- Learn subnet partitioning principles and the 5 AWS reserved IP addresses in each subnet (.0, .1, .2, .3, .255).",
              start: "2026-09-21", end: "2026-09-21",
              ref: "VPC Subnets Overview\nFCAJ Week 2 Sample"
            },
            {
              day: "3",
              desc: "- Research routing mechanisms with Route Tables (Main Route Table vs Custom Route Table).\n- Configure and attach Internet Gateway (IGW) to VPC, routing 0.0.0.0/0 for Public Subnet.\n- Understand the role, mechanics, and deployment of NAT Gateway in Public Subnet to grant internet egress for Private Subnet.",
              start: "2026-09-22", end: "2026-09-22",
              ref: "Route Table Guide\nNAT Gateway Setup"
            },
            {
              day: "4",
              desc: "- Conduct detailed comparison between AWS firewall layers: Security Group vs Network ACL (NACL).\n- Understand Stateful property of Security Groups (automatic return traffic allowance).\n- Understand Stateless property and Rule Number ordering of NACL at subnet tier.\n- Design optimal Inbound/Outbound rules adhering to Defense-in-Depth security principles.",
              start: "2026-09-23", end: "2026-09-23",
              ref: "Security Groups\nNetwork ACLs"
            },
            {
              day: "5",
              desc: "- Execute hands-on lab: Initialize Custom VPC (10.0.0.0/16) spanning 2 Availability Zones.\n- Create 2 Public Subnets and 2 Private Subnets, associating corresponding Route Tables.\n- Create and attach Internet Gateway; configure Security Group permitting HTTP (Port 80) and SSH (Port 22 from My IP).",
              start: "2026-09-24", end: "2026-09-24",
              ref: "VPC Preparation Lab\nCreate Security Group"
            },
            {
              day: "6",
              desc: "- Explore Amazon EC2 service: Instance configuration families (General Purpose, Compute, Memory, Storage) and instance lifecycle.\n- Launch EC2 instance in Public Subnet, configuring secure Key Pair and Security Group.\n- Practice secure SSH connection to the server via Terminal and verify outbound internet connectivity.",
              start: "2026-09-25", end: "2026-09-25",
              ref: "Deploy EC2 Server"
            }
          ]
        }
      };
    } else {
      return {
        weekNum: weekNum,
        vi: { objectives: "", achievements: "", tasks: [] },
        en: { objectives: "", achievements: "", tasks: [] }
      };
    }
  }),

  // SECTION 2: PROPOSAL (8 Official Sections - Empty by default)
  proposal: {
    archImgDataUrl: "",
    vi: {
      title: "",
      subtitle: "",
      summary: "",
      problem: "",
      solution: "",
      roi: "",
      arch: "",
      services: "",
      tech: "",
      timeline: "",
      calcUrl: "",
      budget: "",
      risks: "",
      outcomes: ""
    },
    en: {
      title: "",
      subtitle: "",
      summary: "",
      problem: "",
      solution: "",
      roi: "",
      arch: "",
      services: "",
      tech: "",
      timeline: "",
      calcUrl: "",
      budget: "",
      risks: "",
      outcomes: ""
    }
  },

  // SECTION 3: BLOGS POSTED (3.1, 3.2, 3.3 - Empty by default)
  blogEntries: [1, 2, 3].map(num => ({
    num,
    vi: { title: "", date: "", url: "", summary: "", content: "" },
    en: { title: "", date: "", url: "", summary: "", content: "" }
  })),

  // SECTION 4: EVENTS PARTICIPATED (4.1 Event 1 Populated; 4.2 & 4.3 Planned)
  eventEntries: [
    {
      num: 1,
      photos: [
        { url: "static/images/4-EventParticipated/4.1-Event1/soul_structure_1.jpg", caption: "Ảnh 1: Cấu trúc SOUL.md — Thành phần cốt lõi và định hình Agent", captionEn: "Photo 1: SOUL.md Structure — Core components & Agent persona" },
        { url: "static/images/4-EventParticipated/4.1-Event1/soul_structure_2.jpg", caption: "Ảnh 2: Cấu trúc SOUL.md — Tone & Style, Scope, Anti-patterns và Out of Scope", captionEn: "Photo 2: SOUL.md Structure — Tone & Style, Scope, Anti-patterns & Out of Scope" },
        { url: "static/images/4-EventParticipated/4.1-Event1/event_participants.png", caption: "Ảnh 3: Không gian sự kiện và các bạn thực tập sinh tham gia tại AWS HCM", captionEn: "Photo 3: Event space & attendees at AWS Vietnam HCM" },
        { url: "static/images/4-EventParticipated/4.1-Event1/qa_gift_session.png", caption: "Ảnh 4: Các bạn nhận quà khi tham gia thảo luận Q&A về Triage Bot", captionEn: "Photo 4: Interns receiving gifts during Q&A on Triage Bot" },
        { url: "static/images/4-EventParticipated/4.1-Event1/triage_bot_architecture.jpg", caption: "Ảnh 5: Cấu trúc kiến trúc toàn cảnh dự án Triage Bot (Market Slack Bot)", captionEn: "Photo 5: Full architectural blueprint of Triage Bot (Market Slack Bot)" },
        { url: "static/images/4-EventParticipated/4.1-Event1/speaker_networking.jpg", caption: "Ảnh 6: Chụp ảnh lưu niệm và giao lưu cùng diễn giả", captionEn: "Photo 6: Commemorative photo & networking with the speaker" }
      ],
      vi: {
        name: "FCAJ Buildrathon Kickoff",
        time: "08:30 – 12:00, Thứ Bảy, 26/09/2026",
        location: "Văn phòng AWS Việt Nam, Tầng 26, Tháp Bitexco Financial Tower, Số 2 Hải Triều, Bến Nghé, Quận 1, TP.HCM",
        role: "Thực tập sinh tham dự (Workforce Bootcamp Intern)",
        purpose: "Lễ khởi động chính thức chuỗi hoạt động First Cloud AI Journey (FCAJ) Buildrathon, kết nối cộng đồng thực tập sinh đám mây, phổ biến lộ trình đào tạo và chia sẻ bài học thực chiến phát triển AI Agent tự động hóa vận hành cùng đối tác CMC Global.",
        speakers: "- Ban tổ chức First Cloud AI Journey (FCAJ)\n- Đại diện đối tác công nghệ CMC Global\n- Diễn giả anh Trường – Lead Technical Architect chia sẻ kiến trúc AI Agent & Triage Bot",
        highlights: "1. Tổng quan lộ trình FCAJ Buildrathon và các mốc đánh giá năng lực Cloud & AI.\n2. Bài toán thực tiễn về khoảng cách giao tiếp giữa Business Analyst (BA ở nước ngoài) và Đội ngũ Kỹ sư (Engineer tại Việt Nam), cùng giải pháp tự động hóa bằng AI Agent.\n3. Mô hình Triage Bot: Tiếp nhận yêu cầu, phân loại và điều phối ticket tự động qua Slack Socket Mode.\n4. Kỹ thuật thiết kế tệp cấu hình SOUL.md: Thiết lập nhân dạng (Identity), chuyên môn (Expertise), phong cách ngôn từ (Tone & Style), giới hạn phạm vi (Scope), hành vi cấm kỵ (Anti-patterns), và các vấn đề ngoài thẩm quyền (Out of Scope).\n5. Kiến trúc hoàn chỉnh của Market Slack Bot: Kết hợp Slack API, Response Gate, Claude Code, Memory context, bot-schedule, Internal API, Cron job và Database.",
        learnings: "1. Nắm bắt tầm quan trọng của Guardrails và System Prompt chuẩn mực thông qua SOUL.md để kiểm soát chất lượng phản hồi của LLM.\n2. Hiểu rõ kiến trúc Triage Bot trong môi trường Production: Tách biệt lớp tiếp nhận sự kiện (Slack Socket Mode) với lớp xử lý nghiệp vụ thông minh và cơ sở dữ liệu phân tán.\n3. Rèn luyện tư duy đặt câu hỏi kỹ thuật, giao lưu trực tiếp với diễn giả và các bạn thực tập sinh để mở rộng góc nhìn về ứng dụng Cloud & GenAI.",
        experience: "Buổi Kickoff tại Bitexco mang lại không khí tràn đầy năng lượng, môi trường văn phòng AWS chuyên nghiệp và góc nhìn công nghệ sâu sắc. Các phần thảo luận Q&A sôi nổi cùng phần quà từ CMC Global đã tạo động lực rất lớn cho hành trình thực tập phía trước."
      },
      en: {
        name: "FCAJ Buildrathon Kickoff",
        time: "08:30 – 12:00, Saturday, 26/09/2026",
        location: "AWS Vietnam Office, 26th Floor, Bitexco Financial Tower, 2 Hai Trieu, Ben Nghe, District 1, HCMC",
        role: "Workforce Bootcamp Intern (Attendee)",
        purpose: "Kickoff ceremony for the First Cloud AI Journey (FCAJ) Buildrathon, onboarding interns onto the cloud roadmap, and practical sharing on building autonomous enterprise AI Agents with tech partner CMC Global.",
        speakers: "- First Cloud AI Journey (FCAJ) Organizing Team\n- Technology Partner Representatives from CMC Global\n- Speaker Mr. Truong – Lead Technical Architect sharing on AI Agent & Triage Bot architectures",
        highlights: "1. Overview of the FCAJ Buildrathon roadmap and internship evaluation milestones.\n2. Real-world communication barrier between overseas Business Analysts and VN Engineering teams, and resolution via automated AI Agents.\n3. Triage Bot architecture: Ingesting, classifying, and triaging requests automatically via Slack Socket Mode.\n4. Design of SOUL.md configuration: Identity, Expertise, Tone & Style, Scope, Anti-patterns, and Out-of-Scope boundaries.\n5. Full architectural blueprint of Market Slack Bot: Ingesting events through Slack API, filtering via Response Gate, orchestrating via Claude Code, Memory context, Internal APIs, Cron triggers, and DB persistence.",
        learnings: "1. Understood system prompt guardrails via SOUL.md to govern enterprise LLM behavior.\n2. Mastered architectural patterns of decoupling event listeners (Socket Mode) from inference and persistent storage.\n3. Enhanced technical questioning skills and expanded network with mentors, speakers, and fellow interns.",
        experience: "The kickoff event at Bitexco was inspiring and energized. The professional AWS office atmosphere and interactive Q&A session with CMC Global gifts provided strong momentum for the upcoming bootcamp."
      }
    },
    {
      num: 2,
      photos: [],
      vi: { name: "", time: "", location: "", role: "", purpose: "", speakers: "", highlights: "", learnings: "", experience: "" },
      en: { name: "", time: "", location: "", role: "", purpose: "", speakers: "", highlights: "", learnings: "", experience: "" }
    },
    {
      num: 3,
      photos: [],
      vi: { name: "", time: "", location: "", role: "", purpose: "", speakers: "", highlights: "", learnings: "", experience: "" },
      en: { name: "", time: "", location: "", role: "", purpose: "", speakers: "", highlights: "", learnings: "", experience: "" }
    }
  ],

  // SECTION 5: WORKSHOP (5.1 to 5.6 - Empty by default)
  workshopChapters: ["5.1", "5.2", "5.3", "5.4", "5.5", "5.6"].map(code => ({
    code,
    vi: { customTitle: "", content: "", notes: "" },
    en: { customTitle: "", content: "", notes: "" }
  })),

  // SECTION 6: SELF-ASSESSMENT (12 Criteria Unselected + Empty Narrative by default)
  selfEvaluation: {
    ratings: {},
    vi: { narrative: "", improvement: "" },
    en: { narrative: "", improvement: "" }
  },

  // SECTION 7: SHARING AND FEEDBACK
  feedback: {
    vi: {
      env: "Môi trường làm việc tại AWS vô cùng thân thiện, cởi mở và chuyên nghiệp. Mọi thành viên luôn sẵn sàng giải đáp và hỗ trợ bất kể khi nào gặp vướng mắc kỹ thuật. Không gian làm việc hiện đại, tạo cảm hứng sáng tạo rất cao.",
      mentor: "Mentor hướng dẫn rất tận tâm, định hướng tư duy giải quyết vấn đề thay vì đưa sẵn đáp án. Đội ngũ admin hỗ trợ tài liệu, tài khoản Sandbox và thủ tục hành chính rất nhanh chóng và chu đáo.",
      relevance: "Nội dung thực tập bám sát và phát triển sâu hơn các môn học Mạng máy tính, An toàn thông tin và Điện toán đám mây tại Trường Đại học FPT.",
      learning: "Được thực chiến với các dịch vụ Cloud hàng đầu thế giới (VPC, EC2, IAM, Serverless, AI Q Developer), nâng cao tác phong làm việc chuẩn doanh nghiệp toàn cầu.",
      culture: "Văn hóa Customer Obsession và Ownership thể hiện rất rõ nét. Tinh thần hỗ trợ lẫn nhau không phân biệt cấp bậc giúp thực tập sinh nhanh chóng hòa nhập.",
      policies: "Chính sách hỗ trợ thực tập rõ ràng, thời gian làm việc linh hoạt, được cấp đầy đủ tài nguyên thực hành cloud trong suốt khóa học.",
      q1: "",
      q2: "",
      q3: "",
      suggestions: "Kỳ vọng chương trình FCAJ sẽ tổ chức thêm nhiều buổi Offline Hackathon và kết nối giao lưu với các cựu học viên đang làm việc tại các đối tác AWS lớn.",
      continueProg: "",
      other: ""
    },
    en: {
      env: "The working environment at AWS is exceptionally welcoming, open, and professional. Team members are always willing to assist whenever technical difficulties arise. The workplace is modern and fosters deep focus and creativity.",
      mentor: "The mentor provides thorough, problem-solving guidance rather than simply handing out answers. The admin team provides timely support for Sandbox cloud accounts and operational procedures.",
      relevance: "Assigned tasks align closely with the Information Assurance curriculum at FPT University, while broadening exposure to enterprise-grade cloud security technologies.",
      learning: "Gained hands-on experience with cutting-edge cloud technologies (VPC, EC2, IAM, Serverless, Amazon Q Developer) and cultivated professional international corporate discipline.",
      culture: "Amazon's leadership principles such as Customer Obsession and Ownership are vividly demonstrated across teams. The collaborative culture made me feel like an integral team member.",
      policies: "Internship policies are transparent, with flexible scheduling and generous cloud practice resources provided throughout the bootcamp.",
      q1: "",
      q2: "",
      q3: "",
      suggestions: "I hope future FCAJ cohorts can include more in-person hackathons and networking alumni roundtables with cloud engineers working at major AWS partners.",
      continueProg: "",
      other: ""
    }
  }
};


// ==========================================
// 4. PERSISTENCE & STATE MANAGEMENT (v26)
// ==========================================
const STORAGE_KEY = 'fcaj_report_bilingual_v26';
const LANG_KEY = 'fcaj_report_lang';

class AppLanguageManager {
  constructor() {
    this.cleanupLegacyStorage();
    this.currentLang = localStorage.getItem(LANG_KEY) || 'vi';
    this.currentRoute = 'thong-tin';
    this.editModes = {
      info: false,
      proposal: false,
      selfEval: false,
      feedback: false,
      blog: {},
      event: {},
      workshop: {}
    };
    this.data = this.loadData();
  }

  cleanupLegacyStorage() {
    const legacyKeys = [
      'fcaj_report_bilingual_v25',
      'fcaj_report_bilingual_v24',
      'fcaj_report_bilingual_v23',
      'fcaj_report_bilingual_v22',
      'fcaj_report_bilingual_v16',
      'fcaj_report_bilingual_v15',
      'fcaj_report_bilingual_v14',
      'fcaj_report_bilingual_v13',
      'fcaj_report_bilingual_v12',
      'fcaj_report_bilingual_v10',
      'fcaj_report_bilingual_v9',
      'fcaj_report_bilingual_v8',
      'fcaj_report_bilingual_v7',
      'fcaj_report_bilingual_v6',
      'fcaj_report_bilingual_v5',
      'fcaj_report_bilingual_v4',
      'fcaj_report_bilingual_v3',
      'fcaj_report_bilingual_v2',
      'fcaj_report_bilingual_v1',
      'fcaj_internship_report_v2',
      'fcaj_internship_report_v1'
    ];
    legacyKeys.forEach(k => {
      try { localStorage.removeItem(k); } catch (e) {}
    });
  }

  loadData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.worklogs && parsed.worklogs.length === 12) {
          if (!parsed.blogEntries) parsed.blogEntries = JSON.parse(JSON.stringify(DEFAULT_BILINGUAL_DATA.blogEntries));
          if (!parsed.eventEntries) {
            parsed.eventEntries = JSON.parse(JSON.stringify(DEFAULT_BILINGUAL_DATA.eventEntries));
          } else if (parsed.eventEntries[0] && (!parsed.eventEntries[0].vi || !parsed.eventEntries[0].vi.name || !parsed.eventEntries[0].photos || parsed.eventEntries[0].photos.length < 6)) {
            parsed.eventEntries[0] = JSON.parse(JSON.stringify(DEFAULT_BILINGUAL_DATA.eventEntries[0]));
          }
          if (!parsed.workshopChapters) parsed.workshopChapters = JSON.parse(JSON.stringify(DEFAULT_BILINGUAL_DATA.workshopChapters));
          if (!parsed.selfEvaluation) parsed.selfEvaluation = JSON.parse(JSON.stringify(DEFAULT_BILINGUAL_DATA.selfEvaluation));
          if (parsed.studentInfo) {
            if (parsed.studentInfo.className === "AWS092026") parsed.studentInfo.className = "";
          }
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Could not read stored bilingual data, using defaults', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_BILINGUAL_DATA));
  }

  saveData() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
      updateDashboardCounters();
      renderSidebarTree();
    } catch (e) {
      console.error('Could not save bilingual data', e);
    }
  }

  setLang(newLang) {
    if (newLang !== 'vi' && newLang !== 'en') return;
    this.currentLang = newLang;
    localStorage.setItem(LANG_KEY, newLang);
    this.applyLanguage();
  }

  applyLanguage() {
    const lang = this.currentLang;
    const dict = I18N_DICTIONARY[lang] || I18N_DICTIONARY.vi;

    document.documentElement.lang = lang;

    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    document.title = dict.pageTitleDoc;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key]) {
        el.placeholder = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key]) {
        el.title = dict[key];
      }
    });

    renderSidebarTree();
    updateHeaderDate();
    updateHeaderGreeting();
    updateDashboardCounters();

    renderStudentInfoModule();
    renderWorklogOverview();
    renderWeekTabs();
    renderWorklogWeekDetail();
    renderProposalModule();
    renderBlogsRoute();
    renderEventsRoute();
    renderWorkshopRoute();
    renderSelfAssessmentModule();
    renderFeedbackModule();
    updateRouteHeaderAndPagination(this.currentRoute);
  }
}

const app = new AppLanguageManager();

// ==========================================
// 5. UI HELPERS, PLANNED CALLOUTS & COUNTERS
// ==========================================
function showToast(msg, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const tEl = document.createElement('div');
  tEl.className = `toast toast-${type}`;
  tEl.innerHTML = `<span>${type === 'success' ? '✓' : '⚠️'}</span><span>${escapeHtml(msg)}</span>`;
  container.appendChild(tEl);
  setTimeout(() => {
    tEl.style.opacity = '0';
    tEl.style.transition = 'all 0.3s';
    setTimeout(() => tEl.remove(), 300);
  }, 2800);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function t(key) {
  const dict = I18N_DICTIONARY[app.currentLang] || I18N_DICTIONARY.vi;
  return dict[key] || key;
}

function renderPlannedCallout(plannedText, actionBtnHtml = '') {
  const isVi = app.currentLang === 'vi';
  const badgeText = isVi ? '📌 Mục đang để trống • Dự định thực hiện' : '📌 Empty Section • Planned Content';
  const lines = String(plannedText || '').split('\n').map(l => l.trim()).filter(Boolean);
  let bodyHtml = '';
  if (lines.length > 1) {
    const first = escapeHtml(lines[0]);
    const listItems = lines.slice(1).map(l => `<li>${escapeHtml(l.replace(/^[-•*]\s*/, ''))}</li>`).join('');
    bodyHtml = `<div><strong>${first}</strong><ul>${listItems}</ul></div>`;
  } else {
    bodyHtml = `<div>${escapeHtml(plannedText)}</div>`;
  }

  return `
    <div class="planned-callout">
      <div class="planned-callout-header">
        <span class="planned-callout-badge">${badgeText}</span>
        ${actionBtnHtml}
      </div>
      ${bodyHtml}
    </div>
  `;
}

function isWeekPopulated(w, lang) {
  if (!w) return false;
  const c = w[lang] || w.vi;
  if (!c) return false;
  const hasTasks = Array.isArray(c.tasks) && c.tasks.length > 0;
  const hasMeta = (c.objectives && c.objectives.trim().length > 0) || (c.achievements && c.achievements.trim().length > 0);
  return hasTasks || hasMeta;
}

function isBlogPopulated(b, lang) {
  if (!b) return false;
  const c = b[lang] || b.vi;
  return Boolean(c && ((c.title && c.title.trim()) || (c.summary && c.summary.trim()) || (c.content && c.content.trim())));
}

function isEventPopulated(ev, lang) {
  if (!ev) return false;
  const c = ev[lang] || ev.vi;
  return Boolean(c && ((c.name && c.name.trim()) || (c.highlights && c.highlights.trim()) || (c.learnings && c.learnings.trim())));
}

function isWorkshopStepPopulated(ch, lang) {
  if (!ch) return false;
  const c = ch[lang] || ch.vi;
  return Boolean(c && ((c.content && c.content.trim()) || (c.notes && c.notes.trim())));
}

function updateDashboardCounters() {
  const lang = app.currentLang;
  const worklogs = app.data.worklogs || [];
  let completedWeeks = 0;
  let totalTasks = 0;

  worklogs.forEach(w => {
    if (isWeekPopulated(w, lang)) completedWeeks++;
    const c = w[lang] || w.vi;
    if (c && Array.isArray(c.tasks)) totalTasks += c.tasks.length;
  });

  const statWorklogCount = document.getElementById('stat-worklog-count');
  if (statWorklogCount) statWorklogCount.textContent = `${completedWeeks} / 12`;

  const statWorklogBar = document.getElementById('stat-worklog-bar');
  if (statWorklogBar) {
    const pct = Math.min(100, Math.round((completedWeeks / 12) * 100));
    statWorklogBar.style.width = `${pct}%`;
  }

  const statTasksCount = document.getElementById('stat-tasks-count');
  if (statTasksCount) statTasksCount.textContent = String(totalTasks);

  const navBadgeWorklog = document.getElementById('nav-badge-worklog');
  if (navBadgeWorklog) navBadgeWorklog.textContent = `${completedWeeks}/12`;

  const blogsDone = (app.data.blogEntries || []).filter(b => isBlogPopulated(b, lang)).length;
  const navBadgeBlogs = document.getElementById('nav-badge-blogs');
  if (navBadgeBlogs) navBadgeBlogs.textContent = `${blogsDone}/${(app.data.blogEntries || []).length}`;

  const eventsDone = (app.data.eventEntries || []).filter(e => isEventPopulated(e, lang)).length;
  const navBadgeEvents = document.getElementById('nav-badge-events');
  if (navBadgeEvents) navBadgeEvents.textContent = `${eventsDone}/${(app.data.eventEntries || []).length}`;

  const wsDone = (app.data.workshopChapters || []).filter(c => isWorkshopStepPopulated(c, lang)).length;
  const navBadgeWorkshop = document.getElementById('nav-badge-workshop');
  if (navBadgeWorkshop) navBadgeWorkshop.textContent = `${wsDone}/6`;
}

// ==========================================
// 6. HIERARCHICAL SIDEBAR TREE & DEEP ROUTING
// ==========================================
function renderSidebarTree() {
  const lang = app.currentLang;
  const isVi = lang === 'vi';

  // 1. Worklog Sublist (1.1 -> 1.12)
  const subWorklog = document.getElementById('nav-sub-worklog');
  if (subWorklog) {
    subWorklog.innerHTML = (app.data.worklogs || []).map(w => {
      const route = `worklog/week-${w.weekNum}`;
      const isDone = isWeekPopulated(w, lang);
      const active = app.currentRoute === route ? 'active' : '';
      const label = isVi ? `1.${w.weekNum}. Worklog Tuần ${w.weekNum}` : `1.${w.weekNum}. Week ${w.weekNum} Worklog`;
      return `
        <li>
          <a href="#/${route}" class="nav-sublink ${active}" data-route="${route}">
            <span>${label}</span>
            <span class="nav-sub-dot ${isDone ? 'done' : 'planned'}" title="${isDone ? (isVi ? 'Đã có nội dung' : 'Completed') : (isVi ? 'Đang để trống (Có dự định)' : 'Planned')}"></span>
          </a>
        </li>
      `;
    }).join('');
  }

  // 3. Blogs Sublist (3.1 -> 3.3)
  const subBlogs = document.getElementById('nav-sub-blogs');
  if (subBlogs) {
    subBlogs.innerHTML = (app.data.blogEntries || []).map(b => {
      const route = `blogs-posted/blog-${b.num}`;
      const isDone = isBlogPopulated(b, lang);
      const active = app.currentRoute === route ? 'active' : '';
      const label = `3.${b.num}. Blog ${b.num}`;
      return `
        <li>
          <a href="#/${route}" class="nav-sublink ${active}" data-route="${route}">
            <span>${label}</span>
            <span class="nav-sub-dot ${isDone ? 'done' : 'planned'}"></span>
          </a>
        </li>
      `;
    }).join('');
  }

  // 4. Events Sublist (4.1 -> 4.3)
  const subEvents = document.getElementById('nav-sub-events');
  if (subEvents) {
    subEvents.innerHTML = (app.data.eventEntries || []).map(ev => {
      const route = `events/event-${ev.num}`;
      const isDone = isEventPopulated(ev, lang);
      const active = app.currentRoute === route ? 'active' : '';
      const label = `4.${ev.num}. Event ${ev.num}`;
      return `
        <li>
          <a href="#/${route}" class="nav-sublink ${active}" data-route="${route}">
            <span>${label}</span>
            <span class="nav-sub-dot ${isDone ? 'done' : 'planned'}"></span>
          </a>
        </li>
      `;
    }).join('');
  }

  // 5. Workshop Sublist (5.1 -> 5.6)
  const subWorkshop = document.getElementById('nav-sub-workshop');
  if (subWorkshop) {
    const defs = WORKSHOP_CHAPTER_DEFINITIONS[lang] || WORKSHOP_CHAPTER_DEFINITIONS.vi;
    subWorkshop.innerHTML = (app.data.workshopChapters || []).map((ch, idx) => {
      const route = `workshop/${ch.code}`;
      const isDone = isWorkshopStepPopulated(ch, lang);
      const active = app.currentRoute === route ? 'active' : '';
      const shortTitlesVi = [
        "5.1. Tổng quan Workshop",
        "5.2. Các bước chuẩn bị",
        "5.3. Triển khai hạ tầng",
        "5.4. Triển khai ứng dụng",
        "5.5. Kiểm thử & Chi phí",
        "5.6. Dọn dẹp tài nguyên"
      ];
      const shortTitlesEn = [
        "5.1. Workshop Overview",
        "5.2. Prerequisites",
        "5.3. Core Infrastructure",
        "5.4. App Integration",
        "5.5. Testing & Cost",
        "5.6. Clean up Resources"
      ];
      const label = isVi ? (shortTitlesVi[idx] || defs[idx].title) : (shortTitlesEn[idx] || defs[idx].title);
      return `
        <li>
          <a href="#/${route}" class="nav-sublink ${active}" data-route="${route}">
            <span>${label}</span>
            <span class="nav-sub-dot ${isDone ? 'done' : 'planned'}"></span>
          </a>
        </li>
      `;
    }).join('');
  }
}

function getOrderedRoutesList() {
  const isVi = app.currentLang === 'vi';
  const list = [
    { route: 'thong-tin', title: isVi ? 'Báo cáo thực tập (Thông tin sinh viên)' : 'Internship Report (Student Info)' },
    { route: 'worklog', title: isVi ? '1. Nhật ký công việc (Tổng quan 12 tuần)' : '1. Worklog (12-Week Overview)' }
  ];
  for (let w = 1; w <= 12; w++) {
    list.push({
      route: `worklog/week-${w}`,
      title: isVi ? `1.${w}. Worklog Tuần ${w}` : `1.${w}. Week ${w} Worklog`
    });
  }
  list.push({ route: 'proposal', title: isVi ? '2. Bản đề xuất (Proposal)' : '2. Project Proposal' });
  list.push({ route: 'blogs-posted', title: isVi ? '3. Các bài blogs đã đăng' : '3. Blogs Posted' });
  (app.data.blogEntries || []).forEach(b => {
    list.push({ route: `blogs-posted/blog-${b.num}`, title: `3.${b.num}. Blog ${b.num}` });
  });
  list.push({ route: 'events', title: isVi ? '4. Các events đã tham gia' : '4. Events Participated' });
  (app.data.eventEntries || []).forEach(ev => {
    list.push({ route: `events/event-${ev.num}`, title: `4.${ev.num}. Event ${ev.num}` });
  });
  list.push({ route: 'workshop', title: isVi ? '5. Workshop (Tổng quan)' : '5. Workshop (Overview)' });
  const wsDefs = WORKSHOP_CHAPTER_DEFINITIONS[app.currentLang] || WORKSHOP_CHAPTER_DEFINITIONS.vi;
  wsDefs.forEach(d => {
    list.push({ route: `workshop/${d.code}`, title: d.title });
  });
  list.push({ route: 'self-evaluation', title: isVi ? '6. Tự đánh giá' : '6. Self-Assessment' });
  list.push({ route: 'feedback', title: isVi ? '7. Chia sẻ, đóng góp ý kiến' : '7. Sharing & Feedback' });
  return list;
}

function updateRouteHeaderAndPagination(route) {
  const isVi = app.currentLang === 'vi';
  const ordered = getOrderedRoutesList();
  const currentItem = ordered.find(item => item.route === route);
  const pageTitleEl = document.getElementById('page-title');
  if (pageTitleEl) {
    if (route === 'cai-dat') {
      pageTitleEl.textContent = isVi ? 'Cài đặt & Quản lý dữ liệu' : 'Settings & Data Management';
    } else if (currentItem) {
      pageTitleEl.textContent = currentItem.title;
    }
  }

  // Update Breadcrumb trail
  const bcEl = document.getElementById('header-breadcrumb');
  if (bcEl) {
    const rootLabel = isVi ? 'Báo cáo thực tập' : 'Internship Report';
    const parts = [`<a href="#/thong-tin" class="breadcrumb-link">${rootLabel}</a>`];
    if (route.startsWith('worklog/week-')) {
      parts.push(`<span class="breadcrumb-sep">/</span><a href="#/worklog" class="breadcrumb-link">${isVi ? '1. Nhật ký công việc' : '1. Worklog'}</a>`);
    } else if (route.startsWith('blogs-posted/blog-')) {
      parts.push(`<span class="breadcrumb-sep">/</span><a href="#/blogs-posted" class="breadcrumb-link">${isVi ? '3. Blogs đã đăng' : '3. Blogs Posted'}</a>`);
    } else if (route.startsWith('events/event-')) {
      parts.push(`<span class="breadcrumb-sep">/</span><a href="#/events" class="breadcrumb-link">${isVi ? '4. Events đã tham gia' : '4. Events Participated'}</a>`);
    } else if (route.startsWith('workshop/')) {
      parts.push(`<span class="breadcrumb-sep">/</span><a href="#/workshop" class="breadcrumb-link">5. Workshop</a>`);
    }
    if (currentItem && route !== 'thong-tin') {
      parts.push(`<span class="breadcrumb-sep">/</span><span class="header-date-text">${escapeHtml(currentItem.title)}</span>`);
    } else {
      parts.push(`<span class="breadcrumb-sep">/</span><span id="current-date" class="header-date-text"></span>`);
    }
    bcEl.innerHTML = parts.join(' ');
    updateHeaderDate();
  }

  // Render Sequential Prev/Next Pagination at bottom
  const seqEl = document.getElementById('seq-pagination');
  if (seqEl) {
    const idx = ordered.findIndex(item => item.route === route);
    if (idx === -1) {
      seqEl.innerHTML = '';
      return;
    }
    const prev = idx > 0 ? ordered[idx - 1] : null;
    const next = idx < ordered.length - 1 ? ordered[idx + 1] : null;

    const prevHtml = prev
      ? `<a href="#/${prev.route}" class="seq-nav-card seq-prev">
           <span class="seq-nav-dir">← ${isVi ? 'Trang trước' : 'Previous Page'}</span>
           <span class="seq-nav-title">${escapeHtml(prev.title)}</span>
         </a>`
      : `<div></div>`;

    const nextHtml = next
      ? `<a href="#/${next.route}" class="seq-nav-card seq-next">
           <span class="seq-nav-dir">${isVi ? 'Trang tiếp theo' : 'Next Page'} →</span>
           <span class="seq-nav-title">${escapeHtml(next.title)}</span>
         </a>`
      : `<div></div>`;

    seqEl.innerHTML = prevHtml + nextHtml;
  }
}

function navigateTo(rawRoute) {
  const route = String(rawRoute || 'thong-tin').replace(/^#?\//, '') || 'thong-tin';
  app.currentRoute = route;

  let basePage = route.split('/')[0];
  const validPages = ['thong-tin', 'worklog', 'proposal', 'blogs-posted', 'events', 'workshop', 'self-evaluation', 'feedback', 'cai-dat'];
  if (!validPages.includes(basePage)) {
    basePage = 'thong-tin';
    app.currentRoute = 'thong-tin';
  }

  // Expand parent sidebar group automatically when visiting a child route or parent route
  const groupMap = {
    'worklog': 'nav-group-worklog',
    'blogs-posted': 'nav-group-blogs',
    'events': 'nav-group-events',
    'workshop': 'nav-group-workshop'
  };
  if (groupMap[basePage]) {
    document.getElementById(groupMap[basePage])?.classList.add('expanded');
  }

  // Switch active view container
  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.remove('active');
  });
  const targetView = document.getElementById(`view-${basePage}`);
  if (targetView) targetView.classList.add('active');

  // Dispatch sub-views
  if (basePage === 'worklog') {
    const overviewPanel = document.getElementById('worklog-overview-panel');
    const detailPanel = document.getElementById('worklog-week-detail-panel');
    if (route.startsWith('worklog/week-')) {
      const wNum = parseInt(route.replace('worklog/week-', ''), 10);
      if (wNum >= 1 && wNum <= 12) {
        app.data.currentWeek = wNum;
      }
      if (overviewPanel) overviewPanel.style.display = 'none';
      if (detailPanel) detailPanel.style.display = 'block';
      renderWeekTabs();
      renderWorklogWeekDetail();
    } else {
      if (overviewPanel) overviewPanel.style.display = 'block';
      if (detailPanel) detailPanel.style.display = 'none';
      renderWorklogOverview();
    }
  } else if (basePage === 'blogs-posted') {
    renderBlogsRoute();
  } else if (basePage === 'events') {
    renderEventsRoute();
  } else if (basePage === 'workshop') {
    renderWorkshopRoute();
  }

  // Highlight active links in sidebar
  document.querySelectorAll('.sidebar .nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-route') === route);
  });
  renderSidebarTree();

  if (window.location.hash !== `#/${app.currentRoute}`) {
    window.location.hash = `#/${app.currentRoute}`;
  }

  updateRouteHeaderAndPagination(app.currentRoute);
  document.getElementById('sidebar')?.classList.remove('open');
  document.getElementById('sidebar-overlay')?.classList.remove('show');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleHashChange() {
  const hash = window.location.hash.replace(/^#?\//, '') || 'thong-tin';
  navigateTo(hash);
}

function updateHeaderDate() {
  const dateEl = document.getElementById('current-date');
  if (!dateEl) return;
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  if (app.currentLang === 'vi') {
    const daysVi = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    dateEl.textContent = `${daysVi[now.getDay()]}, ${dd}/${mm}/${now.getFullYear()}`;
  } else {
    const daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    dateEl.textContent = `${daysEn[now.getDay()]}, ${mm}/${dd}/${now.getFullYear()}`;
  }
}

function updateHeaderGreeting() {
  const greetingEl = document.getElementById('greeting-display');
  if (!greetingEl) return;
  const firstName = (app.data.studentInfo.fullName || 'Lê Công Luyến').split(' ').pop();
  const hour = new Date().getHours();
  let greetKey = 'greetingMorning';
  if (hour >= 12 && hour < 18) greetKey = 'greetingAfternoon';
  else if (hour >= 18 || hour < 5) greetKey = 'greetingEvening';
  greetingEl.textContent = `${t(greetKey)}, ${firstName}`;
}


// ==========================================
// 7. VIEW 0: STUDENT INFO MODULE (TABLE + AVATAR)
// ==========================================
function renderStudentInfoModule() {
  const info = app.data.studentInfo;
  const lang = app.currentLang;
  const isVi = lang === 'vi';
  const loc = info[lang] || info.vi;

  // Populate Editor Form Inputs
  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  };
  setVal('info-fullname', info.fullName);
  setVal('info-student-id', info.studentId);
  setVal('info-phone', info.phone);
  setVal('info-email', info.email);
  setVal('info-class', info.className || '');
  setVal('info-university', loc.university);
  setVal('info-major', loc.major);
  setVal('info-company', loc.company);
  setVal('info-position', loc.position);
  setVal('info-duration', loc.duration);

  // Populate Official Reader Table (Matches content/_index.vi.md)
  const tbody = document.getElementById('student-info-table-body');
  if (tbody) {
    const rows = [
      { label: t('labelFullName'), val: info.fullName },
      { label: t('labelStudentId'), val: info.studentId },
      { label: t('labelPhone'), val: info.phone },
      { label: t('labelEmail'), val: info.email },
      { label: t('labelUniversity'), val: loc.university },
      { label: t('labelMajor'), val: loc.major },
      ...(info.className ? [{ label: t('labelClass'), val: info.className }] : []),
      { label: t('labelCompany'), val: loc.company },
      { label: t('labelPosition'), val: loc.position },
      { label: t('labelDuration'), val: loc.duration }
    ];
    tbody.innerHTML = rows.map(r => `
      <tr>
        <th>${escapeHtml(r.label)}:</th>
        <td>${escapeHtml(r.val || '—')}</td>
      </tr>
    `).join('');
  }

  // Avatar rendering
  const initials = (info.fullName || 'LCL')
    .split(/\s+/)
    .filter(Boolean)
    .map(w => w[0].toUpperCase())
    .slice(-3)
    .join('');
  const initialsEl = document.getElementById('student-avatar-initials');
  const imgEl = document.getElementById('student-avatar-img');
  if (info.avatarDataUrl) {
    if (initialsEl) initialsEl.style.display = 'none';
    if (imgEl) {
      imgEl.src = info.avatarDataUrl;
      imgEl.style.display = 'block';
    }
  } else {
    if (initialsEl) {
      initialsEl.textContent = initials || 'L';
      initialsEl.style.display = 'inline';
    }
    if (imgEl) imgEl.style.display = 'none';
  }

  const capName = document.getElementById('avatar-caption-name');
  if (capName) capName.textContent = info.fullName || 'Lê Công Luyến';
  const capId = document.getElementById('avatar-caption-id');
  if (capId) capId.textContent = `${isVi ? 'MSSV' : 'ID'}: ${info.studentId || 'SE190809'}${info.className ? ' • ' + info.className : ''}`;

  // Sync Hero Banner & Sidebar Profile
  const heroName = document.getElementById('hero-student-name');
  if (heroName) heroName.textContent = info.fullName || 'Lê Công Luyến';
  const heroSub = document.getElementById('hero-student-sub');
  if (heroSub) {
    heroSub.textContent = `${info.studentId || 'SE190809'} • ${loc.major || ''} • ${loc.university || ''}`;
  }
  const sidebarCompany = document.getElementById('sidebar-company');
  if (sidebarCompany) sidebarCompany.textContent = loc.company;
  const sidebarUsername = document.getElementById('sidebar-username');
  if (sidebarUsername) sidebarUsername.textContent = info.fullName || 'Lê Công Luyến';
  const singleInitial = (info.fullName || 'L').trim().charAt(0).toUpperCase();
  const sidebarAvatar = document.getElementById('sidebar-avatar');
  if (sidebarAvatar) sidebarAvatar.textContent = singleInitial;
  const headerAvatar = document.getElementById('header-avatar-sm');
  if (headerAvatar) headerAvatar.textContent = singleInitial;

  // Toggle form visibility
  const form = document.getElementById('student-info-form');
  if (form) {
    form.style.display = app.editModes.info ? 'block' : 'none';
  }
}

function setupStudentInfo() {
  const toggleBtn = document.getElementById('btn-toggle-edit-info');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      app.editModes.info = !app.editModes.info;
      renderStudentInfoModule();
    });
  }

  const avatarInput = document.getElementById('input-avatar-upload');
  if (avatarInput) {
    avatarInput.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        app.data.studentInfo.avatarDataUrl = ev.target.result;
        app.saveData();
        renderStudentInfoModule();
        showToast(t('toastSaveInfo'));
      };
      reader.readAsDataURL(file);
    });
  }

  const form = document.getElementById('student-info-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const lang = app.currentLang;
      app.data.studentInfo.fullName = document.getElementById('info-fullname').value.trim();
      app.data.studentInfo.studentId = document.getElementById('info-student-id').value.trim();
      app.data.studentInfo.phone = document.getElementById('info-phone').value.trim();
      app.data.studentInfo.email = document.getElementById('info-email').value.trim();
      app.data.studentInfo.className = document.getElementById('info-class').value.trim();
      app.data.studentInfo[lang] = {
        university: document.getElementById('info-university').value.trim(),
        major: document.getElementById('info-major').value.trim(),
        company: document.getElementById('info-company').value.trim(),
        position: document.getElementById('info-position').value.trim(),
        duration: document.getElementById('info-duration').value.trim()
      };
      app.editModes.info = false;
      app.saveData();
      updateHeaderGreeting();
      renderStudentInfoModule();
      showToast(t('toastSaveInfo'));
    });
  }
}

// ==========================================
// 8. VIEW 1: WORKLOG OVERVIEW & WEEK 1..12 DETAIL
// ==========================================
function renderWorklogOverview() {
  const lang = app.currentLang;
  const isVi = lang === 'vi';
  const introEl = document.getElementById('worklog-overview-intro');
  if (introEl) {
    introEl.innerHTML = isVi
      ? `<strong>Nhật ký công việc 12 tuần (Worklog):</strong> Trong trang này trình bày toàn bộ nhật ký làm việc của thực tập sinh tại chương trình <strong>AWS First Cloud AI Journey (FCAJ)</strong> từ <strong>Tuần 1 đến Tuần 12</strong>. Mỗi tuần bao gồm: <em>(1) Mục tiêu tuần</em>, <em>(2) Bảng công việc cần triển khai trong tuần</em>, và <em>(3) Kết quả đạt được</em>. Các tuần từ Tuần 3 đến Tuần 12 hiện đang để trống nội dung và ghi rõ dự định thực hiện theo đúng tiến độ thực tập.`
      : `<strong>12-Week Internship Worklog:</strong> This section documents the intern's progress throughout the <strong>AWS First Cloud AI Journey (FCAJ)</strong> program from <strong>Week 1 to Week 12</strong>. Each week includes: <em>(1) Week Objectives</em>, <em>(2) Tasks to be carried out this week</em>, and <em>(3) Week Achievements</em>. Weeks 3 through 12 are currently empty and display their planned roadmap.`;
  }

  const gridEl = document.getElementById('worklog-overview-grid');
  if (!gridEl) return;

  gridEl.innerHTML = (app.data.worklogs || []).map(w => {
    const wNum = w.weekNum;
    const c = w[lang] || w.vi;
    const isDone = isWeekPopulated(w, lang);
    const taskCount = (c && Array.isArray(c.tasks)) ? c.tasks.length : 0;
    const firstObjLine = (c && c.objectives) ? c.objectives.split('\n')[0].replace(/^[-•*]\s*/, '') : '';
    const plannedTopic = (PLANNED_WEEK_TOPICS[lang] || PLANNED_WEEK_TOPICS.vi)[wNum] || '';

    const statusBadge = isDone
      ? `<span class="badge-completed">✓ ${isVi ? `Đã cập nhật (${taskCount} việc)` : `Completed (${taskCount} tasks)`}</span>`
      : `<span class="badge-planned">📌 ${isVi ? 'Đang trống (Dự định)' : 'Planned'}</span>`;

    const descHtml = isDone
      ? `<strong>${isVi ? 'Trọng tâm:' : 'Focus:'}</strong> ${escapeHtml(firstObjLine)}`
      : `<em>${escapeHtml(plannedTopic)}</em>`;

    return `
      <div class="week-overview-card ${isDone ? 'completed' : 'planned'}" onclick="navigateTo('worklog/week-${wNum}')">
        <div class="week-overview-top">
          <span class="week-overview-title">1.${wNum}. ${isVi ? `Worklog Tuần ${wNum}` : `Week ${wNum} Worklog`}</span>
          ${statusBadge}
        </div>
        <div class="week-overview-desc">${descHtml}</div>
      </div>
    `;
  }).join('');
}

function getCurrentWeekWorklog() {
  const weekNum = app.data.currentWeek || 1;
  let week = app.data.worklogs.find(w => w.weekNum === weekNum);
  if (!week) {
    week = {
      weekNum,
      vi: { objectives: '', achievements: '', tasks: [] },
      en: { objectives: '', achievements: '', tasks: [] }
    };
    app.data.worklogs.push(week);
  }
  return week;
}

function renderWeekTabs() {
  const bar = document.getElementById('week-tabs-bar');
  if (!bar) return;
  const current = app.data.currentWeek || 1;
  const lang = app.currentLang;
  bar.innerHTML = '';

  for (let i = 1; i <= 12; i++) {
    const wObj = app.data.worklogs.find(w => w.weekNum === i);
    const hasData = isWeekPopulated(wObj, lang);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `week-tab-btn ${i === current ? 'active' : ''}`;
    btn.innerHTML = `
      <span>1.${i}. ${t('weekPrefix')} ${i}</span>
      ${hasData ? '<span class="week-dot"></span>' : ''}
    `;
    btn.addEventListener('click', () => {
      navigateTo(`worklog/week-${i}`);
    });
    bar.appendChild(btn);
  }

  const weekSelect = document.getElementById('modal-task-week-select');
  if (weekSelect) {
    weekSelect.innerHTML = '';
    for (let i = 1; i <= 12; i++) {
      const opt = document.createElement('option');
      opt.value = String(i);
      opt.textContent = `1.${i}. ${t('weekPrefix')} ${i}`;
      if (i === current) opt.selected = true;
      weekSelect.appendChild(opt);
    }
  }
}

function formatTextToParagraphsOrList(rawText, emptyHtml) {
  if (!rawText || !rawText.trim()) {
    return emptyHtml;
  }
  const lines = rawText.split('\n').map(l => l.trim()).filter(Boolean);
  let html = '';
  let inList = false;

  lines.forEach(line => {
    if (line.startsWith('-') || line.startsWith('•') || line.startsWith('*')) {
      if (!inList) {
        html += '<ul>';
        inList = true;
      }
      const clean = line.replace(/^[-•*]\s*/, '');
      html += `<li>${escapeHtml(clean)}</li>`;
    } else {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      html += `<p style="margin-bottom: 8px; font-weight: 600;">${escapeHtml(line)}</p>`;
    }
  });
  if (inList) html += '</ul>';
  return html;
}

function formatRefCell(refStr) {
  if (!refStr || !refStr.trim()) return '<span class="text-muted">—</span>';
  const lines = refStr.split('\n').map(s => s.trim()).filter(Boolean);
  return lines.map(line => {
    if (/^https?:\/\//i.test(line)) {
      return `<div><a href="${escapeHtml(line)}" target="_blank" rel="noopener" style="color:#2563EB;font-weight:700;text-decoration:none;">🔗 ${escapeHtml(line)}</a></div>`;
    }
    return `<div><span style="color:#D97706;font-weight:700;">📄 ${escapeHtml(line)}</span></div>`;
  }).join('');
}

function renderWorklogWeekDetail() {
  const week = getCurrentWeekWorklog();
  const wNum = week.weekNum;
  const lang = app.currentLang;
  const isVi = lang === 'vi';
  const content = week[lang] || week.vi;
  const isDone = isWeekPopulated(week, lang);

  const detailTitle = document.getElementById('worklog-detail-title');
  if (detailTitle) {
    detailTitle.textContent = isVi ? `1.${wNum}. Worklog Tuần ${wNum}` : `1.${wNum}. Week ${wNum} Worklog`;
  }

  const badgeEl = document.getElementById('current-week-badge');
  if (badgeEl) badgeEl.textContent = `1.${wNum} • WEEK ${String(wNum).padStart(2, '0')}`;

  const headingEl = document.getElementById('current-week-heading');
  if (headingEl) {
    headingEl.textContent = isVi ? `Worklog Tuần ${wNum}` : `Week ${wNum} Worklog`;
  }

  const objHeading = document.getElementById('week-obj-heading');
  if (objHeading) objHeading.textContent = isVi ? `🎯 Mục tiêu tuần ${wNum}:` : `🎯 Week ${wNum} Objectives:`;

  const achHeading = document.getElementById('week-ach-heading');
  if (achHeading) achHeading.textContent = isVi ? `🏆 Kết quả đạt được tuần ${wNum}:` : `🏆 Week ${wNum} Achievements:`;

  // Planned Notice Banner for empty weeks (Weeks 3-12)
  const plannedBanner = document.getElementById('week-planned-banner');
  const plannedTopic = (PLANNED_WEEK_TOPICS[lang] || PLANNED_WEEK_TOPICS.vi)[wNum] || '';
  if (plannedBanner) {
    if (!isDone) {
      plannedBanner.style.display = 'block';
      plannedBanner.innerHTML = renderPlannedCallout(
        `${plannedTopic}\n- Mục tiêu tuần ${wNum}: Dự định liệt kê các mục tiêu kiến thức và kỹ năng trọng tâm cần nắm vững trong tuần ${wNum}.\n- Bảng công việc tuần ${wNum}: Dự định ghi nhận lịch trình thực hiện từ Thứ 2 đến Thứ 6 kèm ngày bắt đầu, ngày hoàn thành và nguồn tài liệu.\n- Kết quả đạt được tuần ${wNum}: Dự định tổng kết các kiến thức, bài Lab đã hoàn thành và kế hoạch tuần kế tiếp.`
      );
    } else {
      plannedBanner.style.display = 'none';
      plannedBanner.innerHTML = '';
    }
  }

  // 1. Objectives (Top)
  const objEl = document.getElementById('week-objectives-text');
  if (objEl) {
    const emptyObjHtml = `<span class="text-muted"><em>${isVi ? `Đang để trống — Dự định cập nhật danh sách các mục tiêu học tập & thực hành của Tuần ${wNum} tại đây.` : `Currently empty — Planned to list Week ${wNum} learning & hands-on objectives here.`}</em></span>`;
    objEl.innerHTML = formatTextToParagraphsOrList(content.objectives, emptyObjHtml);
  }

  // 2. Tasks Table (Middle)
  const tbody = document.getElementById('week-tasks-tbody');
  if (tbody) {
    const tasks = content.tasks || [];
    if (tasks.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="6" style="text-align:center; padding: 28px; color: var(--text-muted);">
            <em>${isVi
              ? `Bảng công việc Tuần ${wNum} hiện đang để trống. Dự định ghi nhận các đầu việc triển khai từ Thứ 2 đến Thứ 6 khi thực hiện Tuần ${wNum} (Nhấn "+ Thêm công việc" để bổ sung).`
              : `Week ${wNum} tasks table is currently empty. Planned to log daily tasks from Monday to Friday (Click "+ Add Task" to add).`}</em>
          </td>
        </tr>
      `;
    } else {
      tbody.innerHTML = tasks.map((task, idx) => {
        const descLines = (task.desc || '').split('\n').map(l => escapeHtml(l)).join('<br>');
        return `
          <tr>
            <td style="text-align:center; font-weight:800; color: var(--text-main);">${escapeHtml(task.day)}</td>
            <td style="line-height: 1.65;">${descLines}</td>
            <td style="font-family: var(--font-mono); font-size: 12.5px;">${escapeHtml(task.start || '—')}</td>
            <td style="font-family: var(--font-mono); font-size: 12.5px;">${escapeHtml(task.end || '—')}</td>
            <td>${formatRefCell(task.ref)}</td>
            <td class="col-task-actions" style="text-align:center;">
              <div class="row-action-btns">
                <button type="button" class="btn-row-icon" onclick="openEditTaskModal(${idx})">${t('btnEdit')}</button>
                <button type="button" class="btn-row-icon danger" onclick="deleteWeekTask(${idx})">${t('btnDelete')}</button>
              </div>
            </td>
          </tr>
        `;
      }).join('');
    }
  }

  // 3. Achievements (Bottom)
  const achEl = document.getElementById('week-achievements-text');
  if (achEl) {
    const emptyAchHtml = `<span class="text-muted"><em>${isVi ? `Đang để trống — Dự định cập nhật chi tiết các kết quả, kiến thức nắm vững và bài Lab hoàn thành trong Tuần ${wNum} tại đây.` : `Currently empty — Planned to summarize Week ${wNum} achievements and completed labs here.`}</em></span>`;
    achEl.innerHTML = formatTextToParagraphsOrList(content.achievements, emptyAchHtml);
  }
}

window.openEditTaskModal = function(idx) {
  const week = getCurrentWeekWorklog();
  const lang = app.currentLang;
  const tasks = (week[lang] && week[lang].tasks) || [];
  const task = tasks[idx];
  if (!task) return;

  document.getElementById('modal-task-edit-index').value = String(idx);
  document.getElementById('worklog-task-modal-title').textContent = t('modalEditTaskTitle');
  document.getElementById('btn-submit-task-modal').textContent = t('btnUpdateTask');

  document.getElementById('modal-task-week-select').value = String(week.weekNum);
  document.getElementById('modal-task-day').value = task.day || '';
  document.getElementById('modal-task-desc').value = task.desc || '';
  document.getElementById('modal-task-start').value = task.start || '';
  document.getElementById('modal-task-end').value = task.end || '';
  document.getElementById('modal-task-ref').value = task.ref || '';

  document.getElementById('worklog-task-modal')?.classList.add('show');
};

window.deleteWeekTask = function(idx) {
  if (!confirm(t('confirmDeleteTask'))) return;
  const week = getCurrentWeekWorklog();
  const lang = app.currentLang;
  if (week[lang] && Array.isArray(week[lang].tasks)) {
    week[lang].tasks.splice(idx, 1);
    app.saveData();
    renderWeekTabs();
    renderWorklogWeekDetail();
    showToast(t('toastDeleteTask'));
  }
};

function setupWorklogModals() {
  const btnToggleEdit = document.getElementById('btn-toggle-table-edit');
  if (btnToggleEdit) {
    btnToggleEdit.addEventListener('click', () => {
      document.getElementById('week-tasks-table')?.classList.toggle('show-actions');
    });
  }

  const btnClearWeek = document.getElementById('btn-clear-week');
  if (btnClearWeek) {
    btnClearWeek.addEventListener('click', () => {
      if (!confirm(t('confirmResetWeek'))) return;
      const week = getCurrentWeekWorklog();
      const lang = app.currentLang;
      week[lang] = { objectives: '', achievements: '', tasks: [] };
      app.saveData();
      renderWeekTabs();
      renderWorklogWeekDetail();
      showToast(t('toastResetWeekSuccess'));
    });
  }

  // Meta Modal
  const metaModal = document.getElementById('worklog-meta-modal');
  const btnOpenMeta = document.getElementById('btn-edit-week-meta');
  const closeMeta = () => metaModal?.classList.remove('show');

  if (btnOpenMeta) {
    btnOpenMeta.addEventListener('click', () => {
      const week = getCurrentWeekWorklog();
      const c = week[app.currentLang] || week.vi;
      document.getElementById('modal-meta-objectives').value = c.objectives || '';
      document.getElementById('modal-meta-achievements').value = c.achievements || '';
      metaModal?.classList.add('show');
    });
  }

  document.getElementById('btn-close-meta-modal')?.addEventListener('click', closeMeta);
  document.getElementById('btn-cancel-meta-modal')?.addEventListener('click', closeMeta);

  const metaForm = document.getElementById('worklog-meta-form');
  if (metaForm) {
    metaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const week = getCurrentWeekWorklog();
      const lang = app.currentLang;
      week[lang].objectives = document.getElementById('modal-meta-objectives').value.trim();
      week[lang].achievements = document.getElementById('modal-meta-achievements').value.trim();
      app.saveData();
      renderWeekTabs();
      renderWorklogWeekDetail();
      closeMeta();
      showToast(t('toastSaveMetaSuccess'));
    });
  }

  // Task Modal
  const taskModal = document.getElementById('worklog-task-modal');
  const btnAddTask = document.getElementById('btn-add-week-task');
  const closeTask = () => taskModal?.classList.remove('show');

  if (btnAddTask) {
    btnAddTask.addEventListener('click', () => {
      document.getElementById('modal-task-edit-index').value = '-1';
      document.getElementById('worklog-task-modal-title').textContent = t('modalTitle');
      document.getElementById('btn-submit-task-modal').textContent = t('btnModalSave');
      document.getElementById('worklog-task-form')?.reset();
      document.getElementById('modal-task-week-select').value = String(app.data.currentWeek || 1);
      document.getElementById('week-tasks-table')?.classList.add('show-actions');
      taskModal?.classList.add('show');
    });
  }

  document.getElementById('btn-close-task-modal')?.addEventListener('click', closeTask);
  document.getElementById('btn-cancel-task-modal')?.addEventListener('click', closeTask);

  const taskForm = document.getElementById('worklog-task-form');
  if (taskForm) {
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const editIdx = parseInt(document.getElementById('modal-task-edit-index').value, 10);
      const targetWeekNum = parseInt(document.getElementById('modal-task-week-select').value, 10) || app.data.currentWeek;
      const dayVal = document.getElementById('modal-task-day').value.trim();
      const descVal = document.getElementById('modal-task-desc').value.trim();
      const startVal = document.getElementById('modal-task-start').value;
      const endVal = document.getElementById('modal-task-end').value;
      const refVal = document.getElementById('modal-task-ref').value.trim();

      let targetWeek = app.data.worklogs.find(w => w.weekNum === targetWeekNum);
      if (!targetWeek) return;
      const lang = app.currentLang;

      const taskObj = { day: dayVal, desc: descVal, start: startVal, end: endVal, ref: refVal };
      if (editIdx >= 0 && targetWeekNum === app.data.currentWeek) {
        targetWeek[lang].tasks[editIdx] = taskObj;
        showToast(t('toastUpdateTaskSuccess'));
      } else {
        targetWeek[lang].tasks.push(taskObj);
        app.data.currentWeek = targetWeekNum;
        showToast(`${t('toastAddTaskSuccess')} ${targetWeekNum}!`);
      }

      app.saveData();
      closeTask();
      navigateTo(`worklog/week-${app.data.currentWeek}`);
    });
  }
}

// ==========================================
// 9. VIEW 2: PROPOSAL MODULE (8 OFFICIAL SECTIONS)
// ==========================================
function renderProposalModule() {
  const lang = app.currentLang;
  const isVi = lang === 'vi';
  const prop = (app.data.proposal && app.data.proposal[lang]) || {};
  const archImg = app.data.proposal ? app.data.proposal.archImgDataUrl : '';

  // Populate Editor Inputs
  const setVal = (id, v) => {
    const el = document.getElementById(id);
    if (el) el.value = v || '';
  };
  setVal('prop-title', prop.title);
  setVal('prop-subtitle', prop.subtitle);
  setVal('prop-summary', prop.summary);
  setVal('prop-problem', prop.problem);
  setVal('prop-solution', prop.solution);
  setVal('prop-roi', prop.roi);
  setVal('prop-arch', prop.arch);
  setVal('prop-services', prop.services);
  setVal('prop-tech', prop.tech);
  setVal('prop-timeline', prop.timeline);
  setVal('prop-calc-url', prop.calcUrl);
  setVal('prop-budget', prop.budget);
  setVal('prop-risks', prop.risks);
  setVal('prop-outcomes', prop.outcomes);

  const imgPreview = document.getElementById('prop-arch-img-preview');
  if (imgPreview) {
    imgPreview.innerHTML = archImg
      ? `<img src="${archImg}" class="uploaded-diagram-img" alt="AWS Solution Architecture Diagram">`
      : `<span class="text-muted"><em>${isVi ? 'Chưa tải ảnh sơ đồ kiến trúc.' : 'No architecture diagram uploaded yet.'}</em></span>`;
  }

  // Toggle Reader vs Editor
  const readerEl = document.getElementById('proposal-reader-view');
  const editorEl = document.getElementById('proposal-editor-view');
  if (readerEl && editorEl) {
    readerEl.style.display = app.editModes.proposal ? 'none' : 'block';
    editorEl.style.display = app.editModes.proposal ? 'block' : 'none';
  }

  if (!readerEl) return;

  // Build 8 Official Proposal Sections in Reader Mode
  const titleHtml = prop.title
    ? `<div class="doc-section-block">
         <h2 style="font-size:20px;font-weight:800;color:var(--text-main);">${escapeHtml(prop.title)}</h2>
         ${prop.subtitle ? `<p style="font-size:14px;font-weight:600;color:var(--text-muted);margin-top:4px;">${escapeHtml(prop.subtitle)}</p>` : ''}
       </div>`
    : `<div class="doc-section-block">
         ${renderPlannedCallout(
           isVi
             ? "Dự định thực hiện Bản đề xuất dự án (Project Proposal):\n- Mục này hiện đang để trống vì chưa đăng tải đề tài chính thức.\n- Khi hoàn thiện đề tài nhóm/cá nhân, tại đây sẽ trình bày đầy đủ 8 phần chuẩn theo fcj-workshop-template và quy định chấm điểm của chương trình FCAJ (bên dưới)."
             : "Planned Project Proposal:\n- This section is currently empty as the project proposal has not been uploaded yet.\n- Once finalized, all 8 official FCAJ proposal sections below will be populated."
         )}
       </div>`;

  const sec1Body = prop.summary
    ? `<div class="doc-prose">${escapeHtml(prop.summary)}</div>`
    : renderPlannedCallout(isVi
        ? "Dự định trình bày tại Phần 1 (Executive Summary):\n- Mô tả ngắn gọn bối cảnh thực tế của dự án và mục tiêu cốt lõi cần đạt được.\n- Nêu phạm vi triển khai trên nền tảng AWS và giá trị mang lại cho người dùng / doanh nghiệp."
        : "Planned for Section 1 (Executive Summary):\n- Concise overview of project context, core objectives, AWS scope, and business value.");

  const hasSec2 = prop.problem || prop.solution || prop.roi;
  const sec2Body = hasSec2
    ? `<h4 class="doc-section-h4">• ${isVi ? 'Vấn đề hiện tại' : "What's the Problem?"}</h4>
       <div class="doc-prose">${escapeHtml(prop.problem || '—')}</div>
       <h4 class="doc-section-h4">• ${isVi ? 'Giải pháp' : 'The Solution'}</h4>
       <div class="doc-prose">${escapeHtml(prop.solution || '—')}</div>
       <h4 class="doc-section-h4">• ${isVi ? 'Lợi ích và hoàn vốn đầu tư (ROI)' : 'Benefits and Return on Investment'}</h4>
       <div class="doc-prose">${escapeHtml(prop.roi || '—')}</div>`
    : renderPlannedCallout(isVi
        ? "Dự định trình bày tại Phần 2 (Problem Statement):\n- Vấn đề hiện tại: Phân tích các hạn chế về hiệu năng, bảo mật hoặc chi phí của hệ thống hiện hữu.\n- Giải pháp: Mô tả phương án sử dụng các dịch vụ AWS để giải quyết triệt để vấn đề.\n- Lợi ích và hoàn vốn đầu tư (ROI): Định lượng lợi ích vận hành, độ sẵn sàng (SLA) và hiệu quả kinh tế."
        : "Planned for Section 2 (Problem Statement):\n- Current Problem, Proposed AWS Solution, and Benefits & Return on Investment (ROI).");

  const hasSec3 = archImg || prop.arch || prop.services;
  const sec3Body = hasSec3
    ? `${archImg ? `<div style="margin-bottom:14px;"><img src="${archImg}" class="uploaded-diagram-img" alt="Architecture Diagram"></div>` : ''}
       <h4 class="doc-section-h4">• ${isVi ? 'Thiết kế thành phần & Luồng kiến trúc' : 'Component Design & Data Flow'}</h4>
       <div class="doc-prose">${escapeHtml(prop.arch || '—')}</div>
       <h4 class="doc-section-h4">• ${isVi ? 'Dịch vụ AWS sử dụng' : 'AWS Services Used'}</h4>
       <div class="doc-prose">${escapeHtml(prop.services || '—')}</div>`
    : renderPlannedCallout(isVi
        ? "Dự định trình bày tại Phần 3 (Solution Architecture):\n- Đính kèm Sơ đồ kiến trúc AWS (Architecture Diagram) thể hiện rõ VPC, Availability Zones, luồng người dùng và các tầng dịch vụ.\n- Liệt kê bảng các dịch vụ AWS sử dụng kèm vai trò cụ thể của từng dịch vụ.\n- Giải thích chi tiết thiết kế từng thành phần và cơ chế bảo mật."
        : "Planned for Section 3 (Solution Architecture):\n- Upload the AWS Architecture Diagram, list AWS Services Used, and explain Component Design.");

  const sec4Body = prop.tech
    ? `<div class="doc-prose">${escapeHtml(prop.tech)}</div>`
    : renderPlannedCallout(isVi
        ? "Dự định trình bày tại Phần 4 (Technical Implementation):\n- Các giai đoạn triển khai kỹ thuật: Thiết lập nền tảng → Xây dựng hạ tầng & bảo mật → Triển khai ứng dụng → Kiểm thử & Tối ưu.\n- Yêu cầu kỹ thuật: Cấu hình môi trường, công cụ IaC/CI-CD và thông số dịch vụ."
        : "Planned for Section 4 (Technical Implementation):\n- Implementation phases and detailed technical requirements.");

  const sec5Body = prop.timeline
    ? `<div class="doc-prose">${escapeHtml(prop.timeline)}</div>`
    : renderPlannedCallout(isVi
        ? "Dự định trình bày tại Phần 5 (Timeline & Milestones):\n- Trước thực tập (Tháng 0): Lên kế hoạch, khảo sát đề tài và chuẩn bị môi trường.\n- Trong thực tập (Tháng 1 – Tháng 3): Mốc hoàn thành từng giai đoạn thiết kế, phát triển, kiểm thử và nghiệm thu.\n- Sau triển khai: Kế hoạch vận hành và mở rộng hệ thống."
        : "Planned for Section 5 (Timeline & Milestones):\n- Pre-internship (Month 0), Internship (Months 1–3) milestones, and Post-deployment roadmap.");

  const hasSec6 = prop.calcUrl || prop.budget;
  const sec6Body = hasSec6
    ? `${prop.calcUrl ? `<p style="margin-bottom:10px;"><strong>AWS Pricing Calculator:</strong> <a href="${escapeHtml(prop.calcUrl)}" target="_blank" rel="noopener" style="color:#2563EB;font-weight:700;">${escapeHtml(prop.calcUrl)}</a></p>` : ''}
       <div class="doc-prose">${escapeHtml(prop.budget || '—')}</div>`
    : renderPlannedCallout(isVi
        ? "Dự định trình bày tại Phần 6 (Budget Estimation):\n- Đường dẫn dự toán chính thức trên công cụ AWS Pricing Calculator.\n- Bảng chi tiết chi phí hạ tầng ước tính theo tháng (USD/tháng) và tổng chi phí giai đoạn triển khai."
        : "Planned for Section 6 (Budget Estimation):\n- Link to AWS Pricing Calculator estimate and monthly infrastructure cost breakdown.");

  const sec7Body = prop.risks
    ? `<div class="doc-prose">${escapeHtml(prop.risks)}</div>`
    : renderPlannedCallout(isVi
        ? "Dự định trình bày tại Phần 7 (Risk Assessment):\n- Ma trận rủi ro kỹ thuật, bảo mật và chi phí (Mức độ ảnh hưởng & Xác suất xảy ra).\n- Chiến lược giảm thiểu rủi ro (Mitigation Strategies) và Kế hoạch dự phòng (Contingency Plan)."
        : "Planned for Section 7 (Risk Assessment):\n- Risk Matrix, Mitigation Strategies, and Contingency Plan.");

  const sec8Body = prop.outcomes
    ? `<div class="doc-prose">${escapeHtml(prop.outcomes)}</div>`
    : renderPlannedCallout(isVi
        ? "Dự định trình bày tại Phần 8 (Expected Outcomes):\n- Các chỉ số cải tiến kỹ thuật kỳ vọng (Độ trễ, khả năng chịu tải, mức độ tự động hóa).\n- Giá trị dài hạn và khả năng tái sử dụng của kiến trúc."
        : "Planned for Section 8 (Expected Outcomes):\n- Expected technical improvements and long-term architectural value.");

  readerEl.innerHTML = `
    ${titleHtml}
    <div class="doc-section-block">
      <h3 class="doc-section-h3">1. ${isVi ? 'Tóm tắt điều hành (Executive Summary)' : 'Executive Summary'}</h3>
      ${sec1Body}
    </div>
    <div class="doc-section-block">
      <h3 class="doc-section-h3">2. ${isVi ? 'Tuyên bố vấn đề (Problem Statement)' : 'Problem Statement'}</h3>
      ${sec2Body}
    </div>
    <div class="doc-section-block">
      <h3 class="doc-section-h3">3. ${isVi ? 'Kiến trúc giải pháp (Solution Architecture)' : 'Solution Architecture'}</h3>
      ${sec3Body}
    </div>
    <div class="doc-section-block">
      <h3 class="doc-section-h3">4. ${isVi ? 'Triển khai kỹ thuật (Technical Implementation)' : 'Technical Implementation'}</h3>
      ${sec4Body}
    </div>
    <div class="doc-section-block">
      <h3 class="doc-section-h3">5. ${isVi ? 'Lộ trình & Mốc triển khai (Timeline & Milestones)' : 'Timeline & Milestones'}</h3>
      ${sec5Body}
    </div>
    <div class="doc-section-block">
      <h3 class="doc-section-h3">6. ${isVi ? 'Ước tính ngân sách (Budget Estimation)' : 'Budget Estimation'}</h3>
      ${sec6Body}
    </div>
    <div class="doc-section-block">
      <h3 class="doc-section-h3">7. ${isVi ? 'Đánh giá rủi ro (Risk Assessment)' : 'Risk Assessment'}</h3>
      ${sec7Body}
    </div>
    <div class="doc-section-block">
      <h3 class="doc-section-h3">8. ${isVi ? 'Kết quả kỳ vọng (Expected Outcomes)' : 'Expected Outcomes'}</h3>
      ${sec8Body}
    </div>
  `;
}

function setupProposal() {
  document.getElementById('btn-toggle-proposal-edit')?.addEventListener('click', () => {
    app.editModes.proposal = !app.editModes.proposal;
    renderProposalModule();
  });

  document.getElementById('prop-arch-img-input')?.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      app.data.proposal.archImgDataUrl = ev.target.result;
      app.saveData();
      renderProposalModule();
    };
    reader.readAsDataURL(file);
  });

  document.getElementById('btn-remove-prop-img')?.addEventListener('click', () => {
    app.data.proposal.archImgDataUrl = '';
    app.saveData();
    renderProposalModule();
  });

  document.getElementById('btn-save-proposal')?.addEventListener('click', () => {
    const lang = app.currentLang;
    const val = (id) => document.getElementById(id)?.value.trim() || '';
    app.data.proposal[lang] = {
      title: val('prop-title'),
      subtitle: val('prop-subtitle'),
      summary: val('prop-summary'),
      problem: val('prop-problem'),
      solution: val('prop-solution'),
      roi: val('prop-roi'),
      arch: val('prop-arch'),
      services: val('prop-services'),
      tech: val('prop-tech'),
      timeline: val('prop-timeline'),
      calcUrl: val('prop-calc-url'),
      budget: val('prop-budget'),
      risks: val('prop-risks'),
      outcomes: val('prop-outcomes')
    };
    app.editModes.proposal = false;
    app.saveData();
    renderProposalModule();
    showToast(t('toastSaveProposal'));
  });

  document.getElementById('btn-clear-proposal')?.addEventListener('click', () => {
    if (!confirm(t('confirmClearSection'))) return;
    const lang = app.currentLang;
    app.data.proposal.archImgDataUrl = '';
    app.data.proposal[lang] = {
      title: '', subtitle: '', summary: '', problem: '', solution: '', roi: '',
      arch: '', services: '', tech: '', timeline: '', calcUrl: '', budget: '', risks: '', outcomes: ''
    };
    app.saveData();
    renderProposalModule();
    showToast(t('toastClearSection'));
  });
}


// ==========================================
// 10. VIEW 3: BLOGS POSTED (OVERVIEW + 3.1..3.3)
// ==========================================
function renderBlogsRoute() {
  const container = document.getElementById('blogs-dynamic-container');
  if (!container) return;

  const lang = app.currentLang;
  const isVi = lang === 'vi';
  const route = app.currentRoute;

  if (route.startsWith('blogs-posted/blog-')) {
    const blogNum = parseInt(route.replace('blogs-posted/blog-', ''), 10) || 1;
    let entry = (app.data.blogEntries || []).find(b => b.num === blogNum);
    if (!entry) {
      entry = { num: blogNum, vi: { title: '', date: '', url: '', summary: '', content: '' }, en: { title: '', date: '', url: '', summary: '', content: '' } };
      app.data.blogEntries.push(entry);
    }
    const c = entry[lang] || entry.vi;
    const isDone = isBlogPopulated(entry, lang);
    const isEditing = Boolean(app.editModes.blog[blogNum]);

    container.innerHTML = `
      <div class="section-header-flex">
        <div>
          <h2 class="section-title">3.${blogNum}. Blog ${blogNum}</h2>
          <p class="section-subtitle">${isVi ? 'Bài viết kỹ thuật / dịch thuật đăng tải trên cộng đồng AWS Study Group' : 'Technical / translated blog post published on AWS Study Group'}</p>
        </div>
        <div class="header-action-group">
          <button type="button" class="btn btn-outline btn-sm" onclick="navigateTo('blogs-posted')">← ${isVi ? 'Danh sách Blogs' : 'All Blogs'}</button>
          <button type="button" class="btn btn-primary btn-sm" onclick="toggleBlogEdit(${blogNum})">
            ✏️ ${isEditing ? (isVi ? 'Đóng chỉnh sửa' : 'Close Editor') : (isVi ? 'Cập nhật bài Blog' : 'Edit Blog')}
          </button>
        </div>
      </div>

      <div class="card" style="margin-top: 1.25rem;">
        ${isEditing ? `
          <div class="editor-mode-banner">
            <span>${isVi ? `✏️ Cập nhật nội dung cho mục 3.${blogNum}. Blog ${blogNum}` : `✏️ Edit content for 3.${blogNum}. Blog ${blogNum}`}</span>
            <div style="display:flex;gap:8px;">
              <button type="button" class="btn btn-outline-danger btn-sm" onclick="clearBlogEntry(${blogNum})">${t('btnClearSection')}</button>
              <button type="button" class="btn btn-primary btn-sm" onclick="saveBlogEntry(${blogNum})">${t('btnModalSave')}</button>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">${isVi ? 'Tiêu đề bài Blog kỹ thuật / bài dịch' : 'Blog Post Title'}</label>
            <input type="text" id="blog-edit-title-${blogNum}" class="form-control" value="${escapeHtml(c.title)}" placeholder="${isVi ? 'Nhập tiêu đề bài viết...' : 'Enter blog title...'}">
          </div>
          <div class="form-row">
            <div class="form-group col-half">
              <label class="form-label">${isVi ? 'Ngày xuất bản' : 'Published Date'}</label>
              <input type="text" id="blog-edit-date-${blogNum}" class="form-control" value="${escapeHtml(c.date)}" placeholder="VD: 25/10/2026">
            </div>
            <div class="form-group col-half">
              <label class="form-label">${isVi ? 'Đường dẫn bài viết (AWS Study Group URL)' : 'Published Article URL'}</label>
              <input type="url" id="blog-edit-url-${blogNum}" class="form-control" value="${escapeHtml(c.url)}" placeholder="https://awsstudygroup.com/...">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">${isVi ? 'Tóm tắt nội dung & Giá trị kỹ thuật' : 'Executive Summary & Key Takeaways'}</label>
            <textarea id="blog-edit-summary-${blogNum}" class="form-control report-textarea" rows="3" placeholder="${isVi ? 'Tóm tắt ngắn gọn chủ đề và dịch vụ AWS trong bài blog...' : 'Short summary of the blog topic...'}">${escapeHtml(c.summary)}</textarea>
          </div>
          <div class="form-group" style="margin-bottom:0;">
            <label class="form-label">${isVi ? 'Nội dung chi tiết / Bản dịch bài Blog' : 'Full Blog Content / Translation'}</label>
            <textarea id="blog-edit-content-${blogNum}" class="form-control report-textarea" rows="8" placeholder="${isVi ? 'Trình bày chi tiết nội dung bài viết hoặc bản dịch kỹ thuật...' : 'Full article content...'}">${escapeHtml(c.content)}</textarea>
          </div>
        ` : (isDone ? `
          <div class="doc-section-block">
            <h3 style="font-size:19px;font-weight:800;color:var(--text-main);">${escapeHtml(c.title || `Blog ${blogNum}`)}</h3>
            <div style="margin-top:8px;display:flex;gap:14px;flex-wrap:wrap;font-size:13px;color:var(--text-muted);">
              ${c.date ? `<span>📅 <strong>${isVi ? 'Ngày đăng:' : 'Date:'}</strong> ${escapeHtml(c.date)}</span>` : ''}
              ${c.url ? `<span>🔗 <a href="${escapeHtml(c.url)}" target="_blank" rel="noopener" style="color:#2563EB;font-weight:700;">${escapeHtml(c.url)}</a></span>` : ''}
            </div>
          </div>
          ${c.summary ? `
            <div class="doc-section-block">
              <h4 class="doc-section-h4">${isVi ? 'Tóm tắt nội dung' : 'Summary'}</h4>
              <div class="doc-prose">${escapeHtml(c.summary)}</div>
            </div>
          ` : ''}
          ${c.content ? `
            <div class="doc-section-block">
              <h4 class="doc-section-h4">${isVi ? 'Nội dung chi tiết' : 'Detailed Content'}</h4>
              <div class="doc-prose">${escapeHtml(c.content)}</div>
            </div>
          ` : ''}
        ` : `
          ${renderPlannedCallout(
            isVi
              ? `Dự định thực hiện tại mục 3.${blogNum}. Blog ${blogNum}:\n- Mục này hiện đang để trống vì bài Blog ${blogNum} chưa được đăng tải.\n- Dự định: Biên soạn hoặc dịch thuật bài viết chuyên sâu về kiến trúc & dịch vụ AWS (Security, Networking, Serverless, AI/ML) và xuất bản trên cộng đồng AWS Study Group.\n- Các thông tin sẽ cập nhật tại đây gồm: Tiêu đề bài viết, Ngày đăng, Link bài viết gốc/bản dịch trên AWS Study Group, Tóm tắt kỹ thuật và Nội dung chi tiết.`
              : `Planned content for 3.${blogNum}. Blog ${blogNum}:\n- This section is currently empty as Blog ${blogNum} has not been published yet.\n- Planned: Author or translate an in-depth AWS technical article on AWS Study Group and record the Title, Date, URL, Summary, and Content here.`
          )}
        `)}
      </div>
    `;
    return;
  }

  // Overview Mode (#/blogs-posted)
  const cardsHtml = (app.data.blogEntries || []).map(b => {
    const c = b[lang] || b.vi;
    const isDone = isBlogPopulated(b, lang);
    const statusBadge = isDone
      ? `<span class="badge-completed">✓ ${isVi ? 'Đã đăng tải' : 'Published'}</span>`
      : `<span class="badge-planned">📌 ${isVi ? 'Đang trống (Dự định)' : 'Planned'}</span>`;
    const titleText = (c && c.title) ? c.title : (isVi ? `Dự định bài viết kỹ thuật / dịch thuật số ${b.num}` : `Planned Technical / Translated Blog #${b.num}`);
    const descText = (c && c.summary)
      ? c.summary
      : (isVi
          ? `Đang để trống — Dự định trình bày tiêu đề, đường dẫn trên AWS Study Group và nội dung bài Blog ${b.num} sau khi xuất bản.`
          : `Currently empty — Planned to document Blog ${b.num} title, AWS Study Group link, and technical summary once published.`);

    return `
      <div class="week-overview-card ${isDone ? 'completed' : 'planned'}" onclick="navigateTo('blogs-posted/blog-${b.num}')">
        <div class="week-overview-top">
          <span class="week-overview-title">3.${b.num}. Blog ${b.num}</span>
          ${statusBadge}
        </div>
        <div style="font-weight:700;color:var(--text-main);font-size:13.8px;">${escapeHtml(titleText)}</div>
        <div class="week-overview-desc">${escapeHtml(descText)}</div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="section-header-flex">
      <div>
        <h2 class="section-title">${isVi ? '3. Các bài blogs đã đăng' : '3. Blogs Posted'}</h2>
        <p class="section-subtitle">${isVi ? 'Tổng hợp các bài viết kỹ thuật và bài dịch chia sẻ trên cộng đồng AWS Study Group (Tối thiểu 3 bài theo quy định FCAJ)' : 'Technical and translated articles published on the AWS Study Group community (Minimum 3 blogs per FCAJ rules)'}</p>
      </div>
      <button type="button" class="btn btn-primary btn-sm" onclick="navigateTo('blogs-posted/blog-1')">
        <span>${isVi ? 'Mở 3.1. Blog 1 →' : 'Open 3.1. Blog 1 →'}</span>
      </button>
    </div>

    <div class="card" style="margin-top: 1.25rem;">
      <div class="doc-callout">
        ${isVi
          ? `<strong>Giới thiệu mục 3 (Các bài blogs đã đăng):</strong> Theo quy định của chương trình <strong>AWS First Cloud AI Journey</strong>, thực tập sinh thực hiện viết hoặc dịch tối thiểu <strong>3 bài blog kỹ thuật</strong> chia sẻ kiến thức về các dịch vụ AWS. Nhấn vào từng mục <strong>3.1, 3.2, 3.3</strong> bên dưới để xem dự định thực hiện hoặc cập nhật nội dung.`
          : `<strong>Section 3 Overview (Blogs Posted):</strong> Per <strong>AWS First Cloud AI Journey</strong> guidelines, interns author or translate at least <strong>3 technical blog posts</strong> on AWS services. Click on <strong>3.1, 3.2, 3.3</strong> below to view planned content or update details.`}
      </div>
      <div class="overview-weeks-grid">${cardsHtml}</div>
    </div>
  `;
}

window.toggleBlogEdit = function(num) {
  app.editModes.blog[num] = !app.editModes.blog[num];
  renderBlogsRoute();
};

window.saveBlogEntry = function(num) {
  const lang = app.currentLang;
  const entry = (app.data.blogEntries || []).find(b => b.num === num);
  if (!entry) return;
  entry[lang] = {
    title: document.getElementById(`blog-edit-title-${num}`)?.value.trim() || '',
    date: document.getElementById(`blog-edit-date-${num}`)?.value.trim() || '',
    url: document.getElementById(`blog-edit-url-${num}`)?.value.trim() || '',
    summary: document.getElementById(`blog-edit-summary-${num}`)?.value.trim() || '',
    content: document.getElementById(`blog-edit-content-${num}`)?.value.trim() || ''
  };
  app.editModes.blog[num] = false;
  app.saveData();
  renderBlogsRoute();
  showToast(t('toastSaveBlog'));
};

window.clearBlogEntry = function(num) {
  if (!confirm(t('confirmClearSection'))) return;
  const lang = app.currentLang;
  const entry = (app.data.blogEntries || []).find(b => b.num === num);
  if (!entry) return;
  entry[lang] = { title: '', date: '', url: '', summary: '', content: '' };
  app.editModes.blog[num] = false;
  app.saveData();
  renderBlogsRoute();
  showToast(t('toastClearSection'));
};

// ==========================================
// 11. VIEW 4: EVENTS PARTICIPATED (OVERVIEW + 4.1..4.3)
// ==========================================
function renderEventsRoute() {
  const container = document.getElementById('events-dynamic-container');
  if (!container) return;

  const lang = app.currentLang;
  const isVi = lang === 'vi';
  const route = app.currentRoute;

  if (route.startsWith('events/event-')) {
    const evNum = parseInt(route.replace('events/event-', ''), 10) || 1;
    let entry = (app.data.eventEntries || []).find(e => e.num === evNum);
    if (!entry) return;
    const c = entry[lang] || entry.vi;
    const isDone = isEventPopulated(entry, lang);
    const isEditing = Boolean(app.editModes.event[evNum]);
    const photos = entry.photos || [];

    const photosHtml = photos.length > 0
      ? `<div class="event-photos-grid">
           ${photos.map((item, idx) => {
             const src = typeof item === 'string' ? item : (item && item.url ? item.url : '');
             const cap = typeof item === 'string' ? `Ảnh ${idx + 1}` : (item ? (isVi ? (item.caption || '') : (item.captionEn || item.caption || '')) : '');
             return `
             <div class="event-photo-card">
               <img src="${src}" alt="${escapeHtml(cap || `Event ${evNum} Photo ${idx + 1}`)}" onclick="window.open('${src}', '_blank')" style="cursor: zoom-in;" title="${escapeHtml(cap || 'Click để xem ảnh kích thước gốc')}">
               ${cap ? `<div class="event-photo-caption" style="padding: 8px 10px; font-size: 11.5px; line-height: 1.4; color: var(--text-secondary); background: #ffffff; border-top: 1px solid var(--border-light); font-weight: 500;">${escapeHtml(cap)}</div>` : ''}
               ${isEditing ? `<button type="button" class="event-photo-remove" onclick="removeEventPhoto(${evNum}, ${idx})">✕</button>` : ''}
             </div>`;
           }).join('')}
         </div>`
      : renderPlannedCallout(
          isVi
            ? "Dự định đính kèm hình ảnh sự kiện (Bắt buộc theo quy định chuyên cần FCAJ):\n- Tải lên các hình ảnh check-in rõ mặt tại sự kiện / hội thảo AWS để làm minh chứng tham dự hợp lệ."
            : "Planned Event Check-in Photos (Required for FCAJ attendance verification):\n- Upload clear check-in photos taken at the AWS event/workshop."
        );

    container.innerHTML = `
      <div class="section-header-flex">
        <div>
          <h2 class="section-title">4.${evNum}. Event ${evNum}</h2>
          <p class="section-subtitle">${isVi ? 'Báo cáo thu hoạch sự kiện theo cấu trúc 7 mục chuẩn fcj-workshop-template' : 'Event participation report following the official 7-part fcj-workshop-template'}</p>
        </div>
        <div class="header-action-group">
          <button type="button" class="btn btn-outline btn-sm" onclick="navigateTo('events')">← ${isVi ? 'Danh sách Events' : 'All Events'}</button>
          <button type="button" class="btn btn-primary btn-sm" onclick="toggleEventEdit(${evNum})">
            ✏️ ${isEditing ? (isVi ? 'Đóng chỉnh sửa' : 'Close Editor') : (isVi ? 'Cập nhật Event' : 'Edit Event')}
          </button>
        </div>
      </div>

      <div class="card" style="margin-top: 1.25rem;">
        ${isEditing ? `
          <div class="editor-mode-banner">
            <span>${isVi ? `✏️ Cập nhật báo cáo thu hoạch cho mục 4.${evNum}. Event ${evNum}` : `✏️ Edit Event Report for 4.${evNum}. Event ${evNum}`}</span>
            <div style="display:flex;gap:8px;">
              <button type="button" class="btn btn-outline-danger btn-sm" onclick="clearEventEntry(${evNum})">${t('btnClearSection')}</button>
              <button type="button" class="btn btn-primary btn-sm" onclick="saveEventEntry(${evNum})">${t('btnModalSave')}</button>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-half">
              <label class="form-label">${isVi ? 'Tên sự kiện / Hội thảo' : 'Event Name'}</label>
              <input type="text" id="ev-name-${evNum}" class="form-control" value="${escapeHtml(c.name)}" placeholder="VD: AWS Cloud Day / AWS GenAI Workshop...">
            </div>
            <div class="form-group col-half">
              <label class="form-label">${isVi ? 'Thời gian diễn ra' : 'Date & Time'}</label>
              <input type="text" id="ev-time-${evNum}" class="form-control" value="${escapeHtml(c.time)}" placeholder="VD: 08:30, 18/10/2026">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-half">
              <label class="form-label">${isVi ? 'Địa điểm tổ chức' : 'Location'}</label>
              <input type="text" id="ev-loc-${evNum}" class="form-control" value="${escapeHtml(c.location)}" placeholder="VD: Tầng 26, Bitexco Financial Tower, Quận 1, TP.HCM">
            </div>
            <div class="form-group col-half">
              <label class="form-label">${isVi ? 'Vai trò trong sự kiện' : 'Role'}</label>
              <input type="text" id="ev-role-${evNum}" class="form-control" value="${escapeHtml(c.role)}" placeholder="VD: Người tham dự (Attendee)">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">${isVi ? '1. Mục đích của sự kiện' : '1. Purpose of the Event'}</label>
            <textarea id="ev-purpose-${evNum}" class="form-control report-textarea" rows="3">${escapeHtml(c.purpose)}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label">${isVi ? '2. Danh sách diễn giả (Speakers)' : '2. Speakers List'}</label>
            <textarea id="ev-speakers-${evNum}" class="form-control report-textarea" rows="3" placeholder="- Diễn giả A (Solutions Architect tại AWS)...">${escapeHtml(c.speakers)}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label">${isVi ? '3. Nội dung nổi bật (Key Highlights)' : '3. Key Highlights'}</label>
            <textarea id="ev-highlights-${evNum}" class="form-control report-textarea" rows="4">${escapeHtml(c.highlights)}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label">${isVi ? '4. Những gì học được (Key Takeaways)' : '4. What Was Learned (Key Takeaways)'}</label>
            <textarea id="ev-learnings-${evNum}" class="form-control report-textarea" rows="4">${escapeHtml(c.learnings)}</textarea>
          </div>
          <div class="form-group">
            <label class="form-label">${isVi ? '5. Ứng dụng vào công việc & Trải nghiệm trong event' : '5. Practical Application & Event Experience'}</label>
            <textarea id="ev-exp-${evNum}" class="form-control report-textarea" rows="4">${escapeHtml(c.experience)}</textarea>
          </div>
          <div class="form-group" style="margin-bottom:0;">
            <label class="form-label">${isVi ? '6. Một số hình ảnh khi tham gia sự kiện (Ảnh check-in rõ mặt)' : '6. Event Participation Photos (Clear face check-in)'}</label>
            <label class="btn btn-outline btn-sm" style="cursor:pointer;">
              <span>📷 ${isVi ? 'Tải ảnh sự kiện lên' : 'Upload Event Photo'}</span>
              <input type="file" accept="image/*" style="display:none;" onchange="handleEventPhotoUpload(event, ${evNum})">
            </label>
            ${photosHtml}
          </div>
        ` : `
          <div class="doc-section-block">
            <h3 class="doc-section-h3">1. ${isVi ? 'Thông tin sự kiện' : 'Event Information'}</h3>
            ${isDone ? `
              <ul style="margin-left:18px;line-height:1.8;">
                <li><strong>${isVi ? 'Tên sự kiện:' : 'Event Name:'}</strong> ${escapeHtml(c.name || '—')}</li>
                <li><strong>${isVi ? 'Thời gian:' : 'Date & Time:'}</strong> ${escapeHtml(c.time || '—')}</li>
                <li><strong>${isVi ? 'Địa điểm:' : 'Location:'}</strong> ${escapeHtml(c.location || '—')}</li>
                <li><strong>${isVi ? 'Vai trò:' : 'Role:'}</strong> ${escapeHtml(c.role || '—')}</li>
              </ul>
            ` : renderPlannedCallout(isVi
              ? `Dự định cập nhật tại mục 4.${evNum} (Thông tin sự kiện):\n- Ghi rõ Tên sự kiện / Workshop AWS tham dự, Thời gian (Giờ, Ngày/Tháng/Năm), Địa điểm tổ chức (VD: Bitexco Financial Tower) và Vai trò tham dự.`
              : `Planned for 4.${evNum} (Event Information):\n- Event Name, Date & Time, Venue Location, and Role.`)}
          </div>

          <div class="doc-section-block">
            <h3 class="doc-section-h3">2. ${isVi ? 'Mục đích của sự kiện' : 'Event Purpose'}</h3>
            ${c.purpose ? `<div class="doc-prose">${escapeHtml(c.purpose)}</div>` : renderPlannedCallout(isVi
              ? "Dự định trình bày: Nêu mục tiêu chính của buổi hội thảo/workshop và đối tượng kỹ sư/sinh viên mà sự kiện hướng tới."
              : "Planned: Describe the primary goal and target audience of the event.")}
          </div>

          <div class="doc-section-block">
            <h3 class="doc-section-h3">3. ${isVi ? 'Danh sách diễn giả (Speakers)' : 'Speakers'}</h3>
            ${c.speakers ? `<div class="doc-prose">${escapeHtml(c.speakers)}</div>` : renderPlannedCallout(isVi
              ? "Dự định trình bày: Liệt kê họ tên, chức danh (Solutions Architect, Cloud Engineer, Community Hero...) của các diễn giả trình bày trong sự kiện."
              : "Planned: List the speakers and their roles/titles.")}
          </div>

          <div class="doc-section-block">
            <h3 class="doc-section-h3">4. ${isVi ? 'Nội dung nổi bật (Key Highlights)' : 'Key Highlights'}</h3>
            ${c.highlights ? `<div class="doc-prose">${escapeHtml(c.highlights)}</div>` : renderPlannedCallout(isVi
              ? "Dự định trình bày: Tóm tắt các phiên chia sẻ kỹ thuật (Sessions), kiến trúc AWS và bản demo thực tế được trình bày tại sự kiện."
              : "Planned: Summarize the main technical sessions, AWS architectures, and live demos.")}
          </div>

          <div class="doc-section-block">
            <h3 class="doc-section-h3">5. ${isVi ? 'Những gì học được (Key Takeaways)' : 'Key Takeaways'}</h3>
            ${c.learnings ? `<div class="doc-prose">${escapeHtml(c.learnings)}</div>` : renderPlannedCallout(isVi
              ? "Dự định trình bày: Đúc kết các kiến thức chuyên môn, tư duy thiết kế hệ thống và best practices học hỏi được từ các chuyên gia AWS."
              : "Planned: Document key technical learnings and architectural best practices.")}
          </div>

          <div class="doc-section-block">
            <h3 class="doc-section-h3">6. ${isVi ? 'Ứng dụng vào công việc & Trải nghiệm trong event' : 'Application & Event Experience'}</h3>
            ${c.experience ? `<div class="doc-prose">${escapeHtml(c.experience)}</div>` : renderPlannedCallout(isVi
              ? "Dự định trình bày: Cách áp dụng kiến thức từ sự kiện vào đồ án thực tập của nhóm, trải nghiệm giao lưu kết nối (Networking) và bài học rút ra."
              : "Planned: Explain how learnings will be applied to the internship project and personal reflections.")}
          </div>

          <div class="doc-section-block">
            <h3 class="doc-section-h3">7. ${isVi ? 'Một số hình ảnh khi tham gia sự kiện' : 'Event Participation Photos'}</h3>
            ${photosHtml}
          </div>
        `}
      </div>
    `;
    return;
  }

  // Overview Mode (#/events)
  const cardsHtml = (app.data.eventEntries || []).map(ev => {
    const c = ev[lang] || ev.vi;
    const isDone = isEventPopulated(ev, lang);
    const statusBadge = isDone
      ? `<span class="badge-completed">✓ ${isVi ? 'Đã tham gia' : 'Completed'}</span>`
      : `<span class="badge-planned">📌 ${isVi ? 'Đang trống (Dự định)' : 'Planned'}</span>`;
    const titleText = (c && c.name) ? c.name : (isVi ? `Dự định báo cáo thu hoạch Sự kiện số ${ev.num}` : `Planned Event Participation Report #${ev.num}`);
    const descText = (c && c.highlights)
      ? c.highlights
      : (isVi
          ? `Đang để trống — Dự định cập nhật thông tin sự kiện, diễn giả, nội dung nổi bật, bài học rút ra và ảnh check-in của Event ${ev.num}.`
          : `Currently empty — Planned to record event details, speakers, highlights, takeaways, and check-in photos for Event ${ev.num}.`);

    return `
      <div class="week-overview-card ${isDone ? 'completed' : 'planned'}" onclick="navigateTo('events/event-${ev.num}')">
        <div class="week-overview-top">
          <span class="week-overview-title">4.${ev.num}. Event ${ev.num}</span>
          ${statusBadge}
        </div>
        <div style="font-weight:700;color:var(--text-main);font-size:13.8px;">${escapeHtml(titleText)}</div>
        <div class="week-overview-desc">${escapeHtml(descText)}</div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="section-header-flex">
      <div>
        <h2 class="section-title">${isVi ? '4. Các events đã tham gia' : '4. Events Participated'}</h2>
        <p class="section-subtitle">${isVi ? 'Nhật ký tham dự các buổi hội thảo công nghệ, AWS Cloud Day và Workshop (Tối thiểu 3 sự kiện kèm ảnh check-in rõ mặt)' : 'Reports on attended AWS workshops and events (Minimum 3 events with check-in photos)'}</p>
      </div>
      <button type="button" class="btn btn-primary btn-sm" onclick="navigateTo('events/event-1')">
        <span>${isVi ? 'Mở 4.1. Event 1 →' : 'Open 4.1. Event 1 →'}</span>
      </button>
    </div>

    <div class="card" style="margin-top: 1.25rem;">
      <div class="doc-callout">
        ${isVi
          ? `<strong>Giới thiệu mục 4 (Các events đã tham gia):</strong> Trong quá trình thực tập tại <strong>AWS First Cloud AI Journey</strong>, thực tập sinh tham gia tối thiểu <strong>3 sự kiện/workshop</strong> và ghi nhận báo cáo thu hoạch chi tiết gồm 7 phần (Thông tin sự kiện, Mục đích, Diễn giả, Nội dung nổi bật, Những gì học được, Trải nghiệm và Hình ảnh check-in).`
          : `<strong>Section 4 Overview (Events Participated):</strong> During the internship, interns participate in at least <strong>3 AWS events/workshops</strong> and document a 7-part reflection report with check-in photos.`}
      </div>
      <div class="overview-weeks-grid">${cardsHtml}</div>
    </div>
  `;
}

window.toggleEventEdit = function(num) {
  app.editModes.event[num] = !app.editModes.event[num];
  renderEventsRoute();
};

window.saveEventEntry = function(num) {
  const lang = app.currentLang;
  const entry = (app.data.eventEntries || []).find(e => e.num === num);
  if (!entry) return;
  entry[lang] = {
    name: document.getElementById(`ev-name-${num}`)?.value.trim() || '',
    time: document.getElementById(`ev-time-${num}`)?.value.trim() || '',
    location: document.getElementById(`ev-loc-${num}`)?.value.trim() || '',
    role: document.getElementById(`ev-role-${num}`)?.value.trim() || '',
    purpose: document.getElementById(`ev-purpose-${num}`)?.value.trim() || '',
    speakers: document.getElementById(`ev-speakers-${num}`)?.value.trim() || '',
    highlights: document.getElementById(`ev-highlights-${num}`)?.value.trim() || '',
    learnings: document.getElementById(`ev-learnings-${num}`)?.value.trim() || '',
    experience: document.getElementById(`ev-exp-${num}`)?.value.trim() || ''
  };
  app.editModes.event[num] = false;
  app.saveData();
  renderEventsRoute();
  showToast(t('toastSaveEvent'));
};

window.clearEventEntry = function(num) {
  if (!confirm(t('confirmClearSection'))) return;
  const lang = app.currentLang;
  const entry = (app.data.eventEntries || []).find(e => e.num === num);
  if (!entry) return;
  entry.photos = [];
  entry[lang] = { name: '', time: '', location: '', role: '', purpose: '', speakers: '', highlights: '', learnings: '', experience: '' };
  app.editModes.event[num] = false;
  app.saveData();
  renderEventsRoute();
  showToast(t('toastClearSection'));
};

window.handleEventPhotoUpload = function(e, num) {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  const entry = (app.data.eventEntries || []).find(ev => ev.num === num);
  if (!entry) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    if (!entry.photos) entry.photos = [];
    entry.photos.push(ev.target.result);
    app.saveData();
    renderEventsRoute();
  };
  reader.readAsDataURL(file);
};

window.removeEventPhoto = function(num, photoIdx) {
  const entry = (app.data.eventEntries || []).find(ev => ev.num === num);
  if (!entry || !Array.isArray(entry.photos)) return;
  entry.photos.splice(photoIdx, 1);
  app.saveData();
  renderEventsRoute();
};

// ==========================================
// 12. VIEW 5: WORKSHOP (OVERVIEW + 5.1..5.6)
// ==========================================
function renderWorkshopRoute() {
  const container = document.getElementById('workshop-dynamic-container');
  if (!container) return;

  const lang = app.currentLang;
  const isVi = lang === 'vi';
  const route = app.currentRoute;
  const defs = WORKSHOP_CHAPTER_DEFINITIONS[lang] || WORKSHOP_CHAPTER_DEFINITIONS.vi;

  if (route.startsWith('workshop/5.')) {
    const code = route.replace('workshop/', '');
    const defObj = defs.find(d => d.code === code) || defs[0];
    let ch = (app.data.workshopChapters || []).find(c => c.code === code);
    if (!ch) {
      ch = { code, vi: { customTitle: '', content: '', notes: '' }, en: { customTitle: '', content: '', notes: '' } };
      app.data.workshopChapters.push(ch);
    }
    const c = ch[lang] || ch.vi;
    const isDone = isWorkshopStepPopulated(ch, lang);
    const isEditing = Boolean(app.editModes.workshop[code]);

    container.innerHTML = `
      <div class="section-header-flex">
        <div>
          <h2 class="section-title">${escapeHtml(c.customTitle || defObj.title)}</h2>
          <p class="section-subtitle">${isVi ? 'Hướng dẫn thực hành triển khai kỹ thuật (Hands-on Lab) trên hạ tầng AWS' : 'Step-by-step Hands-on Lab implementation guide on AWS'}</p>
        </div>
        <div class="header-action-group">
          <button type="button" class="btn btn-outline btn-sm" onclick="navigateTo('workshop')">← ${isVi ? 'Tổng quan Workshop' : 'Workshop Overview'}</button>
          <button type="button" class="btn btn-primary btn-sm" onclick="toggleWorkshopEdit('${code}')">
            ✏️ ${isEditing ? (isVi ? 'Đóng chỉnh sửa' : 'Close Editor') : (isVi ? 'Cập nhật bước này' : 'Edit Chapter')}
          </button>
        </div>
      </div>

      <div class="card" style="margin-top: 1.25rem;">
        ${isEditing ? `
          <div class="editor-mode-banner">
            <span>${isVi ? `✏️ Soạn thảo nội dung cho mục ${defObj.title}` : `✏️ Edit content for ${defObj.title}`}</span>
            <div style="display:flex;gap:8px;">
              <button type="button" class="btn btn-outline-danger btn-sm" onclick="clearWorkshopChapter('${code}')">${t('btnClearSection')}</button>
              <button type="button" class="btn btn-primary btn-sm" onclick="saveWorkshopChapter('${code}')">${t('btnModalSave')}</button>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">${isVi ? 'Tiêu đề tùy chỉnh (để trống nếu dùng tiêu đề chuẩn)' : 'Custom Chapter Title (optional)'}</label>
            <input type="text" id="ws-title-${code}" class="form-control" value="${escapeHtml(c.customTitle)}" placeholder="${escapeHtml(defObj.title)}">
          </div>
          <div class="form-group">
            <label class="form-label">${isVi ? 'Nội dung hướng dẫn từng bước (Step-by-step, cấu hình, CLI...)' : 'Step-by-Step Instructions & Configuration'}</label>
            <textarea id="ws-content-${code}" class="form-control report-textarea" rows="8" placeholder="${isVi ? 'Nhập chi tiết các bước thực hiện...' : 'Enter step-by-step instructions...'}">${escapeHtml(c.content)}</textarea>
          </div>
          <div class="form-group" style="margin-bottom:0;">
            <label class="form-label">${isVi ? 'Ghi chú kiểm tra / Lưu ý bảo mật & chi phí' : 'Verification Notes / Security & Cost Tips'}</label>
            <textarea id="ws-notes-${code}" class="form-control report-textarea" rows="3">${escapeHtml(c.notes)}</textarea>
          </div>
        ` : (isDone ? `
          <div class="doc-section-block">
            <h3 class="doc-section-h3">${escapeHtml(c.customTitle || defObj.title)}</h3>
            <div class="doc-prose">${escapeHtml(c.content)}</div>
          </div>
          ${c.notes ? `
            <div class="doc-section-block">
              <h4 class="doc-section-h4">${isVi ? 'Lưu ý & Kiểm tra kết quả' : 'Verification & Notes'}</h4>
              <div class="doc-prose">${escapeHtml(c.notes)}</div>
            </div>
          ` : ''}
        ` : `
          ${renderPlannedCallout(defObj.planned)}
        `)}
      </div>
    `;
    return;
  }

  // Overview Mode (#/workshop)
  const cardsHtml = defs.map(d => {
    const ch = (app.data.workshopChapters || []).find(c => c.code === d.code);
    const c = ch ? (ch[lang] || ch.vi) : {};
    const isDone = isWorkshopStepPopulated(ch, lang);
    const statusBadge = isDone
      ? `<span class="badge-completed">✓ ${isVi ? 'Đã cập nhật' : 'Completed'}</span>`
      : `<span class="badge-planned">📌 ${isVi ? 'Đang trống (Dự định)' : 'Planned'}</span>`;
    const descText = (c && c.content) ? c.content.split('\n')[0] : d.planned.split('\n').slice(1).join(' ');

    return `
      <div class="week-overview-card ${isDone ? 'completed' : 'planned'}" onclick="navigateTo('workshop/${d.code}')">
        <div class="week-overview-top">
          <span class="week-overview-title">${escapeHtml(c.customTitle || d.title)}</span>
          ${statusBadge}
        </div>
        <div class="week-overview-desc">${escapeHtml(descText)}</div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="section-header-flex">
      <div>
        <h2 class="section-title">${isVi ? '5. Bài thực hành Workshop' : '5. Technical Workshop'}</h2>
        <p class="section-subtitle">${isVi ? 'Cấu trúc 6 chương hướng dẫn thực hành (Hands-on Lab) từ bước chuẩn bị đến dọn dẹp tài nguyên theo chuẩn fcj-workshop-template' : '6-chapter Hands-on Lab tutorial from Prerequisites to Clean up Resources aligned with fcj-workshop-template'}</p>
      </div>
      <button type="button" class="btn btn-primary btn-sm" onclick="navigateTo('workshop/5.1')">
        <span>${isVi ? 'Bắt đầu từ 5.1 →' : 'Start at 5.1 →'}</span>
      </button>
    </div>

    <div class="card" style="margin-top: 1.25rem;">
      <div class="doc-callout">
        ${isVi
          ? `<strong>Giới thiệu mục 5 (Workshop):</strong> Tại đây trình bày bài hướng dẫn thực hành (Hands-on Workshop) do sinh viên tự thiết kế và kiểm chứng trên AWS, gồm đầy đủ 6 phần chuẩn từ <strong>5.1 Tổng quan</strong>, <strong>5.2 Chuẩn bị</strong>, <strong>5.3–5.5 Triển khai & Kiểm thử</strong> đến <strong>5.6 Dọn dẹp tài nguyên (Clean up)</strong>.`
          : `<strong>Section 5 Overview (Workshop):</strong> Complete 6-part hands-on AWS technical workshop guide from <strong>5.1 Overview</strong> and <strong>5.2 Prerequisites</strong> through <strong>5.6 Clean up Resources</strong>.`}
      </div>
      <div class="overview-weeks-grid">${cardsHtml}</div>
    </div>
  `;
}

window.toggleWorkshopEdit = function(code) {
  app.editModes.workshop[code] = !app.editModes.workshop[code];
  renderWorkshopRoute();
};

window.saveWorkshopChapter = function(code) {
  const lang = app.currentLang;
  const ch = (app.data.workshopChapters || []).find(c => c.code === code);
  if (!ch) return;
  ch[lang] = {
    customTitle: document.getElementById(`ws-title-${code}`)?.value.trim() || '',
    content: document.getElementById(`ws-content-${code}`)?.value.trim() || '',
    notes: document.getElementById(`ws-notes-${code}`)?.value.trim() || ''
  };
  app.editModes.workshop[code] = false;
  app.saveData();
  renderWorkshopRoute();
  showToast(t('toastSaveWorkshop'));
};

window.clearWorkshopChapter = function(code) {
  if (!confirm(t('confirmClearSection'))) return;
  const lang = app.currentLang;
  const ch = (app.data.workshopChapters || []).find(c => c.code === code);
  if (!ch) return;
  ch[lang] = { customTitle: '', content: '', notes: '' };
  app.editModes.workshop[code] = false;
  app.saveData();
  renderWorkshopRoute();
  showToast(t('toastClearSection'));
};

// ==========================================
// 13. VIEW 6: SELF-ASSESSMENT (12 OFFICIAL CRITERIA)
// ==========================================
function renderSelfAssessmentModule() {
  const lang = app.currentLang;
  const isVi = lang === 'vi';
  const selfObj = app.data.selfEvaluation || { ratings: {}, vi: { narrative: '', improvement: '' }, en: { narrative: '', improvement: '' } };
  const loc = selfObj[lang] || selfObj.vi || { narrative: '', improvement: '' };
  const ratings = selfObj.ratings || {};

  // Populate Editor Inputs
  const narrInput = document.getElementById('assess-narrative');
  if (narrInput) narrInput.value = loc.narrative || '';
  const impInput = document.getElementById('assess-improvement');
  if (impInput) impInput.value = loc.improvement || '';

  const editorBox = document.getElementById('self-narrative-editor');
  if (editorBox) editorBox.style.display = app.editModes.selfEval ? 'block' : 'none';

  // Opening Narrative Reader
  const narrReader = document.getElementById('self-narrative-reader');
  if (narrReader) {
    narrReader.innerHTML = loc.narrative
      ? `<div class="doc-prose">${escapeHtml(loc.narrative)}</div>`
      : renderPlannedCallout(isVi
          ? "Dự định trình bày tại phần mở đầu Tự đánh giá:\n- Tóm tắt quá trình tham gia thực tập từ ngày 14/09/2026 đến 14/12/2026 tại chương trình AWS First Cloud AI Journey.\n- Đánh giá mức độ hoàn thành các mục tiêu học tập, thực hành Lab, viết Blog và triển khai đồ án thực tế.\n- Nhấp vào các ô Tốt / Khá / Trung bình trong bảng 12 tiêu chí bên dưới để tự đánh giá khi kết thúc kỳ thực tập."
          : "Planned Opening Self-Assessment Summary:\n- Summarize your internship journey at AWS First Cloud AI Journey and click on Good / Fair / Average in the 12-criteria rubric below when ready.");
  }

  // 12 Criteria Table
  const criteriaList = SELF_EVAL_CRITERIA[lang] || SELF_EVAL_CRITERIA.vi;
  const tbody = document.getElementById('self-eval-tbody');
  let ratedCount = 0;

  if (tbody) {
    tbody.innerHTML = criteriaList.map(item => {
      const currentVal = ratings[item.id] || '';
      if (currentVal) ratedCount++;
      const renderCell = (level) => {
        const checked = currentVal === level ? 'checked' : '';
        return `
          <td class="eval-radio-cell" onclick="toggleSelfRating(${item.id}, '${level}')" title="${isVi ? 'Nhấn để chọn/bỏ chọn' : 'Click to toggle'}">
            <span class="eval-check-box ${checked}">${checked ? '✓' : ''}</span>
          </td>
        `;
      };
      return `
        <tr>
          <td style="text-align:center;font-weight:800;">${item.id}</td>
          <td style="font-weight:800;color:var(--text-main);">${escapeHtml(item.name)}</td>
          <td>${escapeHtml(item.desc)}</td>
          ${renderCell('good')}
          ${renderCell('fair')}
          ${renderCell('avg')}
        </tr>
      `;
    }).join('');
  }

  const counterEl = document.getElementById('self-rated-counter');
  if (counterEl) {
    counterEl.textContent = isVi ? `Đã đánh giá: ${ratedCount} / 12 tiêu chí` : `Rated: ${ratedCount} / 12 criteria`;
    counterEl.className = ratedCount === 12 ? 'badge badge-completed' : 'badge badge-planned';
  }

  // Needs Improvement Reader
  const impReader = document.getElementById('self-improvement-reader');
  if (impReader) {
    impReader.innerHTML = loc.improvement
      ? formatTextToParagraphsOrList(loc.improvement, '')
      : renderPlannedCallout(isVi
          ? "Dự định trình bày tại mục Cần cải thiện (Needs Improvement):\n- Tự nhận xét các điểm hạn chế cần khắc phục sau kỳ thực tập (VD: Quản lý thời gian, tự động hóa IaC chuyên sâu, kỹ năng thuyết trình kỹ thuật tiếng Anh...).\n- Đề ra lộ trình rèn luyện tiếp theo (Thi chứng chỉ AWS Certified Solutions Architect / Security Specialty)."
          : "Planned for Needs Improvement:\n- Identify areas for personal and technical growth and outline post-internship certification/learning goals.");
  }
}

window.toggleSelfRating = function(criteriaId, level) {
  if (!app.data.selfEvaluation) app.data.selfEvaluation = { ratings: {}, vi: { narrative: '', improvement: '' }, en: { narrative: '', improvement: '' } };
  if (!app.data.selfEvaluation.ratings) app.data.selfEvaluation.ratings = {};
  if (app.data.selfEvaluation.ratings[criteriaId] === level) {
    delete app.data.selfEvaluation.ratings[criteriaId];
  } else {
    app.data.selfEvaluation.ratings[criteriaId] = level;
  }
  app.saveData();
  renderSelfAssessmentModule();
};

function setupSelfAssessment() {
  document.getElementById('btn-toggle-self-edit')?.addEventListener('click', () => {
    app.editModes.selfEval = !app.editModes.selfEval;
    renderSelfAssessmentModule();
  });

  document.getElementById('btn-save-assessment')?.addEventListener('click', () => {
    const lang = app.currentLang;
    if (!app.data.selfEvaluation[lang]) app.data.selfEvaluation[lang] = {};
    app.data.selfEvaluation[lang].narrative = document.getElementById('assess-narrative')?.value.trim() || '';
    app.data.selfEvaluation[lang].improvement = document.getElementById('assess-improvement')?.value.trim() || '';
    app.editModes.selfEval = false;
    app.saveData();
    renderSelfAssessmentModule();
    showToast(t('toastSaveAssessment'));
  });

  document.getElementById('btn-clear-assessment')?.addEventListener('click', () => {
    if (!confirm(t('confirmClearSection'))) return;
    const lang = app.currentLang;
    app.data.selfEvaluation.ratings = {};
    app.data.selfEvaluation[lang] = { narrative: '', improvement: '' };
    app.editModes.selfEval = false;
    app.saveData();
    renderSelfAssessmentModule();
    showToast(t('toastClearSection'));
  });
}

// ==========================================
// 14. VIEW 7: SHARING AND FEEDBACK (3 OFFICIAL GROUPS)
// ==========================================
function renderFeedbackModule() {
  const lang = app.currentLang;
  const isVi = lang === 'vi';
  const fb = (app.data.feedback && app.data.feedback[lang]) || {};

  const setVal = (id, v) => {
    const el = document.getElementById(id);
    if (el) el.value = v || '';
  };
  setVal('fb-env', fb.env);
  setVal('fb-mentor', fb.mentor);
  setVal('fb-relevance', fb.relevance);
  setVal('fb-learning', fb.learning);
  setVal('fb-culture', fb.culture);
  setVal('fb-policies', fb.policies);
  setVal('fb-q1', fb.q1);
  setVal('fb-q2', fb.q2);
  setVal('fb-q3', fb.q3);
  setVal('fb-suggestions', fb.suggestions);
  setVal('fb-continue', fb.continueProg);
  setVal('fb-other', fb.other);

  const readerEl = document.getElementById('feedback-reader-view');
  const editorEl = document.getElementById('feedback-editor-view');
  if (readerEl && editorEl) {
    readerEl.style.display = app.editModes.feedback ? 'none' : 'block';
    editorEl.style.display = app.editModes.feedback ? 'block' : 'none';
  }
  if (!readerEl) return;

  const renderItemOrPlanned = (label, val, plannedNote) => `
    <div style="margin-bottom:14px;">
      <h4 class="doc-section-h4">${escapeHtml(label)}</h4>
      ${val && val.trim()
        ? `<div class="doc-prose">${escapeHtml(val)}</div>`
        : `<div class="text-muted" style="font-size:13px;"><em>📌 ${escapeHtml(plannedNote)}</em></div>`}
    </div>
  `;

  readerEl.innerHTML = `
    <div class="doc-section-block">
      <h3 class="doc-section-h3">${escapeHtml(t('fbGroup1Title'))}</h3>
      ${renderItemOrPlanned(t('fb1Label'), fb.env, isVi ? 'Dự định chia sẻ cảm nhận về môi trường làm việc.' : 'Planned reflection on working environment.')}
      ${renderItemOrPlanned(t('fb2Label'), fb.mentor, isVi ? 'Dự định chia sẻ cảm nhận về sự hỗ trợ của Mentor và Admin.' : 'Planned reflection on mentor/admin support.')}
      ${renderItemOrPlanned(t('fb3Label'), fb.relevance, isVi ? 'Dự định đánh giá mức độ phù hợp với chuyên ngành.' : 'Planned reflection on major relevance.')}
      ${renderItemOrPlanned(t('fb4Label'), fb.learning, isVi ? 'Dự định chia sẻ cơ hội học tập & phát triển kỹ năng.' : 'Planned reflection on learning opportunities.')}
      ${renderItemOrPlanned(t('fb5Label'), fb.culture, isVi ? 'Dự định chia sẻ về văn hóa công ty & tinh thần đồng đội.' : 'Planned reflection on company culture.')}
      ${renderItemOrPlanned(t('fb6Label'), fb.policies, isVi ? 'Dự định chia sẻ về chính sách hỗ trợ thực tập sinh.' : 'Planned reflection on internship policies.')}
    </div>

    <div class="doc-section-block">
      <h3 class="doc-section-h3">${escapeHtml(t('fbGroup2Title'))}</h3>
      ${renderItemOrPlanned(t('fbQ1Label'), fb.q1, isVi ? 'Đang để trống — Dự định chia sẻ điều hài lòng nhất sau khi kết thúc trọn vẹn 12 tuần thực tập.' : 'Currently empty — Planned to share what satisfied you most at the end of the 12-week internship.')}
      ${renderItemOrPlanned(t('fbQ2Label'), fb.q2, isVi ? 'Đang để trống — Dự định đóng góp ý kiến những điểm chương trình có thể cải tiến cho khóa sau.' : 'Currently empty — Planned to suggest improvements for future cohorts.')}
      ${renderItemOrPlanned(t('fbQ3Label'), fb.q3, isVi ? 'Đang để trống — Dự định chia sẻ lý do giới thiệu chương trình AWS FCAJ cho bạn bè đồng môn.' : 'Currently empty — Planned to explain why you would recommend AWS FCAJ to peers.')}
    </div>

    <div class="doc-section-block">
      <h3 class="doc-section-h3">${escapeHtml(t('fbGroup3Title'))}</h3>
      ${renderItemOrPlanned(t('fbSuggestionsLabel'), fb.suggestions, isVi ? 'Dự định đề xuất cải thiện trải nghiệm kỳ thực tập.' : 'Planned suggestions for improving the internship experience.')}
      ${renderItemOrPlanned(t('fbContinueLabel'), fb.continueProg, isVi ? 'Đang để trống — Dự định chia sẻ mong muốn đồng hành cùng cộng đồng AWS Study Group trong tương lai.' : 'Currently empty — Planned to share future continuation plans with AWS Study Group.')}
      ${renderItemOrPlanned(t('fbOtherLabel'), fb.other, isVi ? 'Đang để trống — Dự định ghi nhận các chia sẻ và lời cảm ơn cuối kỳ thực tập.' : 'Currently empty — Planned for final remarks and gratitude.')}
    </div>
  `;
}

function setupFeedback() {
  document.getElementById('btn-toggle-feedback-edit')?.addEventListener('click', () => {
    app.editModes.feedback = !app.editModes.feedback;
    renderFeedbackModule();
  });

  document.getElementById('btn-save-feedback')?.addEventListener('click', () => {
    const lang = app.currentLang;
    const val = (id) => document.getElementById(id)?.value.trim() || '';
    app.data.feedback[lang] = {
      env: val('fb-env'),
      mentor: val('fb-mentor'),
      relevance: val('fb-relevance'),
      learning: val('fb-learning'),
      culture: val('fb-culture'),
      policies: val('fb-policies'),
      q1: val('fb-q1'),
      q2: val('fb-q2'),
      q3: val('fb-q3'),
      suggestions: val('fb-suggestions'),
      continueProg: val('fb-continue'),
      other: val('fb-other')
    };
    app.editModes.feedback = false;
    app.saveData();
    renderFeedbackModule();
    showToast(t('toastSaveFeedback'));
  });
}

// ==========================================
// 15. SETTINGS, SEARCH (CTRL+K) & INITIALIZATION
// ==========================================
function setupSettings() {
  document.getElementById('btn-export-json')?.addEventListener('click', () => {
    const dataStr = JSON.stringify(app.data, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'worklog-fcaj-backup.json';
    a.click();
    URL.revokeObjectURL(url);
    showToast(t('toastExportJson'));
  });

  document.getElementById('file-import-json')?.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const imported = JSON.parse(ev.target.result);
        if (imported && imported.studentInfo && imported.worklogs) {
          app.data = imported;
          app.saveData();
          app.applyLanguage();
          showToast(t('toastImportSuccess'));
        } else {
          showToast(t('toastImportError'), 'error');
        }
      } catch (err) {
        showToast(t('toastImportError'), 'error');
      }
    };
    reader.readAsText(file);
  });

  document.getElementById('btn-reset-data')?.addEventListener('click', () => {
    if (confirm(t('confirmReset'))) {
      localStorage.removeItem(STORAGE_KEY);
      app.data = JSON.parse(JSON.stringify(DEFAULT_BILINGUAL_DATA));
      app.saveData();
      app.applyLanguage();
      showToast(t('toastResetSuccess'));
    }
  });
}

function setupQuickSearch() {
  const input = document.getElementById('sidebar-quick-search');
  const dropdown = document.getElementById('search-results-dropdown');
  if (!input || !dropdown) return;

  const renderResults = (query) => {
    const q = query.trim().toLowerCase();
    if (!q) {
      dropdown.classList.remove('show');
      dropdown.innerHTML = '';
      return;
    }

    const items = getOrderedRoutesList().map(r => ({
      label: r.title,
      tag: r.route.includes('/') ? r.route.split('/')[0].toUpperCase() : 'SECTION',
      action: () => navigateTo(r.route)
    }));

    const matched = items.filter(it => it.label.toLowerCase().includes(q) || it.tag.toLowerCase().includes(q));
    if (matched.length === 0) {
      dropdown.innerHTML = `<div class="search-result-item" style="color:var(--text-subtle);cursor:default;">${app.currentLang === 'vi' ? 'Không tìm thấy mục phù hợp' : 'No matching item found'}</div>`;
      dropdown.classList.add('show');
      return;
    }

    dropdown.innerHTML = matched.slice(0, 10).map((it, idx) => `
      <div class="search-result-item" data-idx="${idx}">
        <span>${escapeHtml(it.label)}</span>
        <span class="search-result-tag">${escapeHtml(it.tag)}</span>
      </div>
    `).join('');
    dropdown.classList.add('show');

    dropdown.querySelectorAll('.search-result-item').forEach((el, idx) => {
      el.addEventListener('click', () => {
        matched[idx].action();
        input.value = '';
        dropdown.classList.remove('show');
      });
    });
  };

  input.addEventListener('input', (e) => renderResults(e.target.value));
  document.addEventListener('click', (e) => {
    if (!input.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      input.focus();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Expand Worklog by default in Sidebar Tree
  document.getElementById('nav-group-worklog')?.classList.add('expanded');

  // Collapsible Sidebar Caret Buttons
  document.querySelectorAll('.nav-caret-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const parentLi = btn.closest('.nav-item');
      parentLi?.classList.toggle('expanded');
    });
  });

  // Language switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const chosen = btn.getAttribute('data-lang');
      app.setLang(chosen);
      showToast(t('toastLangSwitch'));
    });
  });

  // Print / Export PDF button
  document.getElementById('btn-quick-print')?.addEventListener('click', () => {
    window.print();
  });

  // Mobile menu toggle
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  document.getElementById('btn-toggle-menu')?.addEventListener('click', () => {
    sidebar?.classList.toggle('open');
    overlay?.classList.toggle('show');
  });
  overlay?.addEventListener('click', () => {
    sidebar?.classList.remove('open');
    overlay?.classList.remove('show');
  });

  setupStudentInfo();
  setupWorklogModals();
  setupProposal();
  setupSelfAssessment();
  setupFeedback();
  setupSettings();
  setupQuickSearch();

  app.applyLanguage();
  window.addEventListener('hashchange', handleHashChange);
  handleHashChange();
});
