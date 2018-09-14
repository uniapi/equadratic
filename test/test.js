/*************************************************************************
                          Written by Ali Muhammed
                            uniapi@outlook.com
                            September 14, 2018
*************************************************************************/

import * as assert from 'assert'
import { equadratic } from '../dist/index.js'

const setcase = [
  { eq: '1 * x^2 - 8 * x', qrs: [  0,     8] },
  { eq: ' x ^ 2+9* x ',    qrs: [ -9,     0] },
  { eq: '8*x^2+2*x+14',    qrs: [null, null] },
  { eq: '-2* x ^2+3 *x',   qrs: [  0,     2] },
  { eq: 'x^2-x', qrs: [0, 1] }
];

describe('Equadratic', () => {
  setcase.forEach((set, inx) => it(`${inx+1}`, () => assert.deepEqual(equadratic(set.eq), set.qrs)));
});
