import React from 'react'

import './style.less'

function ModalN(props) {
    console.log();
    return (
        <div className="lmj_ModalN">
            <div className="lmj_anim">
                {props.children}
            </div>
        </div>
    )
}

export default ModalN
