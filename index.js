#!/usr/bin/env node
 // 上面是hashbang固定写法
const {
  program
} = require('commander');

const helpOptions = require("./lib/core/help")

const createCommands = require("./lib/core/create")
// 导入版本
program.version(require('./package.json').version);

// 帮助选项
helpOptions();
// 创建指令
createCommands();

//显示版本号
program.parse(process.argv)




// console.log(program.dest);
