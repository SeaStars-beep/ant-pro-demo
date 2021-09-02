
import { Request, Response } from 'express';
import Mock from 'mockjs';


const waitTime = (time: number = 100) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
  };

async function getOrderList(req: Request, res: Response, u: string) {
    await waitTime();
    const result =  Mock.mock({ // 生成的mock 中只有一个 Mock.mock即可，否则会出现返回的id都是一致的情况
        code: 200,
        time: '@date("yyyy-MM-dd HH:mm:ss")',
        success: true,
        message: '成功',
        data:{
            current: 1,
            pageSize: 20,
            total: '@natural(1, 100)',
            'data|1-10': [
                {
                    orderId: '@guid()',
                    phone:'123456776',
                    provinceCode: 3300000,
                    provinceName: '浙江省',
                    cityCode: 3303300,
                    cityName: '杭州市',
                    countyCode: 3303320,
                    countyName: '西湖区',
                    gasId: '@guid()',
                    gasName: '@csentence(4,20)',
                    gunNo: 1,
                    oilNo: 96,
                    orderPayFlag: 1,
                    payDt: '@date("yyyy-MM-dd HH:mm:ss")',
                    amountGun: 100,
                    amountPay: 200,
                }
            ]
        }

    });
 
    return res.json(result);
}

async function orderOilRefundPageList(req: Request, res: Response, u: string) {
    await waitTime();
    const result =  Mock.mock({ // 生成的mock 中只有一个 Mock.mock即可，否则会出现返回的id都是一致的情况
        code: 200,
        time: '@date("yyyy-MM-dd HH:mm:ss")',
        success: true,
        message: '成功',
        data:{
            current: 1,
            pageSize: 20,
            total: '@natural(1, 100)',
            'data|1-10': [
                {
                    orderId: '@guid()',
                    phone:'123456776',
                    provinceCode: 3300000,
                    provinceName: '浙江省',
                    cityCode: 3303300,
                    cityName: '杭州市',
                    countyCode: 3303320,
                    countyName: '西湖区',
                    gasId: '@guid()',
                    gasName: '@csentence(4,20)',
                    gunNo: 1,
                    oilNo: 96,
                    orderPayFlag: 1,
                    payDt: '@date("yyyy-MM-dd HH:mm:ss")',
                    amountGun: 100,
                    amountPay: 200,
                }
            ]
        }

    });
 
    return res.json(result);
}

async function getDetail (req: Request, res: Response, u: string){
    await waitTime();
    const result = Mock.mock({
        code: 200,
        time: '@date("yyyy-MM-dd HH:mm:ss")',
        success: true,
        message: '成功',
        data:{
            base: {
                orderId: '@guid()',
                paySn: '@guid()',
                orderDt:'@date("yyyy-MM-dd HH:mm:ss")',
                payDt:'@date("yyyy-MM-dd HH:mm:ss")',
                litre: '@natural(60, 100)',
                orderSource: '@csentence(4,20)',
                orderPayFlag: 1
            },
            finance: {
                amountGun: '@natural(50, 100)',
                amountPay:'@natural(50, 100)',
                amountDiscountCoupon: '@natural(1, 100)',
                oilDropletAmount: '@natural(1, 100)',
                payType: 2,
            },
            user: {
                phone: '123456776',
                authenType: 2,
                isFirst:0
            },
            oilStation:{
                gasName: '@csentence(4,20)',
                gunNo: '@natural(1, 10)',
                oilNo: 95,
                provinceCode: 3300000,
                provinceName: '浙江省',
                cityCode: 3303300,
                cityName: '杭州市',
                countyCode: 3303320,
                countyName: '西湖区',
            }
        }
    });

    return res.json(result);

}

async function getCounty (req: Request, res: Response, u: string){
    await waitTime();
    const result = Mock.mock({
        code: 200,
        time: '@date("yyyy-MM-dd HH:mm:ss")',
        success: true,
        message: '成功',
        'data|1-10':[
            {
                countyCode: '@natural(1000, 60000)',
                countyName: '@csentence(3,20)'
            }
        ]
    });
    return res.json(result);

}
async function getProvince (req: Request, res: Response, u: string){
    await waitTime();
    const result = Mock.mock({
        code: 200,
        time: '@date("yyyy-MM-dd HH:mm:ss")',
        success: true,
        message: '成功',
        'data|1-10':[
            {
                provinceCode: '@natural(1000, 60000)',
                provinceName: '@csentence(3,10)'
            }
        ]
    });
    return res.json(result);

}

