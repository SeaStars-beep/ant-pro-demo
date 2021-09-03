import { useState, useRef, useEffect } from 'react';
import { Form } from 'antd';
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
const { queryByPage } = order;

const useViewModel = () => {
  const {
    initCity,
    initCountry,
    initOilSite,
    payTypeData,
    orderSource,
    authTypeData,
    province: initProvinceData,
  } = useDic();
  const tableRef = useRef();
  const [formRef] = Form.useForm();
  const [queryParams, setQueryParams] = useState<API.QueryOrder>({ current: 1, pageSize: 20 });
  const [cityData, setCityData] = useState<{ cityCode: number; cityName: string }[]>([]);
  const [countryData, setCountryData] = useState<{ countyCode: number; countyName: string }[]>([]);
  const [oilSite, setOilSite] = useState<{ stationCode: number; stationName: string }[]>([]);

  const handleDetail = ({ orderId = '' }: API.OrderDTO) => {
    history.push({
      pathname: 'refund/detail',
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
      title: '退款订单号',
      dataIndex: 'key1',
      ellipsis: true,
    },
    {
      title: '用户手机号',
      dataIndex: 'phone',
      ellipsis: true,
    },
    {
      title: '省/市/县',
      dataIndex: 'orderId',
      render: (_, record: API.OrderDTO) =>
        `${record?.provinceName}/${record?.cityName}/${record?.countyName}`,
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
      title: '实付金额',
      dataIndex: 'amountPay',
      ellipsis: true,
    },
    {
      title: '操作',
      valueType: 'option',
      width: 120,
      render: (_, record: API.OrderDTO) => [
        <a key="detail" onClick={() => handleDetail(record)}>
          详情
        </a>,
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
    setQueryParams({ ...res, current: 1, pageSize: 20 });
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
  };
};

export default useViewModel;
