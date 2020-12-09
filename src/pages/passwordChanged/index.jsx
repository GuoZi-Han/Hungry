import React from 'react'
import './styles.less'
import { connect } from 'react-redux'


import HeaderN from '@/components/HeaderN'
import InputA from '@/components/InputA'

export default connect((state) => {
  return state;
}, {

})(PasswordChanged);
function PasswordChanged(props) {
  const [login_inp] = React.useState(
    [
      { text: '账号', type: 'text', clas: "ah-user" },
      { text: '密码', type: 'passward', clas: "ah-pwd" },
      { text: '验证码', type: 'text', clas: "ah-yan" }
    ]
  )
  const [allvalue, setAllvalue] = React.useState([]);
  const [ah_hua_cla, setah_hua_cla] = React.useState(false);
  const cpSetCpvalue = (opt) => {
    let cpAllvalue = allvalue;
    const cpAllvalue_boll = cpAllvalue.some(v => {
      return v.text === opt.text;
    })
    if (cpAllvalue_boll) {
      cpAllvalue = allvalue.map(v => {
        if (v.text === opt.text) {
          v = opt;
        }
        return v;
      })
    } else {
      cpAllvalue.push(opt);
    }
    setAllvalue(cpAllvalue);
  }
  const ah_login_btn = () => {
    console.log(allvalue)
  }
  const ah_hua_click = () => {
    setah_hua_cla(!ah_hua_cla);
  }
  return (
    <div className='ah-login'>
      <HeaderN
        isSearch={false}
        cen="密码登录"
      />
      <div className='ah-login-inp'>
        {
          login_inp.map((v, i) => {
            return (
              <InputA
                key={i}
                text={v.text}
                type={v.type}
                clas={v.clas}
                ah_setvalue={cpSetCpvalue}
              />
            )
          })
        }
        <div className={ah_hua_cla?'ah-hua ah-hua-true':'ah-hua'}>
          <span>abc···</span>
          <p onClick={ah_hua_click}></p>
        </div>
      </div>
      <p className='ah-login-p'>温馨提示：为注册过的账号，登录时将自动注册
        <br />
        注册过的用户可凭账号密码登录</p>
      <p className='ah-login-btn'>
        <button
          onClick={ah_login_btn}
        >
          登录
        </button>
      </p>
    </div>
  )
}

