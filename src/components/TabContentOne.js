import React from 'react'
import Img from '../images/tab-1-pic.png'

function TabContentOne() {
    return (
        <div className="container">
            <div className="tab-content">
            <span>If you decide Netflix isn't for you - no problem. No Commitement. Cancel
                online anttime.
            </span><br/>
            <button>try it now </button>
            <img src={Img} />
            </div>
        </div>
    )
}


export default TabContentOne;