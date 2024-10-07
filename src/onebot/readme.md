# Bot层逻辑

主要负责转换bot与框架直接交流的数据。

## Actions目录

用于bot与yui通信。

1. bot(client) -> yui [request]
2. bot(client) <- yui [response]

## Event目录

机器人事件下发（单向）

NTQQ -> yui -> bot(client)