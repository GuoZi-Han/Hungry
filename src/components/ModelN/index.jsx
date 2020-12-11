import React from 'react'
import { ExclamationOutlined } from '@ant-design/icons';

import './style.less'

function Model(props) {
    const {click,code_bool_Model}=props;
    return (
        <div>
            <div className='ah_model_div'>
                <p style={{
                    border: '#F8CB86 2px solid',
                    borderRadius: '50%',
                    width: '1.3rem',
                    height: '1.3rem',
                    marginBottom: '15px',
                    marginTop: '0.4rem',
                    display: 'flex',
                    justifyContent: 'center',
                }}>
                    <ExclamationOutlined
                        style={{
                            color: '#F8CB86',
                            fontSize: '1rem',
                            fontWeight: 200 + 'px'
                        }} />
                </p>
                <p>{props.errModel}</p>
                <button
                    className='ah-Model-btn'
                    onClick={() => { click(false);code_bool_Model() }}
                >
                    确定
                </button>
            </div>
        </div>
    )
}

export default Model
