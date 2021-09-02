import { useState, useRef } from 'react';
import { Form } from 'antd';
import { history } from 'umi';
import type { ProColumns } from '@ant-design/pro-table';
import services from '@/services/xiaoxiang';

type TableParams = {
  pageSize?: number;
  current?: number;
  keyword?: string;
};

const { order } = services;
const { queryByPage } = order;

const useViewModel = () => {
  const tableRef = useRef();
  const [formRef] = Form.useForm();
  const [queryParams, setQueryParams] = useState<API.QueryOrder>({});

  const handleDetail = ({ orderId = '' }: API.OrderDTO) => {
    history.push({
      pathname: 'auth/detail',
      query: { orderId },
    });
  };

  const columns: ProColumns<API.OrderDTO>[] = [
    {
      title: '订单号',
      dataIndex: 'orderId',
      ellipsis: true,
    },
    {
      title: '用户手机号',
      dataIndex: 'phone',
      ellipsis: true,
    },
    {
      title: '订单交易油站',
      dataIndex: 'gasName',
      ellipsis: true,
    },
    {
      title: '枪号',
      dataIndex: 'gunNo',
    },
    {
      title: '油号',
      dataIndex: 'oilNo',
    },
    {
      title: '订单状态',
      dataIndex: 'orderPayFlag',
      ellipsis: true,
      valueEnum: {
        0: { text: '未支付', status: 'process' },
        1: { text: '已支付', status: 'scccess' },
        3: { text: '未支付订单删除', status: 'scccess' },
        4: { text: '退款中', status: 'scccess' },
        5: { text: '已退款', status: 'scccess' },
        6: { text: '退款失败', status: 'scccess' },
        7: { text: '已取消', status: 'scccess' },
        400: { text: '非法用户支付', status: 'scccess' },
      },
    },
    {
      title: '支付时间',
      dataIndex: 'payDt',
      ellipsis: true,
    },
    {
      title: '交易金额',
      dataIndex: 'amountGun',
      ellipsis: true,
    },
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      fixed: 'right',
      render: (_, record: API.OrderDTO) => [
        <a key="detail" onClick={() => handleDetail(record)}>
          详情
        </a>,
        <a key="do">执行退款</a>,
        <a key="cancel">取消退款</a>,
      ],
    },
  ];

  /**
   * table request
   * @param params
   * @returns
   */
  const initTable = async (params: TableParams) => {
    const { success = false, data: allData } = await queryByPage({ ...params, ...queryParams });
    const { data = [], total = 0 } = allData;
    return {
      data,
      success,
      total,
    };
  };
  /**
   *  search
   */
  const handleSearch = async () => {
    const res = formRef.getFieldsValue();
    setQueryParams({ ...res });
  };
  /**
   * reset
   */
  const handleReset = async () => {
    formRef.resetFields();
    setQueryParams({ current: 1, pageSize: 20 });
  };
  /**
   * 导出excel
   */
  const handleExport = () => {};
  return {
    initTable,
    columns,
    tableRef,
    formRef,
    handleSearch,
    handleReset,
    handleExport,
    queryParams,
  };
};

export default useViewModel;
