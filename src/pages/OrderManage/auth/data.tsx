import { useState, useRef, useEffect } from 'react';
import { Form, message } from 'antd';
import { ModalForm, ProFormText } from '@ant-design/pro-form';
import { history } from 'umi';
import type { ProColumns } from '@ant-design/pro-table';
import services from '@/services/xiaoxiang';
import useDic from '../useDic';

type TableParams = {
  pageSize?: number;
  current?: number;
  keyword?: string;
};

const { order } = services;
const { queryByPage, sendRefund, cancelRefund, restCheck, getTotal } = order;
declare type ReqStatic = Omit<API.QueryOrder, 'current | pageSize'>;

const useViewModel = () => {
  const {
    initCity,
    initCountry,
    initOilSite,
    authTypeData,
    orderSource,
    province: initProvinceData,
  } = useDic();
  const tableRef = useRef();
  const [formRef] = Form.useForm();
  const [queryParams, setQueryParams] = useState<API.QueryOrder>({ current: 1, pageSize: 20 });
  const [cityData, setCityData] = useState<{ cityCode: number; cityName: string }[]>([]);
  const [countryData, setCountryData] = useState<{ countyCode: number; countyName: string }[]>([]);
  const [oilSite, setOilSite] = useState<{ stationCode: number; stationName: string }[]>([]);
  const [staticsData, setStaticsData] = useState<API.ResTotal>();

  const handleDetail = ({ orderId = '' }: API.OrderDTO) => {
    history.push({
      pathname: 'auth/detail',
      query: { orderId },
    });
  };

  /**
   * 执行退款
   */
  const handleRefund = async ({ orderId = '' }: API.OrderDTO) => {
    const { success, message: msg = '' } = await sendRefund({ orderId });
    if (!success) {
      message.warn(msg);
      return;
    }
    message.success(msg);
    tableRef?.current?.reload();
  };
  /**
   * 取消退款
   */
  const handleCancelRefund = async ({ cancelReason = '' }: any, { orderId }: API.OrderDTO) => {
    if (!cancelReason || !orderId) {
      message.warn('请输入原因');
      return;
    }
    const { success, message: msg = '' } = await cancelRefund({ cancelReason, orderId });
    if (!success) {
      message.warn(msg);
      return;
    }
    message.success(msg);
    tableRef?.current?.reload();
  };
  /**
   * 重置退款
   */
  const handleResetRefund = async ({ restReason = '' }: any, { orderId }: API.OrderDTO) => {
    if (!restReason || !orderId) {
      message.warn('请输入原因');
      return;
    }
    const { success, message: msg = '' } = await restCheck({ restReason, orderId });
    if (!success) {
      message.warn(msg);
      return;
    }
    message.success(msg);
    tableRef?.current?.reload();
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
        <a key="do" onClick={() => handleRefund(record)}>
          执行退款
        </a>,
        <ModalForm
          title="取消退款"
          width={500}
          trigger={<a key="cancel">取消退款</a>}
          submitter={{
            searchConfig: {
              submitText: '确认',
              resetText: '取消',
            },
          }}
          onFinish={(e) => handleCancelRefund(e, record)}
        >
          <ProFormText
            name="cancelReason"
            label="退单退单原因"
            required
            placeholder="请输入原因"
            allowClear
          />
        </ModalForm>,
        <ModalForm
          title="重新打开"
          width={500}
          trigger={<a key="cancel">重置退款</a>}
          submitter={{
            searchConfig: {
              submitText: '确认',
              resetText: '取消',
            },
          }}
          onFinish={(e) => handleResetRefund(e, record)}
        >
          <ProFormText
            name="restReason"
            label="原因"
            required
            placeholder="请输入原因"
            allowClear
          />
        </ModalForm>,
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
   * 获取统计
   */
  const initStatics = async (req: ReqStatic) => {
    const { data, success, message: msg = '' } = await getTotal(req);
    if (!success) {
      message.warn(msg);
      return;
    }
    setStaticsData(data as API.ResTotal);
  };
  /**
   *  search
   */
  const handleSearch = async () => {
    const res = formRef.getFieldsValue();
    setQueryParams({ ...res, current: 1, pageSize: 20 });
    initStatics({ ...res });
  };
  /**
   * reset
   */
  const handleReset = async () => {
    formRef.resetFields();
    setQueryParams({ current: 1, pageSize: 20 });
    initStatics({} as ReqStatic);
  };
  /**
   * 导出excel
   */
  const handleExport = () => {};
  /**
   * 省份选择
   */
  const handleProvinceChange = async (e: any) => {
    setCityData([]);
    const res = await initCity(e?.target?.value);
    setCityData(res);
  };
  /**
   * 城市选择
   */
  const handleCityChange = async (e: any) => {
    setCountryData([]);
    const res = await initCountry(e?.target?.value);
    setCountryData(res);
  };

  /**
   * 油站
   */
  const getOilSite = async (stationName = '') => {
    setOilSite([]);
    const res = await initOilSite(stationName);
    setOilSite(res);
  };
  const handleOilSiteChange = async (e: any) => {
    getOilSite(e?.target?.value);
  };

  useEffect(() => {
    getOilSite('');
    initStatics({} as ReqStatic);
  }, []);
  return {
    initTable,
    columns,
    tableRef,
    formRef,
    handleSearch,
    handleReset,
    handleExport,
    queryParams,

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
  };
};

export default useViewModel;
