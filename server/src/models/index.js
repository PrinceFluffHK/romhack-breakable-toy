// include all of your models here using CommonJS requires
const User = require("./User.js");
const Project = require("./Project.js");
const Pokemon = require("./Pokemon.js");
const Type = require("./Type.js");
const TypeSlot = require("./TypeSlot.js");
const Ability = require("./Ability.js");
const AbilitySlot = require("./AbilitySlot.js");
const Evolution = require("./Evolution.js");
const EvoTrigger = require("./EvoTrigger.js");

module.exports = {
    User,
    Project,
    Pokemon,
    Type,
    TypeSlot,
    Ability,
    AbilitySlot,
    Evolution,
    EvoTrigger
};
