# highlight-code-in-text

The script checks the text for the presence of a search range, if it finds it, wraps it in a div, and then rewrites the text
***
Two variants of the function are presented, mass selection of text and changing it.
The second option is to return the new text by the function
***
> For the first option, you need to call the function with a parameter (block class with text)
```
findRowCode('.text');
```
> For the second option, you need to pass a function as a new value for ```innerHTML```
```
document.querySelector('.text2').innerHTML = returnFindRowCode('.text2');
```
> Search range (can be changed)
```
/[\_\/\-\\]|.jsp|.html|.css|.js|.txt|.png|.jpg|.svg/gm
```

> Wrapper created for the found code (can be changed)
```
`<div style="color: #CA0000; font-size: 13px;">example</div>`
```
