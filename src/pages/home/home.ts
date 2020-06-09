
Page({
   data: {
       userInfo: {}
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
    navigateToPage(e: any){
       const link = e.currentTarget.dataset.link;
        wx.navigateTo({
            url: `../${link}/${link}`
        })
    }
});