async function getCity (req: Request, res: Response, u: string){
    await waitTime();
    const result = Mock.mock({
        code: 200,
        time: '@date("yyyy-MM-dd HH:mm:ss")',
        success: true,
        message: '成功',
        'data|1-10':[
            {
                cityCode: '@natural(1000, 60000)',
                cityName: '@csentence(3,10)'
            }
        ]
    });
    return res.json(result);

}
async function getOilStation (req: Request, res: Response, u: string){
    await waitTime();
    const result = Mock.mock({
        code: 200,
        time: '@date("yyyy-MM-dd HH:mm:ss")',
        success: true,
        message: '成功',
        'data|1-10':[
            {
                stationCode: '@natural(1000, 60000)',
                stationName: '@csentence(3,10)'
            }
        ]
    });
    return res.json(result);

}
async function getAuthenType (req: Request, res: Response, u: string){
    await waitTime();
    const result = Mock.mock({
        code: 200,
        time: '@date("yyyy-MM-dd HH:mm:ss")',
        success: true,
        message: '成功',
        'data|1-10':[
            {
                authenType: '@natural(1, 10)',
                authenName: '@csentence(3,10)'
            }
        ]
    });
    return res.json(result);

}

async function getPayType (req: Request, res: Response, u: string){
    await waitTime();
    const result = Mock.mock({
        code: 200,
        time: '@date("yyyy-MM-dd HH:mm:ss")',
        success: true,
        message: '成功',
        'data|1-10':[
            {
                payType: '@natural(1, 10)',
                payName: '@csentence(3,10)'
            }
        ]
    });
    return res.json(result);

}
async function getOrderSource (req: Request, res: Response, u: string){
    await waitTime();
    const result = Mock.mock({
        code: 200,
        time: '@date("yyyy-MM-dd HH:mm:ss")',
        success: true,
        message: '成功',
        'data|1-10':[
            {
                sourceType: '@natural(1, 10)',
                sourceName: '@csentence(3,10)'
            }
        ]
    });
    return res.json(result);

}
async function cancelRefund (req: Request, res: Response, u: string){
    await waitTime();
    const result = Mock.mock({
        code: 200,
        time: '@date("yyyy-MM-dd HH:mm:ss")',
        success: true,
        message: '成功',
        data: null
    });
    return res.json(result);

}

async function sendRefund (req: Request, res: Response, u: string){
    await waitTime();
    const result = Mock.mock({
        code: 200,
        time: '@date("yyyy-MM-dd HH:mm:ss")',
        success: true,
        message: '成功',
        data: null
    });
    return res.json(result);

}
async function restCheck (req: Request, res: Response, u: string){
    await waitTime();
    const result = Mock.mock({
        code: 200,
        time: '@date("yyyy-MM-dd HH:mm:ss")',
        success: true,
        message: '成功',
        data: null
    });
    return res.json(result);

}
async function orderCancel (req: Request, res: Response, u: string){
    await waitTime();
    const result = Mock.mock({
        code: 200,
        time: '@date("yyyy-MM-dd HH:mm:ss")',
        success: true,
        message: '成功',
        data: null
    });
    return res.json(result);

}
async function orderOilRefundCheck (req: Request, res: Response, u: string){
    await waitTime();
    const result = Mock.mock({
        code: 200,
        time: '@date("yyyy-MM-dd HH:mm:ss")',
        success: true,
        message: '成功',
        data: null
    });
    return res.json(result);

}

async function orderOilRefundApply (req: Request, res: Response, u: string){
    await waitTime();
    const result = Mock.mock({
        code: 200,
        time: '@date("yyyy-MM-dd HH:mm:ss")',
        success: true,
        message: '成功',
        data: null
    });
    return res.json(result);

}
async function toTicketPrint (req: Request, res: Response, u: string){
    await waitTime();
    const result = Mock.mock({
        code: 200,
        time: '@date("yyyy-MM-dd HH:mm:ss")',
        success: true,
        message: '成功',
        data: null
    });
    return res.json(result);

}

export default {
    'POST /order/api/queryByPage': getOrderList,
    'POST /order/api/orderOilRefundPageList': orderOilRefundPageList,
    'GET /order/api/order/orderOilDetail': getDetail,
    'GET /order/api/order/getCounty': getCounty,
    'GET /order/api/order/getCity': getCity,
    'GET /order/api/order/getProvince': getProvince,
    'GET /order/api/order/getOilStation': getOilStation,
    'GET /order/api/order/getAuthenType': getAuthenType,
    'GET /order/api/order/getPayType': getPayType,
    'GET /order/api/order/getOrderSource': getOrderSource,
    'POST /order/api/orderRefund/cancelRefund': cancelRefund,
    'POST /order/api/orderRefund/sendRefund': sendRefund,
    'POST /order/api/orderRefund/restCheck': restCheck,
    'POST /order/api/orderRefund/orderOilRefundCheck': orderOilRefundCheck,
    'POST /order/api/orderRefund/orderOilRefundApply': orderOilRefundApply,
    'POST /order/api/order/orderCancel': orderCancel,
    'POST /order/api/order/toTicketPrint': toTicketPrint,

}