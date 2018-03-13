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
###删除字符串中前后空格的方法
```js
//原生JS实现,将方法添加在string对象上
//使用正则表达式
String.prototype.trim=function(){
   var m=this.match(/^\s*(\S+(\s+\S+)*)\s*$/);
   return (m==null)?"":m[1];
}
//不使用正则表达式
String.prototype.trim=function(){
   var str = this;
   while(str[0] == " ") {
    str = str.substring(1);
   }
   while(str[str.length - 1] == " ") {
    str = str.substring(0, str.length-1);
   }
  
   return str;
}

//jQuery中的方法,删除字符串两端的空白字符
$.trim();
```
