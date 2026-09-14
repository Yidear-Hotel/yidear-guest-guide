(function(){
  const viItems={
    '衣架':'Móc áo',
    '保險箱':'Két sắt',
    '熱水壺':'Ấm đun nước điện',
    '茶包盤':'Khay trà',
    '糖包盒':'Hộp đựng đường',
    '馬克杯':'Cốc sứ',
    '置物盤':'Khay đựng đồ',
    '冰箱':'Tủ lạnh',
    '電視':'TV',
    'MOD 視訊盒':'Đầu thu MOD',
    '電視遙控器':'Điều khiển TV',
    '黑色展示架':'Kệ trưng bày màu đen',
    '黑色面紙盒':'Hộp khăn giấy màu đen',
    '咖啡色垃圾桶':'Thùng rác màu nâu',
    '床墊－Twin room':'Nệm lò xo – phòng Twin',
    '床墊－Family room':'Nệm lò xo – phòng Family',
    '床墊－Double':'Nệm lò xo – phòng Double',
    '保潔墊－Twin room':'Tấm bảo vệ nệm – phòng Twin',
    '保潔墊－Family room':'Tấm bảo vệ nệm – phòng Family',
    '保潔墊－Double':'Tấm bảo vệ nệm – phòng Double',
    '保潔墊－Special':'Tấm bảo vệ nệm – cỡ đặc biệt',
    '床單－Twin room':'Ga giường – phòng Twin',
    '床單－Family room':'Ga giường – phòng Family',
    '床單－Double':'Ga giường – phòng Double',
    '床單－Special':'Ga giường – cỡ đặc biệt',
    '被套－Twin room':'Vỏ chăn – phòng Twin',
    '被套－Family room':'Vỏ chăn – phòng Family',
    '被套－Double':'Vỏ chăn – phòng Double',
    '被套－Special':'Vỏ chăn – cỡ đặc biệt',
    '枕套／個':'Vỏ gối / 1 cái',
    '羽毛被－Twin room':'Chăn lông vũ – phòng Twin',
    '羽毛被－Family room':'Chăn lông vũ – phòng Family',
    '羽毛被－Double':'Chăn lông vũ – phòng Double',
    '羽毛被－Special':'Chăn lông vũ – cỡ đặc biệt',
    '羽毛枕／顆':'Gối lông vũ / 1 cái',
    '浴巾':'Khăn tắm',
    '毛巾':'Khăn mặt',
    '足巾':'Thảm chân',
    '黑色電話機':'Điện thoại màu đen',
    '吹風機':'Máy sấy tóc',
    '吹風機收納盒':'Hộp đựng máy sấy tóc',
    '白色加蓋垃圾桶':'Thùng rác trắng có nắp',
    '漱口玻璃杯':'Cốc súc miệng bằng thủy tinh',
    '白色面紙盒':'Hộp khăn giấy màu trắng',
    '肥皂架':'Khay xà phòng kim loại',
    '白色肥皂碟':'Đĩa xà phòng màu trắng',
    '法國MIMARE橄欖精油清潔凝露':'Gel làm sạch dầu ô liu MIMARE, 500ml',
    '毛巾組（毛巾×2／浴巾×2／足巾×1）':'Bộ khăn (khăn mặt×2 / khăn tắm×2 / thảm chân×1)',
    '寫字椅':'Ghế bàn làm việc',
    '小沙發':'Ghế sofa đơn',
    '小圓桌':'Bàn tròn nhỏ',
    '吊燈':'Đèn treo',
    '壁燈':'Đèn tường'
  };
  if(typeof ITEMS!=='undefined') ITEMS.forEach(item=>{if(viItems[item.zh]) item.vi=viItems[item.zh];});

  if(window.GIFT_CAMPAIGN){
    window.GIFT_CAMPAIGN.title.vi='Quà tặng hiện tại';
    window.GIFT_CAMPAIGN.cta.vi='Đến Google Reviews';
    window.GIFT_CAMPAIGN.note.vi='Nội dung chương trình, số lượng quà và cách đổi quà áp dụng theo thông báo tại khách sạn.';
  }
})();
