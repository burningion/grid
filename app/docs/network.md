network
=======

Members
-------

| Universe  | Member                                       |
| --------- | -------------------------------------------- |
|           | [`network.host`](network.host)               |
| Client    | [`network.server`](network.server)           |
|           | [`network.timestep`](network.timestep)       |
|           | [`network.accumulator`](network.accumulator) |
| Server    | [`network.peer`](network.peer)               |

Methods
-------

| Universe  | Methods                                                            |
| --------- | ------------------------------------------------------------------ |
| Client    | [`network.connect()`](network.connect)                             |
| Client    | [`network.connectToListenServer()`](network.connectToListenServer) |
| Client    | [`network.disconnect()`](network.disconnect)                       |
|           | [`network.update()`](network.update)                               |
|           | [`network.pollEvents()`](network.pollEvents)                       |
| Server    | [`network.broadcast()`](network.broadcast)                         |
| Server    | [`network.initializeServer()`](network.initializeServer)           |
| Server    | [`network.shutdownServer()`](network.shutdownServer)               |
