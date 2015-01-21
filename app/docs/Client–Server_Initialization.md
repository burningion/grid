Client–Server Initialization
============================

<div class="alert alert-info">
  **HC SVNT DRACONES**
  This article outlines engine-level behavior. The following information is best
  suited for engine modders rather than game developers.
</div>

**Client–Server initialization** occurs in two or one Lua states depending on
whether or not initialization takes place in a dedicated server context or in a
listen server context, respectively.

Connecting to Dedicated Servers
-------------------------------

In [Vertex Adventure,](/vadventure) the engine connects to the
[Prime Universe](api/Prime_Universe) in the main menu.

`game.client.gui.mainmenu`

```lua
self.joinLeaveUniverse.onClick = function()
	if ( not engine.isConnectedToServer() ) then
		if ( _DEBUG ) then
			engine.connect( "localhost" )
		else
			-- TODO: Update this to use a universe browser.
			engine.connect( "newton.andrewmcwatters.com" )
		end
	else
		engine.disconnect()
	end
end
```

Connecting to Listen Servers
----------------------------

Since Grid was written for [Vertex Adventure,](/vadventure) an MMORPG, and no
server browser exists yet, connecting to a listen server is typically only done
for debugging purposes by using the `region` console command.

`engine.shared.region`
```lua
concommand( "region", "Loads the specified region",
	function( _, _, _, _, argT )
		-- ...

		engine.connectToListenServer()
	end
)
```
