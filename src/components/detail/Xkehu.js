import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
class Xkehu extends Component {
    constructor() {
        super();
        this.state = {
            comment: [],
            user:'',
            content:''
        }
    }
    componentWillMount(){
        axios.post('http://localhost:3000/users/insertcomment',qs.stringify({
            j_id:this.props.id,
        })).then((data)=>{
            // 拿到了评论的数据了
            this.setState({
                comment:data.data,
            })
        }).catch((err)=>{
            console.log(err);
        })
    }
    // 用户输入评论的相关内容
    changeComment(e){
        if(e.target.className=='nikename'){
            this.setState({
                user:e.target.value,
            })
        }else if(e.target.className=='pingjiacunt'){
            this.setState({
                content:e.target.value,
            })
        }
    }
    // 点击提交
    clickComment(e){
        // 点击的时候就要更新数据了
        e.preventDefault();
        if(this.state.user.trim().length==0 || this.state.content.trim().length==0){
            alert('请输入昵称或者评论内容');
            return;
        }
        axios.post('http://localhost:3000/users/insertcomment',qs.stringify({
            j_id:this.props.id,
            user:this.state.user.slice(0,5),
            conent:this.state.content.slice(0,70)
        })).then((data)=>{
            if(data.data.status=="success"){
                alert('您的评价成功，十分感谢');
                this.getComment(this.props.id);
                this.refs.user.value="";
                this.refs.pingjia.value="";
                this.refs.user.focus();
                this.setState({
                    user:'',
                    content:''
                })
            }

        }).catch((err)=>{
            console.log(err)
        })
    }
    // 评论成功后再次拿数据
    getComment(id){
        axios.post('http://localhost:3000/users/insertcomment',qs.stringify({
            j_id:id,
        })).then((data)=>{
            this.setState({
                comment:data.data,
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    // 数据更新触发的生命周期
    componentWillReceiveProps(nextprops){
        if(this.props.id!==nextprops.id){
            this.getComment(nextprops.id);
        }
    }
    render() {
        let { idx, id } = this.props;
        // 这里可以拿到id
        // console.log(this);
        return (
            <div style={{ display: idx == 3 ? 'block' : 'none' }} className="kuhudianping">
                {
                    (() => {
                        if (this.state.comment.length == 0) {
                            return (
                                <div className="hmyzwgg hmyzwggt">暂无评论</div>
                            )
                        } else {
                            return (
                                <div className="hmyzwgg">
                                    <div className="hmycontent">
                                        <ul className="content">
                                            {
                                                this.state.comment.map((item,idx)=>{
                                                    return (
                                                        <li key={idx}>
                                                <div className="fl contentimg">火</div>
                                                <div className="fl contenttxt">
                                                    <p className="contentnc"><i>昵称：</i>{item.user}</p>
                                                    <p className="contentcom"><i>内容：</i>{item.conent}</p>
                                                </div>
                                            </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>
                            )
                        }
                    })()
                }
                {/* 输入评论的内容 */}
                <div className="fabiaopinlun">
                    <div className="form_title">
                        <i className="fabiao">发表评论</i><i className="fujiang">(&nbsp;<em className="wujiaoxinghao">*</em>&nbsp;为必填项目&nbsp;)</i>
                    </div>
                    <div className="formbiaodpl">
                        <form>
                            <span className="pinluntitle"><em className="wujiaoxinghao">*</em>昵称</span>
                            <input type="text" className="nikename" onChange={this.changeComment.bind(this)} ref="user"></input>
                            <span className="pinluntitle"><em className="wujiaoxinghao">*</em>评价</span>
                            <textarea className="pingjiacunt" onChange={this.changeComment.bind(this)} ref="pingjia"></textarea>
                            <i className="youqintishi">请输入10-70个字</i>
                            <div className="tijiao">
                                <button onClick={this.clickComment.bind(this)}>发表评论</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Xkehu;