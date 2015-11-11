# blocks

Blocks is a super tiny CSS scaffolding framework. Build cities with them.

### Usage

Include `blocks.css` in the `<head>` of your page:

```HTML
<link rel="stylesheet" href="path/to/blocks.css">
```

Or you can include `blocks.scss` in your SASS preprocessor:

```SCSS
@import "blocks";
```

Blocks can exist in a `.row`, which is essentially a clearfix for blocks. A row of blocks can add up to 12, maximum. For example, you can have `.block-3` and `.block-9`, which will produce two sections, one 33% of the width of your container, and the other 66% width.

```HTML
<div class="block-3"></div>
<div class="block-9"></div>
```

Note that **block widths are in percentages**, which means they will scale to the width of your containing element. Make sure to edit their breakpoint to match your website.
