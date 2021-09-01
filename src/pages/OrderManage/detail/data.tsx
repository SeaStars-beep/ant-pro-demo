import { useState } from 'react';
import { useEffect } from 'react';
import { history } from 'umi';
import services from '@/services/xiaoxiang';

const { order } = services;
const { orderOilDetail } = order;

const useViewModel = () => {
  const { query } = history.location;
  const [detail, setDetail] = useState<API.DetailOrderDTO>({});
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

  useEffect(() => {
    handleDetail(query?.orderId as string);
  }, [query]);

  return {
    detail,
  };
};
export default useViewModel;
