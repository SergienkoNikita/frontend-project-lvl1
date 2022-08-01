#!/usr/bin/env node

import { gameController } from '../src/game-controller.js';
import { gcdGame } from '../src/games/gcd-game/gcd-game.js';

gameController.initGame(gcdGame);
