#!/usr/bin/env node
 // 上面是hashbang固定写法


const {
  program
} = require('commander');

program.version(require('./package.json').version);

program.parse(process.argv) //显示版本号
