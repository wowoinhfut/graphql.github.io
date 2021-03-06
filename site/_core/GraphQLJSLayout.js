/**
 * Copyright (c) 2016, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

var path = require('path');
var React = require('react');
var Site = require('./Site');
var Marked = require('./Marked');
var DocsSidebar = require('./DocsSidebar');

export default ({ page, site }) =>
  <Site title={page.title} category={page.category} page={page}>
    <section>
      <div className="documentationContent">
        <div className="inner-content">
          <h1>{page.title}</h1>
          <Marked>{page.content}</Marked>
          {page.next &&
            <a className="read-next" href={path.resolve(page.url, page.next)}>
              <span className="read-next-continue">继续阅读 &rarr;</span>
              <span className="read-next-title">{page.nextPage.title}</span>
            </a>}
        </div>
        <DocsSidebar site={site} page={page} />
      </div>
    </section>
  </Site>
