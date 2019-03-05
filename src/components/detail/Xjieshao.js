import React, { Component } from 'react';
class Xjieshao extends Component {
    render() {
        let { idx, data } = this.props;
        return (
            <div style={{ display: idx == 0 ? 'block' : 'none' }} className="jiaoyisuojis">
                <div className="minsjiao">
                    <div className="jiao_title">
                        <i className="bishifu"></i>
                        <i className="titlejj">交易所简介</i>
                    </div>
                    <div className="mes_cunt">
                        <div className="gonsiimgioc">
                            <img src={data[0].imgurl} width="220" height="220" /><i className="postopioc"></i>
                        </div>
                        <div className="cuntent_mesg">
                            <span style={{lineHeight:'2',fontSize:'16px'}}>公司自2011年成立以来，迅速成长为亚太地区领先的外盘期货经纪公司，客户保证金超过3亿美金。</span><br />
                            <br />
                            <span style={{lineHeight:'2',fontSize:'16px'}}>2016年公司获批经营环球证券经纪业务，美国、新加坡全资子公司相继成立，公司加速国际化扩张步伐。</span><br />
                            <br />
                            <span style={{lineHeight:'2',fontSize:'16px'}}>自主研发包括行情、交易、后台管理及清算的全套底层技术系统</span><br />
                            <span style={{lineHeight:'2',fontSize:'16px'}}>成功打破外资的行业垄断</span><br />
                            <span style={{lineHeight:'2',fontSize:'16px'}}>亦极大地促进了中资证券公司国际化背景下的</span><br />
                            <span style={{lineHeight:'2',fontSize:'16px'}}>金融流动性基础设施建设</span><br />
                        </div>
                    </div>
                    <div className="jcgj_pzdk">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="cname">交易所名称&nbsp;：</td>
                                    <td width="30%">{data[0].name}</td>
                                    <td className="cname">主 营 品 种&nbsp;：</td>
                                    <td width="40%">{data[0].pingzhong}</td>
                                </tr>
                                <tr>
                                    <td className="cname">成 立 时 间&nbsp;：</td>
                                    <td>{data[0].timer}</td>
                                    <td className="cname">政 府 批 文&nbsp;：</td>
                                    <td>{data[0].pingwen}</td>
                                </tr>
                                <tr>
                                    <td className="cname">杠 杆 比 例&nbsp;：</td>
                                    <td>{data[0].ganggan}</td>
                                    <td className="cname">点&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;差&nbsp;：</td>
                                    <td>{data[0].diancha}</td>
                                </tr>
                                <tr>
                                    <td className="cname">激 活 资 金&nbsp;：</td>
                                    <td>{data[0].zijin}</td>
                                    <td className="cname">开 户 方 式&nbsp;：</td>
                                    <td>{data[0].kaihu}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="jiao_title">
                        <i className="bishifu"></i>
                        <i className="titlejj">交易所品种合约标准</i>
                    </div>
                    <div className="tablst">
                        <img src={data[0].imgurl2} alt=""/>
                    </div>
                    <div className="jiao_title">
                        <i className="bishifu"></i>
                        <i className="titlejj">交易所软件介绍</i>
                    </div>
                </div>
            </div>
        )
    }
}
export default Xjieshao;