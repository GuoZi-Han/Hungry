import React from 'react'
import './styles.less'
import { connect } from 'react-redux'

import HeaderN from '@/components/HeaderN'
import InputA from '@/components/InputA'

import { getCode, Login } from '@/utils/interFaces'
export default connect((state) => {
  return state;
}, {

})(PasswordChanged);
function PasswordChanged(props) {
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
  const ah_login_btn = () => {
    console.log(allvalue)
    let username='';
    let password='';
    let captcha_code='';
    allvalue.forEach(v=>{
      if(v.setting==='username'){
        username=v.value;
      }else if(v.setting==='password'){
        password=v.value;
      }else if(v.setting==='captacha_code'){
        captcha_code=v.value;
      }
    })
    const obj={
      username,
      password,
      captcha_code
    }
    console.log(obj)
    Login(obj).then(res => {
      console.log(res)
      
      // username
      // password
      // captacha_code
    })
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
    </div>
  )
}

