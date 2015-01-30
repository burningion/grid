convar()
=====================

<div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">Parameters</h3>
  </div>
  <div class="panel-body">
    **Usage:** `convar( name, default, min, max, helpString, onValueChange )`
  </div>

  | Name            | Type     | Description                                             |
  | --------------- | -------- | ------------------------------------------------------- |
  | `name`          | string   | Name of the console variable                            |
  | `default`       | *        | Default value                                           |
  | `min`           | number   | Minimum value                                           |
  | `max`           | number   | Maximum value                                           |
  | `helpString`    | string   | Help text displayed when using the help console command |
  | `onValueChange` | function | Callback to run when the console variable has changed   |
</div>

Example
-------

```lua
local perf_draw_frame_rate = convar( "perf_draw_frame_rate", "0", nil, nil,
                                     "Draws the frame rate" )
```
