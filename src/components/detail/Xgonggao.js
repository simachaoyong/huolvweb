import React, { Component } from 'react';
class Xgonggao extends Component{
    render(){
        let {idx}=this.props;
        return (
            <div style={{display:idx==5?'block':'none'}} className="list_gongao">
                暂无公告
            </div>
        )
    }
}
export default Xgonggao;