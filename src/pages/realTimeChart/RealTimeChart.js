import React, { useState } from 'react'
import ChartData from './ChartData';
import './styles.css';
function RealTimeChart() {
    const [state, setstate] = useState('BTCBUSD')
    return (
        <div className='body'>
            <div className='main-container'>
                <div className='header'>
                    <label className='header-title'>Real Time Chart</label>
                </div>
                <div className='data-container'>
                    <div className='best-data-section'>
                        <div className='best-bid-section'>
                            <div className='best-bid-header'>
                                <label className='header-title'>Best Bid: </label>
                            </div>
                            <div className='best-ask-body'>
                                <div className='body-info'>
                                    <label>43979.00000</label>
                                    <label>Bid Price</label>
                                </div>
                                <div className='body-info-left'>
                                    <label>0.01058</label>
                                    <label>Bid Quality</label>
                                </div>
                            </div>

                        </div>
                        <div className='best-ask-section'>
                            <div className='best-ask-header'>
                                <label className='header-title'>Best Ask: </label>
                            </div>
                            <div className='best-bid-body'>
                                <div className='body-info'>
                                    <label>43979.00000</label>
                                    <label>Ask Price</label>
                                </div>
                                <div className='body-info-left'>
                                    <label>0.01058</label>
                                    <label>Ask Quality</label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div style={{ marginTop: '30px' }}>
                    <ChartData />
                </div>
            </div>
        </div>
    )
}

export default RealTimeChart