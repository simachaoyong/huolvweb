import React,{Component} from 'react';
import '../sass/xsalert.scss';
import {connect} from 'react-redux';
import axios from 'axios';
import qs from 'qs';
class Xsalert extends Component{
    constructor(){
        super();
        this.state={
            user:'',
            phone:'',
            kaihupt:'',
            pingtaizh:''
        }
    }
    // 点击隐藏
    clickHidden(e){
        e.preventDefault();
        this.props.clickHidden();
    }
    // 双向数据绑定
    changeUser(e){
        if(e.target.name=='user'){
            this.setState({
                user:e.target.value,
            })
        }else if(e.target.name=='phone'){
            this.setState({
                phone:e.target.value,
            })
        }else if(e.target.name=='pingtai'){
            this.setState({
                kaihupt:e.target.value,
            })
        }else if(e.target.name=='pingtaizh'){
            this.setState({
                pingtaizh:e.target.value,
            })
        }
    }
    // 点击发送请求插入数据
    btnFanyongdt(name,e){
        e.preventDefault();
        if(this.state.user.trim().length==0 || this.state.phone.trim().length==0||this.state.kaihupt.trim().length==0||this.state.pingtaizh.trim().length==0){
            alert('请输入完整的信息，我们会第一时间为您解决！！');
            this.setState({
                user:'',
                phone:'',
                kaihupt:'',
                pingtaizh:''
            },()=>{
                this.refs.user.focus();
            })
            return;
        }
        if(/^1[3-8]\d{9}$/.test(this.state.phone)){
            axios.post('http://localhost:3000/users/fanyongdt',qs.stringify({
                user:this.state.user.slice(0,5),
                phone:this.state.phone,
                shenqing:name,
                kaihupt:this.state.kaihupt,
                pingtaizh:this.state.pingtaizh
            })).then((data)=>{
                if(data.data.status=='success'){
                    alert(`${name}申请提交成功，我们会尽快为您处理！！`);
                    this.setState({
                        user:'',
                        phone:'',
                        kaihupt:'',
                        pingtaizh:''
                    },()=>{
                        this.refs.user.focus();
                    })
                }
            }).catch((err)=>{
                console.log(err);
            })
        }
    }
    render(){
        let {alertshow,jiaoyisuo}=this.props.clickAlert;
        return (
            <div id="xsalert" style={{display:alertshow?'block':'none'}}>
                <div className="xsalert">
                    <div className="tit">
                    我要申请：{jiaoyisuo}
                        <span onClick={this.clickHidden.bind(this)}></span>
                    </div>
                    <div className="body">
                        <from>
                            <div className="usermessage">
                                <label className="fl">您的姓名：</label>
                                <input type="text" className="input_txt fl" name="user" placeholder="请输入2-5字中文姓名" value={this.state.user} onChange={this.changeUser.bind(this)} ref="user"/>
                            </div>
                            <div className="usermessage">
                                <label className="fl">手机号码：</label>
                                <input type="number" className="input_txt fl" name="phone" placeholder="请输入手机号码" value={this.state.phone} onChange={this.changeUser.bind(this)}/>
                            </div>
                            <div className="usermessage">
                                <label className="fl">开户平台：</label>
                                <input type="text" className="input_txt fl" name="pingtai" placeholder="请输入开户平台" value={this.state.kaihupt} onChange={this.changeUser.bind(this)}/>
                            </div>
                            <div className="usermessage">
                                <label className="fl">平台账号：</label>
                                <input type="number" className="input_txt fl" name="pingtaizh" placeholder="请输入平台账号" value={this.state.pingtaizh} onChange={this.changeUser.bind(this)}/>
                            </div>
                            <div className="btn">
                                <button onClick={this.btnFanyongdt.bind(this,jiaoyisuo)}>立即提交</button>
                            </div>
                        </from>
                    </div>
                </div>
            </div>
        )
    }
}
Xsalert=connect((state)=>{
    return {
        clickAlert:state.clickAlert,
    }
},(dispatch)=>{
    return {
        // 封装一个点击的函数
        clickHidden(){
            dispatch({//点击之后出现的函数
                type:'CLICK-HIDDEN',
            })
        }
    }
})(Xsalert)
export default Xsalert;