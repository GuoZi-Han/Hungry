import Loadable from '@@/Loadable'
const Home = Loadable(() => import('@/pages/home'))  // 外卖页
const Search = Loadable(() => import('@/pages/search'))  // 搜索页
const Order = Loadable(() => import('@/pages/order'))  // 订单页
const Mine = Loadable(() => import('@/pages/mine'))  // 我的页

const PasswordChanged = Loadable(() => import('@/pages/passwordChanged'))  // 密码登录页
const ResetPassword = Loadable(() => import('@/pages/resetPassword'))  // 重置密码页

const SelectCity = Loadable(() => import('@/pages/selectCity'))  // 选择城市页
const ShopGeneral = Loadable(() => import('@/pages/shopGeneral'))  // 店铺页
const LocatingCity = Loadable(() => import('@/pages/locatingCity'))  // 定位城市页
const BusinessDetails = Loadable(() => import('@/pages/businessDetails'))  // 商家详情页
const ConfirmOrder = Loadable(() => import('@/pages/confirmOrder'))  // 确定订单页
const OrderNote = Loadable(() => import('@/pages/orderNote'))  // 订单备注页
const InvoiceTitle = Loadable(() => import('@/pages/invoiceTitle'))  // 发票抬头页
const OnlinePayment = Loadable(() => import('@/pages/onlinePayment'))  // 在线支付页
const SelectAddress = Loadable(() => import('@/pages/selectAddress'))  // 选择地址页
const AddAddress = Loadable(() => import('@/pages/addAddress'))  // 添加地址页
const AccountInformation = Loadable(() => import('@/pages/accountInformation'))  // 账户信息页
const ModifyUserName = Loadable(() => import('@/pages/modifyUserName'))  // 修改用户名页
const EditAddress = Loadable(() => import('@/pages/editAddress'))  // 编辑地址页
const NewAddress = Loadable(() => import('@/pages/newAddress'))  //新增地址页
const MyBalance = Loadable(() => import('@/pages/myBalance'))  //我的余额页
const BalanceExplain = Loadable(() => import('@/pages/balanceExplain')) // 余额说明页
const MyCoupon = Loadable(() => import('@/pages/myCoupon')) // 我的优惠卷页
const RedEnvelopesThat = Loadable(() => import('@/pages/redEnvelopesThat')) // 红包说明页
const RecommendedPrize = Loadable(() => import('@/pages/recommendedPrize')) // 推荐有奖页
const VoucherDescription = Loadable(() => import('@/pages/voucherDescription')) // 代金券说明页
const SecurityBulletins = Loadable(() => import('@/pages/securityBulletins')) //安全公告页
const ScreeningOfGoods = Loadable(() => import('@/pages/screeningOfGoods')) //筛选商品页
const Download = Loadable(() => import('@/pages/download')) //下载页
const ServiceCenter = Loadable(() => import('@/pages/serviceCenter')) //服务中心页
const MemberCenter = Loadable(() => import('@/pages/memberCenter')) //会员中心页
const Reenter = Loadable(() => import('@/pages/reenter')) //请重新进入页
const ForARedEnvelope = Loadable(() => import('@/pages/forARedEnvelope')) //兑换红包页

// ForARedEnvelope

export {
  Home,
  Search,
  Order,
  Mine,
  PasswordChanged,
  ResetPassword,
  SelectCity,
  ShopGeneral,
  LocatingCity,
  BusinessDetails,
  ConfirmOrder,
  OrderNote,
  InvoiceTitle,
  OnlinePayment,
  SelectAddress,
  AddAddress,
  AccountInformation,
  ModifyUserName,
  EditAddress,
  NewAddress,
  MyBalance,
  BalanceExplain,
  MyCoupon,
  RedEnvelopesThat,
  RecommendedPrize,
  VoucherDescription,
  SecurityBulletins,
  ScreeningOfGoods,
  Download,
  ServiceCenter,
  MemberCenter,
  Reenter,
  ForARedEnvelope
}
