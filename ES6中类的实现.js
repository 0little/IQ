var Parent  = function () {

    // []表示的是公共方法的描述
    function Parent() {
        this.name = 12;
    }

    __createClass(Parent,[
        {key:"getName",value:function () {
                return "me";
            }},
    ],[
        {key:"getNa",value:function () {
            return 100;
        }}
    ]);
    return Parent;
}();

function defineProperites(constructor,properrites) {
    for (let i=0;i<properrites.length;i++){
        let obj = {...properrites[i],enumerable:true,writeable:true,configurable:true};
        Object.defineProperty(constructor,properrites[i].key,properrites[i]);
    }
    
}
function __createClass(constructor,proto,staticPro) {
    if(proto){
        defineProperites(constructor.prototype,proto);
    }
    if(staticPro){
        defineProperites(constructor,staticPro);
    }
}


function __classCallCheck(instance,constructor) {
    if(!instance instanceof constructor) throw Error("with new");
}
function __inherits(sub,sup) {
    //公有
   sub.prototype = Object.create(sup.prototype,{constructor:{value:sub}});
   //静态
   sub.__proto__ = sup;
}
var Child = function (Parent) {
    //子类中调用父类构造函数
    __inherits(Child,Parent);
    function Child(){
        Object.getPrototypeOf(Child).call(this);
        __classCallCheck(this,Child);
    }
    return Child;
}(Parent);

let child = new Child;
console.log(child.name);
