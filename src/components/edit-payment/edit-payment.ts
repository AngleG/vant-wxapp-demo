Component({
    properties: {

    },
    data: {

    },
    methods: {
        formSubmit(e){
            console.log('form发生了submit事件，携带数据为：', e.detail.value);
            // 保存收款信息api
            wx.redirectTo({
                url: '../../pages/payment-list/payment-list'
            })
        },
        formReset(e) {
            console.log('form发生了reset事件，携带数据为：', e.detail.value);
            // this.setData({
            //     chosen: ''
            // })
        }
    }
});
