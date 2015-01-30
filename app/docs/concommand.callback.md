concommand:callback()
=====================

<div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">Parameters</h3>
  </div>
  <div class="panel-body">
    **Usage:** `function( concommand, player, command, argString, argTable )`
  </div>

  | Name         | Description                                   |
  | ------------ | --------------------------------------------- |
  | `concommand` | Concommand object                             |
  | `player`     | *Unimplemented* Player who ran the concommand |
  | `argString`  | Argument string                               |
  | `argTable`   | Argument table                                |
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
