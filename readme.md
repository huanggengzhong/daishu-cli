# 袋鼠前端脚手架

## 特色

- 常用的目录结构（你可以在此基础上修改自己的目录结构）;
- vue.config.js（配置了别名，你可以自行修改和更多配置）;
- 命令安装路由和配置，命令同时支持路由的动态加载;
- 命令安装 vuex 和配置，同时有动态加载 module 模块;
- axios 网络请求已二次封装;

### 首先,在电脑里全局安装

```js
npm install daishu-cli -g
```

### 创建项目命令

创建 vue 项目

```js
daishu create 项目名
```

创建 react 项目(后续支持)

```js
daishu create 项目名 -f vue
```

创建项目默认自动会安装和打开浏览器,脚手架使用的是 npm 安装,如果 npm 安装不成功可以手动安装

#### 手动安装依赖和运行(自动安装失败时可以选择这个手动安装)

```js
// 依次执行下面命令
cd 项目名
npm install
npm run serve
```

# 其它创建命令
未完待续
### 创建路由命令

### 创建组件命令
