import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
import {NavLink} from 'react-router-dom';
class Xftbanner extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
    }
    componentWillMount() {
        axios.get('http://localhost:3000/setting/findData', {
            params: {
                j_id: '',
                num: 7
            }
        }).then((data) => {
            this.setState({
                data: data.data,
            })
        }).catch((err) => {
            console.log(err);
        });
    }
    // 所有组件完全完成渲染后执行的函数，这里可以拿到所有渲染完成后的节点
    componentDidUpdate(){//组件全部渲染完成后的生命周期
        // 计算出那个ul的宽度,点击的函数以及相关的函数在这里执行就行了
        let w=$(this.refs.csscontent).children().first('li').outerWidth(true);
        let length=$(this.refs.csscontent).children('li').length;
        $(this.refs.csscontent).width(w*length);
        this.scrollList();
        $(this.refs.csscontent).on('mouseover',()=>{
            clearInterval(this.timer);
        })
        $(this.refs.csscontent).on('mouseout',()=>{
            this.scrollList();
        })
    }
    // 滚动列表
    scrollList(){
        clearInterval(this.timer);
        this.timer=setInterval(()=>{
            $(this.refs.csscontent).animate({left:'-371px'},2000,function(){
                $(this).css({left:'0'}).find("li:first").appendTo(this);
            })
        },4000)
    }
    render() {
        // 加了下面这个代码后就不能拿到节点的相关信息了
        if (this.state.data.length == 0) {
            return (
                <div></div>
            )
        }
        return (
            <div className="ftbanner con">
                <div className="jxtiaoxuan">
                    <div className="women">我们只提供精心挑选的平台 </div>
                    <div className="gaobiaoz">高标准筛选&nbsp;|&nbsp;超低成本操作 </div>
                </div>
                <div className="btnshaix">
                    {/* <div className="leftbtn btncon" ref="leftbtn"></div>
                    <div className="rightbtn btncon" ref="rightbtn">
                    </div> */}
                    {/* 主体的图片部分 */}
                    <div className="btnlhjx">
                        <ul className="csscontent" ref="csscontent">
                            {
                                this.state.data.map((item, idx) => {
                                    return (
                                        <li key={item.j_id}>
                                            <div className="topbutui">
                                                <div className="topneiqianziti"><i className="bfb">面议</i><br />
                                                    返佣比例
                                    </div>
                                            </div>
                                            <div className="gonsi_tlt">
                                                <i className="ioc"><NavLink to={item.j_id} activeStyle={{
                                                    textDecoration: 'none',
                                                }}><img src={item.imgurl} width="50" height="50" /></NavLink></i><NavLink to={item.j_id} activeStyle={{
                                                    textDecoration: 'none',
                                                }}>{item.name}</NavLink>
                                            </div>
                                            <div className="fycb_tbl">
                                                <ul className="fycb_l fl">
                                                    <li className="fycb_lt">返佣后成本</li>
                                                    <li className="fycb_lb">{item.fanq}</li>
                                                </ul>
                                                <ul className="fycb_r fl">
                                                    <li className="fycb_lt">返佣周期</li>
                                                    <li className="fycb_lb">每周一</li>
                                                </ul>
                                            </div>
                                            <a href="javascript:void(0);" className="actfycb_tbl">立即开户</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Xftbanner;