/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */
const unified = require('unified');
const parse = require('rehype-parse');
const { JSDOM } = require('jsdom');

const header = '<title>Hello, World</title>';

const mydoc = new JSDOM('<!DOCTYPE html><ul><li>This is foo.</li><li>This is bar.</li></ul><p>Hello, world.</p>').window.document;

module.exports = {
  document: {
    header: unified().use(parse, { fragment: true }).parse(header),
    footer: JSDOM.fragment(header).firstElementChild,
    listItem: mydoc.querySelector('li').cloneNode(true),
    body: mydoc.body,
    body1: mydoc.body.cloneNode(true),
    body2: mydoc.body.cloneNode(true),
    list: mydoc.querySelector('ul').cloneNode(true),
    list1: mydoc.querySelector('ul').cloneNode(true),
    list2: mydoc.querySelector('ul').cloneNode(true),
    array: ['a', 'b', 'c'],
  },
};
