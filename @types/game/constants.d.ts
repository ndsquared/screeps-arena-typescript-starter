declare module "game/constants" {
  import {
    Creep,
    STRUCTURE_EXTENSION,
    STRUCTURE_SPAWN,
    STRUCTURE_TOWER,
    STRUCTURE_WALL,
    StructureExtension,
    StructureTower
  } from "game/prototypes";
  export type BodyPartConstant = MOVE | WORK | CARRY | ATTACK | RANGED_ATTACK | TOUGH | HEAL | CLAIM;

  export type MOVE = "move";
  export type WORK = "work";
  export type CARRY = "carry";
  export type ATTACK = "attack";
  export type RANGED_ATTACK = "ranged_attack";
  export type TOUGH = "tough";
  export type HEAL = "heal";
  export type CLAIM = "claim";

  export const MOVE: MOVE;
  export const WORK: WORK;
  export const CARRY: CARRY;
  export const ATTACK: ATTACK;
  export const RANGED_ATTACK: RANGED_ATTACK;
  export const TOUGH: TOUGH;
  export const HEAL: HEAL;
  export const CLAIM: CLAIM;

  export type DirectionConstant = TOP | TOP_RIGHT | RIGHT | BOTTOM_RIGHT | BOTTOM | BOTTOM_LEFT | LEFT | TOP_LEFT;

  export type TOP = 1;
  export type TOP_RIGHT = 2;
  export type RIGHT = 3;
  export type BOTTOM_RIGHT = 4;
  export type BOTTOM = 5;
  export type BOTTOM_LEFT = 6;
  export type LEFT = 7;
  export type TOP_LEFT = 8;

  export const TOP: TOP;
  export const TOP_RIGHT: TOP_RIGHT;
  export const RIGHT: RIGHT;
  export const BOTTOM_RIGHT: BOTTOM_RIGHT;
  export const BOTTOM: BOTTOM;
  export const BOTTOM_LEFT: BOTTOM_LEFT;
  export const LEFT: LEFT;
  export const TOP_LEFT: TOP_LEFT;

  // Return Codes
  export type ScreepsReturnCode =
    | OK
    | ERR_NOT_OWNER
    | ERR_NO_PATH
    | ERR_BUSY
    | ERR_NAME_EXISTS
    | ERR_NOT_FOUND
    | ERR_NOT_ENOUGH_RESOURCES
    | ERR_NOT_ENOUGH_ENERGY
    | ERR_INVALID_TARGET
    | ERR_FULL
    | ERR_NOT_IN_RANGE
    | ERR_INVALID_ARGS
    | ERR_TIRED
    | ERR_NO_BODYPART
    | ERR_NOT_ENOUGH_EXTENSIONS
    | ERR_RCL_NOT_ENOUGH
    | ERR_GCL_NOT_ENOUGH;

  export type OK = 0;
  export type ERR_NOT_OWNER = -1;
  export type ERR_NO_PATH = -2;
  export type ERR_NAME_EXISTS = -3;
  export type ERR_BUSY = -4;
  export type ERR_NOT_FOUND = -5;
  export type ERR_NOT_ENOUGH_RESOURCES = -6;
  export type ERR_NOT_ENOUGH_ENERGY = -6;
  export type ERR_INVALID_TARGET = -7;
  export type ERR_FULL = -8;
  export type ERR_NOT_IN_RANGE = -9;
  export type ERR_INVALID_ARGS = -10;
  export type ERR_TIRED = -11;
  export type ERR_NO_BODYPART = -12;
  export type ERR_NOT_ENOUGH_EXTENSIONS = -6;
  export type ERR_RCL_NOT_ENOUGH = -14;
  export type ERR_GCL_NOT_ENOUGH = -15;

  export type CreepActionReturnCode =
    | OK
    | ERR_NOT_OWNER
    | ERR_BUSY
    | ERR_INVALID_TARGET
    | ERR_NOT_IN_RANGE
    | ERR_NO_BODYPART
    | ERR_TIRED;

  export type CreepMoveReturnCode = OK | ERR_NOT_OWNER | ERR_BUSY | ERR_TIRED | ERR_NO_BODYPART;

  export const CARRY_CAPACITY: 50;
  export const CREEP_SPAWN_TIME = 3;

  export const ERR_BUSY: ERR_BUSY;
  export const ERR_FULL: ERR_FULL;
  export const ERR_INVALID_ARGS: ERR_INVALID_ARGS;
  export const ERR_INVALID_TARGET: ERR_INVALID_TARGET;
  export const ERR_NAME_EXISTS: ERR_NAME_EXISTS;
  export const ERR_NOT_ENOUGH_ENERGY: ERR_NOT_ENOUGH_ENERGY;
  export const ERR_NOT_ENOUGH_EXTENSIONS: ERR_NOT_ENOUGH_EXTENSIONS;
  export const ERR_NOT_ENOUGH_RESOURCES: ERR_NOT_ENOUGH_RESOURCES;
  export const ERR_NOT_FOUND: ERR_NOT_FOUND;
  export const ERR_NOT_IN_RANGE: ERR_NOT_IN_RANGE;
  export const ERR_NOT_OWNER: ERR_NOT_OWNER;
  export const ERR_NO_BODYPART: ERR_NO_BODYPART;
  export const ERR_NO_PATH: ERR_NO_PATH;
  export const ERR_TIRED: ERR_TIRED;
  export const OK: OK;

  export type OBSTACLE_OBJECT_TYPES =
    | AnyCreep
    | STRUCTURE_TOWER
    | STRUCTURE_WALL
    | STRUCTURE_SPAWN
    | STRUCTURE_EXTENSION;
  // | STRUCTURE_LINK
  export const HEAL_POWER: 12;
  export const ATTACK_POWER: 30;
  export const OBSTACLE_OBJECT_TYPES: OBSTACLE_OBJECT_TYPES;
  export const RANGED_ATTACK_DISTANCE_RATE: any[];
  export const RANGED_ATTACK_POWER: 10;
  export const RANGED_HEAL_POWER: 4;
  export const ROAD_WEAROUT: 1;

  export type TERRAIN_SWAMP = 2;
  export type TERRAIN_WALL = 1;

  export const TERRAIN_SWAMP: TERRAIN_SWAMP;
  export const TERRAIN_WALL: TERRAIN_WALL;
  export const TOWER_CAPACITY: 50;
  export const TOWER_ENERGY_COST: 10;
  export const TOWER_FALLOFF: 0.75;
  export const TOWER_FALLOFF_RANGE: 20;
  export const TOWER_HITS: 3000;
  export const TOWER_OPTIMAL_RANGE: 5;
  export const TOWER_POWER_ATTACK: 600;
  export const TOWER_POWER_HEAL: 400;
  export const TOWER_POWER_REPAIR: 800;
  export const TOWER_RANGE: 50;
  export const WALL_HITS = 1;
  export const WALL_HITS_MAX = 100000;

  export const RESOURCE_ENERGY: "energy";

  export type ResourceConstant = typeof RESOURCE_ENERGY;

  export type AnyCreep = Creep; /* | PowerCreep;*/

  export const BODYPART_COST: { [index in BodyPartConstant]: number };
  export const BODYPART_HITS: number;

  export const DISMANTLE_COST = 0.005;
  export const DISMANTLE_POWER = 50;
  export const HARVEST_POWER = 2;
  export const MAX_CREEP_SIZE = 50;

  export const REPAIR_COST = 0.01;
  export const REPAIR_POWER = 100;
  // export const RESOURCES_ALL = ["energy"];
  export const RESOURCE_DECAY = 1000;
  export const SOURCE_ENERGY_REGEN = 10;

  export const BUILD_POWER = 5;

  export const CONSTRUCTION_COST: { [index in BuildableStructureConstant]: number }; // = { StructureTower: 5000, StructureExtension: 300 };
  export const CONSTRUCTION_COST_ROAD_SWAMP_RATIO = 5;
  export const CONSTRUCTION_COST_ROAD_WALL_RATIO = 150;
  export const CONTAINER_CAPACITY = 2000;
  export const CONTAINER_HITS = 300;

  export type BuildableStructureConstant = STRUCTURE_EXTENSION | STRUCTURE_TOWER;
  export type BuildableStructure = StructureExtension | StructureTower;

  export const EXTENSION_ENERGY_CAPACITY = 50;
  export const EXTENSION_HITS = 100;
  export const MAX_CONSTRUCTION_SITES = 10;

  export const RAMPART_HITS = 1;
  export const RAMPART_HITS_MAX = 100000;
  export const ROAD_HITS = 500;

  // export const STRUCTURE_PROTOTYPES = {
  //   StructureTower: "tower",
  //   StructureSpawn: "spawn",
  //   StructureRoad: "road",
  //   StructureRampart: "rampart",
  //   StructureExtension: "extension",
  //   StructureWall: "constructedWall",
  //   StructureContainer: "container"
  // };
}
