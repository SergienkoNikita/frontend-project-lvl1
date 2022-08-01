#!/usr/bin/env node

import { gameController } from '../src/game-controller.js';
import { primeGame } from '../src/games/prime-game/prime-game.js';

gameController.initGame(primeGame);
