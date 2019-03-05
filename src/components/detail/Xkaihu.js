import React, { Component } from 'react';
class Xkaihu extends Component {
    render() {
        let { idx } = this.props;
        return (
            <div style={{ display: idx == 2 ? 'block' : 'none' }} className="kaihusuoxuzil">
                <div className="jiao_title">
                    <i className="bishifu"></i>
                    <i className="titlejj">开户所需资料</i>
                </div>
                <div className="shengfenzzfm">
                    <img src="http://localhost:3000/images/shouye/shouchishengfenzzhaop.png" />
                </div>
                <div className="titleyinghang">
                    <i></i>交易所指定签约银行
                </div>
                <div className="gedayinghangioc">
                    <i className="bankioc back_1" title="工商银行"></i>
                    <i className="bankioc back_2" title="建设银行"></i>
                    <i className="bankioc back_3" title="农业银行"></i>
                    <i className="bankioc back_4" title="中国银行"></i>
                    <i className="bankioc back_5" title="招商银行"></i>
                    <i className="bankioc back_6" title="交通银行"></i>
                </div>
                <div className="jiao_title">
                    <i className="bishifu"></i>
                    <i className="titlejj">我要怎么开户</i>
                </div>
                <div className="woyaozenmekaihu">
                    <div className="fangfa">
                        <i>方式一：</i>联系在线客服，或者拨打免费开户热线进行开户
                    </div>
                    <div className="sishiddlianxidih">
                        <div className="phonnum tonyong"></div>
                        <a href="javascript:void(0);" target="_blank" className="zaixiankefu tonyong"></a>
                    </div>
                    <div className="fangfa fangfar">
                        <i>方式二：</i>本页面提交自己的开户申请
                    </div>
                    <a href="javascript:void(0);" target="_blank" className="actionkaihu">立即开户</a>
                </div>
            </div>
        )
    }
}
export default Xkaihu;