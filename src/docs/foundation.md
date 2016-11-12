### [Breakpoints](http://foundation.zurb.com/sites/docs/v/5.5.3/media-queries.html)

Foundation uses mobile-first design. Use the breakpoint mixin for larger sizes:  `@include breakpoint(medium)` <br>
The above mixin will apply style to the medium breakpoint and up. To style an individual breakpoint, use *only*:  `@include breakpoint(medium only)`
<br><br>
Media queries can be easily customized by changing the variable values in `_settings.scss`

#### Breakpoints:

small: 0,<br>
medium: 640px, <br>
large: 1024px, <br>
xlarge: 1200px, <br>
xxlarge: 1440px <br>

$breakpoint-classes: (small medium large);
