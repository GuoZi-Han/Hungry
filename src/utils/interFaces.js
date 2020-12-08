import axios from 'axios'
import qs from 'qs'
import api from '@/services/api'

// 获取城市列表
export function geCityList (message) {
  return new Promise ((resolve, reject) => {
    axios.get(api.getCite+"?"+qs.stringify(message))
      .then(res => {
        resolve(res,666)      
      })
      .catch(error => {
        reject(error)
      })
  })
}