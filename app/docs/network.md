network
=======

Members
-------

| Universe  | Member                                       |
| --------- | -------------------------------------------- |
|           | [`network.host`](api/network.host)               |
| *Client*  | [`network.server`](api/network.server)           |
|           | [`network.timestep`](api/network.timestep)       |
|           | [`network.accumulator`](api/network.accumulator) |
| *Server*  | [`network.peer`](api/network.peer)               |

Methods
-------

| Universe  | Methods                                                            |
| --------- | ------------------------------------------------------------------ |
| *Client*  | [`network.connect()`](api/network.connect)                             |
| *Client*  | [`network.connectToListenServer()`](api/network.connectToListenServer) |
| *Client*  | [`network.disconnect()`](api/network.disconnect)                       |
|           | [`network.update()`](api/network.update)                               |
|           | [`network.pollEvents()`](api/network.pollEvents)                       |
| *Server*  | [`network.broadcast()`](api/network.broadcast)                         |
| *Server*  | [`network.initializeServer()`](api/network.initializeServer)           |
| *Server*  | [`network.shutdownServer()`](api/network.shutdownServer)               |
