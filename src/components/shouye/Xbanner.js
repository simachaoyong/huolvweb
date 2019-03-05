import React, { Component } from 'react';
import 'antd/dist/antd.css';
import axios from 'axios';
// 引入ant
import { Carousel } from 'antd';
import qs from 'qs';
class Xbanner extends Component {
    constructor() {
        super();
        this.state = {
            inputTxt: '',
            inputNum: '',
            num:0,
            num2:0
        }
    }
    // 改变输入的内容
    changeUser(e) {
        if (e.target.className == 'input_txt input_user') {
            this.setState({
                inputTxt: e.target.value,
            })
        } else if (e.target.className == 'input_txt input_phone') {
            this.setState({
                inputNum: e.target.value,
            })
        }
    }
    //数据的累加的过程
    componentWillMount(){
        this.timer=setInterval(()=>{
            let num=this.state.num;
            let num2=this.state.num2;
            num+=12340034;
            num2+=120045;
            this.setState({
                num:num,
                num2:num2
            })
            if(num>=216280921){
                clearInterval(this.timer);
            }
        },50)
    }
    // 点击按钮的时候发送数据过去
    clickMessage(e) {
        e.preventDefault();
        if (this.state.inputTxt.trim().length == 0 || this.state.inputNum.trim().length == 0) {
            alert('您的姓名或联系方式不能为空');
            return;
        }
        if (/^1[3-8]\d{9}$/.test(this.state.inputNum)) {
            axios.post('http://localhost:3000/users/insertuser', qs.stringify(
                {
                    user: this.state.inputTxt.slice(0,4),
                    phone: this.state.inputNum
                }
            )).then((data) => {
                if(data.data.status=='success'){
                    alert('您的信息已经提交成功！十分感谢');
                    this.setState({
                        inputTxt:'',
                        inputNum:''
                    },()=>{
                        this.refs.inputtxt.focus();
                    })
                }
            }).catch((err) => {
                console.log(err);
            })
        }else{
            alert('请输入正确的电话号码');
            this.setState({
                inputTxt:'',
                inputNum:''
            },()=>{
                this.refs.inputtxt.focus();
            })
        }
    }
    render() {
        return (
            <div className="banner">
                <Carousel autoplay>
                    <div><img src="http://localhost:3000/images/shouye/20171211215950_82733.png" alt="" /></div>
                    <div><img src="http://localhost:3000/images/shouye/20171227143731_89875.jpg" alt="" /></div>
                </Carousel>
                <div className="usertable">
                    <form className="yuyueform">
                        <div className="title_wrap">预约开户</div>
                        <div className="input_wrap input_name">
                            <input type="text" className="input_txt input_user" ref="inputtxt" placeholder="姓名" onChange={this.changeUser.bind(this)} value={this.state.inputTxt} />
                        </div>
                        <div className="input_wrap input_phonenum">
                            <input ref="inputNum" type="text" className="input_txt input_phone" onChange={this.changeUser.bind(this)} placeholder="联系方式" value={this.state.inputNum} />
                        </div>
                        <div className="button_content">
                            <button onClick={this.clickMessage.bind(this)}>立即提交</button>
                        </div>
                    </form>
                </div>
                {/* 总计 */}
                <div className="total">
                    <div className="total_detail con">
                        <dl className="dl1">
                            <dt> 累计开户 </dt>
                            <dd> <span id="leijiKaihu">548061</span> 人 </dd>
                        </dl>
                        <dl className="dl2">
                            <dt> 累计返佣 </dt>
                            <dd> <span id="leijiFanyng">{this.state.num}</span> 元 </dd>
                        </dl>
                        <dl className="dl3">
                            <dt> 安全运营时间 </dt>
                            <dd> <span id="saft_year">8</span> 年 <span id="saft_day">6</span> 天 <span id="saft_hour">9</span> 时 <span id="saft_min">15</span> 分 <span id="saft_sec">53</span> 秒 </dd>
                        </dl>
                        <dl className="dl4">
                            <dt> 昨日返佣 </dt>
                            <dd><span id="zuoriFanyong">{this.state.num2}</span> 元 </dd>

                        </dl>
                    </div>
                </div>
            </div>
        )
    }
}
export default Xbanner;