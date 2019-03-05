import React, { Component } from 'react';
class Xziliao extends Component{
    render(){
        let {idx}=this.props;
        return (
            <div style={{display:idx==4?'block':'none'}} className="ziliaoxiazai">
                <div className="jiao_title">
                    <i className="bishifu"></i>
                    <i className="titlejj">交易软件下载</i>
                </div>
                <ul className="jyruanjxz_uplod">
                    <li>
                        <div className="bg_sky_blue">
                            <div className="img">
                                <img src="http://localhost:3000/images/shouye/xiazai1.jpg" alt="" height="72" width="72"/>
                            </div>
                            <div className="name">Windows客户端</div>
                            <div className="btn_blank">
                                <a href="javascript:void(0);">立即下载</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="bg_dark_blue">
                            <div className="img">
                                <img src="http://localhost:3000/images/shouye/anzhuohaha.jpg" alt="" height="72" width="72"/>
                            </div>
                            <div className="name">扫二维码下载安卓客户端</div>
                            <div className="btn_blank">
                                <img src="http://localhost:3000/images/shouye/getqrcode.png" width="80" height="80"/>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="jiao_title">
                    <i className="bishifu"></i>
                    <i className="titlejj">其他相关资料下载</i>
                </div>
            </div>
        )
    }
}
export default Xziliao;