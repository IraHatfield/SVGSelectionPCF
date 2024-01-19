# SVGSelectionPCF
A PCF Component that allows the use of selectable SVGs in a canvas app

### Use

svg_code: Here goes the SVG-code you want to display. Every object that you want to be selectable needs to have the class "selectableObject". This can also be a group of objects. You also need to set the data-callout property to a freely chosen string. The component then returns the data-callout property if you click on it.

use_fill: Expects the string "yes" or "no" (everything else the "yes" results in "no"). If "yes" it will override the fill attribute of every svg-object with the class "selectableObject"

fill_color: color used to override the unselected objects (if use_fill set to "yes")

selectedFill_color: color used to override the selected objects (if use_fill set to "yes")

svg_width: width of the image in pixels (set to Self.Width)

svg_height: width of the image in pixels (set to Self.Height)

selectedID: currently allows an input but does not affect app. outputs Id of selected object

calloutID: string can be used as input or output As input: selects the svg object with the corresponding data-callout property as output: outputs the data-callout of the selected object


### Contributors

This is a varition of a PCF created by Jens Christian Schrøder and modified by Robin Rosengrün.

This version is functionally the same only it selects based on a different attribute "data-callout" in a given SVG object rather than the "id" attribute.

The selectID property still works as an output but the input is currently disabled.


