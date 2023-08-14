// include all of your models here using CommonJS requires
const User = require("./User.js")
const Project = require("./Project.js")
const Ability = require("./Ability.js")
const AbilitySlot = require("./AbilitySlot.js")
const Type = require("./Type.js")
const TypeSlot = require("./TypeSlot.js")
const Pokemon = require("./Pokemon.js")
const EvoCondition = require("./EvoCondition.js")
const Evolution = require("./Evolution.js")
const EggGroup = require("./EggGroup.js")
const EggGroupSlot = require("./EggGroupSlot.js")

module.exports = {User, Project, Ability, Type, Pokemon, EvoCondition, Evolution, AbilitySlot, TypeSlot, EggGroup, EggGroupSlot};
