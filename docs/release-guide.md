# Development

## Setup

Clone this repository, and run `npm install`.

### Commands

| Command          | Description                            | Extra options                                     |
| ---------------- | -------------------------------------- | ------------------------------------------------- |
| `npm start`      | compiles into dist in watch mode       |
| `npm run build`  | compiles into dist                     |
| `npm run format` | checks for formatting issues           | add ` -- --write` to fix formatting automatically |
| `npm run lint`   | checks for code issues                 | add ` -- --fix` to fix issues automatically       |
| `npm run test`   | runs unit tests                        | add ` -- --watch` to run in watch mode            |
| `npm run docs`   | build the generated docs               |
| `npm run todo`   | list all TODO's and FIXME's            |
| `npm run clean`  | clean temporary and dependency folders |

---

# Publish

> Project Publish worflow

1. commit code on your branch
2. merge to main branch
3. npx changeset : input version & comment
4. npx version : make version upgrade into package.json
5. pnpm release

## Changeset

1. 选择版本类型
2. 输入更新摘要
3. 确定生成 changeset 文件
4. 提交更改
5. 生成 changelog

```bash
#1. changeset -> edit patch -> message
npx changeset

npx changeset version

npx changeset publish --dry-run # OR pnpm publish:only
```
