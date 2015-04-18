Callbacks
=========

Since Grid is built with multiplayer in mind, callbacks exist in three places:  

### *Client* <br><small>`src/game/client/init.lua`</small>

Game client code deals with logic that only occurs on a player's system. Scripts
involving GUIs, HUDs, client-side player logic, and effects can be found here.

### *Server* <br><small>`src/game/server/init.lua`</small>

Game server code handles logic that can be ran on listen servers, but also on
its own in dedicated servers. Since this code doesn't deal with graphics
directly, code involving things like creating entities, entity interactions, and
networking are found here.

### *Shared* <br><small>`src/game/init.lua`</small>

Some code can be ran on both the client and server. Pathfinding, for instance,
can be visualized on the client, while the server moves an NPC to a new
position.

A list of callbacks can be found [here in the API Documentation.](api/Home)
