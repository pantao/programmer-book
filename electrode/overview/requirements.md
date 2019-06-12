# 必备条件

接下来将讨论如何配置你的开发环境以及如何将应用发布至线上。

## 在本地机器上开发

要生成与部署 Electrode 应用或者组件，确保你的开发环境已经包含了一下条件：

安装以下工具

1. [NodeJS LTS binary](https://nodejs.org/)

   - Electrode 直接使用了 `async/await`，所以至少需要安装 `Node 8` 或者以后的版本

   - 推荐使用如 [nvm](https://github.com/creationix/nvm#install-script) 这样的工具管理你的 Node 安装

2. [electrode-ignite] 与 [xclap-cli]

   - Electrode Ignite 帮助你启动 Electrode 开发环境

   - xclap-cli 添加全局任务运行命令 `clap`

   ```bash
   npm install -g electrode-ignite xclap-cli
   ```

   - 你可以直接运行  `ignite` 命令，然后得到一个可选菜单，或者直接执行命令参数

   - 下面是两个示例命令：
  
      - `ignite check-nodejs` - 验证 NodeJS 与 Npm 版本
      - `ignite generate-app` - 生成一个新的 Electrode React 应用

   - 执行 `ignite check-nodejs` 来验证 Node

### Headless Chrome

Headless chrome 将所有 Chromium 与 Blink 提供的现在 Web 功能引入命令行，它是一个完美的自动化测试工上人，同时为服务器环境提供了不需要可视化的UI渲染能力。

在 Electrode Archetype 应用与组件中，默认使用 Headless 作为自动化测试工具。对于 Chrome 浏览器，如果看到下面这样的消息，你可能需要升级你的浏览器：

> Headless mode is available on Mac and Linux in Chrome 59. Windows support will be available in Chrome 60. To check what version of Chrome you are running, open chrome://version.

## 在线部署

- 一个 [Heroku](https://signup.heroku.com/dc) 帐号 + [CLI tools](https://devcenter.heroku.com/articles/heroku-command-line)
- 一个 [GitHub](https://github.com/) 帐号

现在，就让我们开始 [构建第一个 Electrode 应用](../quick-start/start-with-app.md).

[yo]: http://yeoman.io/

[yeoman]: http://yeoman.io/

[xclap-cli]: https://www.npmjs.com/package/xclap-cli

[generator-electrode]: https://www.npmjs.com/package/generator-electrode

[electrode-ignite]: https://www.npmjs.com/package/electrode-ignite
