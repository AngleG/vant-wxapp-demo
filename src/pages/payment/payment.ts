Page({
    data: {
        paymentInfo: null,
        paymentList: [
            { name: '银行卡', value: 10 },
            { name: '支付宝', value: 20 }
        ],
        step: 1,
    },
    onLoad(){

    },
    radioChange(e: any){
        console.log('radio发生change事件，携带value值为：', e.detail.value);
    },
    nextStepHandle(){
        this.setData({
            step: 2
        });
        wx.setNavigationBarTitle({
            title: this.data.step === 1 ? '选择收款方式' : '收款信息'
        });
    },
    skipHandle(){
        wx.redirectTo({
            url: '../home/home'
        })
    }
});
