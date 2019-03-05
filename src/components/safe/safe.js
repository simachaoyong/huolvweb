import React, { Component } from 'react';
import '../../sass/safe.scss';
class Xsafe extends Component {
    render() {
        return (
            <div id="safe">
                <div className="safebottom">
                </div>
                <div className="banner"></div>
                <div className="safecontent con">
                    <div className="safetit">
                        <i>01</i>
                        产品保障：投资产品“低”风险
                    </div>
                    <div className="dContent boxShadow c1">
                        <div className="detail">
                            <p>
                                <b>所有合作产品均有正规公司提供</b><br />
                                符合国家法律法规，均正规可查。保障每一个理财产品合法合规，业界唯一
                            </p>
                        </div>
                        <div className="fl summary">
                            <b className="fz38">高保障</b>
                            <b className="fz60">低风险</b>
                            <b className="fz32">正规可查</b>
                            <img src="http://localhost:3000/images/shouye/c1img.png" alt="" />
                            <i className="bkImg"></i>
                        </div>
                    </div>
                    <div className="safetit">
                        <i>02</i>
                        监管保障：实名认证、内控监管
                    </div>
                    <div className="dContent boxShadow c2">
                        <div className="fl summary">
                            <b className="fz38">实名认证</b>
                            <b className="fz60">实施监督</b>
                            <b className="fz32">稽查</b>
                            <img src="http://localhost:3000/images/shouye/c1img.png" alt="" />
                            <i className="bkImg"></i>
                        </div>
                        <div className="detail">
                            <p><b>合作公司、经纪人全部实名认证，确保问责到人。</b></p>
                            <p> 火驴网是第一家设立内部稽查部门并公布举报电话的平台，从内部严控由于工作人员原因对合作商及投资客造成的损失。平台监督电话：0551-62872031 </p>
                        </div>
                    </div>
                    <div className="safetit">
                        <i>03</i>
                        透明保障：全网唯一极致透明
                    </div>
                    <div className="dContent boxShadow c3">
                        <div className="detail">
                            <p>
                                <b>理财产品所有信息都在网站详细披露， 每年十月一日开放日，火驴网金融网邀请投资者一起实地考察合作商</b>
                                真正阳光下的理财平台，安全放心！
                            </p>
                        </div>
                        <div className="fl summary">
                            <b className="fz38">产品透明</b>
                            <b className="fz60">实地考察</b>
                            <b className="fz32">放心</b>
                            <img src="http://localhost:3000/images/shouye/c1img.png" alt="" />
                            <i className="bkImg"></i>
                        </div>
                    </div>
                    <div className="safetit">
                        <i>04</i>
                        法律保障：专业第三方律所深度合作
                    </div>
                    <div className="dContent boxShadow c4 c2">
                        <div className="fl summary">
                            <b className="fz38">合法合规</b>
                            <b className="fz60">专业咨询</b>
                            <b className="fz32">第三方</b>
                            <img src="http://localhost:3000/images/shouye/c1img.png" alt="" />
                            <i className="bkImg"></i>
                        </div>
                        <div className="detail">
                            <p><b>独立专业第三方律师事务所全程监督理财产品。
确保每一款理财产品绝对让您放心。</b></p>
                        </div>
                    </div>
                    <div className="safetit">
                        <i>05</i>
                        资金保障：国有银行进行资金监管
                    </div>
                    <div className="dContent boxShadow c1 c5">
                        <div className="detail">
                            <p>
                                <b>火驴网金融网理财项目全部由国有银行100%资金监管</b><br />
                                我们绝不允许第三方触碰。
                            </p>
                        </div>
                        <div className="fl summary">
                            <b className="fz38">资金监管</b>
                            <b className="fz60">零接触</b>
                            <b className="fz32">安全</b>
                            <img src="http://localhost:3000/images/shouye/c1img.png" alt="" />
                            <i className="bkImg"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Xsafe;