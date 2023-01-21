# Typetris

A TypeScript implementation of the popular Block Game.

## [Demo](https://vincentvanbreugel.github.io/typetris/dist/index.html)

<div style="display: flex">
	<img src="/typetris/public/typetris-start-new-game.png"  style="margin-right: 20px;">
	<img src="/typetris/public/typetris-game-view.png">
</div>

## Background

This game was created to challenge myself to write a game in TypeScript without using a front-end framework and by using the HTML Canvas element. The game is mostly using the Classic/retro game rules with the addition of one modern feature, the **Hard Drop**.

## Technologies used

* **[TypeScript](https://www.typescriptlang.org/)** for all the game logic. 
* **[Lit-html](https://lit.dev/docs/libraries/standalone-templates)** for some basic templating and for reducing the amount of manual DOM manipulations.
* **[Tailwind CSS](https://tailwindcss.com)** for colors and for styling.
* **[Parcel](https://parceljs.org/)** for local development and a build tool.

## Features

* Speed level setting
* Automatic speed level up
* Level based scoring
* Soft Drop and Hard Drop scoring
* Cleared lines count
* Auto lock piece when dropped
* Show next Piece
* Pause/Resume
* Restart Game
* Line clear animation
* Game over animation
* Music On/Off
* SFX for all user inputs

## Future developments

* Local High Score
* Alternate Game mode
* Show Piece Stats
* Show 4-lines clear percentage

## Running it locally

1. Clone the repository
2. ```npm install```
3. ```npm run dev```
4. Go to http://localhost:1234
