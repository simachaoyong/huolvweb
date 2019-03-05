import React, { Component } from 'react';
import axios from 'axios';
import '../../sass/details.scss';
// 引入加载器
import { Spin, Carousel } from 'antd';
import 'antd/dist/antd.css';
import Xjieshao from './Xjieshao.js';
import Xfanyong from './Xfanyong.js';
import Xkaihu from './Xkaihu.js';
import Xkehu from './Xkehu.js';
import Xziliao from './Xziliao.js';
import Xgonggao from './Xgonggao.js';
import Xftbanner from './Xftbanner.js';
import Xalert from '../Xalert.js';
// 引入connect便于拿到数据
import {connect} from 'react-redux';
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loading: true,
            tit: [
                '交易所介绍',
                '返佣详情',
                '开户资料',
                '客户点评',
                '资料下载',
                '平台公告',
            ],
            college:[
                '郑糖上方空间较为有限！',
                '马来西亚1月1-20日棕榈油出口环比上升9.4%！',
                '1月21日伦敦金属交易所铜现货价格收于5951.5美元/吨',
                '日本12月铜线缆销售量同比减少1.4%至56,700吨',
                '1月21日伦敦金属交易所铜现货价格收于'
            ],
            currentIdx: 0,
        }
    }
    componentWillMount() {
        axios.get('http://localhost:3000/setting/findData', {
            params: {
                j_id: this.props.match.params.id
            }
        }).then((data) => {
            this.setState({
                data: data.data,
                loading: false
            })
        }).catch((err) => {
            console.log(err);
        });
    }
    // 生命周期改变
    componentWillReceiveProps(nextprops){
        if(this.props.match.params.id!==nextprops.match.params.id){
            axios.get('http://localhost:3000/setting/findData', {
            params: {
                j_id: nextprops.match.params.id
            }
        }).then((data) => {
            this.setState({
                data: data.data,
                loading: false
            })
        }).catch((err) => {
            console.log(err);
        });
        }
    }
    // 点击切换函数
    clickTab(idx) {
        this.setState({
            currentIdx: idx
        })
    }
    // 点击出现对应的弹窗
    clickShow(name,e){
        e.preventDefault();
        this.props.clickShow(name);
    }
    render() {
        if (this.state.data.length === 0) {
            return (
                <Spin spinning={this.state.loading} size="large">
                    <div></div>
                </Spin>
            )
        }
        return (
            <div id="details">
                <div className="top_mesg con">
                    <div className="main_cuntent_fl">
                        <div className="shangpiocimg fl">
                            <img alt="" src={this.state.data[0].imgurl} height="144" width="144" />
                        </div>
                        <div className="shangpinname fl">{this.state.data[0].name}</div>
                        <ul className="fl fan_del">
                            <li>
                                <div className="titl">返佣前成本</div>
                                <div className="dianqian">{this.state.data[0].fanq}</div>
                            </li>
                            <li>
                                <div className="titl">返佣金额</div>
                                <div className="dianqian">{this.state.data[0].fany}</div>
                            </li>
                            <li>
                                <div className="titl">返佣后成本</div>
                                <div className="dianqian">{this.state.data[0].fanh}</div>
                            </li>
                        </ul>
                        <div className="monikaihu fr">
                            <button className="shen_qian_mn" onClick={this.clickShow.bind(this,this.state.data[0].name)}>申请模拟</button>
                            <button className="shen_qian_kaihu">立即开户</button>
                        </div>
                    </div>
                </div>
                <div className="middle_show con clearfix">
                    {/* 左边 */}
                    <div className="middle_left fl">
                        <ul className="details">
                            {
                                this.state.tit.map((item, idx) => {
                                    return (
                                        <li className={this.state.currentIdx == idx ? 'onniwan' : ''} key={idx} onClick={this.clickTab.bind(this, idx)}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                        <div className="deta_soneiht">
                            {/* 交易所介绍 */}
                            <Xjieshao idx={this.state.currentIdx} data={this.state.data} />
                            {/* 返佣详情 */}
                            <Xfanyong idx={this.state.currentIdx} data={this.state.data} />
                            {/* 开户所需资料 */}
                            <Xkaihu idx={this.state.currentIdx} data={this.state.data} />
                            {/* 客户点评 */}
                            <Xkehu idx={this.state.currentIdx} data={this.state.data} id={this.props.match.params.id} />
                            {/* 资料下载 */}
                            <Xziliao idx={this.state.currentIdx} data={this.state.data} />
                            {/* 平台公告 */}
                            <Xgonggao idx={this.state.currentIdx} data={this.state.data} />
                        </div>
                    </div>
                    {/* 右边 */}
                    <div className="middle_right fr">
                        <div className="fyonp_tai">
                            <div className="cuntauto">
                                <div className="title_js">国内首家正规返佣平台</div>
                                <ul className="list_gejia">
                                    <li>省级正规平台，放心投资</li>
                                    <li>返佣最高100%，全额日返</li>
                                    <li>2分钟内响应，有问必答</li>
                                    <li>24小时行情指导，轻松获利</li>
                                </ul>
                            </div>
                        </div>
                        <div className="lbggaowei">
                            <div className="tlt">最热活动</div>
                            <div className="imgggwlb">
                                <Carousel autoplay>
                                    <div><img src="http://localhost:3000/images/shouye/20150921093908_29132.png" alt="" /></div>
                                    <div><img src="http://localhost:3000/images/shouye/20150921093856_91979.png" alt="" /></div>
                                </Carousel>
                            </div>
                        </div>
                        <div className="tupianggw">			<img src="http://localhost:3000/images/shouye/20150909090535_59732.png" width="330" height="176" />
                        </div>
                        <div className="hlxuetan">
                            <div className="xt_tlt">火驴学堂<a href="javascript:void(0);" target="_blank">+ 更多</a>
                            </div>
                            <ul className="xt_ljlist">
                                {
                                    this.state.college.map((item,idx)=>{
                                        return (
                                            <li key={idx} style={{borderBottom:idx==4?'none':'1px dashed #e1e1e1'}}>
                                                <a href="javascript:void(0);" target="_blank">{item}</a>
                                            </li>
                                        )
                                    })
                                }
                                
                            </ul>
                        </div>
                    </div>
                </div>
                {/* 下面的轮播图效果 */}
                <Xftbanner />
                <Xalert />
            </div>
        )
    }
}
Details=connect((state)=>{
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
})(Details);
export default Details;
