Page({
   data: {
       paymentId: null,
       paymentType: null,
       isEdit: false,
       paymentList: [
           { id: 1, type: 20, name: '吴笑笑', idcard: '411403199404021678', alipayCode: '15738893656', isDefault: true },
           { id: 2, type: 10, name: '吴笑笑', idcard: '411403199404021678', bankNumber: '6217002430001230254', subBranch: '中国银行', isDefault: false },
       ]
   },
    editHandle(e: any){
       const { id, type } = e.currentTarget.dataset;
       console.log(id, type, 'canshu');
       this.setData({
           paymentId: id,
           paymentType: type,
           isEdit: true,
       });
    },
    addPaymentHandle(){
       wx.redirectTo({
           url: '../payment/payment'
       })
    },
    cancelHandle(){
       // 收款列表qpi
       this.setData({
           isEdit: false,
       })
    }
});
