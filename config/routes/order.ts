const index = {
  name: '订单管理',
  icon: 'table',
  path: '/orderManage',

  routes: [
    {
      path: 'canvas',
      name: '画板',
      component: './OrderManage/canvas',
    },
    {
      path: 'order',
      name: '订单信息',
      component: './OrderManage/order',
    },
    {
      path: 'order/detail',
      name: '订单详情',
      hideInMenu: true,
      component: './OrderManage/detail',
    },
    {
      path: 'apply',
      name: '申请退款',
      component: './OrderManage/apply',
    },
    {
      path: 'apply/detail',
      name: '订单详情',
      hideInMenu: true,
      component: './OrderManage/detail',
    },
    {
      path: 'auth',
      name: '退款审批',
      component: './OrderManage/auth',
    },
    {
      path: 'auth/detail',
      name: '订单详情',
      hideInMenu: true,
      component: './OrderManage/detail',
    },
    {
      path: 'refund',
      name: '退款订单',
      component: './OrderManage/refund',
    },
    {
      path: 'refund/detail',
      name: '订单详情',
      hideInMenu: true,
      component: './OrderManage/detail',
    },
  ],
};

export default index;
