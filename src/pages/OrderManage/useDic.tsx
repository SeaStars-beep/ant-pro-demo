import { useState, useEffect } from 'react';
import services from '@/services/xiaoxiang';

const {
  getAuthenType,
  getCounty,
  getOilStation,
  getOrderSource,
  getProvince,
  getCity,
  getPayType,
} = services.order;

const useDic = () => {
  const [authTypeData, setAuthTypeData] = useState<{ authenType: number; authenName: string }[]>(
    [],
  );
  const [payTypeData, setPayTypeData] = useState<{ payType: number; payName: string }[]>([]);
  const [orderSource, setOrderSource] = useState<{ sourceType: string; sourceName: string }[]>([]);

  const [province, setProvince] = useState<{ provinceCode: number; provinceName: string }[]>([]);

  const initAuthenType = async () => {
    const { data = [] } = await getAuthenType();
    setAuthTypeData(data);
    return data;
  };
  const initPayType = async () => {
    const { data = [] } = await getPayType();
    setPayTypeData(data);
    return data;
  };

  const initOrderSource = async () => {
    const { data = [] } = await getOrderSource();
    setOrderSource(data);
    return data;
  };
  const initProvince = async (provinceName: string = '') => {
    const { data = [] } = await getProvince({ provinceName });
    setProvince(data);
    return data;
  };
  const initCountry = async (countyName: string = '') => {
    const { data = [] } = await getCounty({ countyName });
    return data;
  };
  const initCity = async (cityName: string = '') => {
    const { data } = await getCity({ cityName });
    return data;
  };
  const initOilSite = async (stationName: string = '') => {
    const { data } = await getOilStation({ stationName });
    return data;
  };

  useEffect(() => {
    initAuthenType();
    initPayType();
    initOrderSource();
    initProvince();
  }, []);

  return {
    initAuthenType,
    initPayType,
    initOrderSource,
    initProvince,
    initCity,
    initCountry,
    initOilSite,
    province,
    payTypeData,
    authTypeData,
    orderSource,
  };
};

export default useDic;
