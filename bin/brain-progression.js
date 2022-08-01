#!/usr/bin/env node

import { gameController } from '../src/game-controller.js';
import { progressionGame } from '../src/games/progression-game/progression-game.js';

gameController.initGame(progressionGame);
