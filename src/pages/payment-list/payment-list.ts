Page({
   data: {
       isEdit: false,
       paymentId: null,
       paymentList: [
           { id: 1, type: 20, name: '吴笑笑', idcard: '411403199404021678', alipayCode: '15738893656', isDefault: true },
           { id: 2, type: 10, name: '吴笑笑', idcard: '411403199404021678', bankNumber: '6217002430001230254', subBranch: '中国银行', isDefault: false },
       ]
   },
    editHandle(e: any){
       const id = e.currentTarget.dataset.id || null;
       this.setData({
           paymentId: id,
           isEdit: true
       })
    },
    addPaymentHandle(){
       wx.redirectTo({
           url: '../payment/payment'
       })
    }
});
