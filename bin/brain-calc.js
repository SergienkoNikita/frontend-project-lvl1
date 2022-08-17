#!/usr/bin/env node

import gameController from '../src/models/game-controller.js';
import calcGame from '../src/games/calc-game.js';

gameController(calcGame);
