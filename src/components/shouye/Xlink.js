import React,{Component} from 'react';
class Xlink extends Component{
    constructor(){
        super();
        this.state={
            data:[
                '返佣网',
                '理财',
                '合肥贷款',
                'mt4平台下载',
                '期货返佣', 
                '成都贷款', 
                '返佣网', 
                '财经新闻网',
                '合肥小额贷款'
            ]
        }
    }
    render(){
        return (
            <div className="footlink con">
                <div className="friendlink">
                    <h3>友情连接</h3>
                    <ul className="boxbody">
                        {
                            this.state.data.map((item,idx)=>{
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
        )
    }
}
export default Xlink;