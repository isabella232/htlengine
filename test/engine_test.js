/*
 * Copyright 2018 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* global describe, it */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const engine = require('../src/main');

const TEMPLATE_SIMPLE_2 = path.resolve(__dirname, './simple2.htl');
const EXPECTED_SIMPLE_2 = path.resolve(__dirname, './simple2.html');
const GLOBALS = {
  world: 'Earth',
  properties: {
    title: 'Hello, world.',
    fruits: ['Apple', 'Banana', 'Orange'],
    comma: ', ',
  },
  nav: {
    foo: 'This is foo. ',
  },
  test: 'This is a test',
  qttMin: 4,
  qttMax: 4,
  expression: 'this is an expression.',
  it: {
    html: 'foo barty!',
    title: 'Hello, world!',
    children: [
      '<div>A</div>',
      '<div>B</div>',
    ],
  },
};

describe('Engine test', () => {
  it('Simple htl can be executed', async () => {
    const template = fs.readFileSync(TEMPLATE_SIMPLE_2, 'utf-8');
    const expected = fs.readFileSync(EXPECTED_SIMPLE_2, 'utf-8');
    const ret = await engine(GLOBALS, template);
    assert.equal(ret.body, expected);
  });
});
