import { PageContainer } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import { Form, Input, DatePicker, Select, Button, Row, Col, Alert, Space } from 'antd';
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
    handleProvinceChange,
    initProvinceData,
    handleCityChange,
    cityData,
    countryData,
    oilSite,
    handleOilSiteChange,
    staticsData,
  } = viewModel();
  return (
    <PageContainer>
      <div className={styls.searchWrap}>
        <Form form={formRef} labelAlign="left">
          <Row gutter={{ xs: 4, sm: 8, md: 12 }}>
            <Col span={8}>
              <Form.Item name="payDt" label="支付时间">
                <RangePicker allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="applyDt" label="申请退款时间">
                <RangePicker allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="overDt" label="退款完成时间">
                <RangePicker allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="paySn" label="paySn">
                <Input allowClear />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="key1" label="业务类型">
                <Select allowClear>
                  <Select.Option value={1}>测试1</Select.Option>
                  <Select.Option value={2}>测试2</Select.Option>
                </Select>
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
              <Form.Item name="phone" label="手机号">
                <Input allowClear />
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
                <Select allowClear>
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
                <Select allowClear onChange={handleOilSiteChange}>
                  <Select.Option value={1}>测试1</Select.Option>
                  <Select.Option value={2}>测试2</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="key2" label="退款订单号">
                <Input allowClear />
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
        <Alert
          message={
            <Space>
              <span>总交易金额:{staticsData?.totalAmountGun}元</span>
              <span>实付总金额:{staticsData?.totalAmountPay}元</span>
              <span>累计订单数:{staticsData?.totalCount} 笔</span>
            </Space>
          }
        />
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
