import test from 'node:test';
import assert from 'node:assert/strict';
import { additionner } from '../index.js';

test('additionner', () => {
  assert.equal(additionner(1, 2), 3);
});
