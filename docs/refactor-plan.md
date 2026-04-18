# 重构方案

> **本文是终态参考文档，不是任务生成器。**
> 本轮有限清单已全部完成，不追加新任务、不提出新阶段。

基于 2026-04-18 代码实际分析。

---

## 1. 分析结论

**主路径迁移与收尾清理均已完成，当前架构整体合理，依赖方向正确。**

### 1.1 做得好的部分

- **层次分明**：bootstrap → adapters → app → ntqq/transfer 四层职责清晰，无跨层逆向依赖
- **无循环依赖**：ntqq 内部 core/login/store/query/message 之间无交叉 import
- **Infra 干净**：common 和 store 作为底层被各层依赖，自身不反向依赖业务层
- **Compat 清理彻底**：server/、onebot/actions、onebot/event、http/ 内的 compat 文件与空目录壳均已清理
- **命名收口完成**：仅保留 `useLogger()` 一个 `use*` 命名作为长期 API，其余 facade 已清除
- **聚合出口已标注**：三个聚合边界文件（`login/account.ts`、`login/index.ts`、`store/config.ts`）已用 `@aggregation-boundary` 定性
- **文件落点合理**：合并转发转换器已迁入 `src/transfer/message/forward-converter.ts`
- **边界恢复纯净**：`src/common/utils.ts` 已去除 native 依赖，`src/models/contact/group.ts` 与 `member.ts` 已不再直接调用 native
- **process.exit 已明确**：kicked offline 处的 `process.exit` 已移除 TODO，注释说明了设计意图

### 1.2 本轮收尾项处理结果

#### 项目 A：残留空目录壳

已删除：

```text
src/server/error/
src/onebot/actions/
src/http/
```

#### 项目 B：`forward-converter.ts` 放置位置不合理

- 已从 `src/common/forward-converter.ts` 迁移到 `src/transfer/message/forward-converter.ts`
- 该文件继续承担合并转发图片上传、PB 消息构造与 XML 预览生成
- 群合并转发发送动作已通过 `src/ntqq/message/group-forward.ts` 调用

#### 项目 C：`src/models/` 直接调用 native

- `src/models/contact/group.ts` 不再直接 import `native/native`
- `src/models/contact/member.ts` 不再直接 import `native/native`
- native 调用已分别下沉到：
  - `src/ntqq/message/group-forward.ts`
  - `src/ntqq/group/nudge.ts`

#### 项目 D：`src/common/utils.ts` 依赖 native

- `getHttpTicket()` 已迁移到 `src/ntqq/message/http-ticket.ts`
- `src/common/utils.ts` 现在只保留通用工具能力，不再依赖 native/protobuf runtime

## 2. 当前架构

### 2.1 启动链路

```text
src/index.ts
  → bootstrap/start-app.ts    # initRuntime → initializeOneBot → startServers
  → bootstrap/init-runtime.ts # Linux preload、process hook
```

### 2.2 层次与依赖方向

```text
Bootstrap ──→ Adapters ──→ App ──→ Runtime/Transfer
    │              │          │          │
    └──────────────┴──────────┴──────────┴──→ Infra (common, store)
                                              Protocol Types (onebot/contracts)
```

实际依赖验证结果：

| 检查项 | 结果 |
|---|---|
| app → adapters | **无**（正确） |
| ntqq → adapters | **无**（正确） |
| transfer → adapters | **无**（正确） |
| 非 bootstrap → bootstrap | **无**（正确） |
| 任何层 → server/（旧） | **无**（正确） |
| ntqq 内部循环 (core↔login↔store) | **无**（正确） |
| common → native | **无**（已清理） |
| models → native | **无**（已清理） |

### 2.3 各层现状

