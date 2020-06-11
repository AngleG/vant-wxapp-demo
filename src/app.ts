// app.ts

import envObj = WechatMiniprogram.envObj;

const activityStatus = {
    20: '待开始',
    30: '进行中',
    40: '待核算',
    50: '已核对',
    60: '已取消',
};
const activityType = {
    10: '电话访谈',
    20: '面访',
    30: '路演'
};
const currency = {
    10: '人民币',
    20: '美元'
};

App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
    this.globalData.configuration = {activityStatus, activityType, currency};
    // let globalConfiguration = wx.getStorageSync('globalConfiguration') || null;
    // if(!globalConfiguration){
    //     wx.setStorageSync('globalConfiguration', {activityStatus, activityType, currency});
    // }

    // 登录
    // wx.login({
    //   success: res => {
    //     console.log(res.code)
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   },
    // })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
              console.log(this.globalData,'全局数据');
              // 用户授过权 并且 手机号校验通过 才可跳转到首页
              wx.redirectTo({
                url: '/pages/home/home'
              })
            },
          })
        }
      },
    })
  }
});
