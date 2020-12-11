import React from 'react'
import './styles.less'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import qs from 'qs'

import HeaderN from '@/components/HeaderN'
import InputA from '@/components/InputA'
import ModelN from '@/components/ModelN'

import { getCode, Login } from '@/utils/interFaces'
export default connect((state) => {
  return state;
}, {

})(withRouter(PasswordChanged));
function PasswordChanged(props) {
  //弹出框
  const [Model_show, setModel_show] = React.useState(false);
  //弹出框提示语
  const [Model_text, setModel_text] = React.useState('');
  //验证码
  const [ah_code, setAh_code] = React.useState('');
  //inpt框联动数据
  const [login_inp, setLogin_inp] = React.useState(
    [
      { text: '账号', type: 'text', clas: "ah-user", setting: 'username' },
      { text: '密码', type: 'password', clas: "ah-pwd", setting: 'password' },
      { text: '验证码', type: 'text', clas: "ah-yan", setting: 'captacha_code' }
    ]
  )
  const [allvalue, setAllvalue] = React.useState([]);
  const [ah_hua_cla, setah_hua_cla] = React.useState(false);

  React.useEffect(() => {
    ah_get_code();
  }, []);
  const ah_get_code = async () => {
    const cpcode = await new getCode();
    setAh_code(cpcode.data.code)
  }
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
  const ah_login_btn = async () => {
    let username = '';
    let password = '';
    let captcha_code = '';
    allvalue.forEach(v => {
      if (v.setting === 'username') {
        username = v.value;
      } else if (v.setting === 'password') {
        password = v.value;
      } else if (v.setting === 'captacha_code') {
        captcha_code = v.value;
      }
    })
    //判断是否显示错误提示框
    if (username === '' && password === '' && captcha_code === '') {
      setModel_show(true)
      setModel_text('请输入手机号/邮箱/用户名')
    } else if (username === '') {
      setModel_show(true)
      setModel_text('账号为空')
    } else if (password === '') {
      setModel_show(true)
      setModel_text('密码为空')
    } else if (captcha_code === '') {
      setModel_show(true)
      setModel_text('验证码为空')
    }
    const obj = {
      username,
      password,
      captcha_code
    }
    const res = await Login(obj)
    if (res.data.username) {
      const opt = {
        username:res.data.username,
        sale: res.data.gift_amount,
        money: res.data.balance,
        integral: res.data.point
      }
      sessionStorage.setItem('token', qs.stringify(opt));
      props.location.pathname.substr(6) === '/main' ?
        props.history.push('/') :
        props.history.push('/my')
    } else {
      setModel_show(true)
      setModel_text(res.data.message)
    }
  }
  const ah_model_click = (opt) => {
    setModel_show(opt);
  }
  const ah_hua_click = () => {
    setah_hua_cla(!ah_hua_cla);
    const cplogin_inp = login_inp;
    ah_hua_cla ? cplogin_inp[1].type = 'password' : cplogin_inp[1].type = 'text';
    setLogin_inp(cplogin_inp);
  }
  const ah_img_code = async () => {
    ah_get_code();
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
                setting={v.setting}
                ah_setvalue={cpSetCpvalue}
              />
            )
          })
        }
        <div className={ah_hua_cla ? 'ah-hua ah-hua-true' : 'ah-hua'}>
          <span>abc···</span>
          <p onClick={ah_hua_click}></p>
        </div>
        <div className='ah-code'>
          {ah_code ? <img src={ah_code} alt="" /> : <span />}
          <p>
            <span>看不清</span>
            <span
              onClick={ah_img_code}
              style={{ color: '#3B95E9' }}
            >
              换一张
            </span>
          </p>
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
      {Model_show ? <ModelN code_bool_Model={ah_get_code} click={ah_model_click} errModel={Model_text} /> : ''}
    </div>
  )
}

