payload.setHandler() <small>*Shared*</small>
====================

Sets a handler function for a given payload struct.

<div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">Parameters</h3>
  </div>
  <div class="panel-body">
    **Usage:** `payload.setHandler( func, struct )`
  </div>

  | Name      | Type     | Description     |
  | --------- | -------- | --------------- |
  | `func`    | function | Payload handler |
  | `struct`  | string   | Name of payload |
</div>

Example
-------

```lua
if ( _SERVER ) then
	local function onPlayerMove( payload )
		local player   = payload:getPlayer()
		local position = payload:get( "position" )
		player:moveTo( position )
	end

	payload.setHandler( onPlayerMove, "playerMove" )
end
```
