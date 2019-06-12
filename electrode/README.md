# 了解 Electrode

![Electrode Logo](./graphics/logo-192x192.png)

> *注*：`Electrode` 是 **电极** 的意思。

## 构建通用的大型 React Web 应用

> @WalmartLabs 为了给 <http://www.walmart.com> 提供强有力的技术支撑，设计并创造了 Electrode，它为从小到大各种不同的 React 或者 NodeJS 应用，提供了完美的一致性、最佳实践以及现代技术的应用。Electrode 将重点放在了性能、组件重用以及简单的云部署上面，这使得你可以将更多的精力放在你真正应该关心的业务上面。

**只需要五分钟和一条命令，即可从无到有创建一个高度定制的 React 应用**：

![Hello from Electrode][hello-electrode]

## 开始

- 现在就想了解如何使用 Electrode App Generator 创建一个应用，请阅读 [创建 Electrode 应用](chapter1/quick-start/start-with-app.md)

- 想了解关于 Electrode 的所有信息，请访问 <http://www.electrode.io>

- 想了解 Electrode 所支持的功能以及技术详情，请访问 [什么是 Electrode？]

### 贡献代码

感觉 Electrode 对你的帮助很大？可以去[给它一个小星星][electrode main repo]

若在使用的过程中遇到任何问题，你也可以阅读 [贡献代码指引][contributing guide] 以了解如何 [提交一个 Pull Request][submitting a pr] 或 [报告一个问题][reporting an issue]。

## Packages

[Electrode 主库][Electrode main repo] 使用 [Lerna] 管理多个 Electrode 核心包。

### 应用原型

[electrode-archetype-react-app] 是一个 `npm` 的增强模块，通过它，我们可以很方便的在多个项目中，基于一个通用的模式创建具有一致性的开发体验，其本质上就是一个构建脚本，基于一个被设计好的项目模板，同时它还依赖于 [electrode-archetype-react-app-dev] 模块，你需要将其添加到 `devDependencies` 中。

### 组件原型

[electrode-archetype-react-component] 也是一个 `npm` 增强模块，其主要职责是创建可复用的 `React` 组件。

### Electrode Ignite

Electrode Ignite 可以帮助你快速的创建基于原型的通用的 React 应用或者组件，其服务端可以选择使用 `Hapi` 或者 `Express`。

想了解如何使用这些模块，请查阅 [开始 Electrode 应用之旅](./chapter1/quick-start/start-with-app.html).

## 简单应用

你可以在官方主库的 [`samples` 目录下](https://github.com/electrode-io/electrode/tree/master/samples) 阅读示例应用代码。

## 其它独立模块

除了原型和生成器之外，Electrode 还提供了一系列经过实践考验的企业级模块，这些模块共同为你提供了一个可用于开发、部署像 <http://www.walmart.com> 一样的应用程序。

- [Electrode Confippet](https://github.com/electrode-io/electrode-confippet)
- [Electrode Electrify](https://github.com/electrode-io/electrify)
- [Electrode CSRF JWT](https://github.com/electrode-io/electrode-csrf-jwt)
- [Electrode Redux Router Engine](https://github.com/electrode-io/electrode/tree/master/packages/electrode-redux-router-engine)
- [Electrode React SSR Caching](https://github.com/electrode-io/electrode-react-ssr-caching)
- [Above The Fold Only Server Render](https://github.com/electrode-io/above-the-fold-only-server-render)
- [Electrode Bundle Analyzer](https://github.com/electrode-io/electrode-bundle-analyzer)

### 通用 React Node 脚手架

[`samples/universal-react-node`](https://github.com/electrode-io/electrode/tree/master/samples/universal-react-node) 目录包含了一个简单的 Electrode 应用，它是直接由 Electrode 生成器生成的，要了解详情，可以直接阅读该示例的 [README](https://github.com/electrode-io/electrode/blob/master/samples/universal-react-node/README.md) 文件。

### 基于 [material-ui] 的通用 React Node 应用

你还可以在[`samples/universal-material-ui`](https://github.com/electrode-io/electrode/tree/master/samples/universal-material-ui) 下发现基于  [material-ui] 的 React 组件，详情请阅读[README](https://github.com/electrode-io/electrode/blob/master/samples/universal-material-ui/README.md) 文件。

## 其它示例

在 <https://github.com/electrode-samples> 下，还有更多其它的示例，你或许会想去看看。

## 版权

©️ 2018 WalmartLabs

Licensed under the [Apache License, Version 2.0].

[apache license, version 2.0]: https://www.apache.org/licenses/LICENSE-2.0
[electrode main repo]: https://github.com/electrode-io/electrode
[material-ui]: http://www.material-ui.com
[lerna]: https://lernajs.io/
[electrode-archetype-react-app]: https://github.com/electrode-io/electrode/tree/master/packages/electrode-archetype-react-app
[electrode-archetype-react-app-dev]: https://github.com/electrode-io/electrode/tree/master/packages/electrode-archetype-react-app-dev
[electrode-archetype-react-component]: https://github.com/electrode-io/electrode/tree/master/packages/electrode-archetype-react-component
[contributing guide]: CONTRIBUTING.md
[submitting a pr]: https://github.com/electrode-io/electrode/pulls
[reporting an issue]: https://github.com/electrode-io/electrode/issues
[what is electrode]: ./overview/what-is-electrode.md
[hello-electrode]: graphics/hello-electrode.png
