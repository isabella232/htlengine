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
module.exports = {
  foo: 42,
  component: {
    path: 'template_spec/button.htl',
    name: 'button',
    data: {
      text: 'This is a button',
    },
  },
  page: {
    title: 'This is the title',
    list: [
      { title: 'item 1', children: [] },
      {
        title: 'item 2',
        children: [
          { title: 'item 2.1', children: [] },
          {
            title: 'item 2.2',
            children: [
              { title: ' item 2.2.1', children: [] },
            ],
          },
          { title: 'item 2.3', children: [] },
        ],
      },
      { title: 'item 2', children: [] },
    ],
  },
};
