const path = require("path");
const mkdirp = require("mkdirp");
const inquirer = require("inquirer");
const download = require("download-git-repo");
const ora = require("ora");
const fs = require("fs-extra");

// import createAppDir from '../utils'

module.exports = function (name) {
  let questions = [
    {
      type: "list",
      message: "请选择一种你想要的嗯哼😁",
      name: "iframe",
      choices: [
        "React",
        "Vue3",
        "ReactNative",
        "Taro",
        "Electorn-vue",
        "Flutter",
      ],
      filter: function (val) {
        // 使用filter将回答变为小写
        return val.toLowerCase();
      },
    },
  ];
  inquirer.prompt(questions).then((answers) => {
    console.log("day day up 选择的模板类型： ", answers);
    if (answers.iframe === "react") {
      mkdirp(path.join(process.cwd(), name))
        .then((made) => {
          var spinner = ora("Wait...").start();
          download("zerocsss/react_ts_boilerplate", `${name}`, function (err) {
            if (err) {
              spinner.fail("err");
              console.log(err);
            } else {
              spinner.succeed("Success");
              process.exit();
            }
          });
        })
        .catch((err) => {
          console.error(err);
        });
    } else if (answers.iframe === "vue3") {
      mkdirp(path.join(process.cwd(), name))
        .then((made) => {
          var spinner = ora("Wait...").start();
          download("zerocsss/vue3_ts_boilerplate", `${name}`, function (err) {
            if (err) {
              spinner.fail("err");
              console.log(err);
            } else {
              spinner.succeed("Success");
              process.exit();
            }
          });
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      console.log("是你想太多，话总这样说~");
    }
  });
};
