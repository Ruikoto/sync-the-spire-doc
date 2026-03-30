# GitHub 配置指南

本文介绍如何使用 GitHub 作为远程仓库，完成仓库创建、Token 认证和软件配置。

## 1. 创建远程仓库

1. 访问 [GitHub](https://github.com/) 注册并登录。

2. 点击右上角「**+**」→「**New repository**」。

<!-- TODO: 泡菜补截图 -->

3. 填写仓库名称（如 `my-sts-mods`），选择 **Public** 或 **Private**，点击「**Create repository**」。
   - **Public** — 所有人可见，认证方式可选「免密」或「HTTPS」
   - **Private** — 仅邀请的人可见，必须使用「HTTPS」或「SSH」认证

<!-- TODO: 泡菜补截图 -->

4. 仓库创建后，复制页面上的 HTTPS 地址（格式为 `https://github.com/用户名/仓库名.git`）。

## 2. 认证方式与 Token 配置

### 认证方式

| 方式 | 说明 |
|------|------|
| **免密** | 仅适用于 Public 仓库，推送时弹出浏览器授权 |
| **HTTPS**（推荐） | 适用于所有仓库，需要用户名 + Personal Access Token |
| **SSH** | 已配置 SSH 密钥的用户可使用 |

### 创建 Personal Access Token

如果使用 HTTPS 认证（推荐），需要创建一个 Personal Access Token (PAT) 替代密码。

::: tip 公开仓库 + 免密
如果你的仓库是 **Public**，可以跳过此步骤，直接使用「免密」认证方式。但私有仓库必须配置 Token。
:::

5. 点击右上角头像 →「**Settings**」→ 左侧栏最底部「**Developer settings**」→「**Personal access tokens**」→「**Tokens (classic)**」→「**Generate new token (classic)**」。

<!-- TODO: 泡菜补截图 -->

6. 填写以下信息：
   - **Note**：填写备注，如 `Sync the Spire`
   - **Expiration**：选择过期时间（建议 90 天或 No expiration）
   - **Scopes**：勾选 `repo`（完整仓库访问权限）

7. 点击「**Generate token**」，复制生成的 Token。

::: danger Token 仅显示一次
生成后立即复制保存，关闭页面后将无法再查看。如果遗忘，需要重新生成。
:::

## 3. 配置 Sync the Spire

8. 打开 Sync the Spire，将复制的仓库地址粘贴到「远程仓库 URL」输入框，填写昵称。

9. 认证方式选择「**HTTPS**」，填入你的 **GitHub 用户名**和刚才生成的 **Token**（作为密码）。

10. 填写或自动查找游戏路径和存档路径，点击「**保存并初始化**」。

## 4. 邀请队友

11. 进入仓库页面 →「**Settings**」→「**Collaborators**」→「**Add people**」，输入朋友的 GitHub 用户名发送邀请。

<!-- TODO: 泡菜补截图 -->

12. 朋友接受邀请后，需要各自创建自己的 PAT，然后在 Sync the Spire 中填入仓库地址 + 自己的用户名和 Token。
