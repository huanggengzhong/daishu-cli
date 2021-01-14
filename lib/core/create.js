const {
  program
} = require('commander');

const {
  createProjectAction
} = require('./actions')


const createCommands = () => {
  program
    .command("create <project> [others...]") //固定写法
    .description("clone a repository into a folder")
    .action(createProjectAction); //回调函数参数:参数1是project,参数2是others
}
module.exports = createCommands
