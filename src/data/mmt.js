const qs = [
    {
        "questionName": "Các mạng máy tính được thiết kế và cài đặt theo quan điểm:",
        "option": [
            "A. Có cấu trúc đa tầng",
            "B. Nhiều tầng",
            "C. Theo lớp",
            "D. Tập hợp"
        ],
        "answer": 0,
        "id": "1"
    },
    {
        "questionName": "Khi sử dụng mạng máy tính ta sẽ thu được các lợi ích:",
        "option": [
            "A. Chia sẻ tài nguyên (ổ cứng, cơ sở dữ liệu, máy in, các phần mềm tiện ích...)",
            "B. Quản lý tập trung",
            "C. Tận dụng năng lực xử lý của các máy tính rỗi kết hợp lại để thực hiện các công việc lớn",
            "D. Tất cả đều đúng"
        ],
        "answer": 3,
        "id": "2"
    },
    {
        "questionName": "Đơn vị cơ bản đo tốc độ truyền dữ liệu là ?",
        "option": [
            "A. Bit",
            "B. Byte",
            "C. Bps(bit per second)",
            "D. Hz"
        ],
        "answer": 2,
        "id": "3"
    },
    {
        "questionName": "Quá trình dữ liệu di chuyển từ hệ thống máy tính này sang hệ thống máy tính khác phải trải qua giai đoạn nào ?",
        "option": [
            "A. Phân tích dữ liệu",
            "B. Nén dữ liệu",
            "C. Đóng gói",
            "D. Lọc dữ liệu"
        ],
        "answer": 2,
        "id": "4"
    },
    {
        "questionName": "Kết nối mạng sử dụng các giao thức khác nhau bằng các:",
        "option": [
            "A. Bộ chuyển tiếp",
            "B. Cổng giao tiếp",
            "C. SONET",
            "D. Bộ định tuyến"
        ],
        "answer": 3,
        "id": "5"
    },
    {
        "questionName": "Nhược điểm của mạng dạng hình sao (Star) là ?",
        "option": [
            "A. Khó cài đặt và bảo trì",
            "B. Khó khắc phục khi lỗi cáp xảy ra, và ảnh hưởng tới các nút mạng khác",
            "C. Cần quá nhiều cáp để kết nối tới nút mạng trung tâm",
            "D. Không có khả năng thay đổi khi đã lắp đặt"
        ],
        "answer": 2,
        "id": "6"
    },
    {
        "questionName": "Đặc điểm của mạng dạng Bus là ?",
        "option": [
            "A. Tất cả các nút mạng kết nối vào nút mạng trung tâm (ví dụ như Hub)",
            "B. Tất cả các nút kết nối trên cùng một đường truyền vật lý",
            "C. Tất cả các nút mạng đều kết nối trực tiếp với nhau",
            "D. Mỗi nút mạng kết nối với 2 nút mạng còn lại"
        ],
        "answer": 1,
        "id": "7"
    },
    {
        "questionName": "Trong kỹ thuật chuyển mạch kênh, trước khi trao đổi thông tin, hệ thống sẽ thiết lập kết nối giữa 2 thực thể bằng một:",
        "option": [
            "A. Đường truyền vật lý",
            "B. Kết nối ảo",
            "C. Đường ảo",
            "D. Đường truyền logic"
        ],
        "answer": 0,
        "id": "8"
    },
    {
        "questionName": "Kết nối liên mạng các mạng LAN, WAN, MAN độc lập với nhau bằng các thiết bị có chức năng:",
        "option": [
            "A. Kiểm soát lỗi, kiểm soát luồng",
            "B. Định tuyến",
            "C. Điều khiển liên kết",
            "D. Điều khiển lưu lượng và đồng bộ hoá"
        ],
        "answer": 1,
        "id": "9"
    },
    {
        "questionName": "Cáp UTP Cat5e sử dụng đầu nối:",
        "option": [
            "A. RJ - 58",
            "B. BNC",
            "C. RJ - 45",
            "D. ST"
        ],
        "answer": 2,
        "id": "10"
    },
    {
        "questionName": "Cáp UTP Cat 5 có bao nhiêu đôi cáp:",
        "option": [
            "A. 2",
            "B. 4",
            "C. 6",
            "D. 8"
        ],
        "answer": 1,
        "id": "11"
    },
    {
        "questionName": "Đặc điểm quan trọng của kiến trúc mạng client/server (khách/chủ):",
        "option": [
            "A. Client/server là kiến trúc phân cấp, client đóng vai trò yêu cầu và server đáp ứng lại các yêu cầu đó.",
            "B. Server là host luôn hoạt động, thường có IP cố định, có nhóm các server để chia sẻ công việc. Client có kết nối không liên tục, địa chỉ IP có thể thay đổi, truyền thông với server và thường không truyền thông trực tiếp với client khác.",
            "C. Câu A và B đều đúng",
            "D. Câu A và B đều sai"
        ],
        "answer": 2,
        "id": "12"
    },
    {
        "questionName": "Khẳng định nào sau đây là đúng khi nói về mạng có cấu trúc điểm- điểm:",
        "option": [
            "A. Mạng quảng bá",
            "B. Nối từng cặp node lại với nhau theo một hình học xác định",
            "C. Mạng lưu và chuyển tiếp (Store - and - Forward)",
            "D. Các node trung gian: tiếp nhận, lưu trữ tạm thời và gửi tiếp thông tin"
        ],
        "answer": 2,
        "id": "13"
    },
    {
        "questionName": "Khẳng định nào sau đây là đúng khi nói về nhược điểm của mạng có cấu trúc điểm-điểm (P2P)?",
        "option": [
            "A. Khả năng đụng độ thông tin (collision) thấp",
            "B. Hiệu suất sử dụng đường truyền thấp, chiếm dụng nhiều tài nguyên",
            "C. Độ trễ lớn, tốn nhiều thời gian để thiết lập đường truyền và xử lý tại các node",
            "D. Tốc độ trao đổi thông tin thấp"
        ],
        "answer": 1,
        "id": "14"
    },
    {
        "questionName": "Khẳng định nào sau đây là đúng khi nói về đặc trưng của mạng quảng bá:",
        "option": [
            "A. Tất cả các node cùng truy nhập chung trên một đường truyền vật lý",
            "B. Nối từng cặp node lại với nhau theo một hình học xác định",
            "C. Các node trung gian: tiếp nhận, lưu trữ tạm thời và gửi tiếp thông tin",
            "D. Khả năng đụng độ thông tin (collision) thấp"
        ],
        "answer": 0,
        "id": "15"
    },
    {
        "questionName": "Khẳng định nào sau đây là đúng khi nói về mạng chuyển mạch kênh:",
        "option": [
            "A. Thiết lập liên kết vật lý, truyền dữ liệu và giải phóng liên kết giữa 2 thực thể",
            "B. Thiết lập liên kết logic, truyền dữ liệu và giải phóng liên kết giữa 2 thực thể",
            "C. Truyền dữ liệu giữa 2 thực thể",
            "D. Thiết lập liên kết và giải phóng liên kết giữa 2 thực thể"
        ],
        "answer": 0,
        "id": "16"
    },
    {
        "questionName": "Khẳng định nào sau đây là đúng khi nói về mạng chuyển mạch gói:",
        "option": [
            "A. Gói tin lưu chuyển trên các kết nối logic",
            "B. Gói tin lưu chuyển trên các kết nối vật lý",
            "C. Gói tin lưu chuyển độc lập hướng đích",
            "D. Gói tin lưu chuyển trên các kết nối logic hướng đích và trên một đường có thể có nhiều gói tin cùng lưu chuyển"
        ],
        "answer": 3,
        "id": "17"
    },
    {
        "questionName": "Khẳng định nào sau đây là đúng khi nói về quá trình phân mảnh gói tin:",
        "option": [
            "A. Làm giảm thời gian xử lý",
            "B. Làm tăng tính linh hoạt của mạng",
            "C. Ảnh hưởng đến tốc độ trao đổi dữ liệu trong mạng",
            "D. Tăng tốc độ trao đổi thông tin trong mạng"
        ],
        "answer": 3,
        "id": "18"
    },
    {
        "questionName": "Khẳng định nào sau đây là đúng khi nói về truyền dữ liệu theo phương thức hướng liên kết:",
        "option": [
            "A. Có độ tin cậy cao, đảm bảo chất lượng dịch vụ và có xác nhận",
            "B. Không cần độ tin cậy cao, chất lượng dịch vụ thấp",
            "C. Có xác nhận, không kiểm soát lỗi, kiểm soát luồng",
            "D. Độ tin cậy cao, không xác nhận"
        ],
        "answer": 0,
        "id": "19"
    },
    {
        "questionName": "Khẳng định nào sau đây là đúng nói về cấu trúc vật lý của mạng:",
        "option": [
            "A. Giao thức mạng (Protocol)",
            "B. Hình trạng mạng (Topology)",
            "C. Phương tiện truyền",
            "D. Các dịch vụ mạng"
        ],
        "answer": 1,
        "id": "20"
    },
    {
        "questionName": "Mạng Internet là:",
        "option": [
            "A. Mạng của các máy tính toàn cầu kết nối lại với nhau theo giao thức TCP/IP",
            "B. Mạng diện rộng",
            "C. Mạng máy tính toàn cầu",
            "D. Mạng của các mạng con kết nối lại với nhau"
        ],
        "answer": 0,
        "id": "21"
    },
    {
        "questionName": "Trong mạng hình BUS, tất cả các trạm truy nhập ngẫu nhiên vào:",
        "option": [
            "A. Đường truyền chung",
            "B. Máy chủ mạng",
            "C. Bộ nhớ đệm",
            "D. Các thiết bị kết nối mạng"
        ],
        "answer": 0,
        "id": "22"
    },
    {
        "questionName": "Mạng LAN hình sao (STAR) khi có sự cố:",
        "option": [
            "A. Sẽ ngừng hoạt động toàn bộ hệ thống",
            "B. Không ảnh hưởng tới hoạt động toàn bộ hệ thống",
            "C. Chỉ ảnh hướng đến trạm có sự cố",
            "D. Chỉ ảnh hướng đến một phần của hệ thống"
        ],
        "answer": 2,
        "id": "23"
    },
    {
        "questionName": "Với kiểu kết nối mạng theo dạng hình sao (Star), khi một trạm trong mạng ngưng hoạt động thì các trạm còn lại:",
        "option": [
            "A. Hoạt động bình thường",
            "B. Đều ngưng hoạt động",
            "C. Hoạt động không ổn định",
            "D. Các câu trên đều sai"
        ],
        "answer": 0,
        "id": "24"
    },
    {
        "questionName": "Hình trạng mạng nào cho phép tất cả các cặp thiết bị đều có 1 đường nối vật lý trực tiếp:",
        "option": [
            "A. Star (dạng sao)",
            "B. Bus (dạng đường trục)",
            "C. Mesh (dạng lưới)",
            "D. Hierarchical (dạng phân cấp)"
        ],
        "answer": 2,
        "id": "25"
    },
    {
        "questionName": "Về nguyên tắc cơ bản, dùng cáp UTP Cat5e nào sau đây để kết nối trực tiếp giữa 2 PC với nhau:",
        "option": [
            "A. Cáp thẳng",
            "B. Cáp chéo",
            "C. Cáp cuộn",
            "D. Cả 3 loại trên"
        ],
        "answer": 1,
        "id": "26"
    },
    {
        "questionName": "Kết quả nào sau đây không đúng:",
        "option": [
            "A. 163 chuyển sang nhị phân sẽ có giá trị là: 10100011",
            "B. 111 chuyển sang nhị phân sẽ có giá trị là : 01110011",
            "C. 125 chuyển sang nhị phân sẽ có giá trị là : 01111101",
            "D. 178 chuyển sang nhị phân sẽ có giá trị là : 10110010"
        ],
        "answer": 1,
        "id": "27"
    },
    {
        "questionName": "Kiểu mạng nào được hạn chế ở cấp tòa cao ốc hay một công sở:",
        "option": [
            "A. GAN",
            "B. WAN",
            "C. MAN",
            "D. LAN"
        ],
        "answer": 3,
        "id": "28"
    },
    {
        "questionName": "Chiều dài tối đa của một đoạn trong kiến trúc 100Base-TX:",
        "option": [
            "A. 3KM",
            "B. 100 mét",
            "C. 550 mét",
            "D. 25 mét"
        ],
        "answer": 1,
        "id": "29"
    },
    {
        "questionName": "Xét về tỷ lệ lỗi trên đường truyền dữ liệu thì loại mạng nào cao nhất:",
        "option": [
            "A. WAN",
            "B. MAN",
            "C. INTERNET",
            "D. LAN"
        ],
        "answer": 1,
        "id": "30"
    },
    {
        "questionName": "Độ dài tối đa cho phép khi sử dụng dây cáp mạng UTP là bao nhiêu mét:",
        "option": [
            "A. 100",
            "B. 200",
            "C. 350",
            "D. 400"
        ],
        "answer": 0,
        "id": "31"
    },
    {
        "questionName": "Quá trình dữ liệu di chuyển từ hệ thống máy tính này sang hệ thống máy tính khác phải trải qua giai đoạn nào:",
        "option": [
            "A. Phân tích dữ liệu",
            "B. Lọc dữ liệu",
            "C. Đóng gói dữ liệu",
            "D. Kiểm thử dữ liệu"
        ],
        "answer": 2,
        "id": "32"
    },
    {
        "questionName": "Khi nối mạng giữa 2 máy tính, thường sử dụng loại cáp nào để nối trực tiếp giữa chúng:",
        "option": [
            "A. Cáp quang",
            "B. Cáp UTP thẳng",
            "C. Cáp STP",
            "D. Cáp UTP chéo"
        ],
        "answer": 3,
        "id": "33"
    },
    {
        "questionName": "Các quy tắc điều quản việc truyền thông máy tính được gọi là: ",
        "option": [
            "A. Các giao thức",
            "B. Các dịch vụ",
            "C. Các hệ điều hành mạng",
            "D. Các thiết bị mang tải"
        ],
        "answer": 0,
        "id": "34"
    },
    {
        "questionName": "Hai kiểu máy tính khác nhau có thể truyền thông nếu:",
        "option": [
            "A. Chúng cài đặt cùng hệ điều hành mạng",
            "B. Chúng tuân thủ theo mô hình OSI",
            "C. Chúng cùng dùng giao thức TCP/IP ",
            "D. Chúng có phần cứng giống nhau"
        ],
        "answer": 1,
        "id": "35"
    },
    {
        "questionName": "Để kết nối hai máy tính với nhau ta có thể sử dụng:",
        "option": [
            "A. Hub",
            "B. Switch",
            "C. Nối cáp trực tiếp",
            "D. Tất cả đều đúng"
        ],
        "answer": 3,
        "id": "36"
    },
    {
        "questionName": "Biễu diễn số 125 từ cơ số decimal sang cơ số binary:",
        "option": [
            "A. 01111101",
            "B. 01101111",
            "C. 01011111",
            "D. 1111101"
        ],
        "answer": 0,
        "id": "37"
    },
    {
        "questionName": "Số nhị phân nào dưới đây có giá trị là 164:",
        "option": [
            "A. 10100100",
            "B. 10010010",
            "C. 11000100",
            "D. 10101010"
        ],
        "answer": 0,
        "id": "38"
    },
    {
        "questionName": "Thiết bị nào hoạt động ở tầng Vật lý:",
        "option": [
            "A. Switch",
            "B. Card mạng",
            "C. Hub và repeater",
            "D. Router"
        ],
        "answer": 2,
        "id": "39"
    },
    {
        "questionName": "Môi trường truyền tin thông thuờng trong mạng máy tính là:",
        "option": [
            "A. Các loại cáp như: UTP, STP, cáp điện thoại, cáp quang,... ",
            "B. Sóng hồng ngoại",
            "C. Tất cả môi trườngng nêu trên",
            "D. Không cái nào đúng"
        ],
        "answer": 2,
        "id": "40"
    },
    {
        "questionName": "Các thành phần tạo nên mạng là:",
        "option": [
            "A. Máy tính, hub, switch",
            "B. Network adapter, cable",
            "C. Protocol",
            "D. Tất cả đều đúng"
        ],
        "answer": 3,
        "id": "41"
    },
    {
        "questionName": "Khẳng định nào sau đây là đúng khi nói về đặc tính để phân biệt một tế bào (cell) và một gói tin:",
        "option": [
            "A. Các tế bào nhỏ hơn một gói tin",
            "B. Các tế bào không có địa chỉ vật lý",
            "C. Các tế bào có độ dài cố định ",
            "D. Các gói tin có độ dài cố định"
        ],
        "answer": 2,
        "id": "42"
    },
    {
        "questionName": "Protocol là:",
        "option": [
            "A. Các qui tắc để cho phép các máy tính có thể giao tiếp được với nhau",
            "B. Một trong những thành phần không thể thiếu trong hệ thống mạng",
            "C. A và B sai",
            "D. A và B đúng"
        ],
        "answer": 3,
        "id": "43"
    },
    {
        "questionName": "Thiết bị nào sau đây được sử dụng tại trung tâm của mạng hình sao:",
        "option": [
            "A. Switch, Brigde",
            "B. Netcard",
            "C. Port",
            "D. Repeater"
        ],
        "answer": 0,
        "id": "44"
    },
    {
        "questionName": "Kiến trúc một mạng LAN có thể là:",
        "option": [
            "A. RING",
            "B. BUS",
            "C. STAR",
            "D. Có thể sử dụng riêng hoặc phối hợp cả A, B và C"
        ],
        "answer": 3,
        "id": "45"
    },
    {
        "questionName": "Giá trị của 11101101 (giá trị các bit nhị phân) trong cơ số 16 là:",
        "option": [
            "A. CB",
            "B. ED",
            "C. FD",
            "D. EC"
        ],
        "answer": 1,
        "id": "46"
    },
    {
        "questionName": "Mô tả nào sau đây dành cho mạng hình sao (star):",
        "option": [
            "A. Truyền dữ liệu qua cáp đồng trục",
            "B. Mỗi nút mạng đều kết nối trực tiếp với tất cả các nút khác",
            "C. Có một nút trung tâm và các nút mạng khác kết nối đến",
            "D. Các nút mạng sử dụng chung một đường cáp"
        ],
        "answer": 2,
        "id": "47"
    },
    {
        "questionName": "Loại cáp nào được sử dụng phổ biến nhất hiện nay:",
        "option": [
            "A. Cáp đồng trục",
            "B. Cáp STP",
            "C. Cáp UTP (CAT 5)",
            "D. Cáp quang"
        ],
        "answer": 2,
        "id": "48"
    },
    {
        "questionName": "Giao thức mạng nào dưới đây được sử dụng trong mạng cục bộ LAN:",
        "option": [
            "A. TCP/IP",
            "B. NetBIOS",
            "C. IPX",
            "D. Tất cả các câu trên"
        ],
        "answer": 3,
        "id": "49"
    },
    {
        "questionName": "Khẳng định nào sau đây là đúng khi nói về giao thức sử dụng trên cáp sợi quang:",
        "option": [
            "A. Frame Relay",
            "B. FDDI",
            "C. SONET",
            "D. Cả B và C đều đúng"
        ],
        "answer": 0,
        "id": "50"
    },
    {
        "questionName": "Các chuẩn Internet là:",
        "option": [
            "A. TCP và UDP",
            "B. ACK và NAK",
            "C. RFC và IETF",
            "D. FDM và TDM"
        ],
        "answer": 2,
        "id": "51"
    },
    {
        "questionName": "Giải thông (bandwidth) là:",
        "option": [
            "A. Tốc độ truyền dữ liệu trên đường truyền",
            "B. Độ đo phạm vi tần số mà đường truyền có thể đáp ứng được",
            "C. Độ đo sự yếu đi của tín hiệu trên đường truyền",
            "D. Độ đo sự ảnh hưởng của tiếng ồn điện từ bên ngoài đến tín hiệu đường truyền"
        ],
        "answer": 1,
        "id": "52"
    },
    {
        "questionName": "Thông lượng (throughput) là:",
        "option": [
            "A. Tốc độ truyền dữ liệu trên đường truyền",
            "B. Độ đo phạm vi tần số mà đường truyền có thể đáp ứng được",
            "C. Độ đo sự yếu đi của tín hiệu trên đường truyền",
            "D. Độ đo sự ảnh hưởng của tiếng ồn điện từ bên ngoài đến tín hiệu đường truyền"
        ],
        "answer": 0,
        "id": "53"
    },
    {
        "questionName": "Độ suy hao là:",
        "option": [
            "A. Tốc độ truyền dữ liệu trên đường truyền",
            "B. Độ đo phạm vi tần số mà đường truyền có thể đáp ứng được",
            "C. Độ đo sự yếu đi của tín hiệu trên đường truyền",
            "D. Độ đo sự ảnh hưởng của tiếng ồn điện từ bên ngoài đến tín hiệu đường truyền"
        ],
        "answer": 2,
        "id": "54"
    },
    {
        "questionName": "Độ nhiễu điện từ là:",
        "option": [
            "A. Tốc độ truyền dữ liệu trên đường truyền",
            "B. Độ đo phạm vi tần số mà đường truyền có thể đáp ứng được",
            "C. Độ đo sự yếu đi của tín hiệu trên đường truyền",
            "D. Độ đo sự ảnh hưởng của tiếng ồn điện từ bên ngoài đến tín hiệu đường truyền"
        ],
        "answer": 3,
        "id": "55"
    },
    {
        "questionName": "Truyền dẫn theo dải cơ sở (baseband):",
        "option": [
            "A. Toàn bộ khả năng đường truyền được dành cho một kênh thông duy nhất",
            "B. Hai kênh truyền thông cùng phân chia giải thông của đường truyền",
            "C. Ba kênh truyền thông cùng phân chia giải thông của đường truyền",
            "D. Nhiều kênh truyền thông cùng phân chia giải thông của đường truyền"
        ],
        "answer": 0,
        "id": "56"
    },
    {
        "questionName": "Truyền dẫn theo dải rộng (broadband):",
        "option": [
            "A. Toàn bộ khả năng đường truyền được dành cho một kênh thông duy nhất",
            "B. Hai kênh truyền thông cùng phân chia giải thông của đường truyền",
            "C. Ba kênh truyền thông cùng phân chia giải thông của đường truyền",
            "D. Nhiều kênh truyền thông cùng phân chia giải thông của đường truyền"
        ],
        "answer": 3,
        "id": "57"
    },
    {
        "questionName": "Thứ tự của các tầng trong mô hình tham chiếu OSI:",
        "option": [
            "A. Physical, Data Link, Network, Transport, System, Presentation, Application",
            "B. Physical, Data Link, Network, Transport, Session, Presentation, Application",
            "C. Physical, Data Link, Network, Transform, Session, Presentation, Application",
            "D. Presentation, Data Link, Network, Transport, Session, Physical, Application"
        ],
        "answer": 1,
        "id": "58"
    },
    {
        "questionName": "Thứ tự các tầng từ cao đến thấp trong mô hình TCP/IP:",
        "option": [
            "A. Application, Internet, Transport, Network Access",
            "B. Application, Network Access, Transport, Internet",
            "C. Application, Transport, Internet, Network Access",
            "D. Transport, Internet, Application, Network Access"
        ],
        "answer": 2,
        "id": "59"
    },
    {
        "questionName": "Thứ tự đúng của các đơn vị dữ liệu trong mô hình TCP/IP:",
        "option": [
            "A. Data, Frame, Segment, Packet, Bit",
            "B. Data, Segment, Frame, Packet, Bit",
            "C. Data, Packet, Frame, Segment, Bit",
            "D. Data, Segment, Packet, Frame, Bit"
        ],
        "answer": 3,
        "id": "60"
    },
    {
        "questionName": "Thứ tự các tầng của mô hình OSI theo thứ tự từ trên xuống là:",
        "option": [
            "A. Ứng dụng, Trình diễn, Phiên, Giao vận, Liên kết, Mạng, Vật lý",
            "B. Ứng dụng, Trình diễn, Phiên, Mạng, Giao vận, Liên kết, Vật lý",
            "C. Ứng dụng, Trình diễn, Phiên, Giao vận, Mạng, Liên kết, Vật lý",
            "D. Ứng dụng, Trình diễn, Giao vận, Phiên, Liên kết, Mạng, Vật lý"
        ],
        "answer": 2,
        "id": "61"
    },
    {
        "questionName": "Chức năng của tầng trình diễn là chuyển đổi:",
        "option": [
            "A. Ngôn ngữ người sử dụng về ngôn ngữ chung của mạng",
            "B. Cấu trúc thông tin về cấu trúc khung",
            "C. Khuôn dạng của gói tin",
            "D. Các phiên truyền thông giữa các thực thể"
        ],
        "answer": 0,
        "id": "62"
    },
    {
        "questionName": "Chức năng của tầng giao vận là:",
        "option": [
            "A. Vận chuyển thông tin giữa các máy chủ (End to End)",
            "B. Kiểm soát lỗi và luồng dữ liệu",
            "C. Đóng gói và vận chuyển thông tin",
            "D. Phân mảnh và đóng gói dữ liệu"
        ],
        "answer": 1,
        "id": "63"
    },
    {
        "questionName": "Chức năng của tầng mạng là:",
        "option": [
            "A. Thực hiện chọn đường",
            "B. Thực hiện chuyển mạch",
            "C. Kiểm soát lỗi và luồng dữ liệu",
            "D. Đóng gói dữ liệu"
        ],
        "answer": 0,
        "id": "64"
    },
    {
        "questionName": "Chức năng của tầng liên kết dữ liệu là:",
        "option": [
            "A. Tạo khung thông tin (Frame)",
            "B. Đóng gói dữ liệu",
            "C. Chọn đường",
            "D. Vận chuyển thông tin giữa các máy chủ (End to End)"
        ],
        "answer": 0,
        "id": "65"
    },
    {
        "questionName": "Chức năng của tầng vật lý là:",
        "option": [
            "A. Đảm bảo các yêu cầu truyền/nhận các chuỗi bit qua các phương tiện vật lý",
            "B. Kiểm soát lỗi và luồng dữ liệu",
            "C. Tạo khung thông tin",
            "D. Phân mảnh và đóng gói dữ liệu"
        ],
        "answer": 0,
        "id": "66"
    },
    {
        "questionName": "Khi kết nối máy tính từ nhà vào ISP thông qua đường dây điện thoại, tín hiệu trên đường điện thoại sẽ thuộc về tầng: ",
        "option": [
            "A. Giao vận",
            "B. Mạng",
            "C. Liên kết dữ liệu",
            "D. Vật lý"
        ],
        "answer": 3,
        "id": "67"
    },
    {
        "questionName": "Theo mô hình OSI, định dạng ảnh JPG nằm ở tầng:",
        "option": [
            "A. Ứng dụng",
            "B. Phiên",
            "C. Trình diễn",
            "D. Mạng"
        ],
        "answer": 2,
        "id": "68"
    },
    {
        "questionName": "Mô hình OSI chia hoạt động truyền thông thành mấy tầng:",
        "option": [
            "A. 7 tầng",
            "B. 5 tầng",
            "C. 4 tầng",
            "D. 3 tầng"
        ],
        "answer": 0,
        "id": "69"
    },
    {
        "questionName": "Các tầng của mô hình OSI theo thứ tự từ dưới lên là:",
        "option": [
            "A. Vật lý, TCP, IP, Mạng, Giao vận, Phiên, Trình diễn và Ứng dụng",
            "B. Vật lý, Liên kết dữ liệu, Giao vận, Mạng, Phiên, Trình diễn và Ứng dụng",
            "C. Vật lý, Liên kết dữ liệu, Mạng, Giao vận, Phiên, Trình diễn và Ứng dụng",
            "D. Vật lý, Liên kết dữ liệu, Mạng, TCP, IP, Phiên và Ứng dụng"
        ],
        "answer": 2,
        "id": "70"
    },
    {
        "questionName": "Tầng nào xác định giao diện giữa người sử dụng và môi trường OSI:",
        "option": [
            "A. Tầng ứng dụng",
            "B. Tầng trình diễn",
            "C. Tầng phiên",
            "D. Tầng vận chuyển"
        ],
        "answer": 0,
        "id": "71"
    },
    {
        "questionName": "Tầng nào dưới đây thiết lập, duy trì, huỷ bỏ 'các giao dịch' giữa các thực thể đầu cuối:",
        "option": [
            "A. Tầng mạng",
            "B. Tầng liên kết dữ liệu",
            "C. Tầng phiên",
            "D. Tầng vật lý"
        ],
        "answer": 0,
        "id": "72"
    },
    {
        "questionName": "Tầng nào thực hiện việc chuyển giao các thông điệp giữa các tiến trình trên các thiết bị: ",
        "option": [
            "A. Tầng mạng",
            "B. Tầng giao vận",
            "C. Tầng liên kết dữ liệu",
            "D. Tầng phiên"
        ],
        "answer": 1,
        "id": "73"
    },
    {
        "questionName": "Điều khiển các cuộc liên lạc là chức năng của tầng nào:",
        "option": [
            "A. Vật lý",
            "B. Tầng mạng",
            "C. Tầng phiên",
            "D. Tầng trình diễn"
        ],
        "answer": 2,
        "id": "74"
    },
    {
        "questionName": "Trong mô hình OSI, tầng nào thực hiện việc chọn đường và chuyển tiếp thông tin:",
        "option": [
            "A. Network",
            "B. Transport",
            "C. Session",
            "D. Data link"
        ],
        "answer": 0,
        "id": "75"
    },
    {
        "questionName": "Trong mô hình OSI, việc mở và đóng các cuộc hội thoại giữa các máy tính là trách nhiệm của:",
        "option": [
            "A. Tầng phiên",
            "B. Tầng giao vận",
            "C. Tầng liên kết dữ liệu",
            "D. Tầng vật lý"
        ],
        "answer": 0,
        "id": "76"
    },
    {
        "questionName": "Trong mô hình OSI, đâu là mối quan hệ của một tầng (N) đối với tầng bên trên nó (N+1):",
        "option": [
            "A. Tầng N cung cấp các dịch vụ cho tầng N+1",
            "B. Tầng N+1 bổ sung một phần đầu vào thông tin nhận được từ tầng N",
            "C. Tầng N vận dụng các dịch vụ do tầng N+1 cung cấp",
            "D. Tầng N không có tác động gì lên tầng N+1"
        ],
        "answer": 0,
        "id": "77"
    },
    {
        "questionName": "Trong mô hình mạng Internet, chuẩn UNICODE (cho việc mã hoá các ký tự) sẽ nằm ở tầng:",
        "option": [
            "A. Ứng dụng",
            "B. Giao vận",
            "C. Mạng",
            "D. Liên kết dữ liệu"
        ],
        "answer": 0,
        "id": "78"
    },
    {
        "questionName": "Theo mô hình OSI, định dạng ảnh JPG nằm ở tầng:",
        "option": [
            "A. Ứng dụng",
            "B. Phiên",
            "C. Trình diễn",
            "D. Mạng"
        ],
        "answer": 2,
        "id": "79"
    },
    {
        "questionName": "Đơn vị dữ liệu ở tầng presentation là:",
        "option": [
            "A. Byte",
            "B. Data",
            "C. Frame",
            "D. Packet"
        ],
        "answer": 1,
        "id": "80"
    },
    {
        "questionName": "Chọn chức năng của tầng Presentation:",
        "option": [
            "A. Mã hoá dữ liệu và nén dữ liệu",
            "B. Cung cấp các dịch vụ mạng người dùng",
            "C. Đánh địa chỉ",
            "D. Tất cả đều sai"
        ],
        "answer": 0,
        "id": "81"
    },
    {
        "questionName": "Tầng nào trong mô hình OSI chịu trách nhiệm mã hoá dữ liệu:",
        "option": [
            "A. Application",
            "B. Presentation",
            "C. Session",
            "D. Transport"
        ],
        "answer": 1,
        "id": "82"
    },
    {
        "questionName": "Tầng nào trong mô hình OSI làm việc với các tín hiệu điện:",
        "option": [
            "A. Data Link",
            "B. Network",
            "C. Physical",
            "D. Transport"
        ],
        "answer": 2,
        "id": "83"
    },
    {
        "questionName": "Mô hình TCP/IP chia hoạt động truyền thông thành mấy tầng:",
        "option": [
            "A. 7 tầng",
            "B. 5 tầng",
            "C. 4 tầng",
            "D. 3 tầng"
        ],
        "answer": 2,
        "id": "84"
    },
    {
        "questionName": "Thứ tự các tầng từ thấp đến cao trong mô hình TCP/IP là:",
        "option": [
            "A. Ứng dụng, Mạng, Giao vận, Truy nhập mạng",
            "B. Mạng, Giao vận, Truy nhập mạng, Ứng dụng",
            "C. Truy nhập mạng, Mạng, Giao vận, Ứng dụng",
            "D. Truy nhập mạng, Giao vận, Mạng, Ứng dụng"
        ],
        "answer": 2,
        "id": "85"
    },
    {
        "questionName": "Đơn vị dữ liệu ở tầng Data link là:",
        "option": [
            "A. Byte",
            "B. Data",
            "C. Frame",
            "D. Packet"
        ],
        "answer": 2,
        "id": "86"
    },
    {
        "questionName": "Đơn vị dữ liệu ở tầng Internet là:",
        "option": [
            "A. Byte",
            "B. Data",
            "C. Frame",
            "D. Datagram"
        ],
        "answer": 3,
        "id": "87"
    },
    {
        "questionName": "Chức năng của tầng ứng dụng là:",
        "option": [
            "A. Tạo khung thông tin (Frame)",
            "B. Đóng gói dữ liệu",
            "C. Cung cấp các phương tiện để người dùng có thể truy nhập được vào môi trường mạng",
            "D. Vận chuyển thông tin giữa các máy chủ (End to End)"
        ],
        "answer": 2,
        "id": "88"
    },
    {
        "questionName": "FTP là từ viết tắt của:",
        "option": [
            "A. File Transfer Protocol",
            "B. Folder Transfer Protocol",
            "C. Protocol Transfer Program",
            "D. Protocol Transfer Folder"
        ],
        "answer": 0,
        "id": "89"
    },
    {
        "questionName": "HTTP là từ viết tắt của:",
        "option": [
            "A. HyperText Transmision Protocol",
            "B. HyperText Transit Protocol",
            "C. HyperText Transfer Protocol",
            "D. HyperText Treat Protocol"
        ],
        "answer": 2,
        "id": "90"
    },
    {
        "questionName": "Giao thức POP3 sử dụng cổng dịch vụ số:",
        "option": [
            "A. 53",
            "B. 23",
            "C. 25",
            "D. 110"
        ],
        "answer": 3,
        "id": "91"
    },
    {
        "questionName": "Dịch vụ DNS có chức năng chính là gì:",
        "option": [
            "A. Phân giải tên netbios",
            "B. Phân giải tên miền (IP sang tên và ngược lại)",
            "C. Phân giải địa chỉ MAC",
            "D. Tất cả đều sai"
        ],
        "answer": 1,
        "id": "92"
    },
    {
        "questionName": ": Nhược điểm nếu xây dựng hệ thống dịch vụ tên miền (DNS) theo mô hình tập trung là:",
        "option": [
            "A. Nếu điểm tập trung bị hỏng, toàn bộ hệ thống sẽ bị tê liệt",
            "B. Số lượng yêu cầu phục vụ tại điểm tập trung duy nhất sẽ rất lớn",
            "C. Chi phí bảo trì hệ thống rất lớn",
            "D. Tất cả câu trả lời trên"
        ],
        "answer": 3,
        "id": "93"
    },
    {
        "questionName": " Số hiệu cổng (port) của giao thức truyền mail SMTP là:",
        "option": [
            "A. 23",
            "B. 25",
            "C. 21",
            "D. 110"
        ],
        "answer": 1,
        "id": "94"
    },
    {
        "questionName": "Giao thức truyền thông trong DNS sử dụng cổng dịch vụ số:",
        "option": [
            "A. 21",
            "B. 25",
            "C. 53",
            "D. 110"
        ],
        "answer": 2,
        "id": "95"
    },
    {
        "questionName": "Trong số các cặp giao thức và cổng dịch vụ sau, cặp nào là sai:",
        "option": [
            "A. SMTP:TCP Port 25",
            "B. FTP:UDP Port 22",
            "C. HTTP:TCP Port 80",
            "D. DNS:UDP Port 53"
        ],
        "answer": 1,
        "id": "96"
    },
    {
        "questionName": "Giao thức nào sau đây hoạt động trên nền giao thức UDP:",
        "option": [
            "A. ARP",
            "B. DNS",
            "C. Telnet",
            "D. Tất cả các câu trên đều đúng"
        ],
        "answer": 1,
        "id": "97"
    },
    {
        "questionName": "Khẳng định nào sau đây là đúng khi nói về ngôn ngữ đánh dấu siêu văn bản HTML:",
        "option": [
            "A. Là một thủ tục World Wide Web",
            "B. Phương thức liên kết các file văn bản",
            "C. Là công cụ soạn thảo trang thông tin Web",
            "D. Giao diện Web"
        ],
        "answer": 2,
        "id": "98"
    },
    {
        "questionName": "Khẳng định nào sau đây là đúng khi nói về tên gọi loại máy chủ cung cấp dịch vụ thư điện tử:",
        "option": [
            "A. Web Server",
            "B. Mail Server",
            "C. FTP Server",
            "D. Proxy"
        ],
        "answer": 1,
        "id": "99"
    },
    {
        "questionName": "Khẳng định nào sau đây là đúng khi nói về đơn vị dữ liệu của tầng Ứng dụng (Application):",
        "option": [
            "A. Message (Thông điệp)",
            "B. Segment/ Datagram (Đoạn/Bó dữ liệu)",
            "C. Packet (Gói dữ liệu)",
            "D. Frame (Khung dữ liệu)            "
        ],
        "answer": 0,
        "id": "100"
    },
    {
        "questionName": "HTTP (Hypertex Transfer Protocol) là:",
        "option": [
            "A. Giao thức ứng dụng cho phép các máy tính giao tiếp với nhau qua Web và có khả năng liên kết các trang Web với nhau.",
            "B. Giao thức tầng vận chuyển cho phép truyền tải các trang Web.",
            "C. Một thành phần tên miền.",
            "D. Giao diện Web."
        ],
        "answer": 0,
        "id": "101"
    },
    {
        "questionName": "Các giao thức ứng dụng hoạt động trên:",
        "option": [
            "A. Tầng trình diễn",
            "B. Tầng phiên",
            "C. Tầng ứng dụng",
            "D. Tầng liên kết dữ liệu"
        ],
        "answer": 2,
        "id": "102"
    },
    {
        "questionName": "HTTP làm nhiệm vụ gì:",
        "option": [
            "A. Cung cấp một cơ chế để lấy dữ liệu từ server chuyển đến client",
            "B. Hiển thị các trang Web từ xa trên màn hình và giúp người dùng tương tác với chúng",
            "C. Cung cấp giao diện người dùng như các nút bấm, thanh trượt…",
            "D. Cung cấp dữ liệu từ server sử dụng giao thức chuyển file (File Transport Protocol)"
        ],
        "answer": 0,
        "id": "103"
    },
    {
        "questionName": "Trên Internet, email được gửi từ máy nguồn bằng cách thiết lập một kết nối TCP đến một cổng cụ thể trên máy đích. Cổng đó là:",
        "option": [
            "A. 80",
            "B. 110",
            "C. 25",
            "D. 404"
        ],
        "answer": 2,
        "id": "104"
    },
    {
        "questionName": "Giả sử có một bản ghi của dịch vụ DNS là (cnn.com, r1.infor.cnn.com, CNAME)",
        "option": [
            "A. cnn.com là tên viết tắt (rút gọn) của r1.infor.cnn.com",
            "B. r1.infor.cnn.com là tên viết tắt (rút gọn) của cnn.com",
            "C. Cả A và B đều đúng",
            "D. Cả A và B đều sai"
        ],
        "answer": 0,
        "id": "105"
    },
    {
        "questionName": "",
        "option": [
            "A. HTTP",
            "B. FTP",
            "C. SMTP",
            "D. SNMP"
        ],
        "answer": 1,
        "id": "106"
    },
    {
        "questionName": "Giả sử có một bản ghi của dịch vụ DNS là (alpha.com, 123.4.5.7, NS). Chọn câu trả lời đúng:",
        "option": [
            "A. 123.4.5.7 là địa chỉ IP của máy alpha.com",
            "B. alpha.com là một tên miền, không phải là một máy",
            "C. 123.4.5.7 là địa chỉ IP của máy phục vụ thư (mail server) có tên miền là google.com",
            "D. Tất cả đều sai"
        ],
        "answer": 1,
        "id": "107"
    },
    {
        "questionName": "Giả sử tất cả các máy tính thuê bao Internet của FPT khi truy cập vào website google.com đều bị chuyển hướng sang một trang web khác. Các máy tính thuê bao các ISP khác không gặp tình huống này. Nguyên nhân gây ra lỗi lớn nhất sẽ là:",
        "option": [
            "A. Các máy tính bị nhiễm virus",
            "B. Website google bị lỗi",
            "C. DNS server của FPT bị lỗi",
            "D. Router ra ngoài của ISP FPT bị lỗi"
        ],
        "answer": 2,
        "id": "108"
    },
    {
        "questionName": "Các Web client thường được gọi là gì:",
        "option": [
            "A. Netscape Navigator",
            "B. Browers",
            "C. Mosaic",
            "D. HTML interpreter (trình thông dịch HTML)"
        ],
        "answer": 1,
        "id": "109"
    },
    {
        "questionName": "Web server thường sử dụng phần mềm chạy trên:",
        "option": [
            "A. Cổng 25",
            "B. Cổng 404",
            "C. Cổng 125",
            "D. Cổng 80"
        ],
        "answer": 3,
        "id": "110"
    },
    {
        "questionName": "Để thiết kế một trang Web như chúng ta vẫn thấy trên màn hình (các định dạng font chữ, màu sắc, các hiệu ứng đồ họa, các đường liên kết), người ta đã phát triển một kiểu định dạng đặc biệt. Định dạng trang chuẩn được dùng trong Web là:",
        "option": [
            "A. HTTP",
            "B. Mosaic",
            "C. HTML",
            "D. Netscape"
        ],
        "answer": 2,
        "id": "111"
    },
    {
        "questionName": "Phát biểu nào sau đây đúng về giao thức HTTP:",
        "option": [
            "A. Phiên bản giao thức luôn được đặt trong tất cả thông điệp",
            "B. Tất cả các tiêu đề đều dưới dạng text",
            "C. Tất cả dữ liệu đều truyền dưới dạng văn bản (text)",
            "D. A và B"
        ],
        "answer": 3,
        "id": "112"
    },
    {
        "questionName": "Trong những thông điệp HTTP trả lời dưới đây, thông điệp nào đúng:",
        "option": [
            "A. 200 'OK'",
            "B. 201 'Moved Permanently'",
            "C. 404 'Not Found'",
            "D. 20 'Not Implemente'"
        ],
        "answer": 0,
        "id": "113"
    },
    {
        "questionName": "Những thông điệp nào dưới đây được giao thức POP3 hỗ trợ:",
        "option": [
            "A. Kiểm chứng (Authorization)",
            "B. Đọc một thư (Retrieving a message)",
            "C. Xoá một thư",
            "D. Tất cả đều đúng"
        ],
        "answer": 3,
        "id": "114"
    },
    {
        "questionName": "Giao thức nào thuộc tầng Application:",
        "option": [
            "A. IP",
            "B. HTTP",
            "C. NFS",
            "D. TCP"
        ],
        "answer": 1,
        "id": "115"
    },
    {
        "questionName": "Cho biết ứng dụng nào thuộc loại Client/Server:",
        "option": [
            "A. WinWord",
            "B. WWW (World Wide Web)",
            "C. Excel",
            "D. Photoshop"
        ],
        "answer": 1,
        "id": "116"
    },
    {
        "questionName": "Mã 404 trong thông điệp trả lời từ Web server cho Web client có ý nghĩa:",
        "option": [
            "A. Server không hiểu yêu cầu của client",
            "B. Đối tượng client yêu cầu không có",
            "C. Không có câu trả lời nào đúng",
            "D. Yêu cầu của Client không hợp lệ"
        ],
        "answer": 1,
        "id": "117"
    },
    {
        "questionName": "Giao thức được sử dụng để truyền thư giữa các máy chủ phục vụ thư (Mail server) là:",
        "option": [
            "A. HTTP",
            "B. FTP",
            "C. SMTP",
            "D. POP"
        ],
        "answer": 2,
        "id": "118"
    },
    {
        "questionName": "Ứng dụng nào sử dụng mô hình client/server:",
        "option": [
            "A. Bit Torrent",
            "B. Email, Web",
            "C. Skype",
            "D. KaZaA"
        ],
        "answer": 1,
        "id": "119"
    },
    {
        "questionName": "Ứng dụng nào sử dụng mô hình P2P:",
        "option": [
            "A. Telnet",
            "B. Email",
            "C. Web",
            "D. Skype"
        ],
        "answer": 3,
        "id": "120"
    },
    {
        "questionName": "Các ứng dụng dùng giao thức TCP:",
        "option": [
            "A. Web, truyền file, Email",
            "B. Web, DNS, điện thoại Internet",
            "C. Hội thảo từ xa, điện thoại Internet, streaming media",
            "D. Telnet, DNS, Email"
        ],
        "answer": 0,
        "id": "121"
    },
    {
        "questionName": "Các ứng dụng dùng giao thức UDP:",
        "option": [
            "A. Web, truyền file, Email",
            "B. Web, DNS, điện thoại Internet",
            "C. Hội thảo từ xa, điện thoại Internet, streaming media",
            "D. Telnet, DNS, Email"
        ],
        "answer": 2,
        "id": "122"
    },
    {
        "questionName": "Định danh (identifier) của tiến trình bao gồm:",
        "option": [
            "A. Địa chỉ IP của host",
            "B. Địa chỉ IP và số hiệu cổng liên kết với tiến trình trên host",
            "C. Địa chỉ IP nguồn và địa chỉ IP đích",
            "D. Địa chỉ IP nguồn, số hiệu cổng nguồn, địa chỉ IP đích, số hiệu cổng đích"
        ],
        "answer": 1,
        "id": "123"
    },
    {
        "questionName": "Đâu là một URL:",
        "option": [
            "A. www.someschool.edu",
            "B. 192.168.1.1",
            "C. …/someDept/pic.gif",
            "D. www.someschool.edu/someDept/pic.gif"
        ],
        "answer": 3,
        "id": "124"
    },
    {
        "questionName": "RTT (Round Trip Time) là:",
        "option": [
            "A. Thời gian khởi tạo kết nối TCP",
            "B. Thời gian để gửi một gói nhỏ đi từ client đến server",
            "C. Thời gian để gửi một gói nhỏ đi từ client đến server và quay lại",
            "D. Thời gian truyền file"
        ],
        "answer": 2,
        "id": "125"
    },
    {
        "questionName": "Trong cơ sở dữ liệu của DNS lưu trữ các resource record (RR) có dạng:",
        "option": [
            "A. (name, value, type, ttl)",
            "B. (value, name, ttl, type)",
            "C. (value, ttl, name, type)",
            "D. (name, type, ttl, value)"
        ],
        "answer": 0,
        "id": "126"
    },
    {
        "questionName": "Những giao thức nào sau đây thuộc tầng vận chuyển (Transport Layer) trong mô hình TCP/IP:",
        "option": [
            "A. UDP",
            "B. IP",
            "C. TCP",
            "D. Cả A và C đều đúng"
        ],
        "answer": 3,
        "id": "127"
    },
    {
        "questionName": "Giao thức nào cung cấp tính năng vận chuyển gói tin có độ tin cậy cao:",
        "option": [
            "A. UDP",
            "B. TCP",
            "C. ARP",
            "D. IP"
        ],
        "answer": 1,
        "id": "128"
    },
    {
        "questionName": "Tầng giao vận Host to Host hoạt động bởi giao thức:",
        "option": [
            "A. TCP",
            "B. IP",
            "C. ICMP",
            "D. ARP"
        ],
        "answer": 0,
        "id": "129"
    },
    {
        "questionName": "Trường Window trong header của gói TCP liên quan đến:",
        "option": [
            "A. Kích thước bộ nhớ khả dụng",
            "B. Hệ điều hành",
            "C. Kích thước màn hình",
            "D. Tất cả đều sai"
        ],
        "answer": 0,
        "id": "130"
    },
    {
        "questionName": "Gói tin TCP yêu cầu kết nối sẽ có giá trị của các cờ:",
        "option": [
            "A. RST=1, SYN=1",
            "B. ACK=1, SYN=1",
            "C. ACK=0, SYN=1",
            "D. FIN=1, SYN=0"
        ],
        "answer": 2,
        "id": "131"
    },
    {
        "questionName": "TCP và UDP hoạt động ở tầng nào trong mô hình OSI:",
        "option": [
            "A. Session (Tầng 5)",
            "B. Transport (Tầng 4)",
            "C. Network (Tầng 3)",
            "D. Data Link (Tầng 2)"
        ],
        "answer": 1,
        "id": "132"
    },
    {
        "questionName": "Khẳng định nào sau đây là đúng khi nói về kỹ thuật sử dụng băng thông hiệu quả:",
        "option": [
            "A. Điều khiển luồng cửa sổ tĩnh",
            "B. Điều khiển luồng tốc độ đảm bảo",
            "C. Điều khiển luồng cửa sổ động",
            "D. Điều khiển luồng tốc độ động"
        ],
        "answer": 2,
        "id": "133"
    },
    {
        "questionName": "Giao thức TCP hoạt động cùng tầng với những giao thức nào:",
        "option": [
            "A. ARP, RARP",
            "B. UDP",
            "C. TELNET, FTP",
            "D. IP, ARP"
        ],
        "answer": 1,
        "id": "134"
    },
    {
        "questionName": "Các giao thức TCP và UDP hoạt động ở tầng nào:",
        "option": [
            "A. Application",
            "B. Network",
            "C. Transport",
            "D. Presentation"
        ],
        "answer": 2,
        "id": "135"
    },
    {
        "questionName": "Giao thức UDP được sử dụng cho những ứng dụng:",
        "option": [
            "A. Có yêu cầu liên kết",
            "B. Đòi hỏi độ tin cậy cao",
            "C. Yêu cầu độ trễ nhỏ",
            "D. Không đòi hỏi độ tin cậy cao"
        ],
        "answer": 3,
        "id": "136"
    },
    {
        "questionName": "Trong gói dữ liệu UDP (UDP segment), vùng dữ liệu thực sự bắt đầu từ byte thứ:",
        "option": [
            "A. 4",
            "B. 5",
            "C. 8",
            "D. 9"
        ],
        "answer": 3,
        "id": "137"
    },
    {
        "questionName": "Đẳng thức nào sau đây mô tả chính xác nhất giao thức UDP:",
        "option": [
            "A. UDP = IP",
            "B. UDP = TCP - (tính tin cậy)",
            "C. UDP = ICMP + (phân kênh theo địa chỉ cổng)",
            "D. UDP = TCP - IP"
        ],
        "answer": 1,
        "id": "138"
    },
    {
        "questionName": "Để phát hiện lỗi trong gói tin, người ta sử dụng kỹ thuật:",
        "option": [
            "A. Số thứ tự (sequence number)",
            "B. Số thứ tự ghi nhận (acknowledgement number)",
            "C. Bộ định thời (timer)",
            "D. Checksum"
        ],
        "answer": 3,
        "id": "139"
    },
    {
        "questionName": "Khi thực thể TCP gửi một gói SYNACK segment với trường Acknowledgement Number = 100, điều này có nghĩa là:",
        "option": [
            "A. Gói dữ liệu nó gửi đi bắt đầu bằng byte thứ 100 trong dòng dữ liệu",
            "B. Byte dữ liệu đầu tiên trong dòng dữ liệu sẽ gửi đi có số thứ tự là 100",
            "C. Nó sẽ gửi từ byte thứ 100",
            "D. Nó hy vọng nhận được dữ liệu bắt đầu bằng byte có số thứ tự 100"
        ],
        "answer": 3,
        "id": "140"
    },
    {
        "questionName": "Giao thức giao vận chạy phía trên IP mà không cần thiết lập kết nối trước khi truyền là:",
        "option": [
            "A. UDP",
            "B. TCP",
            "C. HTTP",
            "D. FTP"
        ],
        "answer": 0,
        "id": "141"
    },
    {
        "questionName": "Giao thức TCP có thể xử lý:",
        "option": [
            "A. Gói tin bị mất",
            "B. Các gói tin bị trùng lặp",
            "C. Các gói tin không theo thứ tự",
            "D. Tất cả các phương án trên"
        ],
        "answer": 3,
        "id": "142"
    },
    {
        "questionName": "Checksum trong gói dữ liệu UDP có độ dài:",
        "option": [
            "A. 4 bit",
            "B. 8 bit",
            "C. 16 bit",
            "D. 32 bit"
        ],
        "answer": 2,
        "id": "143"
    },
    {
        "questionName": "Vị trí dữ liệu thực sự trong gói dữ liệu TCP bắt đầu từ byte:",
        "option": [
            "A. 40",
            "B. 32",
            "C. 5",
            "D. Không xác định"
        ],
        "answer": 3,
        "id": "144"
    },
    {
        "questionName": "Giả sử thực thể TCP A cần gửi 1500 byte cho thực thể giao vận B. Gói thứ nhất chứa 1000 byte dữ liệu, trường Sequence Number của gói này là 100. Trường Sequence Number của gói thứ hai sẽ là:",
        "option": [
            "A. 1101",
            "B. 1100",
            "C. 500",
            "D. 501"
        ],
        "answer": 1,
        "id": "145"
    },
    {
        "questionName": "Với giao thức TCP, bên nhận sẽ thông báo lại cho bên gửi về số lượng tối đa dữ liệu mà nó có thể nhận được. Giá trị này được xác định tại trường:",
        "option": [
            "A. Sequence Number",
            "B. Acknowledgement Number",
            "C. Rcvr Number",
            "D. Header length"
        ],
        "answer": 2,
        "id": "146"
    },
    {
        "questionName": "Sau khi thực thể TCP gửi đi gói SYN segment với trường Sequence Number = 100, nó nhận được gói ACKSYN với truờng Sequence Number = 200. Trường Acknowledgment Number của gói ACKSYN này sẽ là:",
        "option": [
            "A. 100",
            "B. 101",
            "C. 200",
            "D. 201"
        ],
        "answer": 1,
        "id": "147"
    },
    {
        "questionName": "Giả sử ứng dụng tạo ra một thông điệp 60 byte. Thông điệp này được đặt trong TCP segment rồi sau đó là IP datagram. Giả sử cả gói TCP lẫn gói IP không có trường dữ liệu đặc biệt (Optional = 0). Trong mỗi IP datagram sẽ chứa bao nhiêu phần trăm dữ liệu thật sự:",
        "option": [
            "A. 20%",
            "B. 40%",
            "C. 60%",
            "D. 80%"
        ],
        "answer": 2,
        "id": "148"
    },
    {
        "questionName": "TCP port mặc định được sử dụng cho FTP server có giá trị là bao nhiêu:",
        "option": [
            "A. 20 và 21",
            "B. 80 và 8080",
            "C. 110 và 80",
            "D. 8080 và 1080"
        ],
        "answer": 0,
        "id": "149"
    },
    {
        "questionName": "Trong gói dữ liệu UDP (UDP segment), địa chỉ dùng để xác định tiến trình nhận nằm ở:",
        "option": [
            "A. Byte 1 và 2",
            "B. Byte 3 và 4",
            "C. Byte 5 và 6",
            "D. Không xác định"
        ],
        "answer": 0,
        "id": "150"
    },
    {
        "questionName": "Các protocol TCP và UDP hoạt động ở tầng nào trong các tầng sau đây:",
        "option": [
            "A. Transport",
            "B. Network",
            "C. Application",
            "D. Presentation"
        ],
        "answer": 0,
        "id": "151"
    },
    {
        "questionName": "Giao thức TCP làm việc ở tầng nào của mô hình OSI:",
        "option": [
            "A. Tầng ứng dụng",
            "B. Tầng giao vận",
            "C. Tầng mạng",
            "D. Tầng liên kết dữ liệu"
        ],
        "answer": 1,
        "id": "152"
    },
    {
        "questionName": "Giao thức nào dưới đây không đảm bảo dữ liệu gửi đi có tới máy nhận hoàn chỉnh hay không:",
        "option": [
            "A. TCP",
            "B. ASP",
            "C. UDP",
            "D. ARP"
        ],
        "answer": 2,
        "id": "153"
    },
    {
        "questionName": "Các giao thức của tầng giao vận (Transport):",
        "option": [
            "A. Kiểm soát việc truyền tin giữa hai tiến trình trên mạng máy tính",
            "B. Kiểm soát nội dung thông điệp trao đổi giữa hai tiến trình và hành vi của mỗi bên khi nhận được thông điệp",
            "C. Kiểm soát việc truyền tin giữa hai máy tính trên mạng máy tính",
            "D. Kiểm soát việc truyền dữ liệu giữa hai máy tính trên cùng một môi trường truyền"
        ],
        "answer": 0,
        "id": "154"
    },
    {
        "questionName": "Giả sử trường Length của một gói dữ liệu UDP có giá trị 150. Dữ liệu thực sự sẽ có:",
        "option": [
            "A. 67 byte",
            "B. 142 byte",
            "C. 150 byte",
            "D. 158 byte"
        ],
        "answer": 1,
        "id": "155"
    },
    {
        "questionName": "Quan sát một người đang truy cập một trang web, thấy anh ta gõ đường dẫn như sau: http://www.tomang.net:3000. Hãy cho biết Server web mà trang web trên sử dụng TCP port như thế nào:",
        "option": [
            "A. Sử dụng port mặc định",
            "B. Không sử dụng port mặc định",
            "C. Sử dụng port chuẩn",
            "D. Sử dụng port dành riêng cho Web server"
        ],
        "answer": 3,
        "id": "156"
    },
    {
        "questionName": "UDP socket được xác định bởi:",
        "option": [
            "A. Địa chỉ IP nguồn, địa chỉ IP đích",
            "B. Địa chỉ IP nguồn, số port nguồn",
            "C. Địa chỉ IP đích, số port đích",
            "D. Địa chỉ IP nguồn, địa chỉ IP đích, số port nguồn, số port đích"
        ],
        "answer": 0,
        "id": "157"
    },
    {
        "questionName": "TCP socket được xác định bởi:",
        "option": [
            "A. Địa chỉ IP nguồn, địa chỉ IP đích",
            "B. Địa chỉ IP nguồn, số port nguồn, địa chỉ IP đích",
            "C. Địa chỉ IP nguồn, địa chỉ IP đích, số port đích",
            "D. Địa chỉ IP nguồn, số port nguồn, địa chỉ IP đích, số port đích"
        ],
        "answer": 3,
        "id": "158"
    },
    {
        "questionName": "Giao thức truyền tin cậy (rdt-reliable data transfer protocol) cần được sử dụng trên:",
        "option": [
            "A. Các kênh truyền có độ tin cậy cao",
            "B. Các kênh truyền không tin cậy",
            "C. Cả hai trường hợp trên đều đúng",
            "D. Cả hai trường hợp trên đều sai"
        ],
        "answer": 1,
        "id": "159"
    },
    {
        "questionName": "Độ phức tạp của giao thức truyền tin cậy (rdt-reliable data transfer protocol) phụ thuộc vào:",
        "option": [
            "A. Kiến trúc mạng",
            "B. Các thiết bị mạng (router, switch, hub, …)",
            "C. Các đặc tính của kênh truyền",
            "D. Khoảng cách giữa các hosts"
        ],
        "answer": 2,
        "id": "160"
    },
    {
        "questionName": "161: Byte đầu tiên của một địa chỉ IP có dạng: 11100001. Vậy nó thuộc lớp nào:",
        "option": [
            "A. Lớp B",
            "B. Lớp C",
            "C. Lớp D",
            "D. Lớp E"
        ],
        "answer": 2,
        "id": "161"
    },
    {
        "questionName": "Trong mạng máy tính dùng giao thức TCP/IP và đều dùng Subnet Mask là 255.255.255.0 thì cặp máy tính nào sau đây liên thông:",
        "option": [
            "A. 192.168.1.3 và 192.168.100.1",
            "B. 192.168.15.1 và 192.168.15.254",
            "C. 192.168.100.15 và 192.186.100.16 ",
            "D. 172.25.11.1 và 172.26.11.2"
        ],
        "answer": 1,
        "id": "162"
    },
    {
        "questionName": "Cho địa chỉ 192.64.10.0/28. Hãy cho biết số lượng mạng con và số lượng máy trên mỗi mạng con:",
        "option": [
            "A. 6 mạng con, mỗi mạng con có 30 máy",
            "B. 14 mạng con, mỗi mạng con có 14 máy",
            "C. 16 mạng con, mỗi mạng con có 16 máy",
            "D. 8 mạng con, mỗi mạng con có 32 máy"
        ],
        "answer": 1,
        "id": "163"
    },
    {
        "questionName": "Một mạng lớp B cần chia thành 3 mạng con sử dụng Subnet mask nào sau đây:",
        "option": [
            "A. 255.255.224.0",
            "B. 255.0.0.255",
            "C. 255.255.192.0",
            "D. 255.255.255.224"
        ],
        "answer": 0,
        "id": "164"
    },
    {
        "questionName": "Cho kết xuất lệnh route print trên máy X như sau:",
        "option": [
            "A. 0.0.0.0",
            "B. 172.16.9.12",
            "C. 127.0.0.1",
            "D. 172.16.9.0"
        ],
        "answer": 1,
        "id": "165"
    },
    {
        "questionName": "Các địa chỉ IP cùng mạng con với địa chỉ 131.107.2.56/28:",
        "option": [
            "A. Từ 131.107.2.48 đến 131.107.2.63",
            "B. Từ 131.107.2.49 đến 131.107.2.63",
            "C. Từ 131.107.2.48 đến 131.107.2.62",
            "D. Từ 131.107.2.55 đến 131.107.2.126"
        ],
        "answer": 2,
        "id": "166"
    },
    {
        "questionName": "Địa chỉ IP nào sau đây cùng địa chỉ mạng (Subnet) với địa chỉ IP 192.168.1.10/24:",
        "option": [
            "A. 192.168.10.1/24",
            "B. 192.168.1.256/24",
            "C. 192.168.11.12/24",
            "D. 192.168.1.33/24"
        ],
        "answer": 3,
        "id": "167"
    },
    {
        "questionName": "Để biết một địa chỉ IP thuộc lớp địa chỉ nào, căn cứ vào:",
        "option": [
            "A. Giá trị của octet (byte) đầu",
            "B. Giao thức ARP",
            "C. Số dấu chấm trong địa chỉ",
            "D. Địa chỉ của DHCP"
        ],
        "answer": 0,
        "id": "168"
    },
    {
        "questionName": "Một địa chỉ mạng lớp C được chia thành 5 mạng con (subnet). Mặt nạ mạng (subnet mask) cần dùng:",
        "option": [
            "A. 255.255.255.224",
            "B. 255.255.255.252",
            "C. 255.255.255.240",
            "D. 255.255.255.248"
        ],
        "answer": 0,
        "id": "169"
    },
    {
        "questionName": "Trong địa chỉ IPv4, có 5 lớp tất cả: A, B, C, D, E. Lớp C là lớp có dãy địa chỉ:",
        "option": [
            "A. 224.0.0.0 tới 239.255.255.255",
            "B. 192.0.0.0 tới 223.255.255.255",
            "C. 128.0.0.0 tới 191.255.255.255",
            "D. 240.0.0.0 tới 255.255.255.255"
        ],
        "answer": 1,
        "id": "170"
    },
    {
        "questionName": "Địa chỉ IP nào sau đây là hợp lệ:",
        "option": [
            "A. 230.20.30.40",
            "B. 192.168.1.2",
            "C. 255.255.255.255",
            "D. Tất cả các câu trên"
        ],
        "answer": 3,
        "id": "171"
    },
    {
        "questionName": "Cho địa chỉ IP: 192.168.5.39/28. Cho biết địa chỉ mạng của địa chỉ IP này:",
        "option": [
            "A. 192.168.5.39",
            "B. 192.168.5.32",
            "C. 192.168.5.0",
            "D. Tất cả đều sai"
        ],
        "answer": 1,
        "id": "172"
    },
    {
        "questionName": "IPv4 có bao nhiêu địa chỉ IP:",
        "option": [
            "A. 2^12",
            "B. 2^22",
            "C. 2^32",
            "D. 2^42"
        ],
        "answer": 2,
        "id": "173"
    },
    {
        "questionName": "IPv4, lớp B có số NetIDs/HostIDs sử dụng tương ứng là:",
        "option": [
            "A. 2^11 / 2^21 - 2",
            "B. 2^14 / 2^16 - 2",
            "C. 2^13 / 2^19 - 2",
            "D. 2^10 / 2^22 - 2"
        ],
        "answer": 1,
        "id": "174"
    },
    {
        "questionName": "Giao thức OSPF sử dụng thuật toán tìm đường đi nào:",
        "option": [
            "A. Flooding",
            "B. Distance vector routing",
            "C. Link state",
            "D. Bellman-Ford"
        ],
        "answer": 2,
        "id": "175"
    },
    {
        "questionName": "Giao thức RIP sử dụng thuật toán tìm đường đi nào:",
        "option": [
            "A. Flooding",
            "B. Distance vector routing",
            "C. Link state",
            "D. Bellman-Ford"
        ],
        "answer": 1,
        "id": "176"
    },
    {
        "questionName": "Thông điệp ICMP được đặt trong gói dữ liệu:",
        "option": [
            "A. UDP",
            "B. TCP",
            "C. IP",
            "D. Không xác định"
        ],
        "answer": 2,
        "id": "177"
    },
    {
        "questionName": "Địa chỉ IP nào sau đây là hợp lệ:",
        "option": [
            "A. 192.168.1.2",
            "B. 255.255.255.256",
            "C. 10.20.30.40",
            "D. A và C đều đúng"
        ],
        "answer": 3,
        "id": "178"
    },
    {
        "questionName": "Địa chỉ lớp nào cho phép mượn 15 bits để chia subnets:",
        "option": [
            "A. Lớp A",
            "B. Lớp B",
            "C. Lớp C",
            "D. Không câu nào đúng"
        ],
        "answer": 0,
        "id": "179"
    },
    {
        "questionName": "Giao thức nào sau đây thuộc tầng mạng (Internet Layer) trong mô hình TCP/IP:",
        "option": [
            "A. FTP",
            "B. IP",
            "C. ARP",
            "D. Cả B và C đều đúng"
        ],
        "answer": 1,
        "id": "180"
    },
    {
        "questionName": "Việt Nam được trung tâm thông tin Châu Á Thái bình dương APNIC phân địa chỉ IP thuộc lớp nào:",
        "option": [
            "A. Lớp A",
            "B. Lớp B",
            "C. Lớp C",
            "D. Lớp D"
        ],
        "answer": 2,
        "id": "181"
    },
    {
        "questionName": "Địa chỉ IP 203.162.0.11 thuộc địa chỉ lớp nào:",
        "option": [
            "A. Lớp A",
            "B. Lớp B",
            "C. Lớp C",
            "D. Lớp D"
        ],
        "answer": 2,
        "id": "182"
    },
    {
        "questionName": "Những thuật ngữ nào dùng để mô tả các đơn vị dữ liệu tại tầng mạng:",
        "option": [
            "A. Datagram",
            "B. Khung (Frame)",
            "C. Gói tin (Packed)",
            "D. Cả A và C đều đúng"
        ],
        "answer": 3,
        "id": "183"
    },
    {
        "questionName": "Giao thức IP là giao thức:",
        "option": [
            "A. Hướng liên kết",
            "B. Không liên kết",
            "C. Đòi hỏi độ tin cậy cao trong quá trình trao đổi thông tin",
            "D. Yêu cầu kiểm soát luồng và kiểm soát lỗi"
        ],
        "answer": 1,
        "id": "184"
    },
    {
        "questionName": "Cấu trúc khuôn dạng của địa chỉ IP lớp A là:",
        "option": [
            "A. Bit 1: 0, bit 2- 8: NetID, 9-32: HostID",
            "B. Bit 1: 0, bit 2- 16: NetID, 17-32: HostID",
            "C. Bit 1-2: 10, bit 3- 8: NetID, 9 - 32: HostID",
            "D. Bit 1-2: 10, bit 3- 16: NetID, 17 - 32: HostID"
        ],
        "answer": 0,
        "id": "185"
    },
    {
        "questionName": "Cấu trúc khuôn dạng của địa chỉ IP lớp B là:",
        "option": [
            "A. Bit 1: 0, bit 2- 8: NetID, 9-32: HostID",
            "B. Bit 1: 0, bit 2- 16: NetID, 17-32: HostID",
            "C. Bit 1-2: 10, bit 3- 8: NetID, 9 - 32: HostID",
            "D. Bit 1-2: 10, bit 3- 16: NetID, 17 - 32: HostID"
        ],
        "answer": 3,
        "id": "186"
    },
    {
        "questionName": "Địa chỉ mạng NetID: 192.168.0.32/27 có dãy địa chỉ máy HostIDs sử dụng tương ứng là:",
        "option": [
            "A. 192.168.0.33 => 192.168.0.63",
            "B. 192.168.0.32 => 192.168.0.64",
            "C. 192.168.0.32 => 192.168.0.62",
            "D. 192.168.0.33 => 192.168.0.62"
        ],
        "answer": 3,
        "id": "187"
    },
    {
        "questionName": "Trong Header của IP Packet có chứa:",
        "option": [
            "A. Địa chỉ nguồn",
            "B. Địa chỉ đích",
            "C. Không chứa địa chỉ nào cả",
            "D. Cả địa chỉ nguồn và địa chỉ đích"
        ],
        "answer": 3,
        "id": "188"
    },
    {
        "questionName": "Giao thức nào được router hay máy tính sử dụng để thông báo cho các máy tính khác về tình trạng lỗi:",
        "option": [
            "A. TCP",
            "B. UDP",
            "C. IP",
            "D. ICMP"
        ],
        "answer": 3,
        "id": "189"
    },
    {
        "questionName": "Dịch vụ mạng nào sau đây phải dựa trên ICMP:",
        "option": [
            "A. DNS",
            "B. Ping",
            "C. SMTP",
            "D. X Windows"
        ],
        "answer": 2,
        "id": "190"
    },
    {
        "questionName": "Giải pháp nào sau đây có thể giải quyết tình trạng khan hiếm địa chỉ IP:",
        "option": [
            "A. IPv6",
            "B. Network Address Translation",
            "C. Subnet mask",
            "D. Tất cả các phương án trên"
        ],
        "answer": 3,
        "id": "191"
    },
    {
        "questionName": "Giao thức RIP được triển khai tại:",
        "option": [
            "A. Máy tính đầu cuối",
            "B. Router",
            "C. Hub",
            "D. Switch"
        ],
        "answer": 1,
        "id": "192"
    },
    {
        "questionName": "Giao thức nào trong số các giao thức sau thuộc tầng mạng:",
        "option": [
            "A. TCP",
            "B. Telnet",
            "C. FTP",
            "D. IP"
        ],
        "answer": 3,
        "id": "193"
    },
    {
        "questionName": "Trong mạng máy tính dùng giao thức TCP/IP và Subnet Mask là 255.255.255.224 hãy xác định địa chỉ broadcast của mạng nếu biết rằng một máy tính trong mạng có địa chỉ là 192.168.1.1:",
        "option": [
            "A. 192.168.1.31",
            "B. 192.168.1.255",
            "C. 192.168.1.15",
            "D. 192.168.1.96"
        ],
        "answer": 0,
        "id": "194"
    },
    {
        "questionName": "Router hoạt động tại tầng nào trong mô hình OSI:",
        "option": [
            "A. Network Layer",
            "B. Data Link Layer",
            "C. Transport Layer",
            "D. Application Layer"
        ],
        "answer": 0,
        "id": "195"
    },
    {
        "questionName": "Nếu 4 PCs kết nối với nhau thông qua HUB thì cần bao nhiêu địa chỉ IP cho 5 trang thiếi bị mạng này:",
        "option": [
            "A. 1",
            "B. 3",
            "C. 2",
            "D. 4"
        ],
        "answer": 3,
        "id": "196"
    },
    {
        "questionName": "Các thiết bị mạng nào sau đây có khả năng duy trì và trao đổi thông tin với nhau về hiện trạng kết nối của toàn bộ mạng trong một xí nghiệp hoặc một khuôn viên:",
        "option": [
            "A. Bridge",
            "B. Router",
            "C. Repeater",
            "D. Connector"
        ],
        "answer": 1,
        "id": "197"
    },
    {
        "questionName": "Router là một thiết bị dùng để:",
        "option": [
            "A. Định tuyến giữa các mạng",
            "B. Lọc các gói tin dư thừa",
            "C. Mở rộng một hệ thống mạng",
            "D. Cả 3 đều đúng"
        ],
        "answer": 0,
        "id": "198"
    },
    {
        "questionName": "Thiết bị Router cho phép:",
        "option": [
            "A. Kéo dài 1 nhánh LAN thông qua việc khuyếch đại tín hiệu truyền đến nó",
            "B. Kết nối nhiều máy tính lại với nhau",
            "C. Liên kết nhiều mạng LAN lại với nhau, đồng thời ngăn không cho các packet thuộc loại broadcast đi qua nó và giúp việc định tuyến cho các packet",
            "D. Định tuyến cho các packet, chia nhỏ các Collision Domain nhưng không chia nhỏ các Broadcast Domain"
        ],
        "answer": 2,
        "id": "199"
    },
    {
        "questionName": "Tầng Network chịu trách nhiệm:",
        "option": [
            "A. Dựa trên địa chỉ IP đích có trong packet mà quyết định chọn đường thích hợp cho packet",
            "B. Quyết định đích đến của packet",
            "C. Phát hiện packet bị mất và cho gửi lại packet mất",
            "D. Chia nhỏ packet thành các frame"
        ],
        "answer": 0,
        "id": "200"
    },
    {
        "questionName": "Các thiết bị mạng nào sau đây có khả năng định tuyến cho một gói tin (chuyển gói tin sang một mạng kế khác nằm trên đường đến mạng đích) bằng cách dựa vào địa chỉ IP của máy đích có trong gói tin và thông tin hiện thời về tình trạng mạng được thể hiện trong bảng định tuyến có trong thiết bị:",
        "option": [
            "A. Bridge",
            "B. Router",
            "C. Switch",
            "D. Cả A, B và C"
        ],
        "answer": 1,
        "id": "201"
    },
    {
        "questionName": "Địa chỉ nào thuộc về lớp A:",
        "option": [
            "A. 10001100 11001100 11111111 01011010",
            "B. 11001111 11110000 10101010 01010101",
            "C. 01111010 10100101 11000011 11100011",
            "D. 11011010 10101010 01010101 11110011"
        ],
        "answer": 2,
        "id": "202"
    },
    {
        "questionName": "Nếu lấy một địa chỉ lớp B để chia subnet với netmask là 255.255.240.0 thì có bao nhiêu subnets có thể sử dụng được:",
        "option": [
            "A. 4",
            "B. 8",
            "C. 32",
            "D. 16"
        ],
        "answer": 3,
        "id": "203"
    },
    {
        "questionName": "Địa chỉ nào sau đây thuộc lớp A:",
        "option": [
            "A. 172.29.14.10",
            "B. 10.1.1.1",
            "C. 140.8.8.8",
            "D. 203.5.6.7"
        ],
        "answer": 1,
        "id": "204"
    },
    {
        "questionName": "Máy tính đóng vai trò Router có bao nhiêu địa chỉ IP:",
        "option": [
            "A. 1",
            "B. 2",
            "C. 3",
            "D. 4"
        ],
        "answer": 1,
        "id": "205"
    },
    {
        "questionName": "Chức năng chính của router là:",
        "option": [
            "A. Kết nối network với network",
            "B. Chia nhỏ broadcast domain",
            "C. A và B đều đúng",
            "D. A và B đều sai"
        ],
        "answer": 0,
        "id": "206"
    },
    {
        "questionName": "Trong các địa chỉ sau, chọn địa chỉ không nằm cùng mạng với các địa chỉ còn lại:",
        "option": [
            "A. 203.29.100.100/255.255.255.240",
            "B. 203.29.100.110/255.255.255.240",
            "C. 203.29.103.113/255.255.255.240",
            "D. 203.29.100.98/255.255.255.240"
        ],
        "answer": 2,
        "id": "207"
    },
    {
        "questionName": "Địa chỉ nào sau đây là địa chỉ broadcast của mạng lớp B:",
        "option": [
            "A. 149.255.255.255",
            "B. 149.6.255.255",
            "C. 149.6.7.255",
            "D. Tất cả đều đúng"
        ],
        "answer": 1,
        "id": "208"
    },
    {
        "questionName": "Địa chỉ IP 172.200.25.55/255.255.0.0",
        "option": [
            "A. Thuộc lớp A",
            "B. Thuộc lớp C",
            "C. Là địa chỉ riêng",
            "D. Là địa chỉ broadcast"
        ],
        "answer": 2,
        "id": "209"
    },
    {
        "questionName": "Thuật toán chạy trên gateway router là:",
        "option": [
            "A. Inter-routing",
            "B. Intra-routing",
            "C. Cả hai đều sai",
            "D. Cả hai đều đúng"
        ],
        "answer": 3,
        "id": "210"
    },
    {
        "questionName": "Chức năng chính của Router:",
        "option": [
            "A. Đẩy các gói tin từ kết nối vào đến kết nối ra",
            "B. Thực hiện các giao thức/giải thuật định tuyến",
            "C. Cả hai chức năng A và B",
            "D. Không thực hiện chức năng nào ở trên"
        ],
        "answer": 2,
        "id": "211"
    },
    {
        "questionName": "Kết nối mạng có giá trị MTU là 1500 bytes. Kích thước gói dữ liệu lớn nhất có thể truyền qua kết nối này là:",
        "option": [
            "A. 1400 bytes",
            "B. 1480 bytes",
            "C. 1500 bytes",
            "D. 1600 bytes"
        ],
        "answer": 2,
        "id": "212"
    },
    {
        "questionName": "Có địa chỉ 200.23.16.0/23, giá trị 23 là:",
        "option": [
            "A. Số bit trong phần subnet của địa chỉ",
            "B. Số bit trong phần hostID của địa chỉ",
            "C. Số bit xác định lớp A, B, C, D, E",
            "D. Không là giá trị nào trong các trường hợp trên"
        ],
        "answer": 0,
        "id": "213"
    },
    {
        "questionName": "IPv6 có không gian địa chỉ là:",
        "option": [
            "A. 32 bit",
            "B. 64 bit",
            "C. 128 bit",
            "D. 256 bit"
        ],
        "answer": 2,
        "id": "214"
    },
    {
        "questionName": "Gói tin IPv6 có bao nhiêu byte trong phần tiêu đề:",
        "option": [
            "A. 20 byte",
            "B. 30 byte",
            "C. 40 byte",
            "D. 50 byte"
        ],
        "answer": 2,
        "id": "215"
    },
    {
        "questionName": "Đâu là biểu diễn của một địa chỉ IPv6:",
        "option": [
            "A. 1080:0000:0000:0000:0008:0800:200C:417A",
            "B. 1080:0000:0000:0008:0800:200C:417A",
            "C. 1080:0000:0000:0000:0000:0008:0800:200C:417A",
            "D. 1080::0008:0800:200C::417A"
        ],
        "answer": 0,
        "id": "216"
    },
    {
        "questionName": "Đâu là biểu diễn dạng rút gọn của địa chỉ IPv6: 2001:0F68:0000:0000:0000:0000:1986:69AF",
        "option": [
            "A. 2001:F68:0:0:0:0:1986:69AF",
            "B. 2001:F68::1986:69AF",
            "C. Cả hai biểu diễn trên đều đúng",
            "D. Cả hai biểu diễn trên đều sai"
        ],
        "answer": 2,
        "id": "217"
    },
    {
        "questionName": "Frame là dữ liệu ở tầng:",
        "option": [
            "A. Physical",
            "B. Network",
            "C. Data Link",
            "D. Transport"
        ],
        "answer": 2,
        "id": "218"
    },
    {
        "questionName": "Kiểm soát lỗi và kiểm soát luồng dữ liệu được thực hiện bởi:",
        "option": [
            "A. Tầng mạng",
            "B. Tầng liên kết dữ liệu",
            "C. Tầng vật lý",
            "D. Tầng phiên"
        ],
        "answer": 1,
        "id": "219"
    },
    {
        "questionName": "Giao thức nào dùng để chuyển đổi từ địa chỉ IP sang địa chỉ vật lý MAC:",
        "option": [
            "A. ARP",
            "B. RARP",
            "C. ICMP",
            "D. TCP"
        ],
        "answer": 0,
        "id": "220"
    },
    {
        "questionName": "CSMA/CD là phương pháp truy nhập ngẫu nhiên sử dụng cho mạng có cấu trúc hình:",
        "option": [
            "A. Sao (STAR)",
            "B. BUS",
            "C. Vòng (RING)",
            "D. Lai ghép BUS-STAR"
        ],
        "answer": 1,
        "id": "221"
    },
    {
        "questionName": "Tiến trình cho phép host tự động lấy địa chỉ IP cho nó từ server khi kết nối vào mạng:",
        "option": [
            "A. Host broadcasts thông điệp 'DHCP discover' --> DHCP server đáp ứng với 'DHCP offer' --> host gửi thông điệp 'DHCP request' --> DHCP server gửi 'DHCP ack'",
            "B. Host gửi thông điệp 'DHCP request' --> DHCP server gửi 'DHCP ack' --> host broadcasts thông điệp 'DHCP discover' --> DHCP server đáp ứng với 'DHCP offer'",
            "C. Host broadcasts thông điệp 'DHCP discover'--> DHCP server gửi 'DHCP ack' --> host gửi thông điệp 'DHCP request' --> DHCP server đáp ứng với 'DHCP offer'",
            "D. Host gửi thông điệp 'DHCP request' --> DHCP server đáp ứng với 'DHCP offer' --> host broadcasts thông điệp 'DHCP discover' --> DHCP server gửi 'DHCP ack'"
        ],
        "answer": 0,
        "id": "222"
    },
    {
        "questionName": "CSMA/CD là viết tắt của:",
        "option": [
            "A. Collision Sense Multiple Access/ Collision Detection",
            "B. Carrier Sense Multiple Access/ Collision Deterence",
            "C. Carrier Sense Multiple Access/ Collision Detection",
            "D. Collision Sense Multiple Access/ Carrier Detection"
        ],
        "answer": 2,
        "id": "223"
    },
    {
        "questionName": "Ba byte đầu tiên của địa chỉ MAC cho biết thông tin gì:",
        "option": [
            "A. Tên nhà sản xuất card mạng (NIC)",
            "B. Vùng địa lý của card mạng",
            "C. Số hiệu phiên bản của card mạng",
            "D. Tất cả các câu trên đều sai"
        ],
        "answer": 0,
        "id": "224"
    },
    {
        "questionName": "Trang thiết bị mạng nào dùng để nối các mạng và kiểm soát được broadcast:",
        "option": [
            "A. Ethernet switch",
            "B. Bridge",
            "C. Router",
            "D. Hub"
        ],
        "answer": 2,
        "id": "225"
    },
    {
        "questionName": "Địa chỉ nào dưới đây là địa chỉ tầng 2 (địa chỉ MAC):",
        "option": [
            "A. 192.201.63.251",
            "B. 0000.1234.FEG",
            "C. 19-22-01-63-25",
            "D. 00-00-12-34-FE-AA"
        ],
        "answer": 3,
        "id": "226"
    },
    {
        "questionName": "CSMA/CD là kiểu truy cập nào trong các kiểu sau đây:",
        "option": [
            "A. Phân chia kênh truyền (channel partitioning)",
            "B. Truy cập ngẫu nhiên (random access)",
            "C. Lần lượt (taking turn)",
            "D. Tất cả đều sai"
        ],
        "answer": 1,
        "id": "227"
    },
    {
        "questionName": "Phương pháp truy nhập nào dưới đây lắng nghe lưu thông mạng trên đường truyền trước khi truyền dữ liệu:",
        "option": [
            "A. CSMA/CD",
            "B. CSMA/CA",
            "C. Token RING",
            "D. Token BUS"
        ],
        "answer": 0,
        "id": "228"
    },
    {
        "questionName": "Chuẩn nào dưới đây đặc tả về chuẩn kiến trúc mạng cục bộ cho Ethernet, bao gồm các chuẩn tầng vật lý và tầng con MAC:",
        "option": [
            "A. IEEE802.2",
            "B. IEEE802.3",
            "C. Token Bus",
            "D. Token Ring"
        ],
        "answer": 1,
        "id": "229"
    },
    {
        "questionName": "Địa chỉ vật lý (MAC Address) nào sau đây là không đúng:",
        "option": [
            "A. 00-2A-43-16-23-A8",
            "B. 00-2A-43-3E-33-A0",
            "C. 00-4G-43-26-36-0D",
            "D. 00-C0-9F-C3-27-F6"
        ],
        "answer": 2,
        "id": "230"
    },
    {
        "questionName": "Thiết bị Hub cho phép:",
        "option": [
            "A. Kéo dài 1 nhánh LAN thông qua việc khuyếch đại tín hiệu truyền đến nó",
            "B. Ngăn không cho các packet thuộc loại Broadcast đi qua nó",
            "C. Giúp định tuyến cho các packet",
            "D. Kết nối nhiều máy tính lại với nhau để tạo thành một nhánh LAN (segment)"
        ],
        "answer": 0,
        "id": "231"
    },
    {
        "questionName": "Máy tính A và Z có địa chỉ trên 2 SUBNET khác nhau. Điều gì xảy ra khi máy tính A gửi broadcasts (ARP request) đi tìm địa chỉ MAC của máy tính Z:",
        "option": [
            "A. Không có trả lời (no response)",
            "B. Router sẽ trả lời với địa chỉ MAC của Z",
            "C. Router sẽ trả lời với địa chỉ MAC của mình",
            "D. Router sẽ gửi tiếp yêu cầu (ARP request) tới subnet của Z và lúc đó Z có thể trả lời A"
        ],
        "answer": 2,
        "id": "232"
    },
    {
        "questionName": "Điều gì xảy ra khi máy tính A gửi broadcasts (ARP request) đi tìm địa chỉ MAC của máy tính B trên cùng một mạng:",
        "option": [
            "A. Máy chủ DNS sẽ trả lời A với địa chỉ MAC của B",
            "B. Tất cả các máy tính trong mạng đều nhận được yêu cầu (ARP request) và tất cả sẽ trả lời A với địa chỉ MAC của B",
            "C. Tất cả các máy tính trong mạng đều nhận được yêu cầu (ARP request) nhưng chỉ có B mới trả lời A với địa chỉ MAC của mình",
            "D. Các Router gần nhất nhận được yêu cầu (ARP request) sẽ trả lời A với địa chỉ MAC của B hoặc sẽ gửi tiếp yêu cầu này tới các router khác (forwards the request to another router)"
        ],
        "answer": 2,
        "id": "233"
    },
    {
        "questionName": "Trong mô hình OSI, việc xác định địa chỉ vật lý từ địa chỉ logic là trách nhiệm của:",
        "option": [
            "A. Tầng ứng dụng",
            "B. Tầng liên kết dữ liệu",
            "C. Tầng mạng",
            "D. Tầng giao vận"
        ],
        "answer": 1,
        "id": "234"
    },
    {
        "questionName": "Dịch vụ nào sau đây mà tầng liên kết dữ liệu phải cung cấp:",
        "option": [
            "A. Đặt gói tin tầng mạng vào các Frame",
            "B. Mã hoá các bit thành các tín hiệu vật lý",
            "C. Tạo đường truyền tin cậy",
            "D. Câu A và B đều đúng"
        ],
        "answer": 3,
        "id": "235"
    },
    {
        "questionName": "Giả sử người ta sẽ bổ sung 1 bit kiểm tra vào cuối của dòng dữ liệu gửi đi sao cho tổng số bit 1 trong chuỗi mới là một số lẻ. Bên nhận nhận được chuỗi 1000101010001 thì:",
        "option": [
            "A. Chuỗi nhận được bị lỗi",
            "B. Chuỗi nhận được đúng hoàn toàn",
            "C. Có thể phát hiện và sửa được lỗi trong chuỗi bit này",
            "D. Không xác định lỗi trong chuỗi nhận được"
        ],
        "answer": 3,
        "id": "236"
    },
    {
        "questionName": "Switch là thiết bị hoạt động ở tầng:",
        "option": [
            "A. Vật lý",
            "B. Liên kết dữ liệu",
            "C. Mạng",
            "D. Vận chuyển"
        ],
        "answer": 1,
        "id": "237"
    },
    {
        "questionName": "Công nghệ LAN nào sử dụng kỹ thuật CSMA/CD:",
        "option": [
            "A. Token Ring",
            "B. Ethernet",
            "C. FDDI",
            "D. Tất cả các câu trên"
        ],
        "answer": 1,
        "id": "238"
    },
    {
        "questionName": "Công nghệ Ethernet sử dụng phương pháp truy nhập đường truyền nào sau đây:",
        "option": [
            "A. CSMA",
            "B. ALOHA",
            "C. CSMA/CD",
            "D. TDMA"
        ],
        "answer": 2,
        "id": "239"
    },
    {
        "questionName": "Phát biểu nào sau đây là đúng nhất cho Switch:",
        "option": [
            "A. Sử dụng địa chỉ vật lý và hoạt động tại tầng Physical của mô hình OSI",
            "B. Sử dụng địa chỉ vật lý và hoạt động tại tầng Network của mô hình OSI",
            "C. Sử dụng địa chỉ vật lý và hoạt động tại tầng DataLink của mô hình OSI",
            "D. Sử dụng địa chỉ IP và hoạt động tại tầng Network của mô hình OSI"
        ],
        "answer": 2,
        "id": "240"
    },
    {
        "questionName": "Điều gì sẽ xảy ra với dữ liệu khi có xung đột (collision) trong quá trình truyền dữ liệu:",
        "option": [
            "A. Hub/Switch sẽ gửi lại dữ liệu",
            "B. Dữ liệu sẽ bị phá hỏng",
            "C. Dữ liệu sẽ được khôi phục lại tại máy nhận",
            "D. Cả A và C đúng"
        ],
        "answer": 1,
        "id": "241"
    },
    {
        "questionName": "Trang thiết bị mạng nào sau đây làm giảm bớt sự xung đột (collisions):",
        "option": [
            "A. Hub",
            "B. NIC",
            "C. Switch",
            "D. Transceiver"
        ],
        "answer": 2,
        "id": "242"
    },
    {
        "questionName": "Để hạn chế sự đụng độ (collision) của các gói tin trên mạng, người ta chia mạng thành các mạng nhỏ hơn và nối kết chúng lại bằng các thiết bị:",
        "option": [
            "A. Repeater",
            "B. Hub",
            "C. Switch",
            "D. Card mạng (NIC)"
        ],
        "answer": 2,
        "id": "243"
    },
    {
        "questionName": "Chuỗi số '00-08-ac-41-5d-9f' có thể là:",
        "option": [
            "A. Địa chỉ IP",
            "B. Địa chỉ port",
            "C. Địa chỉ MAC",
            "D. Tất cả đều sai"
        ],
        "answer": 2,
        "id": "244"
    },
    {
        "questionName": "Địa chỉ nào được Switch sử dụng khi quyết định gửi data sang cổng (port) nào:",
        "option": [
            "A. Source MAC address",
            "B. Destination MAC address",
            "C. Network address",
            "D. Subnetwork address"
        ],
        "answer": 1,
        "id": "245"
    },
    {
        "questionName": "Dịch vụ nào sau đây mà tầng liên kết dữ liệu phải cung cấp:",
        "option": [
            "A. Đặt gói tin tầng mạng vào các Frame",
            "B. Định tuyến",
            "C. Mã hoá các bit thành các tín hiệu vật lý",
            "D. Tạo đường truyền tin cậy"
        ],
        "answer": 0,
        "id": "246"
    },
    {
        "questionName": "Giả sử có một Hệ thống 2 LAN segment được nối với nhau qua một router là máy tính. Máy tính đóng vai trò Router có bao nhiêu card mạng:",
        "option": [
            "A. 1",
            "B. 2",
            "C. 3",
            "D. 4"
        ],
        "answer": 1,
        "id": "247"
    },
    {
        "questionName": "Chọn định nghĩa đúng về địa chỉ MAC:",
        "option": [
            "A. Được ghi sẵn trên card mạng (NIC)",
            "B. Do người quản trị mạng khai báo",
            "C. Câu A và B đúng",
            "D. Tất cả đều đúng"
        ],
        "answer": 0,
        "id": "248"
    },
    {
        "questionName": "Độ dài của khung dữ liệu của ATM là:",
        "option": [
            "A. 53 byte",
            "B. 128 byte",
            "C. 512 byte",
            "D. 1500 byte"
        ],
        "answer": 0,
        "id": "249"
    },
    {
        "questionName": "Công nghệ nào sau đây có độ đài của khung dữ liệu cố định:",
        "option": [
            "A. X25",
            "B. Frame Relay",
            "C. ISDN",
            "D. ATM"
        ],
        "answer": 3,
        "id": "250"
    },
    {
        "questionName": "ATM có tốc độ trao đổi thông tin từ:",
        "option": [
            "A. 2 Mbps đến 8 Mbps",
            "B. 155 Mbps đến 1 Gbps",
            "C. 100 Mbps đến 155 Mbps",
            "D. 155 Mbps đến 622 Mbps"
        ],
        "answer": 3,
        "id": "251"
    },
    {
        "questionName": "Chuẩn IEEE 802 chia tầng Liên kết dữ liệu của mô hình OSI thành 2 tầng con:",
        "option": [
            "A. LLC và MAC",
            "B. TCP và UDP",
            "C. TCP và IP",
            "D. ARP và RARP"
        ],
        "answer": 0,
        "id": "252"
    },
    {
        "questionName": "Fast Ethernet còn được gọi là:",
        "option": [
            "A. 10BaseT",
            "B. 100BaseFX",
            "C. 10BaseFX",
            "D. 100BaseT"
        ],
        "answer": 3,
        "id": "253"
    },
    {
        "questionName": "Tốc độ truyền dữ liệu của topology 1000Base-FX là:",
        "option": [
            "A. 10 Mbps",
            "B. 100 Mbps",
            "C. 1000 Mbps",
            "D. 10 Gbps"
        ],
        "answer": 2,
        "id": "254"
    },
    {
        "questionName": "Kỹ thuật mạng LAN Fast Ethernet có tốc độ truyền dữ liệu cơ bản là:",
        "option": [
            "A. 10 Mbps",
            "B. 100 Mbps",
            "C. 1000 Mbps",
            "D. 10000 Mbps"
        ],
        "answer": 1,
        "id": "255"
    },
    {
        "questionName": "Chuẩn WLAN 802.11b/g có tốc độ truyền dữ liệu tương ứng là:",
        "option": [
            "A. 11/100 Mbps",
            "B. 11/54 Mbps",
            "C. 11/108 Mbps",
            "D. 2/54 Mbps"
        ],
        "answer": 1,
        "id": "256"
    },
    {
        "questionName": "Tần số hoạt động của chuẩn WLAN 802.11g là:",
        "option": [
            "A. 5 Ghz",
            "B. 2,3 Ghz",
            "C. 2,4 Ghz",
            "D. 2,5 Ghz"
        ],
        "answer": 2,
        "id": "257"
    },
    {
        "questionName": "Đường truyền tín hiệu tương tự, đường truyền âm thoại chuẩn được sử dụng trong các cuộc giao tiếp qua điện thoại gọi là đường truyền:",
        "option": [
            "A. Quay số",
            "B. Tín hiệu số trực tiếp",
            "C. Any-to-any",
            "D. Chuyên dụng (thuê bao)"
        ],
        "answer": 0,
        "id": "258"
    },
    {
        "questionName": "Chức năng của Proxy là gì:",
        "option": [
            "A. Là máy đại diện cho một nhóm máy đi thực hiện một dịch vụ máy khách (client service) nào đó",
            "B. Là một thiết bị thống kê lưu lượng mạng",
            "C. Tất cả đều đúng",
            "D. Tất cả đều sai"
        ],
        "answer": 0,
        "id": "259"
    },
    {
        "questionName": "Trình điều khiển (driver) là:",
        "option": [
            "A. Phần cứng",
            "B. Phần mềm",
            "C. Thiết bị ngoại vi",
            "D. Card"
        ],
        "answer": 1,
        "id": "260"
    },
    {
        "questionName": "Giao thức nào trong các giao thức sau dùng trong mô hình mạng WAN:",
        "option": [
            "A. TCP/IP",
            "B. NetBEUI",
            "C. DLC",
            "D. Tất cả phương án trên"
        ],
        "answer": 0,
        "id": "261"
    },
    {
        "questionName": "Giao thức nào trong các giao thức sau dùng trong mô hình mạng LAN:",
        "option": [
            "A. TCP/IP",
            "B. IPX/SPX",
            "C. NetBEUI",
            "D. Tất cả"
        ],
        "answer": 3,
        "id": "262"
    },
    {
        "questionName": "Bảo vệ các tài nguyên thông tin trên mạng là cần thiết và cấp bách, vì:",
        "option": [
            "A. Các máy tính được nối thành mạng",
            "B. Nhiều người sử dụng và phân tán về mặt vật lý",
            "C. Bảo vệ các máy chủ",
            "D. Chống nghe trộm thông tin"
        ],
        "answer": 1,
        "id": "263"
    },
    {
        "questionName": "An toàn mạng theo nghĩa là bảo vệ và đảm bảo an toàn:",
        "option": [
            "A. Phần mềm trên mạng",
            "B. Tài nguyên của mạng",
            "C. Phần cứng của mạng",
            "D. Kho dữ liệu"
        ],
        "answer": 1,
        "id": "264"
    },
    {
        "questionName": "Vi phạm an toàn thông tin hiểu theo nghĩa:",
        "option": [
            "A. Can thiệp vào các hoạt động của mạng",
            "B. Can thiệp vào các hoạt động của người sử dụng",
            "C. Nội dung thông tin và luồng thông tin thay đổi",
            "D. Từ chối dịch vụ"
        ],
        "answer": 0,
        "id": "265"
    },
    {
        "questionName": "Mật mã là quá trình chuyển đối thông tin từ bản rõ sang:",
        "option": [
            "A. Dạng mã hóa",
            "B. Dạng từ chối dịch vụ",
            "C. Phủ nhận",
            "D. Không được quyền truy xuất"
        ],
        "answer": 0,
        "id": "266"
    },
    {
        "questionName": "Firewall là một hệ thống kiểm soát, ngăn chặn:",
        "option": [
            "A. Đột nhập bất hợp pháp từ bên ngoài vào hệ thống",
            "B. Sử dụng tài nguyên của mạng",
            "C. Quyền truy xuất thông tin",
            "D. Gián điệp"
        ],
        "answer": 0,
        "id": "267"
    },
    {
        "questionName": "Một bộ lọc packet (cài đặt trên firewall) có thể:",
        "option": [
            "A. Chỉ các máy tính phía trong mới có khả năng khởi tạo các kết nối TCP ra các máy tính ở bên ngoài mạng",
            "B. Cho phép FTP client ở bên trong có thể truy cập tới FTP server bên ngoài mà máy tính bên trong không bị hack",
            "C. Cho phép FTP client ở bên ngoài có thể truy cập tới FTP server bên trong mà máy tính bên trong không bị hack",
            "D. Tất cả đều đúng"
        ],
        "answer": 0,
        "id": "268"
    },
    {
        "questionName": "Chứng thực là:",
        "option": [
            "A. Người gửi mã hóa thông điệp, người nhận giải mã thông điệp",
            "B. Người gửi và người nhận xác định là nhận ra nhau",
            "C. Người gửi và người nhận muốn đảm bảo thông điệp không bị thay đổi",
            "D. Các dịch vụ phải có khả năng truy nhập và sẵn sàng với người dùng"
        ],
        "answer": 1,
        "id": "269"
    },
    {
        "questionName": "Sự toàn vẹn thông điệp là:",
        "option": [
            "A. Người gửi mã hóa thông điệp, người nhận giải mã thông điệp",
            "B. Người gửi và người nhận xác định là nhận ra nhau",
            "C. Người gửi và người nhận muốn đảm bảo thông điệp không bị thay đổi",
            "D. Các dịch vụ phải có khả năng truy nhập và sẵn sàng với người dùng"
        ],
        "answer": 2,
        "id": "270"
    },
    {
        "questionName": "DES (Data Encryption Standard) được sử dụng trong:",
        "option": [
            "A. Mã hóa khóa đối xứng",
            "B. Mã hóa khóa công khai",
            "C. Cả mã hóa khóa đối xứng và mã hóa khóa công khai",
            "D. Tất cả các phương án trên đều sai"
        ],
        "answer": 0,
        "id": "271"
    },
    {
        "questionName": "Giải thuật RSA được sử dụng trong:",
        "option": [
            "A. Mã hóa khóa đối xứng",
            "B. Mã hóa khóa công khai",
            "C. Cả mã hóa khóa đối xứng và mã hóa khóa công khai",
            "D. Tất cả các phương án trên đều sai"
        ],
        "answer": 1,
        "id": "272"
    },
    {
        "questionName": "Sử dụng lệnh IPconfig khi muốn:",
        "option": [
            "A. Xác định đường đi của các gói tin từ nguồn đến đích",
            "B. Biết trạng thái cấu hình TCP/IP của máy tính (cấu hình về các card mạng)",
            "C. Phân tích gói tin nhằm giải quyết một vấn đề cụ thể của mạng",
            "D. Kiểm tra lỗi mạng"
        ],
        "answer": 1,
        "id": "273"
    },
    {
        "questionName": "Lệnh Tracert dùng để:",
        "option": [
            "A. Xác định đường đi của các gói tin từ nguồn đến đích (qua các nút mạng nào)",
            "B. Biết trạng thái cấu hình TCP/IP của máy tính (cấu hình về các card mạng)",
            "C. Phân tích gói tin nhằm giải quyết một vấn đề cụ thể của mạng",
            "D. Kiểm tra lỗi mạng"
        ],
        "answer": 0,
        "id": "274"
    },
    {
        "questionName": "Lệnh Netstat dùng để:",
        "option": [
            "A. Biết trạng thái cấu hình TCP/IP của máy tính (cấu hình về các card mạng)",
            "B. Phân tích gói tin nhằm giải quyết một vấn đề cụ thể của mạng",
            "C. Xác định đường đi của các gói tin từ nguồn đến đích",
            "D. Liệt kê tất cả các kết nối vào ra máy tính"
        ],
        "answer": 3,
        "id": "275"
    },
    {
        "questionName": "Trong cú pháp lệnh telnet ip/host port bao gồm các tham số:",
        "option": [
            "A. ip là địa chỉ IP của thiết bị nguồn, host là tên thiết bị đầu cuối, port là cổng giao tiếp với thiết bị đầu cuối",
            "B. ip là địa chỉ IP của thiết bị đầu cuối, host là tên thiết bị đầu cuối, port là cổng để giao tiếp với thiết bị đầu cuối",
            "C. ip là địa chỉ IP của thiết bị nguồn, host là tên thiết bị nguồn, port là cổng nguồn",
            "D. ip là địa chỉ IP của thiết bị nguồn, host là tên thiết bị đầu cuối, port là cổng nguồn"
        ],
        "answer": 1,
        "id": "276"
    },
    {
        "questionName": "Wireshark là một công cụ để:",
        "option": [
            "A. Cho biết trạng thái cấu hình của mạng",
            "B. Xác định đường đi của các gói tin từ nguồn đến đích",
            "C. Phân tích gói tin nhằm giải quyết một vấn đề cụ thể của mạng",
            "D. Truy nhập từ xa"
        ],
        "answer": 2,
        "id": "277"
    },
    {
        "questionName": "Lệnh nào sẽ hiển thị kết quả dưới đây:",
        "option": [
            "A. Ping",
            "B. Tracert",
            "C. Telnet",
            "D. Ipconfig"
        ],
        "answer": 0,
        "id": "278"
    },
    {
        "questionName": "Lệnh nào sẽ hiển thị kết quả dưới đây:",
        "option": [
            "A. Ping",
            "B. Tracert",
            "C. Netstat",
            "D. Ipconfig"
        ],
        "answer": 2,
        "id": "279"
    },
    {
        "questionName": "Công cụ nào sẽ hiển thị các thông tin như dưới đây:",
        "option": [
            "A. Ping",
            "B. Tracert",
            "C. Netstat",
            "D. Wireshark"
        ],
        "answer": 3,
        "id": "280"
    },
    {
        "questionName": "Lệnh nào sẽ hiển thị kết quả dưới đây:",
        "option": [
            "A. Ping",
            "B. Tracert",
            "C. Netstat",
            "D. Ping-a"
        ],
        "answer": 1,
        "id": "281"
    },
    {
        "questionName": "Lệnh nào sau đây cho biết địa chỉ IP của máy tính:",
        "option": [
            "A. IP",
            "B. IPCONFIG",
            "C. TCP_IP",
            "D. FTP"
        ],
        "answer": 1,
        "id": "282"
    },
    {
        "questionName": "Lệnh PING dùng để:",
        "option": [
            "A. Kiểm tra các máy tính có đĩa cứng hay không",
            "B. Kiểm tra các máy tính trong mạng có liên thông không",
            "C. Kiểm tra các máy tính có hoạt động tốt hay không",
            "D. Kiểm tra các máy tính có truy cập vào Internet không"
        ],
        "answer": 1,
        "id": "283"
    },
    {
        "questionName": "Kiểm tra các máy tính có truy cập vào Internet không",
        "option": [
            "A. Nslookup",
            "B. ipconfig",
            "C. Route",
            "D. Tracert"
        ],
        "answer": 0,
        "id": "284"
    },
    {
        "questionName": "Tiện ích TCP/IP nào dùng để kiểm tra sự kết nối mạng:",
        "option": [
            "A. Route",
            "B. ARP",
            "C. Ping",
            "D. Netstat"
        ],
        "answer": 2,
        "id": "285"
    },
    {
        "questionName": "Những khẳng định nào sau đây là đúng khi nói về các mô hình kết nối ADSL:",
        "option": [
            "A. Mô hình PPPoA (Point to Point over ATM)",
            "B. Mô hình PPPoE (Point to Point over Ethernet) RFC 2516",
            "C. Mô hình IP over ATM (RFC 1483R)",
            "D.  Tất cả đều đúng"
        ],
        "answer": 1,
        "id": "286"
    },
    {
        "questionName": "Công nghệ ADSL là công nghệ đường dây thuê bao số truy nhập:",
        "option": [
            "A. Không đối xứng",
            "B. Ngẫu nhiên",
            "C. Tuần tự",
            "D. Đối xứng"
        ],
        "answer": 0,
        "id": "287"
    },
    {
        "questionName": "Khi quên mật khẩu của ADSL Router, làm cách nào để khôi phục mật khẩu mặc định:",
        "option": [
            "A. Tra cứu trong cuốn hướng dẫn sử dụng của nhà cung cấp",
            "B. Cấp điện cho ADSL Router và ấn giữ nút Reset trong một khoảng thời gian nhất định",
            "C. Dùng software để dò Username và Password",
            "D. Không thể khôi phục mật khẩu mặc định"
        ],
        "answer": 0,
        "id": "288"
    },
    {
        "questionName": "Thực hiện cấu hình ADSL Router để kết nối Internet, những thông số cơ bản cần thiết lập là:",
        "option": [
            "A. VCI/VPI, LAN IP Address, Tài khoản kết nối đến nhà cung cấp dịch vụ (user, password)",
            "B. DHCP Service",
            "C. Câu a và b đúng",
            "D. Tất cả các câu trên đều sai"
        ],
        "answer": 2,
        "id": "289"
    },
    {
        "questionName": "Trang thiết bị mạng trung tâm dùng để kết nối các máy tính trong mạng hình sao (STAR):",
        "option": [
            "A. Switch/Hub",
            "B. Router",
            "C. Repeater",
            "D. NIC"
        ],
        "answer": 0,
        "id": "290"
    },
    {
        "questionName": "Chương trình Traceroute sử dụng các giao thức nào:",
        "option": [
            "A. UDP",
            "B. UDP và ICMP",
            "C. TCP và ICMP",
            "D. IGMP"
        ],
        "answer": 1,
        "id": "291"
    },
    {
        "questionName": "Thiết bị Bridge cho phép:",
        "option": [
            "A. Giúp định tuyến cho các packet",
            "B. Kết nối 2 mạng LAN lại với nhau đồng thời đóng vai trò như một bộ lọc (filter): chỉ cho phép các packet, mà địa chỉ đích nằm ngoài nhánh LAN mà packet xuất phát, đi qua.",
            "C. Tăng cường tín hiệu điện để mở rộng đoạn mạng",
            "D. Cả A, B, C đều đúng"
        ],
        "answer": 1,
        "id": "292"
    },
    {
        "questionName": "Modem dùng để:",
        "option": [
            "A. Giao tiếp với mạng",
            "B. Truyền dữ liệu đi xa",
            "C. Truyền dữ liệu trong mạng LAN",
            "D. A và B đều đúng"
        ],
        "answer": 1,
        "id": "293"
    },
    {
        "questionName": "Bạn đang sử dụng FTP trong Command Promt, bạn muốn tạo một thư mục mang tên 'Test' trên máy cục bộ của bạn (bạn vẫn không thoát khỏi FTP). Bạn sẽ sử dụng lệnh gì:",
        "option": [
            "A. #md test",
            "B. !md test",
            "C. Md Test",
            "D. Mkdir test"
        ],
        "answer": 1,
        "id": "294"
    },
    {
        "questionName": "Trong các cơ chế sau đây, cơ chế nào được sử dụng để cài đặt Web cache:",
        "option": [
            "A. Kiểm chứng và Mã kiểm chứng 401 Authorization require",
            "B. Trường tiêu đề 'Last-Modified' và 'If-Modified-Since'",
            "C. Phương thức yêu cầu POST",
            "D. A và B"
        ],
        "answer": 3,
        "id": "295"
    },
    {
        "questionName": "Sợi cáp xoắn nối giữa card mạng với hub thì:",
        "option": [
            "A. Bấm thứ tự 2 đầu cáp giống nhau",
            "B. Đổi vị trí các sợi 1, 2 với sợi 3, 6",
            "C. Một đầu bấm theo chuẩn TIA/EIA T-568A, đầu kia theo chuẩn TIA/EIA T568-B",
            "D. Tất cả đều sai"
        ],
        "answer": 0,
        "id": "296"
    },
    {
        "questionName": "Các thao thức trích xuất thư từ Server",
        "option": [
            "A. HTTP, SMTP, POP",
            "B. POP, IMAP, SMTP",
            "C. HTTP, POP, IMAP",
            "D. HTTP, POP, IMAP, SMPT"
        ],
        "answer": 2,
        "id": "297"
    },
    {
        "questionName": "Trễ xử lý tại nút mạng phụ thuộc vào",
        "option": [
            "A. Chiều dài gói tin",
            "B. Mức độ tắc nghẽn của bộ định tuyến",
            "C. Chiều dài của liên kết vật lý",
            "D. Việc kiểm tra lỗi và xác định liên kết ra"
        ],
        "answer": 3,
        "id": "298"
    },
    {
        "questionName": "Các trường nào trong tiêu đề IPv4 có liên quan đến việc phân mảng/tập hợp gói tin",
        "option": [
            "A. Địa chỉ nguồn(source IP address), cờ(flag), vị trí tương đối của đoạn(fragment offset)",
            "B. Địa chỉ đích(destination IP address), cờ(flag), vị trí tương đối của đoạn(fragment offset)",
            "C. Định danh(identifier), cờ(flag), vị trí tương đối của đoạn(fragment offset)",
            "D. Định danh(identifier), độ dài gói tin(length), vị trí tương đối của đoạn(fragment offset)"
        ],
        "answer": 2,
        "id": "299"
    },
    {
        "questionName": "Trong kiến trúc ứng dụng dạng P2P",
        "option": [
            "A. Các peer kết nối liên tục và có địa chỉ IP cố định, mỗi peer chỉ yêu cầu dịch vụ từ một số peer nào đó trong mạng",
            "B. Các peer kết nối liên tục và có địa chỉ IP cố định, mỗi peer yêu cầu dịch vụ từ một peer nào đó và cung cấp dịch vụ cho các peer khác",
            "C. Các peer không kết nối liên tục và có thể thay đổi địa chỉ IP, mỗi peer sẽ chỉ yêu cầu dịch vụ từ một số peer nào đó trong mạng",
            "D. Các peer không kết nối liên tục và có thể thay đổi địa chỉ IP, mỗi peer yêu cầu dịch vụ từ một peer nào đó và cung cấp dịch vụ cho các peer khác"
        ],
        "answer": 3,
        "id": "300"
    },
    {
        "questionName": "Trường số thứ tư (sequence number) trong phần tiêu đề TCP segment là",
        "option": [
            "A. Số thứ tự của byte tiếp theo được mong đợi từ phía bên kia",
            "B. Số dòng byte của byte đầu tiên trong segment",
            "C. Số thứ tự của segment từ 1 đến N",
            "D. Số ACK tích lũy"
        ],
        "answer": 3,
        "id": "301"
    }
]
export default qs