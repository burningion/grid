onDisconnect
============

**onDisconnect** is a callback that is fired on the client after having
disconnected from a server. This callback is not to be confused with
[onPlayerDisconnect](api/onPlayerDisconnect) which is called when any player
disconnects from the server.

Example
-------

**src/game/client/init.lua:**
```lua
function onDisconnect()
	print( "Goodbye, world!" )
end
```

See Also
--------

* [onConnect](api/onConnect)
