// const preUrl = 'http://localhost:8080/jfinal-admin/pintuan/console'
const env = 'pro'  //pro||dev
const configData = {
    pro:{
        preUrl:'http://120.78.68.118:8090/jfinal-admin-1.0/pintuan/console',
        log:false,
        logLevel:'error',  //debug,info,warn,error,
    },
    dev:{
        preUrl:'http://120.78.68.118:8090/jfinal-admin-1.0/pintuan/console',
        log:true,
        logLevel:'debug',  //debug,info,warn,error,
    },
}

module.exports = {
  preUrl: `${configData[env].preUrl}`,
  log:`${configData[env].log}`,
  logLevel:`${configData[env].logLevel}`,
}
