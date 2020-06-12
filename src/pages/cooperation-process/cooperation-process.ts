Page({
   data: {
       processList: [
           { iconClass: 'iconhezuowoshou', text: '与您确认合作意向' },
           { iconClass: 'iconnav_promoter', text: '将您推荐给我们客户' },
           { iconClass: 'iconqueding', text: '客户确定采访' },
           { iconClass: 'iconxinxi', text: '与您约定采访时间与采访内容' },
           { iconClass: 'iconqitafeiyong', text: '采访结束，确认采访时长及费用' },
           { iconClass: 'icon20_muyue', text: '采访结束后7个工作日内向您支付费用' },
       ]
   },
    makePhoneCallHandle(){
       wx.makePhoneCall({
           phoneNumber: '021-63230851'
       })
    }
});
