Page({
    data: {
        paymentInfo: null,
        paymentType: null,
        paymentList: [
            { name: '银行卡', value: 10 },
            { name: '支付宝', value: 20 }
        ]
    },
    onLoad(){

    },
    radioChange(e: any){
        console.log('radio发生change事件，携带value值为：', e.detail.value);
        this.setData({
            paymentType: e.detail.value
        })
    },
    nextStepHandle(){
        wx.navigateTo({
            url: `../add-payment/add-payment?payment-type=${this.data.paymentType}`
        });
    },
    skipHandle(){
        wx.redirectTo({
            url: '../home/home'
        })
    }
});
