# highlight-code-in-text

The script checks the text for the presence of a search range, if it finds it, wraps it in a div, and then rewrites the text

> You need to call a function with a parameter (block class with text)
```
findRowCode('.text');
```

> Search range (can be changed)
```
/[\_\/\-\\]|.jsp|.html|.css|.js|.txt|.png|.jpg|.svg/gm
```

> Wrapper created for the found code (can be changed)
```
`<div style="color: #CA0000; font-size: 13px;">example</div>`
```
