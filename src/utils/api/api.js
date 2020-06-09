import request from '../request/request';
const baseUrl = getApp().globalData.baseUrl;

export function apiLogin(data) {
  return request({url: '', method: 'post', data});
}

export function apiLoginOut(data) {
  return request({url: '', method: 'post', data});
}