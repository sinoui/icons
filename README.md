# @sinoui/icons

[![npm version](https://img.shields.io/npm/v/@sinoui/icons)](https://www.npmjs.com/package/@sinoui/icons) [![downloads](https://img.shields.io/npm/dm/@sinoui/icons)](https://www.npmjs.com/package/@sinoui/icons)

@sinoui/icons 集成了[Material Design](https://material.io/resources/icons/?style=baseline)提供的 1100+个图标，均为 svg 格式图标。
[文档](https://sinoui.github.io/icons/)。

## 依赖安装

```shell
yarn add @sinoui/icons
```

## 简单示例

```tsx
import CloseIcon from '@sinoui/icons/Close';

const Demo = () => <CloseIcon />;
```

更多图标请在[官方文档](https://sinoui.github.io/icons)中查找。

## 本地开发

项目中有以下有用的命令。

### `yarn build:js`

编译脚本代码

### `yarn src:download`

下载图标

### `yarn src:genComp`

生成组件

### `yarn lint`

`yarn lint`会检查整个项目是否有代码错误、风格错误。

开启 vscode 的 eslint、prettier 插件，在使用 vscode 编码时，就会自动修正风格错误、提示语法错误。

### `yarn format`

`yarn format`可以自动调整整个项目的代码风格问题。

### 预览文档

```shell
yarn doc:dev
```

### 编译并打包文档

```shell
yarn doc:publish
```

### 发布文档

在发布文档之前，在`package.json`中配置好`homepage`，如下所示：

```json
{
  "homepage": "https://sinouiincubator.github.io/editable-data-table"
}
```

配置完之后就可以执行下面的命令行发布文档：

```shell
yarn doc:publish
```
