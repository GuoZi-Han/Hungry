import React from 'react'
import { Route } from 'react-router-dom'
// import {
//   Home,
//   Search,
//   Order,
//   Mine,
//   PasswordChanged,
//   ResetPassword,
//   SelectCity,
//   ShopGeneral,
//   LocatingCity,
//   BusinessDetails,
//   ConfirmOrder,
//   OrderNote,
//   InvoiceTitle,
//   OnlinePayment,
//   SelectAddress,
//   AddAddress,
//   AccountInformation,
//   ModifyUserName,
//   EditAddress,
//   NewAddress,
//   MyBalance,
//   BalanceExplain,
//   MyCoupon,
//   RedEnvelopesThat,
//   RecommendedPrize,
//   VoucherDescription,
//   SecurityBulletins,
//   ScreeningOfGoods,
//   Download,
//   ServiceCenter,
//   MemberCenter,
//   Reenter,
//   ForARedEnvelope
// } from '@/router/componens'
import routs from '@/router/componens'
import AnimatedRouter from 'react-animated-router';
import './style.css';
export default function Router() {
  console.log(routs,Object.keys(routs))
  // 路由说明
  function an_route_explain() {
    // <Route path="/voucherDescription" component={VoucherDescription} />{/* 代金券说明页 */}
    // <Route path="/accountInformation" component={AccountInformation} />{/* 账户信息页 */}
    // <Route path="/securityBulletins" component={SecurityBulletins} />{/* 安全公告页 */}
    // <Route path="/redEnvelopesThat" component={RedEnvelopesThat} />{/* 红包说明页 */}
    // <Route path="/screeningOfGoods" component={ScreeningOfGoods} />{/* 筛选商品页 */}
    // <Route path="/recommendedPrize" component={RecommendedPrize} />{/* 推荐有奖页 */}
    // <Route path="/businessDetails" component={BusinessDetails} />{/* 商家详情页 */}
    // <Route path="/forARedEnvelope" component={ForARedEnvelope} />{/* 兑换红包页 */}
    // <Route path="/modifyUserName" component={ModifyUserName} />{/* 修改用户名页 */}
    // <Route path="/balanceExplain" component={BalanceExplain} />{/* 余额说明页 */}
    // <Route path="/resetPassword" component={ResetPassword} />{/* 重置密码页 */}
    // <Route path="/serviceCenter" component={ServiceCenter} />{/* 服务中心页 */}
    // <Route path="/selectAddress" component={SelectAddress} />{/* 选择地址页 */}
    // <Route path="/onlinePayment" component={OnlinePayment} />{/* 在线支付页 */}
    // <Route path="/invoiceTitle" component={InvoiceTitle} />{/* 发票抬头页 */}
    // <Route path="/memberCenter" component={MemberCenter} />{/* 会员中心页 */}
    // <Route path="/confirmOrder" component={ConfirmOrder} />{/* 确定订单页 */}
    // <Route path="/locatingCity" component={LocatingCity} />{/* 定位城市页 */}
    // <Route path="/shopGeneral" component={ShopGeneral} />{/* 店铺页 */}
    // <Route path="/editAddress" component={EditAddress} />{/* 编辑地址页 */}
    // <Route path="/newAddress" component={NewAddress} />{/* 新增地址页 */}
    // <Route path="/selectCity" component={SelectCity} />{/* 选择城市页 */}
    // <Route path="/addAddress" component={AddAddress} />{/* 添加地址页 */}
    // <Route path="/myBalance" component={MyBalance} />{/* 我的余额页 */}
    // <Route path="/orderNote" component={OrderNote} />{/* 订单备注页 */}
    // <Route path="/myCoupon" component={MyCoupon} />{/* 我的优惠卷页 */}
    // <Route path="/download" component={Download} />{/* 下载页 */}
    // <Route path="/reenter" component={Reenter} />{/* 请重新进入页 */}
    // {/* 主要路由 */}
    // <Route path="/login" component={PasswordChanged} />{/* 登录页 */}
    // <Route path="/search" component={Search} />{/* 搜索页*/}
    // <Route path="/indent" component={Order} />{/* 订单页 */}
    // <Route path="/my" component={Mine} />{/* 我的页 */}
    // <Route exact path="/" component={Home} />外卖页
  }
  // 路由说明
  an_route_explain();
  return (
    <div>
      {/* 路由 取对应的变量名 首字母变小写 */}
      <AnimatedRouter>

      </AnimatedRouter>
    </div>
  )
}
