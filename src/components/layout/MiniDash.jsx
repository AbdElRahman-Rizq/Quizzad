import React from 'react'
import { Progress, Space } from 'antd';
import '../../assets/css/Dashboard.css'

// Waraki
export default function MiniDash({icon,name}) {
    const twoColors = { '0%': '#8A288E', '100%': '#fff' };

    return (
        <div>
            <div className='Dash mt-4 '>
                <div className="container">
                <div className="dash rounded-4 w-100 shadow d-flex justify-content-between px-4 my-1">
                    <div className="icon">
                        <i  class={icon}></i>
                        <h6 className='person'>{name}</h6>
                    </div>
{/* Progress bar */}
                    <div className=" rate p-2 ">
                        <div style={{ display: 'flex', flexDirection: 'column', rowGap: 14}}>
                            <Space wrap>
                            <Progress type="circle" percent={75}  
                                format={percent => (<span style={{ color: '#A153A5' ,fontFamily: 'Arial', fontSize: '1.9rem'  }}>{percent}</span>)} 
                                strokeColor={twoColors} strokeWidth={10} width={80}/>
                            </Space>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
