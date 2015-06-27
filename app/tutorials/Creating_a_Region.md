Creating a Region
=================

Regions are portions of a world environment. They can connect to other regions,
or stand alone. In this tutorial, we'll create the test region, *Teffeld*, from
[Vertex Adventure.](/vadventure) The name comes from a medieval-sounding
abbreviation of "test field."

![Teffeld](images/teffeld.62bf8998.png)

Using Tiled
-----------

Grid's underlying region format uses [Tiled](http://www.mapeditor.org/)'s
exported Lua files. To create a region, download and install Tiled, then
create a new map by clicking *File > New...* or pressing <kbd>Ctrl+N</kbd> then
click *OK* or press <kbd>enter</kbd> to use the default settings.

![New Map](images/new_map.550fb03e.png)

Next, we'll import Vertex Adventure's *World* tileset by clicking *Map > Add
External Tileset...* and selecting `World.tsx` from `src/regions`.

![Add External Tileset](images/add_external_tileset.8f8602c5.png)

Then, we can rename the `Tile Layer 1` layer to `Grass`, and fill our first
layer with the grass tile from the *World* tileset we added earlier. To fill
this layer, select the *Bucket Fill Tool* or press <kbd>f</kbd>, click on the
grass tile, then click anywhere on the map.

![Grass](images/add_external_tileset.8f8602c5.png)

We'll need somewhere to spawn. In the sample code for Vertex Adventure,
players spawn at `prop_worldgate_spawn` entities. So we'll create an *object
layer* for this and name it *"Spawn Points."*

![Add Object Layer](images/add_object_layer.522b66ac.png)

Finally, we can place a `prop_worldgate_spawn` and test our region in the
engine. To place an entity, make sure an object layer is
selected, then select *Insert Rectangle* or press <kbd>r</kbd>.

For this entity, insert a rectangle *1* tile wide and *3* tiles high by dragging
across the map until you get the desired size. While Grid doesn't care about the
rectangle's size, it does care about its bottom left position, and by making the
rectangle the same size as the asset in-game, we can design our levels knowing
exactly where each entity is.

Lastly, in the *Properties* window set the object's *Type* to
`prop_worldgate_spawn`. You can also adjust its position here. In *Teffeld*, the
World Gate's position is at the center of the region, so its position would be
`(1600.00, 1504.00)`.

![prop_worldgate_spawn](images/prop_worldgate_spawn.e94f0dc8.png)

To save and test our region, we'll save our Tiled map file first by clicking
*File > Save*, or pressing <kbd>Ctrl+S</kbd> and naming it `teffeld`. Then, to
export the region for testing, click *File > Export*, or press
<kbd>Ctrl+E</kbd>, and save as a *Lua file (.lua)* named `teffeld.lua`.

**Note:** *Tiled map files (.tmx)* are the map source files that you edit in
Tiled, whereas the exported *Lua files (.lua)* are used by the engine.

Now you can open Grid in development mode (as mentioned under *Running Grid* in
[Getting Started](tutorials/Getting_Started)) and type <kbd>region teffeld</kbd>
and press <kbd>enter</kbd> to start a listen server with *Teffeld*.

![Debug Game](images/debug_game.eb859c6b.png)
![Debug Game (2)](images/debug_game%202.8ac6b9c5.png)
