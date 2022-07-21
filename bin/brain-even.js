#!/usr/bin/env node

import { gameController } from '../src/game-controller.js';
import { evenGame } from '../src/games/even-game/even-game.js';

gameController.initGame(evenGame);
