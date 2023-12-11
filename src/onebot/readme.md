# Bot层逻辑

主要负责转换bot与框架直接交流的数据。

## Actions目录

用于bot与yukihana通信。

1. bot(client) -> yukihana [request]
2. bot(client) <- yukihana [response]

## Event目录

机器人事件下发（单向）

NTQQ -> yukihana -> bot(client)