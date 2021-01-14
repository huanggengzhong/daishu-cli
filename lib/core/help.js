// help选项

const {
  program
} = require('commander');

const helpOptions = () => {
  program.option('-dai --daishu', "袋鼠命令")
  program.option('-d --dest', "目标文件夹,例如1:-d src/pages 例如2:daishu -d /src/components")
  program.option('-f --framework <framework>', "你的框架名称,例如:-f vue")
  // 上面也可以用下面这个监听来代替
  program.on('--help', function () {
    // console.log("这里也可以监听help命令");
  })
}
module.exports = helpOptions
