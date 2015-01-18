player <small>_Inherits from [`entity`](api/entity)_</small>
======

Class Methods
-------------

* [`player.initialize()`](api/player.initialize)
* [`player.getAll()`](api/player.getAll)
* [`player.getById()`](api/player.getById)
* [`player.getByPeer()`](api/player.getByPeer)
* [`player.updatePlayers()`](api/player.updatePlayers)

Constructor
-----------

* [`player()`](api/player.player)

Methods
-------

| Universe  | Methods                                                      |
| --------- | ------------------------------------------------------------ |
| Server    | [`player:createInitialSave()`](api/player.createInitialSave) |
|           | [`player:getAccount()`](api/player.getAccount)               |
|           | [`player:draw()`](api/player.draw)                           |
|           | [`player:getName()`](api/player.getName)                     |
|           | [`player:getRegion()`](api/player.getRegion)                 |
|           | [`player:getSave()`](api/player.getSave)                     |
|           | [`player:getViewportWidth()`](api/player.getViewportWidth)   |
|           | [`player:getViewportHeight()`](api/player.getViewportHeight) |
|           | [`player:getViewportSize()`](api/player.getViewportSize)     |
|           | [`player:initialSpawn()`](api/player.initialSpawn)           |
|           | [`player:isAuthenticated()`](api/player.isAuthenticated)     |
| Server    | [`player:kick()`](api/player.kick)                           |
|           | [`player:send()`](api/player.send)                           |
|           | [`player:setAuthenticated()`](api/player.setAuthenticated)   |
|           | [`player:setRegion()`](api/player.setRegion)                 |
|           | [`player:setSave()`](api/player.setSave)                     |
|           | [`player:setViewportWidth()`](api/player.setViewportWidth)   |
|           | [`player:setViewportHeight()`](api/player.setViewportHeight) |
|           | [`player:setViewportSize()`](api/player.setViewportSize)     |
|           | [`player:update()`](api/player.update)                       |

Callbacks
---------

| Universe  | Callback                                                 |
| --------- | -------------------------------------------------------- |
| Server    | [`player:onAuthenticated()`](api/player.onAuthenticated) |
|           | [`player:onConnect()`](api/player.onConnect)             |
|           | [`player:onDisconnect()`](api/player.onDisconnect)       |

Metamethods
-----------

* [`player:__tostring()`](api/player.__tostring)
