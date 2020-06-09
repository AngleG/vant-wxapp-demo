/**
 * Created by admin on 2020/5/15
 */
export const request = options => {
    return new Promise((reslove, reject) => {
        const { data, method } = options;
        if(data && method !== 'get'){
            options.data = JSON.stringify(data)
        }
        wx.request({
            url:"",
            header: {'Content-type': 'application/json'},
            ...options,
            success: res=> {
                if(res.data.code === 200){
                    resolve(res.data);
                } else {
                    reject(res.data);
                }
            },
            fail: res => {
                reject(res.data);
            }
        });
    });
}
