import env from './envConfig'
const openLog = `${env.log}`||false
const logLevel = `${env.logLevel}`||'debug'

let level = 1;
if(logLevel=='debug'){
  level = 1;
}else if(logLevel=='info'){
  level = 2;
}
else if(logLevel=='warn'){
  level = 3;
}else if(logLevel=='error'){
  level = 4;
}

module.exports = {
  debug:function(){
    if(!openLog) return;
    if(level>1) return;
    console.log(...arguments);
  },
  info :function(){
    if(!openLog) return;
    if(level>2) return;
    console.info(...arguments);
  },
  warn :function(){
    if(!openLog) return;
    if(level>3) return;
    console.warn(...arguments);
  },
  error :function(){
    if(!openLog) return;
    if(level>4) return;
    console.error(...arguments);
  },
  
}