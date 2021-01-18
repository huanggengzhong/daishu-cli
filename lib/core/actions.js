const {
  promisify
} = require('util') //node内置的api 

const terminal = require('../utils/terminal')

const {
  vueRepo
} = require('../config/repo-config')
const dowload = promisify(require('download-git-repo')) //转成promise形式

const open = require('open')//引入安装的open
const createProjectAction = async (project, others) => {
    // 1.下载仓库
    console.log("下载模板中...");
    await dowload(vueRepo, project, {
        clone: true
    }) //引入vue地址+项目名+全部克隆
    console.log("模板下载完成!");

    // 2.执行install
    console.log("正在用npm安装项目依赖...");
    const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'//process.platform是查询操作系统
    await terminal.spawn(npm, ['install'], { cwd: `./${project}` });
    console.log("安装项目依赖完成,正在运行项目和打开浏览器...");
    //   3.打开浏览器
    open('http://localhost:8080/')
    //4.运行项目
    await terminal.spawn(npm, ['run', 'serve'], { cwd: `./${project}` })
    console.log("项目运行成功!");
}

module.exports = {
    createProjectAction
}
