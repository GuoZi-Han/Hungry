import React, { useState } from 'react'
import {
  MobileOutlined,
  RightOutlined,
  FileTextOutlined,
  ShoppingOutlined,
  TransactionOutlined,
  CopyOutlined,
  AntDesignOutlined
} from '@ant-design/icons'
import './styles.less'
import HeaderN from '@/components/HeaderN'
import FooterN from '@/components/FooterN'

function Mine(props) {
  const [headline, setHeadline] = useState('我的')
  const [headportrait, setHeadportrait] = useState('/img/headportrait.jpg')
  const [accountNumber, setAccountNumber] = useState('')
  const [accountStatus, setAccountStatus] = useState('暂无绑定手机号')
  const [balance, setBalance] = useState('0.00') //余额
  const [discounts, setDiscounts] = useState(0) //优惠
  const [integral, setIntegral] = useState(0) //积分

  return (

    <div className="home lmj_home">
      <HeaderN cen={headline} />
      <section className="gc_section">
        <div>
          <div>
            <div>
              <img src={headportrait} />
            </div>
          </div>
          <div>
            <p>
              {
                accountNumber === '' ? '登录/注册' : accountNumber
              }
            </p>
            <p>
              <MobileOutlined />  {accountStatus}
            </p>
          </div>
          <div>
            <RightOutlined />
          </div>
        </div>
        <div>
          <div>
            <span><b>{balance}</b>元</span>
            <span>我的余额</span>
          </div>
          <div>
            <span><b>{discounts}</b>个</span>
            <span>我的优惠</span>
          </div>
          <div>
            <span><b>{integral}</b>分</span>
            <span>我的积分</span>
          </div>
        </div>
        <div>
          <div>
            <span>
              <FileTextOutlined />
            </span>
            <div>
              <span>
                我的订单
                </span>
              <RightOutlined />
            </div>
          </div>
          <div>
            <span>
              <ShoppingOutlined />
            </span>
            <div>
              <span>
                积分商城
                </span>
              <RightOutlined />
            </div>
          </div>
          <div>
            <span>
              <TransactionOutlined />
            </span>
            <div>
              <span>
                饿了么会员卡
                </span>
              <RightOutlined />
            </div>
          </div>
          <div>
            <span>
              <CopyOutlined />
            </span>
            <div>
              <span>
                服务中心
                </span>
              <RightOutlined />
            </div>
          </div>
          <div>
            <span>
            <AntDesignOutlined />
            </span>
            <div>
              <span>
                下载饿了么APP
                </span>
              <RightOutlined />
            </div>
          </div>
        </div>


      </section>
      <FooterN />
    </div>
  )
}

export default Mine
