# Notes on refactoring

* Extract block of code and use a function e.g. `getPetVaccinations`
* Add keys to vaccination list items to:
  * Avoid a warning on the console
  * Avoid re-renders since items are not changing ([an `id` would be preferred over `index` though](https://reactjs.org/docs/lists-and-keys.html#keys))
* Extract conditionals into separate variables e.g. `showVaccinations`
* Restructure HTML based on design (move `actions` out of `PetCard__details` `section`)
* Accessibility: `alt` text and semantic HTML tags over `div`s
* Restructure `PetCard` to be a generic component - add specific functions for the user views `getOwnerView`, `getUserView` and `getAnonView`
* Try to rename `classnames` :D
