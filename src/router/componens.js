import Loadable from '@@/Loadable'


const Home = Loadable(() => import('@/pages/home'))  // 外卖页
const Search = Loadable(() => import('@/pages/search'))  // 搜索页
const Order = Loadable(() => import('@/pages/order'))  // 订单页
const Mine = Loadable(() => import('@/pages/mine'))  // 订单页

const PasswordChanged = Loadable(() => import('@/pages/passwordChanged'))  // 密码登录页
const ResetPassword = Loadable(() => import('@/pages/resetPassword'))  // 重置密码页

const SelectCity = Loadable(() => import('@/pages/selectCity'))  // 选择城市页
const ShopGeneral = Loadable(() => import('@/pages/shopGeneral'))  // 店铺页
const LocatingCity = Loadable(() => import('@/pages/locatingCity'))  // 定位城市页
// LocatingCity

export {
  Home,
  Search,
  Order,
  Mine,
  PasswordChanged,
  ResetPassword,
  SelectCity,
  ShopGeneral,
  LocatingCity
}
