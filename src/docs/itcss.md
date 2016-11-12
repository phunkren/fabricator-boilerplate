# Inverted Triangle CSS
<hr>

## About
Project scss files will be organised using Inverted Traingle CSS (ITCSS henceforth).

ITCSS stands for Inverted Triangle CSS and it helps you to organize your project CSS files in such way that you can better deal with (not always easy-to-deal with) CSS specifics like global namespace, cascade and selectors specificity.

ITCSS can be used with preprocessors or without them and is compatible with CSS methodologies like BEM, SMACSS or OOCSS.

One of the key principles of ITCSS is that it separates your CSS codebase to several sections (called layers), which take form of the inverted triangle:

<br><br> 
<p align="center">
  <img src="https://www.xfivecdn.com/xfive/wp-content/uploads/2016/02/10152838/itcss-layers1.svg" width="50%" alt="ITCSS diagram">
</p>
<br><br> 


Those layers are as follows:

* **Settings** – used with preprocessors and contain font, colors definitions, etc.
* **Tools** – globally used mixins and functions. It’s important not to output any CSS in the first 2 layers.
* **Generic** – reset and/or normalize styles, box-sizing definition, etc. This is the first layer which generates actual CSS.
* **Elements** – styling for bare HTML elements (like H1, A, etc.). These come with default styling from the browser so we can redefine them here.
* **Objects** – class-based selectors which define undecorated design patterns, for example media object known from OOCSS
* **Components** – specific UI components. This is where majority of our work takes place and our UI components are often composed of Objects and Components
* **Trumps** – utilities and helper classes with ability to override anything which goes before in the triangle, eg. hide helper class

The triangle also shows how styles represented by selectors are ordered in the resulting CSS: from generic styles to explicit ones, from low-specificity selectors to more specific ones (but still not too specific, IDs are not allowed) and from far reaching to localized ones.
<br><br> 

## Source 
[ITCSS: SCALABLE AND MAINTAINABLE CSS ARCHITECTURE](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) by Lubos Kmetko on February 10, 2016

