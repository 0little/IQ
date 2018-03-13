# IQ
## 小题集锦

### 鼠标单击页面中任意标签，alert该标签的标签名
```js
document.onclick = function(e) {
  var e = (e||event);
  var o = e["targets"] || e[srcElement];
  alert(o.tagName.toLowerCase());
}
```
### 删除字符串中前后空格的方法
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

### 判断字符串内容是否为数字
```js
//正则表达式
function checkNumber(theObj) {
        var reg = /^[1-9]+.?[0-9]*$/;
        if (reg.test(theObj) || theObj === "0") {
            return true;
        }
        return false;
    }

```
### 函数柯里化
```js
var currying = function(fn) {
  var _args = [];
  return function () {
    if(arguments.length === 0) {
      return fn.apply(this, _args);
    }
    Array.prototype.push.apply(_args, [].slice.call(arguments);
    return arguments.calee;
  }
}

//乘法示例
var multi = function() {
  var total = 0;
  for(var i = 0, c; c = arguments[i++];) {
    total += c;
  }
  return total;
};

var sum = currying(multi);

sum = currying(multi);

sum(100, 200)(300);
sum(400);
console.log(sum()); //1000 (空白调用时才真正计算)

```
