# Contributing

## Dependencies
 * Ruby 1.9 or later
   * Bundler
 * Node.js 8.x or later

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

	properties: here; # Sorted alphabetically

	.sub-selector { # Grouped logically
		// Lather, rinse, repeat
	}
}
```

### LESS Framework
The site is constructed using the Nuck Framework 1.0, which is short and easy to understand. Go
read the source code in `framework.less` and you should be able to figure it out.

Everything is mixins.  Why?  Because it separates the CSS from the markup better than what
Bootstrap does, and encourages use of semantic classnames.

### Methodology
This is constructed with a rough SMACSS setup.  There's two nested layouts: the outer (dividing the
page into header, footer, and content), the inner (dividing the content into header, footer, and
content).  There is one outer layout, and multiple inner layouts (page, post, etc.)

Within the inner content area is a changing section.  There may be page-specific styles for this
section.
