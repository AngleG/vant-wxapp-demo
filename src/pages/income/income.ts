Page({
   data: {
       searchTime: 0,
       options: [
           { text: '全部', value: 0 },
           { text: '近一个月', value: 10 },
           { text: '近半年', value: 20 },
           { text: '近一年', value: 30 },
           { text: '一年以上', value: 40 }
       ],
       itemList: [
           {type: 10, title: '亚商投顾转入', activityTime: '2020/02/28', date: '2020/03/20', account: '3200'},
           {type: 20, title: '亚商投顾转入', activityTime: null, date: '2020/04/10', account: '200'},
           {type: 20, title: '亚商投顾转入', activityTime: null, date: '2020/04/02', account: '200'}
       ]
   }
});
