# GitHub 配置指南

本文介绍如何使用 GitHub 作为远程仓库，完成仓库创建、Token 认证和软件配置。

## 1. 创建远程仓库

1. 访问 [GitHub](https://github.com/) 注册并登录。

2. 点击右上角「**+**」→「**New repository**」。

   ![新建仓库](/images/git-remote-guide/github-1.png)

3. 填写仓库名称（如 `my-sts-mods`），选择 **Public** 或 **Private**，点击「**Create repository**」。
   - **Public** — 公开仓库，所有人可见。队友无需注册 GitHub 账号即可拉取，但上传仍需要账号和认证。
   - **Private** — 私密仓库，仅邀请的人可见。所有队友都必须注册账号并被邀请后才能使用。

   ![创建仓库](/images/git-remote-guide/github-2.png)

4. 仓库创建后，复制页面上的 HTTPS 地址（格式为 `https://github.com/用户名/仓库名.git`）。

   - **新建的空仓库**：在 Quick setup 区域选择「**HTTPS**」，点击右侧复制按钮。

     ![复制仓库地址（空仓库）](/images/git-remote-guide/github-3a.png)

   - **已有文件的仓库**：点击绿色「**Code**」按钮，在「**HTTPS**」标签页下复制地址。

     ![复制仓库地址（已有内容）](/images/git-remote-guide/github-3b.png)

## 2. 认证方式与 Token 配置

### 认证方式

| 方式 | 适用场景 | 说明 |
|------|---------|------|
| **HTTPS**（推荐） | 所有仓库 | 需要用户名 + Personal Access Token，可正常上传和拉取 |
| **SSH** | 所有仓库 | 已配置 SSH 密钥的用户可使用 |
| **免密** | 仅 Public 仓库只读 | 只能拉取，**无法上传**。适合只需要跟随他人存档、不需要自己上传的场景 |

::: tip 只想跟随朋友的存档？
如果你**不需要上传**，只想拉取朋友的 Public 仓库，可以选择「免密」，无需创建 Token — 跳过下方第 5–10 步，直接到[第 3 节](#_3-配置-sync-the-spire)即可。
:::

### 创建 Personal Access Token

使用 HTTPS 认证需要创建一个 Personal Access Token (PAT) 替代密码。

5. 点击右上角头像 →「**Settings**」。

   ![进入 Settings](/images/git-remote-guide/github-4.png)

6. 滚动到左侧栏最底部，点击「**Developer settings**」。

   ![Developer settings](/images/git-remote-guide/github-5.png)

7. 依次展开「**Personal access tokens**」→ 选择「**Tokens (classic)**」→ 点击「**Generate new token**」→「**Generate new token (classic)**」。

   ![生成 Token 入口](/images/git-remote-guide/github-6.png)

8. 填写以下信息：
   - **Note**：填写备注，如 `Sync the Spire`
   - **Expiration**：选择过期时间（建议 `No expiration`，或按需设置）
   - **Scopes**：勾选 `repo`（完整仓库访问权限）

   ![填写 Token 信息](/images/git-remote-guide/github-7.png)

9. 滚动到页面底部，点击「**Generate token**」生成 Token。

   ![Generate token](/images/git-remote-guide/github-8.png)

10. 生成成功后，立即复制显示的 Token（以 `ghp_` 开头的字符串）。

    ![复制 Token](/images/git-remote-guide/github-9.png)

::: danger Token 仅显示一次
生成后立即复制保存，关闭页面后将无法再查看。如果遗忘，需要重新生成。
:::

## 3. 配置 Sync the Spire

11. 打开 Sync the Spire，[创建一个工作区](/guide/workspace)后进入配置页面，依次填写：
    - **远程仓库 URL**：粘贴第 4 步复制的仓库地址
    - **用户昵称**：随意填写，用于区分不同设备/玩家
    - **鉴权方式**：选择「**HTTPS**」，然后填入你的 **GitHub 用户名**和刚才生成的 **Token**（作为密码）
    - **游戏安装路径** / **存档路径**：手动填写或点击「**自动查找**」
    - 确认无误后，点击「**保存并初始化**」

    ![Sync the Spire 配置页](/images/v2-setup-https.png)

## 4. 邀请队友

12. 进入仓库页面，点击顶部「**Settings**」→ 左侧「**Collaborators**」→「**Add people**」，输入朋友的 GitHub 用户名或邮箱发送邀请。

    ![邀请协作者](/images/git-remote-guide/github-10.png)

13. 朋友接受邀请后，需要各自创建自己的 PAT（重复第 5–10 步），然后在 Sync the Spire 中创建工作区，填入**同一个仓库地址** + **自己的**用户名和 Token 即可。
