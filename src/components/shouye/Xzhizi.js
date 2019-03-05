import React,{Component} from 'react';
class Xzhizi extends Component{
    constructor(){
        super();
        this.state={
            data:[
                    {
                        imgurl:'http://localhost:3000/images/shouye/01.jpg',
                        opac:false
                    },
                    {
                        imgurl:'http://localhost:3000/images/shouye/02.jpg',
                        opac:false
                    },
                    {
                        imgurl:'http://localhost:3000/images/shouye/03.jpg',
                        opac:false
                    },
                    {
                        imgurl:'http://localhost:3000/images/shouye/04.jpg',
                        opac:false
                    },
                    {
                        imgurl:'http://localhost:3000/images/shouye/05.jpg',
                        opac:false
                    },
                    {
                        imgurl:'http://localhost:3000/images/shouye/06.jpg',
                        opac:false
                    },
                    {
                        imgurl:'http://localhost:3000/images/shouye/07.jpg',
                        opac:false
                    },
                    {
                        imgurl:'http://localhost:3000/images/shouye/08.jpg',
                        opac:false
                    },
                    {
                        imgurl:'http://localhost:3000/images/shouye/09.jpg',
                        opac:false
                    },
                    {
                        imgurl:'http://localhost:3000/images/shouye/010.jpg',
                        opac:false
                    },
                    {
                        imgurl:'http://localhost:3000/images/shouye/011.jpg',
                        opac:false
                    },
                    {
                        imgurl:'http://localhost:3000/images/shouye/012.jpg',
                        opac:false
                    }
                ]
        }
    }
    // 鼠标移入移出时的效果
    mouseOver(idx){
        let data=this.state.data;
        data.map((item,i)=>{
            item.opac=true;
            if(idx==i){
                item.opac=false;
            }
            return item
        })
        this.setState({
            data,
        })
    }
    // 鼠标移出时的效果
    mouseOut(){
        this.setState({
            data:this.state.data.map((item)=>{
                item.opac=false;
                return item;
            })
        })
    }
    render(){
        return (
            <div className="license">
                <h3 className="title">火驴返佣网金融牌照与资质</h3>
                <ul onMouseOut={this.mouseOut.bind(this)}>
                    {
                        this.state.data.map((item,idx)=>{
                            return (
                                <li className={item.opac?'opacity':''} key={idx}><img src={item.imgurl} alt="" onMouseOver={this.mouseOver.bind(this,idx)}/></li>
                            )
                        })
                    }
                    
                </ul>
            </div>
        )
    }
}
export default Xzhizi;