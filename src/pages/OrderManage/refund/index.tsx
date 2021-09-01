
import { PageContainer } from '@ant-design/pro-layout';
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
                  <Select.Option value={1}>测试1</Select.Option>
                  <Select.Option value={2}>测试2</Select.Option>
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
                  <Select.Option value={1}>测试1</Select.Option>
                  <Select.Option value={2}>测试2</Select.Option>
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
                  <Select.Option value={1}>测试1</Select.Option>
                  <Select.Option value={2}>测试2</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="authenType" label="认证类型">
                <Select allowClear>
                  <Select.Option value={1}>测试1</Select.Option>
                  <Select.Option value={2}>测试2</Select.Option>
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
              <Form.Item name="key2" label='退款订单号'>
                <Input allowClear />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="note3" label="地址" style={{ marginBottom: 0 }}>
                <Row>
                  <Col span={8}>
                    <Form.Item name="provinceCode" label="省" colon={false}>
                      <Input allowClear />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name="cityCode" label="市" colon={false}>
                      <Input allowClear />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item name="countyCode" label="地区" colon={false}>
                      <Input allowClear />
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
