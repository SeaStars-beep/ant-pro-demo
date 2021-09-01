
import { default as orderRoutes } from "./routes/order";

export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user', routes: [{ name: '登录', path: '/user/login', component: './user/Login' }] },
      { component: './404' },
    ],
  },
  {...orderRoutes},
  // 要放在最下面 ，采用的贪婪路由
  { path: '/', redirect: '/orderManage/order' },
  { component: './404' },
];
