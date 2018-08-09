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


### 判断一个数是否是整数
Math.floor(num) === num;
es6的方法：Number.isInteger(参数);

### 跨浏览器的事件处理程序
```javascript
var EventUtil = {
        addHandler: function (element, type, handler) {
            if(element.addEventListener) {
                element.addEventListener(type, handler, false);
            } else if(element.attachEvent) {
                element.attachEvent("on"+type, handler);
            } else {
                element["on"+type] = handler;
            }
        },
        removeHandler: function (element, type, handler) {
            if(element.removeEventListener) {
                element.removeEventListener(type, handler, false);
            } else if(element.detachEvent) {
                element.detachEvent("on"+type, handler);
            } else {
                element["on"+type] = null;
            }
        }
    }
```

### 跨浏览器的事件对象
```javascript
var EventUtil = {
      getEvent: function (event) {
          return event ? event : window.event;
      },
      getTarget: function (event) {
          return event.target || event.srcElement;
      },
      preventDefault: function (event) {
          if(evnet.preventDefault) {
              event.preventDefault();
          } else {
              event.returnValue = false;
          }
      },
      stopPropagation: function (event) {
          if(event.stopPropagation) {
              event.stopPropagation();
          } else {
              event.cancelBubble = true;
          }
      }  
    };
```
### 用Proxy实现属性的链式操作
#### 补充
`array.reduce(function(total, currentValue, currentIndex, arr), initialValue)`
- total:必须，初始值或者计算结果的返回值
- currentValue:必须，当前元素
- currentIndex:可选，当前元素索引
- arr:可选，当前数组对象
- initialValue:可选，传递给函数的初始值
#### 正文
```javascript
var pipe = (function () {
    return function (value) {
      var funcStack = []
      var oproxy = new Proxy({}, {
        get: function (pipeObject, fnName) {
          if(fnName === 'get') {
            return funcStack.reduce(function (val, fn) {
              return fn(val)
            }, value)
          }
          funcStack.push(window[fnName])
          return oproxy
        }
      })
      return oproxy
    }
  }())

  var double = n => n * 2
  var pow = n => n * n
  var reverseInt = n => n.toString().split("").reverse().join("") | 0
  pipe(3).double.pow.reverseInt.get //63
```

### 用proxy生成一个各种DOM节点的通用函数dom
```javascript
const dom = new Proxy({}, {
    get(target, property) {
      return function (attrs = {}, ...children) {
        const el = document.createElement(property)
        for(let prop of Object.keys(attrs)) {
          el.setAttribute(prop, attrs[prop])
        }
        for(let child of children) {
          if(typeof child === 'string') {
            child = document.createTextNode(child)
          }
          el.appendChild(child)
        }
        return el
      }
    }
  })

  const el = dom.div({}, 'Hello, my name is ',
  dom.a({heref: '//example.com'}, 'Mark'),
  '. I like:',
  dom.ul({},
    dom.li({}, 'The web'),
    dom.li({}, 'Food'),
    dom.li({}, '...actually that\'s it')
    )
  )

  document.body.appendChild(el)
```

### Promise加载图片
```javascript
const preloadImage = function (path) {
  return new Promise(function (resolve, reject){
    var image = new Image()
    image.onload = resolve
    image.onerror = reject
    image.src = path
  })
}
```

