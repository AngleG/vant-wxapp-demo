
Page({
   data: {
       userInfo: {},
       itemList: [
           { iconClass: 'icon20_muyue', text: '我的收入', link: 'income' },
           { iconClass: 'icon_zhundl', text: '参加的访谈', link: 'activities' },
           { iconClass: 'icon_myshouq', text: '个人信息', link: 'personal' },
           { iconClass: 'icon_zhanghumx', text: '收款信息', link: 'payment' },
           { iconClass: 'icon18_sucai', text: '合作流程', link: 'cooperation-process' },
           { iconClass: 'icon_shouquan', text: '关于智讯', link: 'about-us' },
       ],
       paymentInfo: null
   },
    onLoad(){
        const app = getApp();
        const _userInfo = app.globalData.userInfo;
        if(_userInfo){
            this.setData({
                userInfo: _userInfo,
            })
        }
    },
    onShow(){
        if (wx.canIUse('hideHomeButton')) {
            wx.hideHomeButton();
        }
    },
    navigateToPage(e: any){
       const link = e.currentTarget.dataset.link;
        wx.navigateTo({
            url: `../${link}/${link}`
        })
    }
});
