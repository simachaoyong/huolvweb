import React, { Component } from 'react';
// 引入组件
import Xshouye from './shouye/index.js'
import Fanyongpt from './fanypt/fanypt.js';
import Details from './detail/detail.js';
import Fanyongdt from './fanyongdt/fanyongdt.js';
import Xsafe from './safe/safe.js';
// 引入sass文件
import '../sass/header.scss';
import '../sass/footer.scss';
import { Route, Switch, Redirect, NavLink, Link } from 'react-router-dom';
class Home extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                {
                    key: 0,
                    show: false,
                },
                {
                    id: 1,
                    show: false
                },
                {
                    id: 2,
                    show: false
                }
            ],
            floatshow: false
        }
    }
    // 移入
    moveOver(idx) {
        this.setState({
            data: this.state.data.map((item, i) => {
                if (i === idx) {
                    item.show = true;
                }
                return item;
            })
        })
    }
    // 移出
    moveOut(idx) {
        this.setState({
            data: this.state.data.map((item, i) => {
                if (i === idx) {
                    item.show = false;
                }
                return item;
            })
        })
    }
    // 点击出现右侧浮窗
    floatShow() {
        let floatshow = this.state.floatshow;
        floatshow = !floatshow;
        this.setState({
            floatshow,
        })
    }
    render() {
        return (
            <div id="container">
                {/* 头部内容 */}
                <div id="header">
                    <div className="header_t">
                        <div className="con clearfix">
                            <div className="lft_phonnum fl">
                                <span className="lft_con fl">服务热线:400-888-9974</span>
                                <ul className="fl lft_icon">
                                    <li onMouseOver={this.moveOver.bind(this, 0)} onMouseOut={this.moveOut.bind(this, 0)}>
                                        <i className={this.state.data[0].show ? 'tx_fxqq tx_ioc' : 'tx_fxqq'}></i>
                                        <div className="qqkf" style={{ display: this.state.data[0].show ? 'block' : 'none' }}>
                                            点击咨询qq客服
                                            <span></span>
                                        </div>
                                    </li>
                                    <li onMouseOver={this.moveOver.bind(this, 1)} onMouseOut={this.moveOut.bind(this, 1)}>
                                        <i className={this.state.data[1].show ? "wx_fxw wx_ioc" : "wx_fxw"}></i>
                                        <div className="codema" style={{ display: this.state.data[1].show ? 'block' : 'none' }}>
                                            <span></span>
                                            <img alt="" src="http://localhost:3000/images/shouye/huolvwangweixerweima.png" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="rt_phonnum fr">
                                <form className="fr">
                                    <input type="search" placeholder="请输入平台关键词" />
                                    <button></button>
                                </form>
                                <ul className="fr">
                                    <li>
                                        <a className="current" href="#">喊单直播间</a>
                                    </li>
                                    <li>
                                        <a href="#">火驴快讯</a>
                                    </li>
                                    <li>
                                        <a href="#">行业新闻</a>
                                    </li>
                                    <li>
                                        <a href="#">关于返佣网</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="header_b">
                        <div className="header_logo">
                            <NavLink to="/home/index">
                                <img alt="" src="http://localhost:3000/images/shouye/logo02.png" />
                            </NavLink><NavLink to="/home/index">
                                <img alt="" src="http://localhost:3000/images/shouye/yaoqingkaihu.gif" />
                            </NavLink>
                        </div>
                        <ul className="header_b_b fr">
                            <li>
                                <NavLink to="/home/index" activeStyle={{
                                    textDecoration: 'none',
                                }}>首页</NavLink>
                            </li>
                            <li onMouseOver={this.moveOver.bind(this, 2)} onMouseOut={this.moveOut.bind(this, 2)}>
                                <NavLink to="/home/fanyongpt" activeStyle={{
                                    textDecoration: 'none',
                                }}>返佣平台</NavLink>
                                <div className="yincangyu" style={{ display: this.state.data[2].show ? 'block' : 'none' }}>
                                    <b className="b1"></b>
                                    <ul className="nav_child">
                                        <li><NavLink to="/home/fanyongpt" activeStyle={{
                                            textDecoration: 'none',
                                        }}>白银平台</NavLink></li>
                                        <li><NavLink to="/home/fanyongpt" activeStyle={{
                                            textDecoration: 'none',
                                        }}>原油平台</NavLink> </li>
                                        <li><NavLink to="/home/fanyongpt" activeStyle={{
                                            textDecoration: 'none',
                                        }}>铜平台</NavLink></li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <i className="icon_hot"></i>
                                <NavLink to="/home/fanyongdt" activeStyle={{
                                    textDecoration: 'none',
                                }}>返佣殿堂</NavLink>
                            </li>
                            <li>
                                <a href="#">平台活动</a>
                            </li>
                            <li>
                                <a href="#">返佣学堂</a>
                            </li>
                            <li>
                            <NavLink to="/home/safe" activeStyle={{
                                    textDecoration: 'none',
                                }}>安全保障</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* 下面就需要放置路由相关的信息了 */}
                <Switch>
                    <Route path="/home/index" component={Xshouye} />
                    <Route path="/home/fanyongpt" component={Fanyongpt} />
                    <Route path="/home/details/:id" component={Details} />
                    <Route path="/home/safe" component={Xsafe} />
                    <Route path="/home/fanyongdt" component={Fanyongdt} />
                    {/* 这里在将/home再次重定向 */}
                    <Redirect from="/home" to="/home/index" />
                </Switch>
                {/* 底部相关的内容 */}
                <div id="footer">
                    <div className="m_index con clearfix">
                        <div className="ft_dl01 ft_con">
                            <a href="javascript:void(0);"><img src="http://localhost:3000/images/shouye/huoluwangbtn.png" /></a>
                        </div>
                        <div className="ft_dl02 ft_con">
                            <h3>客服热线</h3>
                            <p className="ft_rx">400-888-9974</p>
                            <h3>在线咨询</h3>
                            <p className="ft_zx">
                                <a href="javascript:void(0);"></a>
                                在线咨询：08:00 - 23:00</p>
                        </div>
                        <div className="ft_dl03 ft_con">
                            <img src="http://localhost:3000/images/shouye/erweimahahahah.png" />
                        </div>
                        <div className="ft_dl04 ft_con">
                            <ul>
                                <li><a href="javascript:void(0);">关于火驴返佣网</a></li>
                                <li><a href="javascript:void(0);">火驴返佣学堂</a></li>
                                <li><a href="javascript:void(0);">合作伙伴</a></li>
                                <li><a href="javascript:void(0);">工作环境</a></li>
                                <li><a href="javascript:void(0);">加入火驴返佣</a></li>
                                <li><a href="javascript:void(0);">商务合作</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>&copy;2013-2016  All Rights Reserved</p>
                        <p>
                            <NavLink to="/home/index" activeStyle={{
                                textDecoration: 'none',
                            }}>返佣网</NavLink> 第一平台
                        </p>
                        <p>皖ICP备13011007号</p>
                        <p>本站信息仅供投资者参考，不做为投资建议！</p>
                    </div>
                </div>
                {/* 右侧浮窗 */}
                <div id="floatContact">
                    <button onClick={this.floatShow.bind(this)} className={this.state.floatshow ? 'btn' : 'btn btn2'}>
                    </button>
                    {/* 详细的咨询内容 */}
                    <div className="floatbody" style={{ display: this.state.floatshow ? 'block' : 'none' }}>
                        <div className="tit"><i><img src="http://localhost:3000/images/shouye/floatcontact_icon_tel.png" width="40" height="40" /></i>客服电话</div>
                        <div className="tel">400-888-9974</div>
                        <div className="teltime">（周一到周五9:00-18:00）</div>
                        <div className="line"></div>
                        <div className="tit"><i><img src="http://localhost:3000/images/shouye/floatcontact_icon_qq.png" width="40" height="40" /></i>客服QQ</div>
                        <ul className="floatqq">
                            <li>
                                <a href="javascript:void(0);">平台咨询</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">平台开户1</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">平台开户2</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">平台代理</a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">返佣登记</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;