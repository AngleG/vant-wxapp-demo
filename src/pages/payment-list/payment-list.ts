Page({
   data: {
       isEdit: false,
       paymentList: [
           { type: 20, name: '吴笑笑', idcard: '411403199404021678', alipayCode: '15738893656', isDefault: true },
           { type: 10, name: '吴笑笑', idcard: '411403199404021678', bankNumber: '6217002430001230254', subBranch: '中国银行', isDefault: false },
       ]
   },
    editHandle(){
       this.setData({
           isEdit: true
       })
    },
    addPaymentHandle(){
       wx.redirectTo({
           url: '../payment/payment'
       })
    }
});
