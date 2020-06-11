Page({
    data: {
        paymentType: null
    },
    onLoad(option) {
        const paymentType = option['payment-type'];
        console.log(paymentType, '==query');
        this.setQueryData(paymentType);
    },
    setQueryData(paymentType: any){
        this.setData({
            paymentType: paymentType
        })
    },
    cancelHandle(){
        wx.navigateBack();
    }
});
