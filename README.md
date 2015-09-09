##Context menu

This is a react component for overwriting right-clicks in the browser and displaying your own custom menu.

##Install

`npm install legit-context-menu`

##Example

Take a look at the [real example](http://legitcode.github.io/context-meny) first

~~~js
import ContextMenu from 'legit-context-menu';

<ContextMenu>
    <p>this will show when you right-click anywhere on the page</p>
</ContextMenu>
~~~

##Props

- `onShow`: a function that will get the event from where the right click happened
That's it for now, will possibly add an option later that will allow the native right click to take place if the context menu is already active.
