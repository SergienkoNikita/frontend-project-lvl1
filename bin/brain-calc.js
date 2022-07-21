#!/usr/bin/env node

import { gameController } from '../src/game-controller.js';
import { calcGame } from '../src/games/calc-game/calc-game.js';

gameController.initGame(calcGame);
