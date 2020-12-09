import axios from 'axios'
import qs from 'qs'
import api from '@/services/api'

// 获取城市列表
export function geCityList (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.getCite+"?"+qs.stringify(message))
      .then(res => {
        resolve(res)      
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取所选城市信息
export function getSeleceCity (id) {
  return new Promise ((resolve, reject) => {
    axios.get(api.getCiteMessage+`/${ id }`)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

//搜索地址
export function searchCity (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.search+'?'+qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

//经纬度定位
export function LatitudeLongitude (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.getAddress+message)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

//食品分类列表
export function foodTypeList () {
  return new Promise ((resolve, reject) => {
    axios.get(api.eatType)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取商铺列表
export function getShopList (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.shopList+'?'+qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 搜索餐馆
export function searchShop (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.searchShop+'?'+qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取所有商铺分类列表
export function getAllShopList (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.allShopType+'?'+qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取配送方式
export function getInDistribution (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.peiSong+'?'+qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 商家属性活动列表
export function shopAttribute (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.shopActivity+'?'+qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 餐馆详情
export function shopInfo (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.shopInfo+message)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 上传图片
export function upImg (message) {
  return new Promise ((resolve, reject) => {
    axios.post(api.upDateImg,qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 添加餐馆
export function addShop (message) {
  return new Promise ((resolve, reject) => {
    axios.post(api.addShop,qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 添加食品种类
export function addFoodSpecies (message) {
  return new Promise ((resolve, reject) => {
    axios.post(api.addEatType,qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 添加食品
export function addFood (message) {
  return new Promise ((resolve, reject) => {
    axios.post(api.addEat,qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取食品列表
export function getFoodNewList (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.getEatList1+'?'+qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取评价信息
export function getEvaluationInfo (message,info) {
  return new Promise ((resolve, reject) => {
    axios.get(api.pingJia+message+'/ratings?'+qs.stringify(info))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取评价分数
export function getEvaluationScore (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.pingJiaFenShu+message+'/ratings/scores')
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取评价分类
export function getEvaluationType (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.pingJiaType+message+'/ratings/tags')
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 加入购物车
export function addCar (message) {
  return new Promise ((resolve, reject) => {
    axios.post(api.addShopCar, qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取备注信息
export function getNoteInfo (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.beiZhu + message + '/remarks')
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取收货地址列表
export function getAddressList (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.shouHuoDiZhi + message + '/addresses')
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取验证码
export function getCode (message) {
  return new Promise ((resolve, reject) => {
    axios.post(api.yanZheng, qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取用户信息
export function getUsersInfo () {
  return new Promise ((resolve, reject) => {
    axios.get(api.getUser)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 登录
export function Login (message) {
  return new Promise ((resolve, reject) => {
    axios.post(api.login, qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 退出
export function Out () {
  return new Promise ((resolve, reject) => {
    axios.get(api.unLogin)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 修改密码
export function writePass (message) {
  return new Promise ((resolve, reject) => {
    axios.post(api.upPass, qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 增加收货地址
export function addGoodAddress (message) {
  return new Promise ((resolve, reject) => {
    axios.post(api.addAddress, qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 删除收货地址
export function delGoodAddress (message) {
  return new Promise ((resolve, reject) => {
    axios.delete(api.delAddress, qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 下单
export function PlacetTheOrder (message) {
  return new Promise ((resolve, reject) => {
    axios.post(api.xiaDan, qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 订单列表
export function orderList (message,info) {
  return new Promise ((resolve, reject) => {
    axios.get(api.ddList + message + '/orders?' + qs.stringify(info))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 订单详情
export function orderDetails (message,info) {
  return new Promise ((resolve, reject) => {
    axios.get(api.ddInfo + message + '/orders/' + info + '/snapshot')
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 服务中心
export function serviceCenter () {
  return new Promise ((resolve, reject) => {
    axios.get(api.fuWuCenter)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 可用红包
export function AvailableRedEnvelopes (message, info) {
  return new Promise ((resolve, reject) => {
    axios.get(api.redBag + message + '/hongbaos?' + qs.stringify(info))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 过期红包
export function ExpiredAredEnvelope (message, info) {
  return new Promise ((resolve, reject) => {
    axios.get(api.oldRedBag + message + '/expired_hongbaos?' + qs.stringify(info))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 兑换红包
export function ForAredEnvelope (message) {
  return new Promise ((resolve, reject) => {
    axios.post(api.addRedBag, qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 管理员登录
export function administratorLogin (message) {
  return new Promise ((resolve, reject) => {
    axios.post(api.vip, qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 管理员退出登录
export function administratorUnLogin () {
  return new Promise ((resolve, reject) => {
    axios.get(api.unVip)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 管理员信息
export function administratorInfo () {
  return new Promise ((resolve, reject) => {
    axios.get(api.vipInfo)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取某日API请求量
export function someDayRequestNum (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.getApis + message + '/count')
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取所有API请求量
export function getAllRequestNum () {
  return new Promise ((resolve, reject) => {
    axios.get(api.allApis)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取某天用户注册量
export function someDayUserReg (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.getDayApi + message + '/count')
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取所有用户注册量
export function getAllRegNum () {
  return new Promise ((resolve, reject) => {
    axios.get(api.allUser)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取某天订单数量
export function someDayOrderNum (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.getDaydds + message + '/count')
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
} 

// 获取所有订单数量
export function getAllOrderNum () {
  return new Promise ((resolve, reject) => {
    axios.get(api.getAllDds)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 管理员列表
export function administratorList (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.vipList + '?' + qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取管理员数量
export function getAdministratorNum () {
  return new Promise ((resolve, reject) => {
    axios.get(api.getVipNum)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取店铺食品种类
export function getFoodsSpecies (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.shopEatTypes +message)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取餐馆数量
export function getRestaurantsNum () {
  return new Promise ((resolve, reject) => {
    axios.get(api.getShops)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 更新餐馆
export function updateRestaurants (message) {
  return new Promise ((resolve, reject) => {
    axios.post(api.updateShop, qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 删除餐馆
export function deleteRestaurants (message) {
  return new Promise ((resolve, reject) => {
    axios.delete(api.delShop + message)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

//  获取食品列表
export function getFoodsList (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.getEatList2 + '?' + qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取食品数量
export function getFoodsNum () {
  return new Promise ((resolve, reject) => {
    axios.get(api.getEats)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取食品种类详情
export function getFoodsSpeciesInfo (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.getEatTypeInfo + message)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 更新食品
export function updateFoods (message) {
  return new Promise ((resolve, reject) => {
    axios.post(api.updateEat + qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 删除食品
export function deleteFoods (message) {
  return new Promise ((resolve, reject) => {
    axios.delete(api.delEat + message)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取用户列表
export function getUsersList (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.getUserList + '?' + qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取订单列表
export function getOrdersList (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.getddList + '?' + qs.stringify(message))
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取地址信息
export function getAddressInformation (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.addresse + message)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取用户分布信息
export function getUserDistributionInformation (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.getUserFenBu)
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 获取某天管理员注册量
export function someDayAdminRegNum (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.getRegVipDay + message + '/count')
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        reject(error)
      })
  })
} 
