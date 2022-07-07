Math typesetting using KaTex
==============

Use it for your book, by adding to your book.json:

```
{
    "plugins": ["katex"]
}
```

then run `gitbook install`.

## Usage

```
Inline math: $$\int_{-\infty}^\infty g(x) dx$$

Inline math disable $$@, $$(, $${

Block math:

$$
\int_{-\infty}^\infty g(x) dx
$$

Or using the templating syntax:

{% math %}\int_{-\infty}^\infty g(x) dx{% endblock %}
```


### Comparison with [plugin-katex](https://github.com/GitbookIO/plugin-katex)
- support more function from katex@0.15.3
- support neweset style from katex@0.15.3

