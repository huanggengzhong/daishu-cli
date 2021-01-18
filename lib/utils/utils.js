// 编译模板方法
let ejs = require('ejs');

// 输出模板方法
const ejsCompile=(templatePath,data={},options={})=>{
    return new Promise((resole,reject)=>{
        ejs.renderFile(templatePath,{data},options,function(err,str){
            if(err){
                reject(err);
                return
            }
            resole(str)
        })
    })
}