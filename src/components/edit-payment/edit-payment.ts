Component({
    properties: {
        paymentId: Number
    },
    data: {
        detailInfo: {
            name: '',
            idcard: '',
            bankNumber: '',
            subBranch: '',
            isDefault: false
        },
        test: 0
    },
    lifetimes: {
        // 组件实例刚刚被创建好时
        created: function() {
            console.log('created', this.data, this.data.paymentId);
        },
        // 在组件完全初始化完毕、进入页面节点树后
        attached: function() {
            console.log('attached', this.data, this.properties.paymentId)
        },
        // 在组件在视图层布局完成后执行
        ready: function() {
            console.log('ready', this.properties.paymentId)
        },
        // 在组件离开页面节点树后
        detached: () => {
            console.log('detached')
        }
    },
    observers: {
      'paymentId': function (val) {
          console.log(val, '监听paymentId变化');
          if (val) {
            // 根据id获取收款信息详情
              const newData = {
                  name: '123',
                  idcard: '41140319930406',
                  bankNumber: '6217002430001230265',
                  subBranch: '建设银行',
                  isDefault: true,
              }
            this.setData({
                detailInfo: newData
            })
          }
      }
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
