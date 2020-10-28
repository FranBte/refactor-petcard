# Notes on refactoring

* Extract block of code and use a function e.g. `getPetVaccinations`
* Extract conditionals into separate variables e.g. `showVaccinations`
* Restructure HTML based on design (move `actions` out of `PetCard__details` `section`)
* Accessibility: `alt` text and semantic HTML tags over `div`s
* Restructure `PetCard` to be a generic component - add specific functions for the user views `getOwnerView`, `getUserView` and `getAnonView`
* Try to rename `classnames` :D
