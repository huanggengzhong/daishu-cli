const {
  promisify
} = require('util') //node内置的api 

const {
  vueRepo
} = require('../config/repo-config')
const dowload = promisify(require('download-git-repo')) //转成promise形式

const createProjectAction = async (project, others) => {
  // 1.下载仓库
  console.log("下载中...");
  await dowload(vueRepo, project, {
    clone: true
  }) //引入vue地址+项目名+全部克隆
  console.log("下载完成");

  // 2.
}

module.exports = {
  createProjectAction
}
