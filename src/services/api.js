export default {
  getCite: 'https://elm.cangdu.org/v1/cities',
  getCiteMessage: 'https://elm.cangdu.org/v1/cities',
  search: 'https://elm.cangdu.org/v1/pois',
  getAddress: 'https://elm.cangdu.org/v2/pois/', //定位
  eatType: 'https://elm.cangdu.org/v2/index_entry',
  shopList: 'https://elm.cangdu.org/shopping/restaurants', //商铺列表
  searchShop: 'https://elm.cangdu.org/v4/restaurants', //搜索商铺
  allShopType: 'https://elm.cangdu.org/shopping/v2/restaurant/category',
  peiSong: 'https://elm.cangdu.org/shopping/v1/restaurants/delivery_modes',
  shopActivity: 'https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes', //商家属性活动列表
  shopInfo: 'https://elm.cangdu.org/shopping/restaurant/',
  upDateImg: 'https://elm.cangdu.org/v1/addimg/',
  addShop: 'https://elm.cangdu.org/shopping/addshop',
  addEatType: 'https://elm.cangdu.org/shopping/addcategory',
  addEat: 'https://elm.cangdu.org/shopping/addfood',
  getEatList1: 'https://elm.cangdu.org/shopping/v2/menu', //获取食品列表
  pingJia: 'https://elm.cangdu.org/ugc/v2/restaurants/',
  pingJiaFenShu: 'https://elm.cangdu.org/ugc/v2/restaurants/',
  pingJiaType: 'https://elm.cangdu.org/ugc/v2/restaurants/',
  addShopCar: 'https://elm.cangdu.org/v1/carts/checkout',
  // 20+
  beiZhu: 'https://elm.cangdu.org/v1/carts/',
  shouHuoDiZhi: 'https://elm.cangdu.org/v1/users/',
  //代理
  yanZheng: '/api/v1/captchas',
  login: '/api/v2/login',
  
  getUser: 'https://elm.cangdu.org/v1/user', 
  unLogin: 'https://elm.cangdu.org/v2/signout', 
  upPass: 'https://elm.cangdu.org/v2/changepassword',//修改密码
  addAddress: 'https://elm.cangdu.org/v1/users/:user_id/addresses', //添加收货地址
  delAddress: 'https://elm.cangdu.org/v1/users/:user_id/addresses/:address_id',
  xiaDan: 'https://elm.cangdu.org/v1/users/:user_id/carts/:cart_id/orders', //下单
  ddList: 'https://elm.cangdu.org/bos/v2/users/',
  ddInfo: 'https://elm.cangdu.org/bos/v1/users/',
  fuWuCenter: 'https://elm.cangdu.org/v3/profile/explain',
  redBag: 'https://elm.cangdu.org/promotion/v2/users/', //红包
  oldRedBag: 'https://elm.cangdu.org/promotion/v2/users/',
  addRedBag: 'https://elm.cangdu.org/v1/users/:user_id/hongbao/exchange',
  vip: 'https://elm.cangdu.org/admin/login',
  unVip: 'https://elm.cangdu.org/admin/singout',
  vipInfo: 'https://elm.cangdu.org/admin/info',
  getApis: 'https://elm.cangdu.org/statis/api/', //获取某日api请求量
  // 40+
  allApis: 'https://elm.cangdu.org/statis/api/count',
  getDayApi: 'https://elm.cangdu.org/statis/user/',
  allUser: 'https://elm.cangdu.org/v1/users/count',
  getDaydds: 'https://elm.cangdu.org/statis/order/', //获取某天订单数量
  getAllDds: 'https://elm.cangdu.org/bos/orders/count', //获取所有订单数量
  vipList: 'https://elm.cangdu.org/admin/all', 
  getVipNum: 'https://elm.cangdu.org/admin/count',
  shopEatTypes: 'https://elm.cangdu.org/shopping/getcategory/', //获取店铺食品种类
  getShops: 'https://elm.cangdu.org/shopping/restaurants/count', //获取餐馆数量
  updateShop: 'https://elm.cangdu.org/shopping/updateshop', 
  delShop: 'https://elm.cangdu.org/shopping/restaurant/',
  getEatList2: 'https://elm.cangdu.org/shopping/v2/foods', //获取食品列表
  getEats: 'https://elm.cangdu.org/shopping/v2/foods/count',
  getEatTypeInfo: 'https://elm.cangdu.org/shopping/v2/menu/', //获取食品种类详情
  updateEat: 'https://elm.cangdu.org/shopping/v2/updatefood',
  delEat: 'https://elm.cangdu.org/shopping/v2/food/:food_id',
  getUserList: 'https://elm.cangdu.org/v1/users/list',//获取用户列表
  getddList: 'https://elm.cangdu.org/bos/orders',//获取订单列表
  addresse: 'https://elm.cangdu.org/v1/addresse/',
  getUserFenBu: 'https://elm.cangdu.org/v1/user/city/count',//获取用户分布信息
  getRegVipDay: 'https://elm.cangdu.org/statis/admin/',//获取某天管理员注册量
}