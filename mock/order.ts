
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


export default {
    'POST /order/api/queryByPage': getOrderList,
    'POST /order/api/order/orderOilDetail': getDetail

}