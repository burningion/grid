player
======

<small>_Inherits from [`entity`](entity)_</small>

Class Methods
-------------

* [`player.initialize()`](player.initialize)
* [`player.getAll()`](player.getAll)
* [`player.getById()`](player.getById)
* [`player.getByPeer()`](player.getByPeer)
* [`player.updatePlayers()`](player.updatePlayers)

Constructor
-----------

* [`player()`](player.player)

Methods
-------

| Universe  | Methods                                                  |
| --------- | -------------------------------------------------------- |
| Server    | [`player:createInitialSave()`](player.createInitialSave) |
|           | [`player:getAccount()`](player.getAccount)               |
|           | [`player:draw()`](player.draw)                           |
|           | [`player:getName()`](player.getName)                     |
|           | [`player:getRegion()`](player.getRegion)                 |
|           | [`player:getSave()`](player.getSave)                     |
|           | [`player:getViewportWidth()`](player.getViewportWidth)   |
|           | [`player:getViewportHeight()`](player.getViewportHeight) |
|           | [`player:getViewportSize()`](player.getViewportSize)     |
|           | [`player:initialSpawn()`](player.initialSpawn)           |
|           | [`player:isAuthenticated()`](player.isAuthenticated)     |
| Server    | [`player:kick()`](player.kick)                           |
|           | [`player:send()`](player.send)                           |
|           | [`player:setAuthenticated()`](player.setAuthenticated)   |
|           | [`player:setRegion()`](player.setRegion)                 |
|           | [`player:setSave()`](player.setSave)                     |
|           | [`player:setViewportWidth()`](player.setViewportWidth)   |
|           | [`player:setViewportHeight()`](player.setViewportHeight) |
|           | [`player:setViewportSize()`](player.setViewportSize)     |
|           | [`player:update()`](player.update)                       |

Callbacks
---------

| Universe  | Callback                                             |
| --------- | ---------------------------------------------------- |
| Server    | [`player:onAuthenticated()`](player.onAuthenticated) |
|           | [`player:onConnect()`](player.onConnect)             |
|           | [`player:onDisconnect()`](player.onDisconnect)       |
|           | [`player:onDisconnect()`](player.onDisconnect)       |

Metamethods
-----------

* [`player:__tostring()`](player.__tostring)
