/// <reference path="./types/index.d.ts" />
interface Configuration {
    activityStatus: object
    activityType: object
    currency: object
}
interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    configuration?: Configuration
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}
