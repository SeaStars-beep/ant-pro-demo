
import { PageContainer } from '@ant-design/pro-layout';
import { Descriptions } from 'antd';
import useViewModel from './data';
import styls from './index.less';

const Index = () => {
  const { detail } = useViewModel();
  const { base, user, finance, oilStation } = detail;
  
  return (
    <PageContainer title="订单详情">
      <div className={styls.detailWrap}>
        <Descriptions title="订单基本信息" bordered column={2} style={{ marginBottom: 12 }}>
          <Descriptions.Item label="订单号">{base?.orderId}</Descriptions.Item>
          <Descriptions.Item label="PaySn">{base?.paySn}</Descriptions.Item>
          <Descriptions.Item label="下单时间">{base?.orderDt}</Descriptions.Item>
          <Descriptions.Item label="支付时间">{base?.payDt}</Descriptions.Item>
          <Descriptions.Item label="订单状态">{base?.orderPayFlag}</Descriptions.Item>
          <Descriptions.Item label="消费升数">{base?.litre}</Descriptions.Item>
          <Descriptions.Item label="订单来源">{base?.orderSource}</Descriptions.Item>
        </Descriptions>
        <Descriptions title="财务信息" bordered column={2} style={{ marginBottom: 12 }}>
          <Descriptions.Item label="订单总金额">{finance?.amountGun}</Descriptions.Item>
          {/* <Descriptions.Item label="订单折扣">Prepaid</Descriptions.Item> */}
          <Descriptions.Item label="优惠券优惠金额">
            {finance?.amountDiscountCoupon}
          </Descriptions.Item>
          {/* <Descriptions.Item label="会员红包优惠金额">2018-04-24 18:00:00</Descriptions.Item> */}
          <Descriptions.Item label="油滴抵扣">{finance?.oilDropletAmount}</Descriptions.Item>
          {/* <Descriptions.Item label="服务费">2018-04-24 18:00:00</Descriptions.Item> */}
          <Descriptions.Item label="支付方式">{finance?.payType}</Descriptions.Item>
          <Descriptions.Item label="实付金额">{finance?.amountPay}</Descriptions.Item>
          {/* <Descriptions.Item label="现金支付金额">2018-04-24 18:00:00</Descriptions.Item> */}
          {/* <Descriptions.Item label="余额支付金额">2018-04-24 18:00:00</Descriptions.Item> */}
        </Descriptions>
        <Descriptions title="用户基本信息" bordered column={1} style={{ marginBottom: 12 }}>
          <Descriptions.Item label="用户手机号">{user?.phone}</Descriptions.Item>
          <Descriptions.Item label="用户认证类型">{user?.authenType}</Descriptions.Item>
          <Descriptions.Item label="是否首单">{user?.isFirst}</Descriptions.Item>
        </Descriptions>
        <Descriptions title="油站基本信息" bordered column={2} style={{ marginBottom: 12 }}>
          <Descriptions.Item label="油站名称">{oilStation?.gasName}</Descriptions.Item>
          <Descriptions.Item label="地区">{`${oilStation?.provinceName}/${oilStation?.cityName}/${oilStation?.countyName}`}</Descriptions.Item>
          <Descriptions.Item label="油枪">{oilStation?.gunNo}</Descriptions.Item>
          <Descriptions.Item label="油号">{oilStation?.oilNo}</Descriptions.Item>
        </Descriptions>
        {/* <Descriptions title="订单日志" layout="vertical" bordered>
                <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
                <Descriptions.Item label="Billing Mode">Prepaid</Descriptions.Item>
                <Descriptions.Item label="Automatic Renewal">YES</Descriptions.Item>
                <Descriptions.Item label="Order time">2018-04-24 18:00:00</Descriptions.Item>
            </Descriptions> */}
      </div>
    </PageContainer>
  );
};

export default Index;
