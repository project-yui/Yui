# 重构迁移清单

> **本文是有限清单。所有条目均已完成并冻结。**
> 不追加新条目，不提出“下一阶段建议”。

## 状态图例

- `[x]` 已完成，冻结，不再验证

---

## 1. 已完成项（冻结）

### 启动与装配
- [x] `src/index.ts` 薄入口
- [x] `src/bootstrap/**` 启动编排与 runtime 初始化
- [x] `src/adapters/server/**` HTTP/WS 服务启动
- [x] `src/adapters/http/**` 路由装配
- [x] `src/adapters/ws/**` 连接管理、请求处理
- [x] `src/adapters/onebot/**` 事件装配与构造

### Action/Event
- [x] `src/app/register-onebot-actions.ts` 统一 action handler map
- [x] `src/app/dispatch-action.ts` 统一分发
- [x] `src/store/action-registry.ts` 独立注册表
- [x] `src/adapters/onebot/register-events.ts` 统一事件注册
- [x] `src/store/event-registry.ts` 独立注册表

### 应用服务层
- [x] `src/app/login/**` 登录用例
- [x] `src/app/friend/**` 好友用例
- [x] `src/app/group/**` 群组用例
- [x] `src/app/message/**` 消息用例

### NTQQ 生命周期
- [x] ntqq/core 粒度合理（最大 164 行），不需进一步拆分
- [x] runtime-store 统一到 current runtime / current self 语义

### 登录与配置
- [x] `src/ntqq/login/` account-*.ts 系列
- [x] `src/ntqq/store/` config-*.ts 系列
- [x] 聚合出口 `@aggregation-boundary` 标注完成

### 消息转换
- [x] 发送链路 flow / builder / resource 三层
- [x] 接收链路 `convert-receive.ts`

### Compat 清理
- [x] 所有旧 compat 文件已删除（server、onebot/actions、onebot/event、http handler、store/store.ts 等）
- [x] 所有 `use*Service()` facade 已删除
- [x] `useLogger()` 定性为长期 API
- [x] kicked offline `process.exit` 已加注释说明设计意图

### 测试
- [x] `src/common/deep-merge.test.ts`
- [x] `src/transfer/message/send-basic-element-builders.test.ts`
- [x] `src/transfer/message/image-resource-preparer.test.ts`

### 依赖方向验证
- [x] app → adapters: 无（正确）
- [x] ntqq → adapters: 无（正确）
- [x] transfer → adapters: 无（正确）
- [x] 非 bootstrap → bootstrap: 无（正确）
- [x] ntqq 内部循环: 无（正确）

---

## 2. 已完成收尾项

### [x] 任务 1：删除残留空目录

已删除：

```text
src/server/error/
src/onebot/actions/
src/http/
```

验证：上述路径已不存在

### [x] 任务 2：迁移 `forward-converter.ts`

- `src/common/forward-converter.ts` 已迁移到 `src/transfer/message/forward-converter.ts`
- 群合并转发发送链路已由 `src/ntqq/message/group-forward.ts` 承接

### [x] 任务 3：清理 `common/utils.ts` 的 native 依赖

- `getHttpTicket()` 已迁移到 `src/ntqq/message/http-ticket.ts`
- `src/common/utils.ts` 已不再 import `native/native`

### [x] 任务 4：处理 models 层 native 依赖

- `src/models/contact/group.ts` 已不再直接调用 native，改为通过 `src/ntqq/message/group-forward.ts` 薄委托
- `src/models/contact/member.ts` 已不再直接调用 native，改为通过 `src/ntqq/group/nudge.ts` 薄委托

---

## 3. 完成定义

- [x] 任务 1 完成
- [x] 任务 2 完成
- [x] 任务 3 完成
- [x] 任务 4 完成

**全部 4 项已完成，本轮重构结束。**

## 4. 约束规则（给执行者）

1. **不追加任务**：完成以上条目后停止
2. **不重新验证 `[x]` 项**：冻结项不需重新检查
3. **不扩展范围**：不做批量重命名、不做进一步拆分
4. **维持当前文档口径**：后续仅在代码状态变化时同步更新

## 5. 验证记录

| 日期 | 命令 | 结果 |
|---|---|---|
| 2026-04-18 | `pnpm run yui:build` | 通过 |
| 2026-04-18 | `pnpm exec jest` | 通过（3 个测试文件） |
| 2026-04-18 | 空目录检查 | `src/server/error`、`src/onebot/actions`、`src/http` 已不存在 |
| 2026-04-18 | 依赖方向 grep 验证 | `common → native` 与 `models → native` 已清理 |
