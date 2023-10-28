import React from 'react'
import { Progress, Space } from 'antd';
import '../../assets/css/Dashboard.css'

// Waraki
export default function MiniDash({icon,name,number}) {
    const twoColors = { '0%': '#8A288E', '100%': '#fff' };

    return (
        <div>
            <div className='Dash mt-4 '>
                <div className="container">
                <div className="dash rounded-4 w-100 shadow d-flex justify-content-between px-5 my-1">
                    <div className="icon">
                        <i  className={icon}></i>
                        <h6 className='person'>{name}</h6>
                    </div>
                    
                    {/* Progress bar */}
                    <div className=" rate p-2 " >
                        <div >
                            <Space wrap>
                            <Progress type="circle" percent={number}  
                                format={percent => (<span style={{ color: '#A153A5' ,fontFamily: 'Arial', fontSize: '1.5rem' , fontWeight: 'bold'  }}>{percent}</span>)} 
                                strokeColor={twoColors} strokeWidth={10} width={50} />
                            </Space>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
