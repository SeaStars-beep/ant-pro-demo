import { useState } from 'react';
import { useEffect } from 'react';
import { history } from 'umi';
import services from '@/services/xiaoxiang';

const { order } = services;
const { orderOilDetail } = order;

const useViewModel = () => {
  const { query } = history.location;
  const [detail, setDetail] = useState<API.DetailOrderDTO>({} as API.DetailOrderDTO);
  /**
   * 获取详情
   */
  const handleDetail = async (orderId: string) => {
    const { data, success } = await orderOilDetail({ orderId });
    if (success) {
      setDetail(data);
    }
  };
  /**
   * back
   */
  const columns = [
    {
      title: '操作类型',
      dataIndex: 'logType',
      key: 'logType',
    },
    {
      title: '操作时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '操作人',
      dataIndex: 'createUser',
      key: 'createUser',
    },
    {
      title: '操作内容',
      dataIndex: 'content',
      key: 'content',
    },
  ];

  useEffect(() => {
    handleDetail(query?.orderId as string);
  }, [query]);

  return {
    detail,
    columns,
  };
};
export default useViewModel;
