'use strict'
const exec = require('child_process').exec
const projectUrl = 'https://github.com/594677298/bigData-cli.git'

module.exports = () => {
  console.log(' commander >>>>>> ')
  const cmdStr = 'git clone ' + projectUrl
  exec(cmdStr, (error, stdout, stderr) => {
    if (error) {
      console.log(error)
      process.exit()
    }
    console.log('pull成功')
    process.exit()
  })
}
