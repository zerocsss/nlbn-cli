const path = require("path");
const mkdirp = require("mkdirp");
const inquirer = require('inquirer');
const download = require('download-git-repo');
const ora = require('ora');
const fs = require('fs-extra');

// import createAppDir from '../utils'

module.exports = function (name) {
  let questions = [
    {
      type: 'list',
      message: '请选择一种你想要的嗯哼😁',
      name: 'iframe',
      choices: [
        "React",
        "Vue2",
        "Vue3",
        "ReactNative",
        "Taro",
        "Electorn-vue",
        "Flutter"
      ],
      filter: function (val) { // 使用filter将回答变为小写
        return val.toLowerCase();
      }
    }];
  inquirer.prompt(questions)
    .then(answers => {
      console.log('day day up 选择的模板类型： ', answers)
      if (answers.iframe === 'react') {
        mkdirp(path.join(process.cwd(), name), function (err) {
          if (err) {
            console.error(err);
          } else {
            var spinner = ora('Wait...').start();
            download('zerocsss/react_ts_boilerplate', `${name}`, function (err) {
              if (err) {
                spinner.fail('err');
                console.log(err);
              } else {
                spinner.succeed('Success');
                process.exit()
              }
            })
          }
        });
      } else if (answers.iframe === 'vue2') {
        console.log('大哥，我这还没有, 要不你来一个')
      } else {
        console.log('是你想太多，话总这样说~')
      }
    })
};