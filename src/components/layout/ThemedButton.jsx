import React from 'react'

function ThemedButton({content,propWidth,propPadding}) {
  return (
    <button
    className='themedButton'
    style={{
        border:"none",
        borderRadius: "100px",
        // background: "var(--primary-color, #872991)",
        width:propWidth,
        padding:propPadding,
    }}
    >{content}</button>
  )
}

export default ThemedButton