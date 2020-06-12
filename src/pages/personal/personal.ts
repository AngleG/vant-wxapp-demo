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
});
