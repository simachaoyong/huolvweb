import React, { Component } from 'react';
import '../../sass/fanyongdt.scss';
import Xsalert from '../Xsalert.js';
// 引入connect
import {connect} from 'react-redux'
class Fanyongdt extends Component {
    constructor() {
        super();
        this.state = {
            data1: [
                {
                    imgurl: 'http://localhost:3000/images/shouye/explain_01.png',
                },
                {
                    goodlist: [{
                        imgurl: 'http://localhost:3000/images/shouye/yhq_floor_11.png',
                        tit: '唯品惠满200减20',
                        money: '0元'
                    }, {
                        imgurl: 'http://localhost:3000/images/shouye/yhq_floor_12.png',
                        tit: '考拉海购399减30',
                        money: '0元'
                    }, {
                        imgurl: 'http://localhost:3000/images/shouye/yhq_floor_12.png',
                        tit: '韩都衣舍满299减30',
                        money: '0元'
                    }, {
                        imgurl: 'http://localhost:3000/images/shouye/yhq_floor_14.png',
                        tit: '优购50元全场通用劵',
                        money: '0元'
                    }
                    ]
                }
            ],
            data2: [
                {
                    imgurl: 'http://localhost:3000/images/shouye/explain_02.png',
                },
                {
                    goodlist: [{
                        imgurl: 'http://localhost:3000/images/shouye/yhq_floor_21.png',
                        tit: '火驴100元现金券',
                        money: '10000元'
                    }, {
                        imgurl: 'http://localhost:3000/images/shouye/yhq_floor_22.png',
                        tit: '火驴200元现金券',
                        money: '20000元'
                    }, {
                        imgurl: 'http://localhost:3000/images/shouye/yhq_floor_23.png',
                        tit: '火驴300元现金券',
                        money: '30000元'
                    }, {
                        imgurl: 'http://localhost:3000/images/shouye/yhq_floor_24.png',
                        tit: '火驴500元现金券',
                        money: '50000元'
                    }
                    ]
                }
            ],
            data3: [
                {
                    imgurl: 'http://localhost:3000/images/shouye/explain_03.png',
                },
                {
                    goodlist: [{
                        imgurl: 'http://localhost:3000/images/shouye/yhq_floor_31.png',
                        tit: '小米60寸4K智能平板电视机',
                        money: '80000元'
                    }, {
                        imgurl: 'http://localhost:3000/images/shouye/yhq_floor_32.png',
                        tit: '夏普 60吋4K高清安卓智能网络LED平板电视机',
                        money: '100000元'
                    }
                    ]
                }
            ],
            data4: [
                {
                    imgurl: 'http://localhost:3000/images/shouye/explain_04.png',
                },
                {
                    goodlist: [{
                        imgurl: 'http://localhost:3000/images/shouye/yhq_floor_41.png',
                        tit: '火驴50元话费充值劵',
                        money: '一周三个有效客户'
                    }, {
                        imgurl: 'http://localhost:3000/images/shouye/yhq_floor_42.png',
                        tit: '火驴100元话费充值劵',
                        money: '一周五个有效客户'
                    }
                    ]
                }
            ],
        }
    }
    // 点击函数
    clickShow(name,e){
        e.preventDefault();
        this.props.clickShow(name)
    }
    render() {
        return (
            <div id="fanyongdt" className="con">
                <div className="DT_floor">
                    <div className="explain fl">
                        <img src={this.state.data1[0].imgurl} width="260" height="327" />
                    </div>
                    <ul className="comm fl">
                        {
                            this.state.data1[1].goodlist.map((item, idx) => {
                                return (
                                    <li className={idx == 0 ? 'first' : ''} key={idx}>
                                        <div className="img">
                                            <img src={item.imgurl} alt="" width="188" height="154" />
                                        </div>
                                        <div className="tit">{item.tit}</div>
                                        <div className="info">
                                            <span>{item.money}</span>
                                            <button onClick={this.clickShow.bind(this,item.tit)}>申请</button>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="DT_floor">
                    <div className="explain fl">
                        <img src={this.state.data2[0].imgurl} width="260" height="327" />
                    </div>
                    <ul className="comm fl">
                        {
                            this.state.data2[1].goodlist.map((item, idx) => {
                                return (
                                    <li className={idx == 0 ? 'first' : ''} key={idx}>
                                        <div className="img">
                                            <img src={item.imgurl} alt="" width="188" height="154" />
                                        </div>
                                        <div className="tit">{item.tit}</div>
                                        <div className="info">
                                            <span>{item.money}</span>
                                            <button onClick={this.clickShow.bind(this,item.tit)}>申请</button>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="DT_floor DT_floor2">
                    <div className="explain fl">
                        <img src={this.state.data3[0].imgurl} width="260" height="327" />
                    </div>
                    <ul className="comm fl">
                        {
                            this.state.data3[1].goodlist.map((item,idx)=>{
                                return (
                                    <li className={idx == 0 ? 'first' : ''} key={idx}>
                                        <div className="img">
                                            <img src={item.imgurl} alt="" width="258" height="167" />
                                        </div>
                                        <div className="tit">{item.tit}</div>
                                        <div className="info">
                                            <span>{item.money}</span>
                                            <button onClick={this.clickShow.bind(this,item.tit)}>申请</button>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="DT_floor DT_floor2">
                    <div className="explain fl">
                        <img src={this.state.data4[0].imgurl} width="260" height="327" />
                    </div>
                    <ul className="comm fl">
                        {
                            this.state.data4[1].goodlist.map((item,idx)=>{
                                return (
                                    <li className={idx == 0 ? 'first' : ''} key={idx}>
                                        <div className="img">
                                            <img src={item.imgurl} alt="" width="258" height="167" />
                                        </div>
                                        <div className="tit">{item.tit}</div>
                                        <div className="info">
                                            <span>{item.money}</span>
                                            <button onClick={this.clickShow.bind(this,item.tit)}>申请</button>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div style={{height:'20px'}}></div>
                <Xsalert/>
            </div>
        )
    }
}
Fanyongdt=connect((state)=>{
    return {//这里的数据直接进props中
        clickAlert:state.clickAlert,
    }
},(dispatch)=>{
    return {
        // 封装一个点击的函数
        clickShow(name){
            dispatch({//点击之后出现的函数
                type:'CLICK-SHOW',
                payload:name,
            })
        }
    }
})(Fanyongdt);
export default Fanyongdt;