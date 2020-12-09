import React from 'react'
import './style.less'
function InputA(props) {
    const inp = React.useRef('');
    const { ah_setvalue, text, type, clas } = props;
    const cpClas = "ah-inp " + clas;
    return (
        <p>
            <input
                ref={inp}
                onBlur={() => {
                    ah_setvalue({
                        text: text,
                        value: inp.current.value
                    })
                }}
                type={type}
                placeholder={text}
                className={cpClas}
            />

        </p>
    )
}

export default InputA
