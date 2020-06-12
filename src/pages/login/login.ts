// import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';
const Toast = require('../../miniprogram_npm/@vant/weapp/toast/toast');
const app = getApp<IAppOption>();
Page({
    data: {
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        hasUserInfo: false,
        phoneNumber: null,
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        if (app.globalData.userInfo) {
            this.setData({
                hasUserInfo: true,
            })
        }else if (this.data.canIUse) {
            app.userInfoReadyCallback = res => {
                app.globalData.userInfo = res.userInfo;
                this.setData({
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo;
                    this.setData({
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    getUserInfoHandle(e: any){
        console.log(e, '获取用户信息');
        if(e.detail.userInfo){  // 授权通过
            // wx.setStorageSync('userInfo', e.detail.userInfo);
            app.globalData.userInfo = e.detail.userInfo;
            this.setData({
                hasUserInfo: true,
            });
            wx.login({
                success: res => {
                    console.log(res.code, '登录后返回的code');
                    // 使用 code 换取 openid 和 session_key 等信息, 然后在第三方服务端结合 session_key 以及 app_id 进行解密获取手机号
                    // 调用登录接口

                }
            });
            console.log(app.globalData, '--login');
        }else {  // 拒绝授权
            Toast.default('授权失败，请重新尝试！');
        }

    },
    getPhoneNumberHandle(e: any){
        // 返回的是加密数据
        console.log(e, '获取手机号');
        wx.switchTab({
            url: '../home/home'
        })
        // console.log(e.detail.iv);
        // console.log(e.detail.encryptedData);
        // 将iv 和 encryptedData传给后台进行解密，返回解密后的手机号
        // if(res.phoneNumber){
        //     this.setData({
        //         phoneNumber: res.phoneNumber,
        //     })
        //     wx.switchTab({
        //         url: '../index/index'
        //     })
        // }
    }
});
