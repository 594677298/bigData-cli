#! /usr/bin/env node

const cmd = require('commander') // 交互
const chalk = require('chalk')// 颜色
const downGit = require('./src/downLoad') // 下载
const options = require('./src/options')

cmd.command('init').description('初始化模板').action(async (args) => {
  typeof args !== 'string' && (console.log(chalk.red('缺少必填参数')), process.exit(1))
  console.log(chalk.yellow('bjgData脚手架初始化模板\n'))
  // 填选项
  await options()
  // 拉取
  require('./src/bigdata-cli')()
  await downGit(args)
})
cmd.parse(process.argv)
