import React, { Component } from 'react';
import axios from 'axios';
// 引入jquery
import $ from 'jquery';
import 'antd/dist/antd.css';
// 引入ant
import { Carousel } from 'antd';
class Xianhuoptr extends Component {
    constructor(){
        super();
        this.state={
            data:[
                {
                    user:'张先生',
                    jiaoyisuo:'直达国际期货',
                     money:29800
                },
                {
                    user:'刘小姐',
                    jiaoyisuo:'民众国际期货',
                    money:1353
                },
                {
                    user:'柳先生',
                    jiaoyisuo:'浙江赤北商品交易中心',
                    money:1908
                },
                {
                    user:'蒋小姐',
                    jiaoyisuo:'西勃国际商品贸易中心',
                    money:6000
                },
                {
                    user:'钟小姐',
                    jiaoyisuo:'甘肃亿集金贵金属',
                    money:5300
                },
                {
                    user:'吴先生',
                    jiaoyisuo:'江西合晟商品交易中心',
                    money:3478
                },
                {
                    user:'蒋先生',
                    jiaoyisuo:'西远商品交易中心',
                    money:8967
                },
                {
                    user:'肖小姐',
                    jiaoyisuo:'新湖国际期货',
                    money:12000
                },
                {
                    user:'苗先生',
                    jiaoyisuo:'浙江弘裕大宗商品交易中心',
                    money:120456
                },
                {
                    user:'欧阳先生',
                    jiaoyisuo:'新华福岛能源交易中心',
                    money:13420
                },
                {
                    user:'卢先生',
                    jiaoyisuo:'远大国际期货',
                    money:17800
                },
                {
                    user:'张先生',
                    jiaoyisuo:'富源商品交易中心',
                    money:8000
                },
            ],
            data1:[
                "关于中晟大豆油换月的通知",
                "湖南华夏银都关于沥青提取日提醒的公告",
                "四川贵盛宝关于端午节放假的公告",
                "中晟大宗关于老软件下线的公告",
                "湖南银楼大宗关于端午节放假的公告",
                "吉林农产品关于五一假期交易时间调整的公告"
            ],
            
        }
    }
    componentDidMount(){
        setInterval(()=>{
            $(this.refs.anit).animate({top:'-35px'},1000,function(){
                $(this).css({top:'0'}).find("tr:first").appendTo(this);
            })
        },2000)
    }
    render() {
        return (
            <div className="pint_right fr">
                <div className="pint_title">现货活动</div>
                {/* banner */}
                <div className="banner_small">
                    <Carousel autoplay>
                        <div><img src="http://localhost:3000/images/shouye/20150918164051_33194.png" alt="" /></div>
                        <div><img src="http://localhost:3000/images/shouye/20150918164101_67617.png" alt="" /></div>
                    </Carousel>
                </div>
                <div className="gonggao">
                    <div className="gonggao_tit">
                        交易所公告
                    </div>
                    <div className="xianyuehhh">
                        <ul className="gong_list">
                            {
                                this.state.data1.map((item,idx)=>{
                                    return (
                                        <li key={idx}>
                                            <a href="javascript:void(0)" target="_blank">{item}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="hooyonjbang">
                    <div className="titleico"></div>
                    <div className="yjbang_list">
                        <table className="yjbang_list_tit">
                            <tbody>
                                <tr className="title">
                                    <td>姓名</td>
                                    <td align="center">交易所</td>
                                    <td align="right" style={{ paddingRight: '10px' }}>返佣金额</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="topmobile11">
                            <table ref="anit">
                                <tbody>
                                    {
                                        this.state.data.map((item,idx)=>{
                                            return (
                                                <tr key={idx}>
                                                    <td style={{width:'70px'}} align="center">{item.user}</td>
                                                    <td style={{width:'200px'}} align="center">{item.jiaoyisuo}</td>
                                                    <td className="jbi" align="left" style={{paddingLeft:'20px'}}><i className="iocimg">￥</i>{item.money}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Xianhuoptr;