| 层 | 路径 | 状态 |
|---|---|---|
| Entry | `src/index.ts` | 薄入口，正常 |
| Bootstrap | `src/bootstrap/` | 干净 |
| Adapters | `src/adapters/**` | 正常 |
| App | `src/app/**` | 正常 |
| NTQQ | `src/ntqq/**` | 正常 |
| Transfer | `src/transfer/**` | 正常 |
| OneBot Contracts | `src/onebot/contracts/` | 纯类型，正常 |
| Common | `src/common/` | 已恢复为通用基础设施 |
| Store | `src/store/` | 正常 |
| Models | `src/models/` | 已去除 direct native 调用 |
| Wrapper | `src/wrapper/` | 冻结区域，不动 |
| Native | `src/native/` | 底层 |

## 3. 已完成项（冻结，不再验证）

- 主路径迁移（bootstrap → adapters → app → ntqq/transfer）
- Action 注册收口（`register-onebot-actions.ts` + `dispatch-action.ts`）
- Event 注册收口（`register-events.ts` 体系）
- 所有 compat 文件删除
- 所有 `use*Service()` / `useNTCore()` / `useNTWrapper()` facade 删除
- `useLogger()` 定性为长期 API
- 消息发送链路拆为 flow / builder / resource 三层
- NT 登录拆到 `account-*.ts`、NT 配置拆到 `config-*.ts`
- runtime-store 统一到 current runtime / current self 语义
- ntqq/core 文件粒度已合理
- 聚合出口标注完成
- kicked offline process.exit 已明确
- Jest 基础测试已补 3 个

## 4. 收尾任务完成记录

> 原有限清单中的 4 项任务已全部完成。完成后结束，不追加新任务。

### 任务 1：删除残留空目录

- 已删除 `src/server/error`、`src/onebot/actions`、`src/http`

### 任务 2：迁移 `forward-converter.ts`

- 已迁移到 `src/transfer/message/forward-converter.ts`
- 群转发发送链路已通过 `src/ntqq/message/group-forward.ts` 承接

### 任务 3：清理 `common/utils.ts` 的 native 依赖

- 已将 `getHttpTicket()` 迁移到 `src/ntqq/message/http-ticket.ts`
- `src/common/utils.ts` 不再依赖 native

### 任务 4：处理 models 层 native 依赖

- 已将群转发发送 native 调用封装到 `src/ntqq/message/group-forward.ts`
- 已将群成员 nudge native 调用封装到 `src/ntqq/group/nudge.ts`
- `src/models/contact/group.ts` 与 `src/models/contact/member.ts` 现在通过 ntqq 层薄委托调用

## 5. 硬性约束（永久生效）

1. **新代码落点**：`bootstrap` / `adapters` / `app` / `ntqq` / `transfer` / `common` / `store`
2. **不恢复 compat**：不新建 compat entry、compat facade、文件级 re-export alias
3. **不扩散 account 命名**：`account` 仅在协议层 action 名中使用，内部新代码用 runtime / self
4. **common 层纯净**：新增 common 代码不应依赖 ntqq / native / models
5. **冻结区域**：`src/wrapper/exports/**`、`src/ntqq/protobuf/**`、`src/native/**`、`tools/yui/nodestart.cjs`

## 6. 非目标

以下内容不属于重构范围，不要作为“下一步”提出：

- 全量重写 wrapper/exports
- 手工改写 protobuf 生成物
- 全局批量替换历史命名
- 进一步拆分 ntqq/core（粒度已合理）
- 重命名 account-*.ts 文件（导出已用新语义）
- 统一 useLogger() 命名
- 任何形式的“继续拆分”、“继续收口”、“继续收紧”

## 7. 验证记录

| 日期 | 命令 | 结果 |
|---|---|---|
| 2026-04-18 | `pnpm run yui:build` | 通过 |
| 2026-04-18 | `pnpm exec jest` | 通过（3 个测试文件） |
| 2026-04-18 | `pnpm run yui:nodestart` | 未执行（依赖本地 NTQQ 环境） |
| 2026-04-18 | 空目录检查 | `src/server/error`、`src/onebot/actions`、`src/http` 已不存在 |
| 2026-04-18 | 依赖方向检查 | `common → native` 与 `models → native` 已清理 |
