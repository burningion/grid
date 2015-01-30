color()
=======

<div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">Parameters</h3>
  </div>
  <div class="panel-body">
    **Usage:** `color( r, g, b, a )`
  </div>

  | Name      | Description           |
  | --------- | --------------------- |
  | `r`       | Red channel (0-255)   |
  | `g`       | Green channel (0-255) |
  | `b`       | Blue channel (0-255)  |
  | `a`       | Alpha channel (0-255) |
</div>

Example
-------

```lua
local blue = color( 0, 0, 255, 255 )
graphics.setColor( blue )
graphics.print( "I'm blue da ba dee da ba di..." )
```
