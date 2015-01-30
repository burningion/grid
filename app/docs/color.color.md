color()
=======

<div class="panel panel-info">
  <div class="panel-heading">
    <h3 class="panel-title">Parameters</h3>
  </div>
  <div class="panel-body">
    **Usage:** `color( r, g, b, a )`
  </div>

  | Name      | Type   | Description           |
  | --------- | ------ | --------------------- |
  | `r`       | number | Red channel (0-255)   |
  | `g`       | number | Green channel (0-255) |
  | `b`       | number | Blue channel (0-255)  |
  | `a`       | number | Alpha channel (0-255) |
</div>

Example
-------

```lua
local blue = color( 0, 0, 255, 255 )
graphics.setColor( blue )
graphics.print( "I'm blue da ba dee da ba di..." )
```
