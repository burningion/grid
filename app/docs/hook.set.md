hook.set() <small class="pull-right">*Shared*</small>
==========

Sets a hook for a given callback.

<div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">Parameters</h3>
  </div>
  <div class="panel-body">
    **Usage:** `hook.set( universe, func, event, name )`
  </div>

  | Name       | Type     | Description                              |
  | ---------- | -------- | ---------------------------------------- |
  | `universe` | string   | *Client*, *Server*, or *Shared* universe |
  | `func`     | function | Function hook                            |
  | `event`    | string   | Callback event name                      |
  | `name`     | string   | Hook name                                |
</div>

Example
-------

```lua
local function hideViewport()
	if ( not g_Viewport ) then
		return
	end

	g_Viewport:hide()
end

hook.set( "client", hideViewport, "onMainMenuActivate", "hideViewport" )
```
