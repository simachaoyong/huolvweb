import React, { Component } from 'react';
import '../sass/xalert.scss';
import axios from 'axios';
import qs from 'qs';
// 引入connect便于拿到数据
import {connect} from 'react-redux';
class Xalert extends Component {
    constructor(){
        super();
        this.state={
            user:'',
            phone:''
        }
    }
    // 点击关闭弹窗
    clickHidden(e){
        e.preventDefault();
        this.props.clickHidden();
    }
    //双向数据绑定
    changeUser(e){
        if(e.target.className=='input_txt fl'){
            this.setState({
                user:e.target.value,
            })
        }else if(e.target.className=='input_txt fl input_phone'){
            this.setState({
                phone:e.target.value,
            })
        }
    }
    // 点击的时候发送axios请求
    clickUser(e){
        e.preventDefault();
        if(this.state.user.trim().length==0 || this.state.phone.trim().length==0){
            alert('请输入您的姓名和电话！！');
            this.setState({
                user:'',
                phone:''
            },()=>{
                this.refs.user.focus();
            })
            return;
        }
        if(/^1[3-8]\d{9}$/.test(this.state.phone)){
            axios.post('http://localhost:3000/users/monikaihu',qs.stringify({
                jiaoyisuo:this.props.clickAlert.jiaoyisuo,
                user:this.state.user,
                phone:this.state.phone
            })).then((data)=>{
                // console.log(data);
                if(data.data.status=='success'){
                    alert('您的信息已经提交成功，我们会尽快为您安排！！');
                    this.setState({
                        user:'',
                        phone:''
                    },()=>{
                        this.refs.user.focus();
                    });
                    this.props.clickHidden();
                }
            }).catch((err)=>{
                console.log()
            })
        }
    }
    render() {
        let {alertshow,jiaoyisuo}=this.props.clickAlert;
        return (
            <div id="alert" style={{display:alertshow?'block':'none'}}>
                <div className="alert">
                    <div className="header">
                        模拟号申请：{jiaoyisuo}
                        <span className="btnclose" onClick={this.clickHidden.bind(this)}></span>
                    </div>
                    <div className="body">
                        <div className="yuyueFormBox">
                            <form className="yuyueform">
                                <div className="tip_content">火驴网专业顾问将尽快与您联系</div>
                                <div className="input_content">
                                    <div className="input_wrap">
                                        <label className="fl">您的姓名：</label>
                                        <input type="text" className="input_txt fl" placeholder="请输入2-5字中文姓名" ref="user" value={this.state.user} onChange={this.changeUser.bind(this)}/>
                                    </div>
                                    <div className="input_wrap">
                                        <label className="fl">手机号码：</label>
                                        <input type="text" className="input_txt fl input_phone" placeholder="请输入您的手机号码" value={this.state.phone} onChange={this.changeUser.bind(this)}/>
                                    </div>
                                </div>
                                <div className="btn">
                                    <button onClick={this.clickUser.bind(this)}>立即提交</button>
                                </div>
                                <div className="tip2_content">(<b>特别声明：</b>您的信息只作为您自身理财时使用，不会泄露给他人)</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Xalert=connect((state)=>{
    return {
        clickAlert:state.clickAlert,
    }
},(dispatch)=>{
    return {
        clickHidden(){
            dispatch({
                type:'CLICK-HIDDEN',
            })
        }
    }
})(Xalert);
export default Xalert;