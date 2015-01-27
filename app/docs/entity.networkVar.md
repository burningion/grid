entity:networkVar()
===================

<div class="alert alert-warning">
  **Hey! Listen!**
  This method is used by the engine and is not meant to be called directly.
</div>

**entity:networkVar()** is an engine-level convenience method which creates a
[networkvar](api/networkvar), sets its value, adds it to the private  [`entity.networkVars`](api/entity.networkVars) table, and finally creates
accessor and mutator methods for entities.

For example, when `self:networkString( "name", nil )` is called in the
constructor of an entity, it creates the methods `.getName()` and `.setName()`,
etc.

See Also
--------

* [`entity:networkBoolean()`](api/entity.networkBoolean)
* [`entity:networkNumber()`](api/entity.networkNumber)
* [`entity:networkString()`](api/entity.networkString)
* [`entity:networkVector()`](api/entity.networkVector)
