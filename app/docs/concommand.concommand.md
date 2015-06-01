concommand()
============

<div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">Parameters</h3>
  </div>
  <div class="panel-body">
    **Usage:** `concommand( name, helpString, callback )`
  </div>

  | Name         | Type     | Description                                                        |
  | ------------ | -------- | ------------------------------------------------------------------ |
  | `name`       | string   | Name of the console command                                        |
  | `helpString` | string   | Help text displayed when using the <kbd>help</kbd> console command |
  | `callback`   | function | Callback to run when the console command is dispatched             |
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

* [`concommand:callback()`](api/concommand.callback)
