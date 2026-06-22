# NexaLearn AI Academy - 部署指南

## 项目结构

```
TRAE/
├── index.html              # 首页入口
├── assets/
│   ├── css/
│   │   └── theme.css       # 全局样式
│   ├── image_0_yi19x4.jpg  # 封面背景图
│   └── image_1_yi19x4.jpg  # 学习平台截图
└── pages/
    ├── 封面.html           # Hero页面
    ├── 公司介绍.html        # 关于我们
    ├── 核心服务.html        # 服务介绍
    ├── 学习平台.html        # 平台展示
    ├── 目标用户.html        # 用户画像
    ├── 数据与成果.html      # 数据展示
    └── 联系我们.html        # 联系表单
```

## 国内部署方案

### 方案一：阿里云 OSS + CDN（推荐）

#### 步骤：
1. 登录 [阿里云控制台](https://www.aliyun.com/)
2. 进入 **对象存储 OSS** 服务
3. 创建一个 **Bucket**（选择国内地域，如杭州、上海）
4. 设置 Bucket 为 **静态网站托管**模式
5. 上传整个 `TRAE` 文件夹内容到 Bucket 根目录
6. 配置 **CDN 加速**（开启国内加速节点）
7. 绑定自定义域名（可选）

### 方案二：腾讯云 COS + CDN

#### 步骤：
1. 登录 [腾讯云控制台](https://cloud.tencent.com/)
2. 进入 **对象存储 COS** 服务
3. 创建一个 **存储桶**（选择国内地域）
4. 开启 **静态网站**功能
5. 上传整个 `TRAE` 文件夹内容
6. 配置 **CDN 加速**
7. 绑定自定义域名（可选）

### 方案三：Gitee Pages（免费）

#### 步骤：
1. 登录 [Gitee](https://gitee.com/)
2. 创建一个新仓库
3. 上传 `TRAE` 文件夹内容到仓库
4. 进入仓库设置 -> **Gitee Pages**
5. 选择分支和目录，点击 **启动**

### 方案四：Coding Pages（腾讯旗下）

#### 步骤：
1. 登录 [Coding](https://coding.net/)
2. 创建一个新项目
3. 上传 `TRAE` 文件夹内容
4. 进入项目 -> **Pages 服务**
5. 配置静态网站并启动

## 部署注意事项

### 1. 确保域名备案
- 国内服务器/CDN 需要进行 ICP 备案
- 备案流程通常需要 5-20 个工作日
- 使用免费托管服务（如 Gitee Pages）可能已备案

### 2. CDN 配置
- 开启 HTTPS（推荐使用 Let's Encrypt 证书）
- 设置合理的缓存策略
- 配置 HTTPS 强制跳转

### 3. 资源优化
```bash
# 可选：压缩图片
npm install -g sharp-cli
sharp assets/image_0_yi19x4.jpg -o assets/image_0_yi19x4.jpg --quality 80
sharp assets/image_1_yi19x4.jpg -o assets/image_1_yi19x4.jpg --quality 80
```

## 本地测试

在部署前，可以先在本地测试：

```bash
# 启动本地开发服务器
cd TRAE
python3 -m http.server 8000

# 访问 http://localhost:8000
```

## 技术栈

- **静态 HTML** - 纯前端页面，无需后端
- **Tailwind CSS 4** - 响应式样式
- **Lucide Icons** - 图标库
- **Google Fonts** - 字体（通过 CDN）

## 页面说明

| 页面 | 路径 | 说明 |
|------|------|------|
| 首页 | / | 入口页面 |
| 封面 | /pages/封面.html | Hero 页面 |
| 关于我们 | /pages/公司介绍.html | 公司介绍 |
| 核心服务 | /pages/核心服务.html | 服务列表 |
| 学习平台 | /pages/学习平台.html | 平台展示 |
| 目标用户 | /pages/目标用户.html | 用户画像 |
| 数据成果 | /pages/数据与成果.html | 数据展示 |
| 联系我们 | /pages/联系我们.html | 联系表单 |

## 联系表单说明

联系表单使用前端验证，提交后显示成功提示。如需后端处理，需要：

1. 搭建后端服务（如 Node.js + Express）
2. 配置表单提交接口
3. 添加邮件发送功能

---

如需帮助配置具体的云服务或遇到部署问题，请告诉我！