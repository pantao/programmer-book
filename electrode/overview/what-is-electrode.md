# 什么是 Electrode？

> Electrode 为从小到大各种不同的 React 或者 NodeJS 应用，提供了完美的一致性、最佳实践以及现代技术的应用。Electrode 将重点放在了性能、组件重用以及简单的云部署上面，这使得你可以将更多的精力放在你真正应该关心的业务上面。

## 核心：快速、简单、可扩展

Electrode 核心提供了一套标准的最佳实践的工具，让你快速构建一个大规模包含服务端渲染、方便部署的 React/Node.js 应用，当你的团队发展壮大至数百人时，也不必担心应用的开发体验。

Electrode 的核心是 [Electrode Archetype System](/docs/overview/what-are-archetypes.md)， 它规定了配置、文件结构以及工作流程的标准， 通过对组件、模块或者整个应用的标准化以及一致性要求，Electrode 的 Archetype 系统可帮助你构建可依赖、可扩展的大规模应用，同时还确实开发和部署的简洁。

Electrode 有两个主要的 archetypes ：

- **[Electrode Application Archetype]** 用于帮助你创建 React 应用

- **[Electrode Component Archetype]** 用于帮助你创建可复用的 React 组件

> 将你的 Electrode 应用部署到云上只需要几分钟的时间，阅读 [**快速指引**](../chapter1/quick-start/start-with-ignite.md) 了解更多。

## 功能

### Electrode Core

使用 Electrode 平台构建 React 应用时，你将获得一个开箱即用的程序，其默认配置是相对于最典型的场景而设计的，但如果你需要，也可以使用以下所有功能：

- 使用 ES6 和 JSX 构建 通用 React 应用程序所需的一切
- 支持构建和共享可重用的React组件
- 使用 [PostCSS] 进行模块样式设置
- 使用 [Mocha]、[Karma] 和 [PhantomJS] 或 [Chrome Headless] 编写和运行单元测试
- 针对 React 应用的高度优化的服务器端渲染
- 开箱即用构建渐进式 Web 应用程序
- 在生产模式下快速部署到 Heroku
- 一个简单标志即可将应用从 [Reeact] 切换为 [Inferno]
- 支持热加载
- 在 React 代码中 `import` 图片模块
- 多语言支持
- 根据 `NODE_ENV` 和可自定义的ENV管理应用程序配置
- 无状态跨站请求伪造（CSRF）保护
- 使用 Hapi，Express 或 Koa 的 NodeJS Web 服务器
- 用于 webpack 编译结果的 HTML 基础可视化报告工具

### 支持模块

我们还提供了以下功能模块以支持 Electrode 应用。

- [Webpack Isomorphic Loader] - 让 NodeJS 的 `require` 在 SSR 应用中理解如图片类文件的导入

- [Electrode-Redux-Router-Engine] - 一个基于 React-router 以及 Redux 服务器端的 [React] 路由与渲染引擎

- [Component Caching] - 为组件服务器端渲染提供缓存服务

- [Electrode Confippet] - 帮助构建基于 `NODE_ENV` 的 NodeJS 应用程序配置

- [Electrode-Server] - 基于 Hapi.js 的可配置的应用服务器

- [Electrify] - 分析 webpack 模块树的工具

- [Electrode-Docgen] - Electrode 框架的自定义元数据提取器，可自动化生成组件文档。

---

### 独立模块：作你所期望的优化

Electrode 提供了许多有用的模块来完成常见的任务和功能，不管是 [服务端渲染缓存](../chapter1/advanced/stand-alone-modules/server-side-render-caching-+-profiling.md) 还是 [灵活的配置管理](../chapter1/advanced/stand-alone-modules/confippet.md)，这些模块不只是 Electrode 的一部分，它们同样的还[可以被独立的在你已有的项目中使用](../chapter1/advanced/stand-alone-modules.md).

> 了解更多可以阅读 [**独立模块指引**](../chapter1/advanced/stand-alone-modules.md).

---

### 工具：为你已有应用赋能

Electrode 还有很多可以与其它构建平台一起使用的工具（当与 Electrode 使用时，它们会需要更少的配置），这些工具可以帮助你：

- 支持 [discovery of reusable components](../chapter1/advanced/powerful-electrode-tools/electrode-explorer.md)

- 优化你的 [JavaScript bundles](../chapter1/advanced/powerful-electrode-tools/electrify.md)

> 开始在你的项目中使用 [**Electrode Explorer** ](../chapter1/advanced/powerful-electrode-tools/electrode-explorer.md) 和 [**Electrify**](../chapter1/advanced/powerful-electrode-tools/electrify.md) 

## 使用与支持的技术

- [React]
- [Redux]
- [React Router]
- [PostCSS]
- [Webpack]
- [Babel]
- [ESLint]
- [Mocha]
- [Enzyme]
- [Yeoman]
- [Inferno]

[electrode-docgen]: https://github.com/electrode-io/electrode-docgen
[electrify]: https://github.com/electrode-io/electrify
[electrode-server]: https://github.com/electrode-io/electrode-server
[electrode confippet]: https://github.com/electrode-io/electrode-confippet
[component caching]: https://github.com/electrode-io/electrode-react-ssr-caching
[electrode-redux-router-engine]: https://github.com/electrode-io/electrode-redux-router-engine
[webpack isomorphic loader]: https://github.com/jchip/isomorphic-loader
[react]: https://facebook.github.io/react/index.html
[redux]: http://redux.js.org/docs/basics/UsageWithReact.html
[react router]: https://reacttraining.com/react-router/
[webpack]: https://webpack.github.io/docs/motivation.html
[babel]: https://babeljs.io/
[eslint]: http://eslint.org/
[mocha]: https://mochajs.org/
[enzyme]: https://github.com/airbnb/enzyme
[yeoman]: http://yeoman.io/
[karma]: https://karma-runner.github.io/1.0/index.html
[chrome headless]: https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md
[phantomjs]: http://phantomjs.org/
[postcss]: https://github.com/postcss/postcss
[electrode archetype system]: ../chapter1/quick-start/what-are-archetypes.md
[electrode component archetype]: https://github.com/electrode-io/electrode/tree/master/packages/electrode-archetype-react-component
[electrode application archetype]: https://github.com/electrode-io/electrode/tree/master/packages/electrode-archetype-react-app
[inferno]: https://infernojs.org/
