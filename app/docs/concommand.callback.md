concommand:callback()
=====================

<div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">Parameters</h3>
  </div>
  <div class="panel-body">
    **Usage:** `function( concommand, player, command, argString, argTable )`
  </div>

  | Name         | Type       | Description                        |
  | ------------ | ---------- | ---------------------------------- |
  | `concommand` | concommand | Concommand object                  |
  | `player`     | player     | Player who ran the console command |
  | `argString`  | string     | Argument string                    |
  | `argTable`   | table      | Argument table                     |
</div>

Example
-------

```lua
concommand( "connect", "Connects to a server",
	function( _, _, _, argS, argT )
		if ( argT[ 1 ] == nil ) then
			_G.print( "connect <address>" )
			return
		end

		connect( argS )
	end
)
```

See Also
--------

* [`concommand()`](api/concommand.concommand)
