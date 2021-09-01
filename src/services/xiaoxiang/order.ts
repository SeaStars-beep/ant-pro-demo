// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取订单列表 POST /order/api/queryByPage */
export async function queryByPage(body: API.QueryOrder, options?: { [key: string]: any }) {
  return request<API.ResListCommon<API.OrderDTO>>('/order/api/queryByPage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取订单详情 POST  /order/api/order/orderOilDetail   */
export async function orderOilDetail(body: { orderId: string }, options?: { [key: string]: any }) {
  return request<API.ResCommon<API.DetailOrderDTO>>('/order/api/order/orderOilDetail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
