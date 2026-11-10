import test from 'node:test';
import assert from 'node:assert/strict';
import { additionner, multiplier } from '../index.js';

test('additionner', () => {
  assert.equal(additionner(1, 2), 3);
});

test('multiplier', () => {
  assert.equal(multiplier(3, 4), 12);
  assert.equal(multiplier(-2, 5), -10);
  assert.equal(multiplier(0, 7), 0);
});
