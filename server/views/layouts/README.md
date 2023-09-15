# Prince Fluff's Romhack Studio

Streamline your Pokemon Romhack development workflow with a single tool that features creation, editing, collaboration, and publishing of Romhack projects! 

To start, users create an account, log in, and create a new project using any existing Generation of Pokemon as a baseline. From there, users can edit the properties of Pokemon including their Types, Abilities, Stats, EV Yield, and Evolutions

## Technologies Used

### Internal
- Javascript ES6
- React.js
- Node.js
- Express
- PostgreSQL
- Got

### External
- PokeAPI

## Preparation
- Install the most recent version of Yarn
- Install PostgreSQL

## Installation
NOTE: Yarn must be installed and up to date.

From the `root`:
```zsh
$ yarn install
$ createdb romhack-breakable-toy_development
```

From `/server`:
```zsh
$ yarn migrate:latest
$ yarn db:seed
```

## Usage

From the root
```bash
$ yarn dev
```

Then, navigate to <http://localhost:3000> in your browser

## TODO

* Integrate spot-editing of Pokemon information
* Allow deletion of projects
* Enable addition of fully custom Pokemon/Abilities