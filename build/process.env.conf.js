/**
 * Created by admin on 2020/5/18
 */
module.exports = {
    dev: {
        NODE_ENV: 'development',
        appId: 'developmentAppid',
        requestOrigin: 'https://developmentOrigin',
        projectname: '开发环境',
    },
    test: {
        NODE_ENV: 'test',
        appId: 'testAppid',
        requestOrigin: 'https://testOrigin',
        projectName: '测试环境',
    },
    preprod: {
        NODE_ENV: 'preprod',
        appId: 'preprodAppid',
        requestOrigin: 'https://preprodOrigin',
        projectName: '预发布环境',
    },
    prod: {
        NODE_ENV: 'production',
        appId: 'productionAppid',
        requestOrigin: 'https://productionOrigin',
        projectName: '生产环境',
    },
}
