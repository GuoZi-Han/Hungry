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