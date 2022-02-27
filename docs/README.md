---
sidebar: "auto"
home: true
tags:
  - javascript
  - promise
---

### promise 总结

[[toc]]

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

<!-- more -->

- promise 属于宏任务

### Badge <Badge text="beta" type="warning"/> <Badge text="默认主题"/>

```javascript
├── global-components
│ └── xxx.vue
├── components
│ └── xxx.vue
├── layouts
│ ├── Layout.vue (Mandatory)
│ └── 404.vue
├── styles
│ ├── index.styl
│ └── palette.styl
├── templates
│ ├── dev.html
│ └── ssr.html
├── index.js
├── enhanceApp.js
└── package.json
```

::: v-pre
`{{ This will be displayed as-is }}`
:::

:tada: :100:

::: tip
这是一个提示
:::

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码

```js
console.log("你好，VuePress！");
```

:::

<!-- more -->

- promise 构造函数是同步，而 then 是异步的

  ```javascript {4}
  console.log("a");
  new Promise(() => {
    console.log("b");
  });
  console.log("c");
  // 执行结果是a,b,c
  ```

- promise 状态不可逆

- `then|catch|return`出去的数值会被后面的**then**或者**catch**接受（我们可以利用此特性，来进行链式调用）

- promise 无论返回什么，都会被封装的成 **promise** 对象，即使返回一个对象

- 使用 then 进行接收，如果里面不是函数，会发生穿透

- promise 对象中的 resolve 或者 reject 一个**promise**对象，那么前一个 promise 会影响后面一个 promise

### es7 的 async

1. async 函数会返回一个 promise 函数
2. return 错误会让返回 promise 对象变为 reject
3. 一般来说 **await** 后面的值是一个 promise
4. 内部如果**await** 多个**promise**，则会等待所有**promise**执行完成才会执行**then**

::: slot footer
MIT Licensed | Copyright © 2018-present [Evan You](https://github.com/yyx990803)
:::
