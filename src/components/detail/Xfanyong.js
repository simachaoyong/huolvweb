import React, { Component } from 'react';
class Xfanyong extends Component {
    constructor(){
        super();
        this.state={
            tabledata:[
                {
                    name:'张先生',
                    phone:'158****5239',
                    time:'昨天',
                    jihuo:'已激活',
                    rujin:'78000元'
                },
                {
                    name:'张先生',
                    phone:'158****5239',
                    time:'昨天',
                    jihuo:'已激活',
                    rujin:'78000元'
                },
                {
                    name:'张先生',
                    phone:'158****5239',
                    time:'昨天',
                    jihuo:'已激活',
                    rujin:'78000元'
                },
                {
                    name:'张先生',
                    phone:'158****5239',
                    time:'昨天',
                    jihuo:'已激活',
                    rujin:'78000元'
                },
                {
                    name:'张先生',
                    phone:'158****5239',
                    time:'昨天',
                    jihuo:'已激活',
                    rujin:'78000元'
                },
                {
                    name:'张先生',
                    phone:'158****5239',
                    time:'昨天',
                    jihuo:'已激活',
                    rujin:'78000元'
                },
                {
                    name:'张先生',
                    phone:'158****5239',
                    time:'昨天',
                    jihuo:'已激活',
                    rujin:'78000元'
                },
                {
                    name:'张先生',
                    phone:'158****5239',
                    time:'昨天',
                    jihuo:'已激活',
                    rujin:'78000元'
                },
                {
                    name:'张先生',
                    phone:'158****5239',
                    time:'昨天',
                    jihuo:'已激活',
                    rujin:'78000元'
                },
                {
                    name:'张先生',
                    phone:'158****5239',
                    time:'昨天',
                    jihuo:'已激活',
                    rujin:'78000元'
                },
                {
                    name:'张先生',
                    phone:'158****5239',
                    time:'昨天',
                    jihuo:'已激活',
                    rujin:'78000元'
                }
            ]
        }
    }
    render() {
        let { idx, data } = this.props;
        return (
            <div style={{ display: idx == 1 ? 'block' : 'none' }} className="fanyongxiangqin">
                <div className="jiao_title">
                    <i className="bishifu"></i>
                    <i className="titlejj">返佣前后交易成本对比</i>
                </div>
                <div className="fy_mesagesxk">
                    <ul>
                        <li>
                            <div className="fybl tonyon">
                                <i className="bl">面议</i>
                                <p className="xjie">每手交易返佣面议</p>
                            </div>
                            <div className="sqds tonyon">
                                专业服务投资者6年
                             </div>
                            <div className="zjfy">
                                <a href="javascript:void();" className="ljxq">了解详情</a>
                            </div>
                        </li>
                        <li style={{ margin: '0 30px 0 30px' }}>
                            <div className="fybl tonyon">
                                <i className="bl">省0元</i>
                                <p className="xjie">原成本50个点，现成本0个点</p>
                            </div>
                            <div className="sqds tonyon">
                                省下的钱都是您赚的
                             </div>
                            <div className="zjfy">
                                <a href="javascript:void();" className="ljxq">了解详情</a>
                            </div>
                        </li>
                        <li>
                            <div className="fybl tonyon">
                                <i className="bl">每周一</i>
                                <p className="xjie">每周一返还手续费</p>
                            </div>
                            <div className="sqds tonyon">
                                6年从未拖欠一天佣金
                             </div>
                            <div className="zjfy">
                                <a href="javascript:void();" className="ljxq">了解详情</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="jiao_title">
                    <i className="bishifu"></i>
                    <i className="titlejj">火驴网昨日开户名单（部分、{data[0].name}）</i>
                </div>
                <div className="zrkhmd">
                    <table>
                        <thead>
                            <tr>
                                <td className="dhs" height="60">姓名</td>
                                <td className="hhs">联系方式</td>
                                <td className="dhs">开户交易所</td>
                                <td className="hhs">开户时间</td>
                                <td className="hs">激活</td>
                                <td className="dhs">入金</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tabledata.map((item,idx)=>{
                                    return(
                                        <tr className={idx%2==0?'dsbsbj':'dehhs'} key={idx}>
                                            <td className="xlbj" height="62">{item.name}</td>
                                            <td className="ssbj">{item.phone}</td>
                                            <td className="xlbj">{data[0].name}</td>
                                            <td className="xlbj">{item.time}</td>
                                            <td className="ssbj zt">{item.jihuo}</td>
                                            <td className="xlbj">{item.rujin}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Xfanyong;