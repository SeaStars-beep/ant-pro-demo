// import React  from 'react';
import { PageContainer } from '@ant-design/pro-layout';
// import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Form, Input, DatePicker, Select, Button, Row, Col } from 'antd';
import viewModel from './data';

import styls from './index.less';

const { RangePicker } = DatePicker;
const Index = () => {
  const {
    initTable,
    columns,
    tableRef,
    formRef,
    handleSearch,
    handleReset,
    handleExport,
    queryParams,
    payTypeData,
    orderSource,
    authTypeData,
    initProvinceData,
    cityData,
    countryData,
    handleCityChange,
    handleProvinceChange,
    oilSite,
    handleOilSiteChange,
  } = viewModel();
  return (
    <PageContainer>
      <div className={styls.searchWrap}>
        <Form form={formRef} labelAlign="left">
          <Row gutter={{ xs: 4, sm: 8, md: 12 }}>
            <Col span={8}>
              <Form.Item name="orderDt" label="下单时间">
                <RangePicker allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="payDt" label="支付时间">
                <RangePicker allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="phone" label="手机号">
                <Input allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="paySn" label="paySn">
                <Input allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="orderSource" label="订单来源">
                <Select allowClear>
                  {orderSource?.map((o) => (
                    <Select.Option key={o?.sourceType} value={o?.sourceType}>
                      {o?.sourceName}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="orderPayFlag" label="订单状态">
                <Select allowClear>
                  <Select.Option value={1}>测试1</Select.Option>
                  <Select.Option value={2}>测试2</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="payType" label="支付方式">
                <Select allowClear>
                  {payTypeData?.map((o) => (
                    <Select.Option key={o?.payType} value={o?.payType}>
                      {o?.payName}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="orderId" label="订单号">
                <Input allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="gasId" label="油站">
                <Select allowClear onChange={handleOilSiteChange}>
                  {oilSite?.map((o) => (
                    <Select.Option key={o?.stationCode} value={o?.stationCode}>
                      {o?.stationName}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="authenType" label="认证类型">
                <Select allowClear>
                  {authTypeData?.map((o) => (
                    <Select.Option key={o?.authenType} value={o?.authenType}>
                      {o?.authenName}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="oilNo" label="油号">
                <Select allowClear>
                  <Select.Option value={1}>测试1</Select.Option>
                  <Select.Option value={2}>测试2</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="isFirst" label="是否首单">
                <Select allowClear>
                  <Select.Option value={1}>测试1</Select.Option>
                  <Select.Option value={2}>测试2</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="交易金额" style={{ marginBottom: 0 }}>
                <Row>
                  <Col span={10}>
                    <Form.Item name="minAmountGun" label={null}>
                      <Input allowClear />
                    </Form.Item>
                  </Col>
                  <Col span={4} style={{ textAlign: 'center' }}>
                    <div>-</div>
                  </Col>
                  <Col span={10}>
                    <Form.Item name="maxAmountGun" label={null}>
                      <Input allowClear />
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="实付金额" style={{ marginBottom: 0 }}>
                <Row>
                  <Col span={10}>
                    <Form.Item name="minamountPay" label={null}>
                      <Input allowClear />
                    </Form.Item>
                  </Col>
                  <Col span={4} style={{ textAlign: 'center' }}>
                    <div>-</div>
                  </Col>
                  <Col span={10}>
                    <Form.Item name="maxamountPay" label={null}>
                      <Input allowClear />
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="note3" label="地址" style={{ marginBottom: 0 }}>
                <Row>
                  <Col span={8}>
                    <Form.Item name="provinceCode" label="省" colon={false}>
                      <Select allowClear onChange={handleProvinceChange}>
                        {initProvinceData?.map((o) => (
                          <Select.Option key={o?.provinceCode} value={o?.provinceCode}>
                            {o?.provinceName}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name="cityCode" label="市" colon={false}>
                      <Select allowClear onChange={handleCityChange}>
                        {cityData?.map((o) => (
                          <Select.Option key={o?.cityCode} value={o?.cityCode}>
                            {o?.cityName}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name="countyCode" label="地区" colon={false}>
                      <Select allowClear>
                        {countryData?.map((o) => (
                          <Select.Option key={o?.countyCode} value={o?.countyCode}>
                            {o?.countyName}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item className={styls.searchItem}>
                <Button type="primary" style={{ marginRight: 8 }} onClick={handleSearch}>
                  搜索
                </Button>
                <Button type="primary" onClick={handleReset}>
                  重置
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <div className={styls.tableWrap}>
        <ProTable
          params={queryParams}
          toolBarRender={() => [
            <Button type="primary" onClick={handleExport}>
              导出Excel
            </Button>,
          ]}
          options={false}
          actionRef={tableRef}
          columns={columns}
          rowKey="orderId"
          search={false}
          // @ts-ignore
          request={initTable}
        />
      </div>
    </PageContainer>
  );
};

export default Index;
