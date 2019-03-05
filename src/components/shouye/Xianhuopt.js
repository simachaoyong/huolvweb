import React, { Component } from 'react';
import axios from 'axios';
import Xianhuoptr from './Xianhuoptr.js';
// 引入路由组件
import { NavLink } from 'react-router-dom';
import { Spin } from 'antd';
import 'antd/dist/antd.css';
class Xianhuopt extends Component {
    constructor() {
        super();
        this.state = {
            image: ['http://localhost:3000/images/shouye/zhenfupiwen.png', 'http://localhost:3000/images/shouye/yinhangtuoguan.png', 'http://localhost:3000/images/shouye/guoqikongu.png', 'http://localhost:3000/images/shouye/yongjinrifan.png'],
            data: [],
            loading:true,
        }
    }
    componentWillMount() {
        axios.get('http://localhost:3000/setting/findData', {
            params: {
                j_id: "",
                num: 4
            }
        }).then((data) => {
            this.setState({
                data: data.data,
                loading:false
            })
        }).catch((err) => {
            console.log(err);
        });
    }
    render() {
        // console.log(this.state.data);
        return (
            <div className="xianhuopt con">
                {/* 左边 */}
                <div className="pint_left fl">
                    <div className="pint_title"><span className="titlexianh">现货平台</span>&nbsp;&nbsp;<i className="xuzezhao">帮你选择最好的</i><NavLink to="/home/fanyongpt" className="genduo">+更多</NavLink></div>
                    <div className="ptcunt_zf">
                        <Spin spinning={this.state.loading} size="large">
                            <ul>
                                {
                                    this.state.data.map((item, idx) => {
                                        return (
                                            <li key={item.j_id}>
                                                <div className="lonsepiwen"><img src={this.state.image[idx]} width="206" height="230" alt="" /></div>
                                                <div className="jiaoyisemsg">
                                                    <div className="topsenm">
                                                        <div className="auto">
                                                            <div className="titl_minchen">
                                                                <i className="ioc"><NavLink to={`/home/details/${item.j_id}`} activeStyle={{
                                                                    textDecoration: 'none',
                                                                }}><img alt="" src={item.imgurl} width="40" height="40" /></NavLink></i>
                                                                <span className="til_name">
                                                                    <NavLink to={`/home/details/${item.j_id}`} activeStyle={{
                                                                        textDecoration: 'none',
                                                                    }}>{item.name}</NavLink>
                                                                </span>
                                                                <p className="jianjie">{item.pingwen}，多家银行支持</p>
                                                            </div>
                                                            <div className="jtby_ioc">
                                                                <span>白银</span>
                                                                <span>原油</span>
                                                                <span>铜</span>
                                                                <span>天然气</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="fybl_xianqin">
                                                        <div className="fybl_auto">
                                                            <div className="bljj tonyon fl">
                                                                <dl>
                                                                    <dt>返佣比例</dt>
                                                                    <dt>比例&nbsp;:&nbsp;<i className="numcharshf">成本60%</i></dt>
                                                                    <dd>返佣前&nbsp;:&nbsp;<i className="huiben">{parseInt(item.fanq)}</i>个点回本</dd>
                                                                    <dd>返佣后&nbsp;:&nbsp;<i className="huiben">{parseInt(item.fanh)}</i>个点回本</dd>
                                                                </dl>
                                                            </div>
                                                            <div className="kaihurenshu">
                                                                <div className="kaihur_auto">
                                                                    <div className="jdti "></div>
                                                                    <div className="kaihunum"><i className="num">3161人</i><i className="dbkhz">开户人数</i></div>
                                                                </div>
                                                            </div>
                                                            <div className="chakanxinq">
                                                                <dl>
                                                                    <dd>返佣时间&nbsp;:&nbsp;<i>每周一</i></dd>
                                                                    <dd>激活资金&nbsp;:&nbsp;<i>{item.zijin}</i></dd>
                                                                </dl>
                                                                <NavLink to={`/home/details/${item.j_id}`} activeStyle={{
                                                                        textDecoration: 'none',
                                                                    }} className="chakanxq">查看详情</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Spin>
                    </div>
                </div>
                {/* 右边 */}
                <Xianhuoptr />
            </div>
        )
    }
}
export default Xianhuopt;