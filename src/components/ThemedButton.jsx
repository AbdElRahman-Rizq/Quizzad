import React from 'react'

function ThemedButton({content,propWidth}) {
  return (
    <button
    className='themedButton'
    style={{
        border:"none",
        borderRadius: "100px",
        // background: "var(--primary-color, #872991)",
        width:propWidth,
        color:"white",
        padding:"1.5% 0",
    }}
    onMouseEnter={()=>{
    
    }}
    >{content}</button>
  )
}

export default ThemedButton