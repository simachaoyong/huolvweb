import React, { Component } from 'react';
class Xnews extends Component {
    constructor(){
        super();
        this.state={
            data1:[
                "12月河南生产原煤857.09万吨 同比下降0.83%",
                "2018年铜产量减少15%至38.68万吨",
                "花旗：金属价格有望于2月中旬或3月触底反",
                "印尼计划今年出口大米！",
                "俄罗斯计划对谷物出口实施更严厉控制！",
                "Kutcho Copper CEO：基本面推动铜价走高是明确共识",
                "IEA：今年原油消费将继续增长",
                "波黑鲁皮斯多金属矿钻探见到厚富矿！"
            ],
            data2:[
                "郑糖上方空间较为有限！",
                "马来西亚1月1-20日棕榈油出口环比上升9.4%！",
                "1月21日伦敦金属交易所铜现货价格收于5951.5美元/吨",
                "日本12月铜线缆销售量同比减少1.4%至56,700吨",
                "1月21日伦敦金属交易所铜现货价格收于5951.5美元/吨",
                "2018年马里黄金产量增长23%！",
                "2018年12月份规模以上工业增加值增长5.7%",
                "2018年全国焦炭累计产量达到43820万吨"
            ]
        }
    }
    render() {
        return (
            <div className="butn_news con">
                <div className="mtbd_news fl">
                    <div className="mtbd_auto">
                        <div className="news_title">
                            行业新闻<a href="javascript:void(0);" target="_blank">+ 更多</a>
                        </div>
                        <div className="mtnews_list">
                            <div className="newsmt_ioc fl">
                                <a href="javascript:void(0);">
                                    <img src="http://localhost:3000/images/shouye/20190129105142_67036.png" alt="" width="135" height="93" />
                                </a>
                            </div>
                            <div className="content fr">
                                <div className="cuntwnz"><a href="javascript:void(0);" target="_blank" className="title">现货黄金或上涨至1326美元！</a>
                                    <p> 现货黄金或上涨至1326美元
      上周最后一个交易日，现货黄... <a href="javascript:void(0);" target="_blank" className="atst">[详情]</a></p>
                                </div>
                                <div className="datetime">2019-01-29 10:59:26</div>
                            </div>
                        </div>
                        <div className="mtnews_list">
                            <div className="newsmt_ioc fl">
                                <a href="javascript:void(0);">
                                    <img src="http://localhost:3000/images/shouye/20190129105142_67036.png" alt="" width="135" height="93" />
                                </a>
                            </div>
                            <div className="content fr">
                                <div className="cuntwnz"><a href="javascript:void(0);" target="_blank" className="title">现货黄金或上涨至1326美元！</a>
                                    <p> 现货黄金或上涨至1326美元
      上周最后一个交易日，现货黄... <a href="javascript:void(0);" target="_blank" className="atst">[详情]</a></p>
                                </div>
                                <div className="datetime">2019-01-29 10:59:26</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 网站公告 */}
                <div className="shbd_news fl">
                    <div className="mtbd_auto">
                        <div className="news_title">
                            网站公告<a href="javascript:void(0);" target="_blank">+ 更多</a>
                        </div>
                        <ul>
                            {
                                this.state.data1.map((item,idx)=>{
                                    return (
                                        <li key={idx}>
                                            <a href="javascript:void(0);">{item}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                {/* 火驴学堂 */}
                <div className="cjwt shbd_news fl">
                    <div className="cjwt_auto mtbd_auto">
                        <div className="news_title">
                            火驴学堂<a href="javascript:void(0);" target="_blank">+ 更多</a>
                        </div>
                        <ul>
                            {
                                this.state.data2.map((item,idx)=>{
                                    return (
                                        <li key={idx}>
                                            <a href="javascript:void(0);">{item}</a>
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
export default Xnews;