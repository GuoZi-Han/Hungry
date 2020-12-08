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