import React from 'react'

import './style.less'

function ModalN({ hidden, children }) {
    console.log(hidden);
    return (
        <div className="lmj_ModalN" hidden={!hidden}>
            <div className="lmj_anim">
                {children}
            </div>
        </div>
    )
}

export default ModalN
