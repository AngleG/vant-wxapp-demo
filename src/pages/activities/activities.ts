import { ACTIVITY_STATUS_COLOR } from '../../utils/conf/config';

Page({
    data: {
        isLoading: false,
        activityList: [
            { type: 10, activityTime: '2020/04/20 10:02', status: 20, taxRate: 1000, currency: 10, duration: null, income: null, paymentInfo: null },
            { type: 20, activityTime: '2020/03/21 14:02', status: 30, taxRate: 1000, currency: 10, duration: null, income: null, paymentInfo: {} },
            { type: 20, activityTime: '2020/03/21 14:02', status: 40, taxRate: 1000, currency: 10, duration: null, income: null, paymentInfo: {} },
            { type: 20, activityTime: '2020/03/21 14:02', status: 60, taxRate: 1000, currency: 10, duration: null, income: null, paymentInfo: {} },
            { type: 10, activityTime: '2020/04/21 11:02', status: 50, taxRate: 1000, currency: 10, duration: 65, income: 1050, paymentInfo: {} },
            { type: 30, activityTime: '2020/05/21 18:00', status: 50, taxRate: 1500, currency: 20, duration: 120, income: 3000, paymentInfo: {} },
        ],
        activityStatus: null,
        activityType: null,
        currency: null,
        ACTIVITY_STATUS_COLOR: ACTIVITY_STATUS_COLOR
    },
    onLoad(){
        const { activityStatus, activityType, currency } = getApp().globalData.configuration;
        this.setData({
            activityStatus: activityStatus,
            activityType: activityType,
            currency: currency,
        });
        // const globalConfiguration = wx.getStorageSync('globalConfiguration') || null;
        // if(globalConfiguration){
        //     this.setData({
        //         activityStatus: globalConfiguration.activityStatus,
        //         activityType: globalConfiguration.activityType,
        //         currency: globalConfiguration.currency,
        //     });
        // }
    },
    // 页面上拉触底事件的处理函数
    onReachBottom: function() {
        // Do something when page reach bottom.
        console.log('上拉事件触发...');
        this.setData({
           isLoading: true
        });
        const newData = [
            { type: 10, activityTime: '2020/04/21 11:02', status: 50, taxRate: 1000, currency: 10, duration: 65, income: 1050, paymentInfo: {} },
            { type: 10, activityTime: '2020/04/21 11:02', status: 50, taxRate: 1000, currency: 10, duration: 65, income: 1050, paymentInfo: {} },
            { type: 10, activityTime: '2020/04/21 11:02', status: 50, taxRate: 1000, currency: 10, duration: 65, income: 1050, paymentInfo: {} },
            { type: 10, activityTime: '2020/04/21 11:02', status: 50, taxRate: 1000, currency: 10, duration: 65, income: 1050, paymentInfo: {} },
        ];

        let _this = this;
        setTimeout(function () {
            let oldDataList = _this.data.activityList;
            const arr = oldDataList.concat(newData);
            _this.setData({
                activityList: arr,
                isLoading: false
            });
        }, 2000);
    },
    // 监听下拉动作
    onPullDownRefresh: function() {
        // Do something when pull down.
        console.log('触发下拉');
        wx.showNavigationBarLoading();
        setTimeout(function () {
            wx.hideNavigationBarLoading();
            wx.stopPullDownRefresh();
        }, 2000);
    },
});
