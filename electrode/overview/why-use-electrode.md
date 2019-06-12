# 为什么使用 Electrode？

> 如果你正在创建 通用 React/Node.js 应用，那么 Electrode 适合你。

在 [@WalmartLabs](http://www.walmartlabs.com/)，我们已经将 [walmart.com](http://walmart.com/) 转为 [Universal JavaScript](https://medium.com/@mjackson/universal-javascript-4761051b7ae9#.k3j9fruyn) 技术栈。

## 通用 JavaScript

通用 JavaScript 允许你在服务端与客户端使用同样的视图渲染逻辑，当一个用户请求一个页面，它会立马接收到由服务器端渲染完成的完整的 HTML 文档，而不需要等待客户端去加载并渲染它们，同时，它又能使得 Web 应用像移动应用一样，用户在点击某个链接之后，不再需要等待浏览器加载一个完整的新页面，而是由应用自身与响应用户的操作，加载数据，并在浏览器端完成接下来的渲染。

## 代码与用户界面的复用

我们在所有企业品牌应用中复用很多 React 组件，这表示任何一个企业的开发者都可以在数以千计的组件库中搜索别人提供的组件，阅读标准化的文档，查询示例，或者将自己的组件提供给他人使用，而所有的这些组件又共同遵循一致的标准、实践，这让开发者们不需要花费大把的时间在手工优化配置上。

## 服务端渲染与性能优化

我们每天为数以百万计的客户提供服务，React的服务器端渲染能帮助我们更好的进行搜索引擎优化。

## 快速开始与部署

我们没有时间去一次又一次创建应用结构、配置文件，创建 Docker 容器等，我们需要快速的开始一个新的项目，有着一致的结构与实践，并部署他们。

## 三大支柱

为了解决上面的这些问题，我们创造了 Electrode 平台，它由以下三大支柱组成：

To solve these problems, we created the Electrode platform. Electrode consists of three pillars: Electrode Core, Electrode Modules, and Electrode Tools.

**Electrode Core** 提供了一组模块，可以让我们开始一个简单、一致结构具遵循最佳实践的应用，当准备投入生产时，又可以帮助我们快速的将应用部署到不同的云服务平台。

**Electrode Modules** 通过添加如 [above the fold rendering](../chapter1/advanced/stand-alone-modules/above-the-fold-rendering.md)、[configuration management](../chapter1/advanced/stand-alone-modules/confippet.md) 和 [stateless cross-site request forgery protection](../chapter1/advanced/stand-alone-modules/stateless-csrf-validation.md) 等特性提升应用性能，这些模块可以直接在现有的应用中使用，并不一定要使用 Electrode Core。

**Electrode Tools** 帮助我们 [组织](../chapter1/advanced/powerful-electrode-tools/electrode-explorer.md) 可复用的组件， [优化 JavaScript bundles 尺寸](../chapter1/advanced/powerful-electrode-tools/electrify.md)，就像 Modules一样，这些工具可以在任何一个已有的项目中使用。

## 对未来的投资

[Electrode](https://github.com/electrode-io) 就像我们在持续解决 [@WalmartLabs](http://www.walmartlabs.com/) 遇到的问题一样，也会一直被改进和优化。未来将增强包括如 [响应式Web应用功能](https://developers.google.com/web/progressive-web-apps/) 在内的功能、以及提供更好的性能。
