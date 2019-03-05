import React,{Component} from 'react';
import Xbanner from './Xbanner.js';
import Xlist from './Xlist.js';
import Xianhuopt from './Xianhuopt.js';
import Xzhizi from './Xzhizi.js';
import Xnews from './Xnews.js';
import Xlink from './Xlink.js';
import '../../sass/Xcontainer.scss';
class Xshouye extends Component{
    render(){
        return (
            <div className="container">
                <Xbanner />
                <Xlist />
                <Xianhuopt />
                <Xzhizi />
                <Xnews />
                <Xlink />
            </div>
        )
    }
}
export default Xshouye;