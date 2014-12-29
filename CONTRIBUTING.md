# Contributing

## Dependencies
 * Ruby 1.9 or later
   * Bundler
 * Node.js 0.8.x or later

Install all libraries with `npm install && bundle install` once you have Ruby and Node installed.

## Grunt
Before deploy/merge/pull-request, you should run `grunt less:production` and include `css/style.css`
in your commit.  This precompilation is required because Github doesn't allow plugins for Jekyll.

During development, you can use `grunt watch` to have it recompile into the `site` directory.  It
also generates source maps for LESS, which most browsers will use in the dev tools.

## LESS
All styles are defined using the wonderful [LESS](http://lesscss.org/) language.

### Style Guide
```less
.selector {
	.mixins;
	.and-parameterized-mixins(2);

	properties: here; // Sorted alphabetically

	.sub-selector { // Grouped logically
		// Lather, rinse, repeat
	}
}
```

### LESS Framework
The site is constructed using Nuck's Drop Framework 1.0, which is compiled in `css/framework.less`.

Everything is mixins, vertical sizes are expressed in `rem` (root-relative em units) and horizontal
sizes are percentages.

### Methodology
This is constructed with a rough SMACSS setup.  There's two nested layouts: the outer (dividing the
page into header, footer, and content), the inner (dividing the content into header, footer, and
content).  There is one outer layout, and multiple inner layouts (page, post, etc.)

Within the inner layout is the content section.  There may be page-specific styles for this section.

 * Resets are in `css/reset.less`.
 * The outer layout is in `css/base.less`.
 * The inner layouts are in `css/layouts/*.less`.
 * The page specific styles are in `css/modules/*.less`.
