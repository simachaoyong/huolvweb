import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
// 引入样式
import '../../sass/fanypt.scss';
import { Spin } from 'antd';
import 'antd/dist/antd.css';
// 引入弹窗
import Xalert from '../Xalert.js';
// 引入connect便于拿到数据
import {connect} from 'react-redux';
class Fanyongpt extends Component {
    constructor() {
        super();
        this.state = {
            ptlist: [],
            pageArr: [],
            currentPage: 1,
            currentshow: -1,
            loading:true
        }
    }
    // 发送ajax请求
    componentWillMount() {
        this.requestFn(1);
    }
    // 封装请求函数
    requestFn(idx) {
        // 传一个每页的平台数，得到的数据是页码数
        axios.get('http://localhost:3000/setting/listData', {
            params: {
                j_id: "",
                // 每页需要的平台数
                num: 10,
                // 页码
                pagecurrent: idx
            }
        }).then((data) => {
            this.setState({
                ptlist: data.data.data,
                pageArr: data.data.pageArr,
                loading:false
            })
        }).catch((err) => {
            console.log(err);
        });
    }
    // 封装点击函数
    clickPage(idx) {
        this.requestFn(idx);
        this.setState({
            currentPage: idx,
        })
    }
    // 点击上一页
    prevFn() {
        let currentPage = this.state.currentPage;
        if (currentPage == 1) {
            return;
        }
        currentPage--;
        this.requestFn(currentPage);
        this.setState({
            currentPage,
        })
    }
    // 当点击下一页时
    nextFn() {
        let currentPage = this.state.currentPage;
        let totalPage = this.state.pageArr.length;
        if (currentPage == totalPage) {
            return;
        }
        currentPage++;
        this.requestFn(currentPage);
        this.setState({
            currentPage,
        })
    }
    // 移入移出
    mouseOverfn(idx) {
        this.setState({
            currentshow: idx,
        })
    }
    mouseOutfn() {
        this.setState({
            currentshow: -1,
        })
    }
    // 点击体验模拟
    clickShow(name,e){
        e.preventDefault();
        this.props.clickShow(name);
    }
    render() {
        return (
            <div id="fanypt">
                <div className="fanypt_img">
                    <div className="w1920">
                        <img src="http://localhost:3000/images/shouye/20150923110440_33388.jpg" width="1920" height="224" />
                    </div>
                </div>
                {/* 平台展示 */}
                <div className="prc_platform con">
                    <ul className="prc_tit">
                        <li className="plat_all">
                            <div className="nei1">全部平台</div></li>
                        <li className="plat_baiyin"><div className="nei2">白银平台</div></li>
                        <li className="plat_yuanyou"><div className="nei3">原油平台</div></li>
                        <li className="plat_tong"><div className="nei4">铜平台</div></li>
                        <li className="plat_dazong"><div >大宗平台</div></li>
                    </ul>
                </div>
                {/* 平台列表 */}
                <div className="plat_alllist con">
                    <Spin spinning={this.state.loading} size="large">
                        <ul>
                            {
                                this.state.ptlist.map((item, idx) => {
                                    return (
                                        <li key={item.j_id}>
                                            <div className="ls_cunt">
                                                <div className="gonsi_ioc_log fl">
                                                    <NavLink to={`/home/details/${item.j_id}`} activeStyle={{
                                                        textDecoration: 'none',
                                                    }}>
                                                        <img src={item.imgurl} alt="" width="178" height="178" />
                                                    </NavLink>
                                                    <div className="fdhoohlw"></div>
                                                </div>
                                                <div className="gonsi_msg_tbe fl">
                                                    <div className="gonsimesg fl">
                                                        <h3>
                                                            <NavLink to={`/home/details/${item.j_id}`} activeStyle={{
                                                                textDecoration: 'none',
                                                            }}>{item.name}</NavLink>
                                                        </h3>
                                                        <div className=" gon_con">
                                                            <p className="fl">评分星级：</p>
                                                            <s className="fl gon_del">
                                                                <i></i><i></i><i></i><i></i><i></i>
                                                            </s>
                                                        </div>
                                                        <div className="gon_con">
                                                            <p className="fl">交易品种：</p>
                                                            <span className="fl gon_del">{item.pingzhong}</span>
                                                        </div>
                                                        <div className="gon_con">
                                                            <p className="fl">激活资金：</p>
                                                            <span className="fl gon_del">{item.zijin}</span>
                                                        </div>
                                                        <div className="gon_con gon_brj">
                                                            <p className="fl">软件激活：</p>
                                                            <div className="fl">
                                                                <ul>
                                                                    <li className="gon_dn"></li>
                                                                    <li className="gon_az">
                                                                        <div>
                                                                            <img src="http://localhost:3000/images/shouye/20180227161932_94088.png" alt="" width="120" height="120" />
                                                                        </div>
                                                                    </li>
                                                                    <li className="gon_ios">
                                                                        <div>
                                                                            <img src="http://localhost:3000/images/shouye/20180327000638_60788.png" alt="" width="120" height="120" />
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="kuaisukaihu fl">
                                                        <button className="kuaisubtn">快速开户</button>
                                                        <div className=" gon_con">
                                                            <p className="fl">杠杆比例：</p>
                                                            <span className="fl gon_del">{item.ganggan}</span>
                                                        </div>
                                                        <div className=" gon_con">
                                                            <p className="fl">批文级别：</p>
                                                            <span className="fl gon_del">{item.pingwen}</span>
                                                        </div>
                                                        <div className=" gon_con">
                                                            <p className="fl">返佣比例：</p>
                                                            <span className="fl gon_del chengb">成本60%</span>
                                                        </div>
                                                        <div className=" gon_con gon_btime">
                                                            <p className="fl">返佣时间：</p>
                                                            <span className="fl gon_del">每周一</span>
                                                        </div>
                                                    </div>
                                                    <div className="tiyanmoni fl">
                                                        <div className="btnbox">
                                                            <a href="javascript:void(0);" className="tiyanfu" onClick={this.clickShow.bind(this,item.name)}>体验模拟</a>
                                                            <NavLink to={`/home/details/${item.j_id}`} activeStyle={{
                                                                textDecoration: 'none',
                                                            }}className="ptmesage">平台详情</NavLink>
                                                        </div>
                                                        <div className="gon_con">
                                                            <p className="fl">返佣前成本：</p>
                                                            <span className="fl gon_del">{item.fanq}</span>
                                                        </div>
                                                        <div className="gon_con">
                                                            <p className="fl">返佣后成本：</p>
                                                            <span className="fl gon_del">{item.fanh}</span>
                                                        </div>
                                                        <div className="gon_con">
                                                            <p className="fl">返佣金额：</p>
                                                            <span className="fl gon_del gonfj">{item.fany}</span>
                                                        </div>
                                                        <div className="gon_yh">
                                                            <p className="fl">合作银行：</p>
                                                            <div className="fl">
                                                                <b className="gs"></b>
                                                                <b className="jh"></b>
                                                                <b className="nh"></b>
                                                                <b className="zg"></b>
                                                                <b className="zs"></b>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="gonsi_suolvtu fl" onMouseOver={this.mouseOverfn.bind(this, idx)} onMouseOut={this.mouseOutfn.bind(this)}>
                                                    <div className="suolvtu_img">
                                                        <img src={item.imgurl2} alt="" width="183" height="123" />
                                                    </div>
                                                    <a href="javascript:void(0);"> 查看缩略图</a>
                                                    <div className="suolvtu_bimg" style={{ display: idx == this.state.currentshow ? 'block' : 'none' }}>
                                                        <img src={item.imgurl2} alt="" width="600" height="400" />
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
                {/* pages */}
                <div className="pages con">
                    <b className="prev" onClick={this.prevFn.bind(this)}>上一页</b>
                    {
                        this.state.pageArr.map((item) => {
                            return (
                                <span key={item} className={item == this.state.currentPage ? 'pages_num active' : 'pages_num'} onClick={this.clickPage.bind(this, item)}>{item}</span>
                            )
                        })
                    }
                    <b className="next" onClick={this.nextFn.bind(this)}>下一页</b>
                </div>
                <Xalert />
            </div>
        )
    }
}
Fanyongpt=connect((state)=>{
    return {
        clickAlert:state.clickAlert,
    }
},(dispatch)=>{
    return {
        //封装一个函数
        clickShow(name){
            dispatch({
                type:'CLICK-SHOW',
                payload:name,
            })
        }
    }
})(Fanyongpt);
export default Fanyongpt;