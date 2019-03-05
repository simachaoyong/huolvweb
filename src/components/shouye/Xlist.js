import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import { Spin } from 'antd';
import 'antd/dist/antd.css';
class Xlist extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading:true
        }
    }
    componentWillMount() {
        axios.get('http://localhost:3000/setting/findData', {
            params: {
                j_id: "",
                num: 3
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
    // 渲染函数
    render() {
        // console.log(this.state.data);
        return (
            <div className="jiaoyskh con">
                <Spin spinning={this.state.loading} size="large">
                    <ul>
                        {this.state.data.map((item,idx)=>{
                                return (
                                            <li key={item.j_id}>
                                    <div className="planlist">
                                        <div className="titl">
                                        <NavLink to={`/home/details/${item.j_id}`} activeStyle={{
                                                textDecoration: 'none',
                                            }}><i className="ioc_play"><img src={item.imgurl} width="40" height="40" /></i></NavLink><NavLink to={`/home/details/${item.j_id}`}  activeStyle={{
                                                textDecoration: 'none',
                                            }}>{item.name}</NavLink>
                                        </div>
                                        <div className="xxka">
                                            <span>
                                                <img src="http://localhost:3000/images/shouye/solo1.png" alt="" />
                                            </span><span>
                                                <img src="http://localhost:3000/images/shouye/solo2.png" alt="" />
                                            </span><span>
                                                <img src="http://localhost:3000/images/shouye/solo3.png" alt="" />
                                            </span><span>
                                                <img src="http://localhost:3000/images/shouye/solo4.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="fyqhsx">
                                            <ul>
                                                <li>
                                                    <a href="javascript:void(0);">每周返佣
                                                    </a>
                                                    <span>返佣前</span>
                                                </li>
                                                <li className="current">
                                                    <a href="javascript:void(0);">返佣成本60%
                                                    </a>
                                                    <span>返佣后</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="fanydianshu"><span className="fyq"><i>{parseInt(item.fanq)}</i> 个点</span><em className="xuxianpos"></em><span className="fyh"><i>{parseInt(item.fanh)}</i> 个点</span></div>
                                        <div className="chakanxq">
                                        <NavLink to={`/home/details/${item.j_id}`}  activeStyle={{
                                                textDecoration: 'none',
                                            }}>查看详情</NavLink>
                                        </div>
                                    </div>
                                </li>
                                )
                            })
                        }
                    </ul>
                </Spin>
            </div>
        )
    }
}
export default Xlist;