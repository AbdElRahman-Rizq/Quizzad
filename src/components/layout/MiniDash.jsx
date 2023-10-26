import React from 'react'
import { Progress, Space } from 'antd';

// Waraki
export default function MiniDash() {
    const twoColors = { '0%': '#8A288E', '100%': '#fff' };

    return (
        <div>
            <div className='Dash mt-4 '>
                <div className="container">
                <div className="dash rounded-4 w-100 shadow d-flex justify-content-between px-4 my-1">
                    <div className="icon">
                        <i  class="fa-solid fa-person-chalkboard"></i>
                        <h6 className='person'>Teacher</h6>
                    </div>

                    <div className=" rate p-2 ">
                        <div style={{ display: 'flex', flexDirection: 'column', rowGap: 14}}>
                            {/* <Progress percent={99.9} strokeColor={twoColors} /> */}
                            <Space wrap>
                            <Progress type="circle" percent={75} strokeColor={twoColors} />
                            </Space>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
