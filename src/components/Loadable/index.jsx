import React from 'react';
import Loadable from 'react-loadable'
import './style.less'
// 默认的 Loading
const loadingComponent = () => {
  return <div className="ah-load">
    <img
      src="/img/5-160914192R6-50.gif"
      alt="加载中..."
      className="ah-load-img" />
  </div>
}

export default function (loader, loading = loadingComponent) {
  return Loadable({
    loader, // 加载的组件
    loading,  // 加载组件没在加载出来的时候 展示一个 loading
  })
}

