export interface NovelInfo {
    title: string,
    author: string,
    type: string,
    status: string,
    chapter_count: number,
    avatar: string,
    description: string
}

export const data:NovelInfo[] = [
    {
        title: "Ta Chính Là Thần!",
        author: "Lịch Sử Lý Xuy Xuy Phong",
        type: "Huyền Huyễn",
        status: "Đang ra",
        chapter_count: 424,
        avatar: "https://static.cdnno.com/poster/ta-chinh-la-than/300.jpg?1626095887",
        description: "Doãn Thần tên gọi là Thần. \nHắn chưa từng có nghĩ tới, có chính một ngày sẽ thật trở thành thần."
    },
    {
        title: "Xuyên Việt Trên Sân Khấu Ta Bạo Nổ Rồi",
        author: "Thập Bộ Sát Nhất Tiên",
        type: "Đô Thị",
        status: "Đang ra",
        chapter_count: 612,
        avatar: "https://static.cdnno.com/poster/xuyen-viet-tren-san-khau-ta-bao-no-roi/300.jpg?1652283194",
        description: "Tham gia Gameshow tuyển chọn tài năng, Lâm Hiên vòng thứ nhất liền bị loại bỏ, chỉ còn lại sân khấu cáo biệt biểu diễn. Sau khi hát xong, hắn ngắn ngủi tuyển chọn tài năng kiếp sống đem vẽ lên dấu chấm tròn.\n"+
        "Cáo biệt biểu diễn bên trên, hắn đi lên sân khấu: \"Một bài « Đuổi Theo Giấc Mơ Thủa Ban Đầu » đưa cho mọi người, đại biểu mặc dù ta bị loại bỏ rồi, vốn lấy sau vẫn sẽ truy đuổi ta mơ mộng.\""+
        "Không nghĩ tới hắn sau khi hát xong.\n"+
        "Fan lệ nóng doanh tròng.\n"+
        "Bình ủy tất cả đều đứng lên.\n"+
        "Một tên bị loại bỏ tuyển thủ, lại tươi đẹp toàn trường. Hiện trường hoàn toàn nổ nồi.\n"+
        "Cho tới giờ khắc này, Lâm Hiên mới phát hiện hắn chẳng biết lúc nào đã xuyên việt rồi, cái thế giới này không có « Đuổi Theo Giấc Mơ Thủa Ban Đầu » ."
    },
    {
        title: "Vạn Tướng Chi Vương",
        author: "Thiên Tàm Thổ Đậu",
        type: "Huyền Huyễn",
        status: "Đang ra",
        chapter_count: 570,
        avatar: "https://static.cdnno.com/poster/van-tuong-chi-vuong/300.jpg?1631786834",
        description: "Giữa thiên địa, có vạn tướng. Mà ta Lý Lạc, cuối cùng rồi sẽ trở thành Vạn Tướng Chi Vương này."
    }
];