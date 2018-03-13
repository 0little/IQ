# IQ
小题集锦
###鼠标单击页面中任意标签，alert该标签的标签名
```js
document.onclick = function(e) {
  var e = (e||event);
  var o = e["targets"] || e[srcElement];
  alert(o.tagName.toLowerCase());
}
```
