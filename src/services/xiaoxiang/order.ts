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
/**补搭小票  POST /order/api/order/toTicketPrint*/
export async function toTicketPrint(body: { orderId: string }, options?: { [key: string]: any }) {
  return request<API.ResCommon<any>>('/order/api/order/toTicketPrint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取订单详情 POST  /order/api/order/orderOilDetail   */
export async function orderOilDetail(
  params: { orderId: string },
  options?: { [key: string]: any },
) {
  return request<API.ResCommon<API.DetailOrderDTO>>('/order/api/order/orderOilDetail', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 油站excel 导出 POST  order/api/order/downloadOrderOilInfo */
export async function downloadOrderOilInfo(body: API.QueryOrder, options?: { [key: string]: any }) {
  return request<any>('/order/api/order/downloadOrderOilInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
/** 退款订单列表excel 导出 POST  /order/api/orderRefund/downloadOrderOilRefundInfo */
export async function downloadOrderOilRefundInfo(
  body: API.QueryOrder,
  options?: { [key: string]: any },
) {
  return request<any>('/order/api/orderRefund/downloadOrderOilRefundInfo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 申请退款列表 POST /order/api/orderRefund/orderOilRefundPageList*/
export async function orderOilRefundPageList(
  body: API.QueryOrder,
  options?: { [key: string]: any },
) {
  return request<API.ResListCommon<API.OrderDTO>>('/order/api/orderOilRefundPageList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**申请退款 POST /order/api/orderRefund/orderOilRefundApply  */

export async function orderOilRefundApply(
  body: { orderId: string; reason: string },
  options?: { [key: string]: any },
) {
  return request<API.ResCommon<any>>('/order/api/orderRefund/orderOilRefundApply', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**退款审批 POST /order/api/orderRefund/orderOilRefundCheck */
export async function orderOilRefundCheck(
  body: { orderId: string; cancelReason: string },
  options?: { [key: string]: any },
) {
  return request<API.ResCommon<any>>('/order/api/orderRefund/orderOilRefundCheck', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**取消订单 POST /order/api/orderRefund/orderOilRefundCheck */
export async function orderCancel(
  body: { orderId: string; cancelReason: string },
  options?: { [key: string]: any },
) {
  return request<API.ResCommon<any>>('/order/api/order/orderCancel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**重置退款 POST /order/api/orderRefund/restCheck */
export async function restCheck(
  body: { orderId: string; restReason: string },
  options?: { [key: string]: any },
) {
  return request<API.ResCommon<any>>('/order/api/orderRefund/restCheck', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**执行退款 POST order/api/orderRefund/sendRefund */
export async function sendRefund(body: { orderId: string }, options?: { [key: string]: any }) {
  return request<API.ResCommon<any>>('/order/api/orderRefund/sendRefund', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/**取消退款 POST order/api/orderRefund/sendRefund */
export async function cancelRefund(
  body: { orderId: string; cancelReason: string },
  options?: { [key: string]: any },
) {
  return request<API.ResCommon<any>>('/order/api/orderRefund/cancelRefund', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取订单来源枚举列表 GET  /order/api/order/getOrderSource   */
export async function getOrderSource(options?: { [key: string]: any }) {
  return request<API.ResCommon<{ sourceType: string; sourceName: string }[]>>(
    '/order/api/order/getOrderSource',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 获取支付方式枚举列表 GET  /order/api/order/getPayType   */
export async function getPayType(options?: { [key: string]: any }) {
  return request<API.ResCommon<{ payType: number; payName: string }[]>>(
    '/order/api/order/getPayType',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 获取认证类型枚举列表 GET  /order/api/order/getAuthenType   */
export async function getAuthenType(options?: { [key: string]: any }) {
  return request<API.ResCommon<{ authenType: number; authenName: string }[]>>(
    '/order/api/order/getAuthenType',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** 获取油站枚举列表 GET  /order/api/order/getAuthenType   */
export async function getOilStation(
  params: { stationName?: string },
  options?: { [key: string]: any },
) {
  return request<API.ResCommon<{ stationCode: number; stationName: string }[]>>(
    '/order/api/order/getOilStation',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取省列表 GET  /order/api/order/getProvince   */
export async function getProvince(
  params: { provinceName?: string },
  options?: { [key: string]: any },
) {
  return request<API.ResCommon<{ provinceCode: number; provinceName: string }[]>>(
    '/order/api/order/getProvince',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取市列表 GET  /order/api/order/getCity   */
export async function getCity(params: { cityName?: string }, options?: { [key: string]: any }) {
  return request<API.ResCommon<{ cityCode: number; cityName: string }[]>>(
    '/order/api/order/getCity',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 获取县列表 GET  /order/api/order/getCounty    */
export async function getCounty(params: { countyName?: string }, options?: { [key: string]: any }) {
  return request<API.ResCommon<{ countyCode: number; countyName: string }[]>>(
    '/order/api/order/getCounty',
    {
      method: 'GET',
      params: {
        ...params,
      },
      ...(options || {}),
    },
  );
}

/** 列表页统计信息 /order/api/order/getTotal     */
export async function getTotal(body: API.QueryOrder, options?: { [key: string]: any }) {
  return request<API.ResListCommon<API.ResTotal>>('/order/api/order/getTotal', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
