// 点击出现弹窗，以及点击弹窗消失
// 将相关的store数据池的内容导出来
import {combineReducers,createStore} from 'redux';
let data={
    alertshow:false,
    jiaoyisuo:''
}
let clickAlert=(state=data,action)=>{
    switch(action.type){//type是行为
        case 'CLICK-SHOW':
            return {
                ...state,//对对象进行结构
                alertshow:true,
                jiaoyisuo:action.payload
            }
        case 'CLICK-HIDDEN':
            return {
                ...state,
                alertshow:false,
            }
        default:
            return state;
    }
}//这个函数必须要返回一个值才行的
let rootReducer=combineReducers({
    clickAlert,
})
let store=createStore(rootReducer)
export default store;
