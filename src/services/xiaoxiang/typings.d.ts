// @ts-ignore
/* eslint-disable */

declare namespace API {
  declare enum OrderStatus {
    未支付 = 0,
    已支付,
    未支付订单删除 = 3,
    退款中,
    已退款,
    退款失败,
    已取消,
    非法用户支付 = 400,
  }
  declare enum PayType {
    油分期 = -2,
    微信支付 = 1,
    支付宝支付,
    连连支付,
    微信公众号支付 = 6,
    账户余额支付,
    云鸟支付,
    个人余额支付 = 10,
    微信扫码支付,
    支付宝扫码支付,
    油条支付,
    小程序支付,
    优必爱 = 20,
    爱好出行,
  }

  type QueryOrder = {
    orderDt?: string;
    payDt?: string;
    phone?: string;
    paySn?: string;
    orderSource?: string;
    orderPayFlag?: OrderStatus;
    payType?: PayType;
    orderId?: string;
    gasId?: string;
    authenType?: number;
    oilNo?: number;
    provinceCode?: number;
    cityCode?: number;
    countyCode?: number;
    isFirst?: 0 | 1; // 是否首单 1：是 0 ：否
    minAmountGun?: number;
    maxAmountGun?: number;
    minamountPay?: number;
    maxamountPay?: number;
    current: number;
    pageSize: number;
  };

  type OrderDTO = {
    orderId?: string; // 订单号
    phone?: string; // 手机号
    provinceCode?: number; // 省code
    provinceName?: string; // 省name
    cityCode?: number; // 市
    cityName?: string; //  市名称
    countyCode?: number; //  县
    countyName?: string; //  县名称
    gasId?: string; // 油站id
    gasName?: string; // 油站名称
    gunNo?: number; // 枪号
    oilNo?: number; // 油号
    orderPayFlag?: OrderStatus; // 订单状态
    payDt?: string; // 支付时间
    amountGun?: number; // 交易金额
    amountPay?: number; // 实付金额
  };

  type DetailOrderDTO = {
    base?: {
      orderId?: string;
      paySn?: string;
      orderDt?: string;
      payDt?: string;
      litre?: number;
      orderSource?: string;
      orderPayFlag?: OrderStatus;
    };
    finance?: {
      amountGun?: number;
      amountPay?: number;
      amountDiscountCoupon?: number;
      oilDropletAmount?: number;
      payType?: PayType;
    };
    user?: {
      phone: ?string;
      authenType?: number;
      isFirst?: 0 | 1;
    };
    oilStation?: {
      gasName?: string;
      gunNo?: number;
      oilNo?: number;
      provinceCode?: number;
      provinceName?: string;
      cityCode?: number;
      cityName?: string;
      countyCode?: number;
      countyName?: string;
    };
  };

  type OrderList = {
    data?: OrderDTO[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };
  type ResListCommon<T> = {
    code?: number;
    data: {
      pageSize?: number;
      current?: number;
      data?: T[] | null;
      total?: number;
    };
    message?: string;
    success?: boolean;
    time?: string;
  };
  type ResCommon<T> = {
    code?: number;
    data: T;
    message?: string;
    success?: boolean;
    time?: string;
  };
}
