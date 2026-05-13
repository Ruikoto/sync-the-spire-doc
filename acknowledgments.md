# 鸣谢

Sync the Spire 的开发参考了多个优秀的开源项目，向作者们表示感谢。

## 设计与组件

### [animal-island-ui](https://github.com/guokaigdg/animal-island-ui)

> **License:** MIT
>
> Animal Crossing 风格的 React 组件库。Sync the Spire 的 "**岛屿**" 主题（设置 → 外观 → 岛屿）的配色、圆角、按钮浮雕、自定义下拉面板等视觉与交互细节，参考自该项目的设计 token 与组件实现。

我们没有直接引入它的代码，但其 [`src/styles/default.less`](https://github.com/guokaigdg/animal-island-ui/blob/main/src/styles/default.less) 中定义的暖色调 token、`box-shadow` 风格与"按下产生位移"的交互模式，是岛屿主题的灵感来源。

---

如果你也在做 Mod 工具或 Git-based 同步工具，遇到了关于 Git 操作、WebView2 集成或类似设计系统的问题，欢迎在 [GitHub Issues](https://github.com/Ruikoto/sync-the-spire/issues) 交流。
