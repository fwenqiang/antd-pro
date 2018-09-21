import fetch from 'dva/fetch'
import { message } from 'antd'
const RESPONSE_STATUS_SUCCESS = '1'

class Result {
	constructor(data){
        console.log('result',data)
		if(RESPONSE_STATUS_SUCCESS === (data.RSP_HEAD && data.RSP_HEAD.TRAN_SUCCESS)){
			const payload = data.RSP_BODY||{} //.RSP_HEAD
			//sessionStorage.setItem('token',data.RSP_BODY.token)
            const token = payload.CONSOLE_USER_KEY||''
			// sessionStorage.setItem('CONSOLE_USER_KEY',token)
			for(const key in payload){
				if(Object.prototype.hasOwnProperty.call(payload,key)){
					this[key] = payload[key]
				}
				if({}.hasOwnProperty.call(payload,key)){
					this[key] = payload[key]
				}
			}
			this.success = true
		}else{
			this.success = false
			this.errorCode = data.RSP_HEAD.ERROR_CODE
			this.errorMsg = data.RSP_HEAD.ERROR_MESSAGE
		}
	}
}

function checkStatus(response){
	if(response.status >=200 && response.status < 300){
		return response
	}
	const error = new Error(response.statusText)
	error.response = response
	throw error
}

export default async function request(payload){
    let {url,data} = payload
    data = data||{}
    if(sessionStorage.getItem('CONSOLE_USER_KEY')==null){
        // console.log('aa='+sessionStorage.getItem('CONSOLE_USER_KEY'))
        data.CONSOLE_USER_KEY =''
    }else{
        // console.log('bb=='+sessionStorage.getItem('CONSOLE_USER_KEY'))
        data.CONSOLE_USER_KEY = sessionStorage.getItem('CONSOLE_USER_KEY')
    }
    console.log('request:'+url.split('/')[6],data)
	const reqMessage = encodeURIComponent(JSON.stringify(data))
	
	const options = {
		method : 'POST',
		headers : {
			Accept : 'application/json,text/plain,*/*',
			'Content-Type':'application/x-www-form-urlencoded',
		},
        mode: 'cors',
		body : `REQ_MESSAGE=${reqMessage}`,
	}
	
	return fetch(url,options).then(checkStatus).then(async (response)=>{
        // console.log('[result:'+url+']',response.json())
		return new Result(await response.json())
	}).catch((error)=>{
        // message.error('通讯出错，请检查网络是否连上')
		return new Result({
			RSP_HEAD:{
				ERROR_CODE : '发生错误',
				ERROR_MESSAGE :error,
			}
		})
	})
}