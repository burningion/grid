onConnect
=========

**onConnect** is a callback that is fired on the client after having connected
to a server. This callback is not to be confused with
[onPlayerConnect](api/onPlayerConnect) which is called when any player connects
to the server.

Example
-------

**src/game/client/init.lua:**
```lua
function onConnect()
	print( "Hello, world!" )
end
```

See Also
--------

* [onDisconnect](api/onDisconnect)
