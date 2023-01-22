# innerhtml-vs-appendchild-vs-append

Comparison: `innerHTML` vs `appendChild()` vs `append()`

## Preview 🎉

<https://piecioshka.github.io/innerhtml-vs-appendchild-vs-append/>

## Test results

Code below is execute 3_000 times.

`innerHTML`:
```js
$container.innerHTML += $element.outerHTML;
```

`appendChild()`:
```js
$container.appendChild($element);
```

`append()`:
```js
$container.append($element);
```

Results:

```
[Element exists in DOM: innerHTML] 3267 ms
[Element exists in DOM: appendChild()] 3 ms
[Element exists in DOM: append()] 3 ms
[Element does not exists in DOM: innerHTML] 2998 ms
[Element does not exists in DOM: appendChild()] 1 ms
[Element does not exists in DOM: append()] 1 ms
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2022
