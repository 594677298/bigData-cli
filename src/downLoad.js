const downLoad = require('download-git-repo') // 下载
const ora = require('ora') // 选择问答
const url = '594677298/bigDataCli' // 包地址
const clone = false
const downGit = (name) => {
  const spinner = ora('正在拉取模板...')
  spinner.start()
  downLoad(url, name, {
    clone
  }, err => {
    spinner.stop()
    console.log(err || '项目创建成功')
    process.exit(1)
  })
}
module.exports = downGit
