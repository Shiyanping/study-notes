# 原型与原型链（待完善）

编程语言中最重要的就是面向对象，JavaScript 中通过原型和原型链完成面向对象中继承，所以原型和原型链在 JavaScript 中是非常重要的。

## 1. 原型的四条规则

- 所有的引用类型都可以在原型链上自定义添加属性和方法。

  ```js
  function Person() {}

  Person.prototype.name = '石燕平';
  Person.prototype.say = function() {
    console.log(this.name + '说话');
  };

  var person1 = new Person();
  person1.say();
  ```

- 函数都有自己的显式原型 `prototype` 属性，这个属性指向函数的原型对象，对象内有一个 `constructor` 属性，指向函数本身。

  **例：**

  ```js
  function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.sayName = function() {
      console.info(this.name);
    };
  }

  Person.prototype.sayName = function() {
    console.info(this.name);
  };

  console.info(Person);
  ```

  在 Chrome 中不好打印一个构造函数的原型，可以在 Firefox 中打印。

  ![](http://cdn.jinyueyue.cn/15470921319784.jpg)

- 所有的对象都有自己的隐式原型 `__proto__`，指向其父类型的 `prototype`。

  **例：**

  ```js
  const person1 = new Person('shiyanping', 20);

  console.log(person1);
  ```

  输出的结果如图所示：

  ![](http://cdn.jinyueyue.cn/15470925787223.jpg)

  也就是说明 `person1.__proto__ === Person.prototype`。

  上面两点就构成下面这幅图：

  ![](http://cdn.jinyueyue.cn/15471019533381.jpg)

  其实`Person.prototype`还有`__proto__`，指向`Object.prototype`。

  ![](http://cdn.jinyueyue.cn/15471023881693.jpg)

  在 `Object.prototype` 下的`constructor`就指向了构造函数`Object`本身了。

  ![](http://cdn.jinyueyue.cn/15471024565282.jpg)

- 使用引用类型的某个自定义属性时，如果没有这个属性，会去该引用类型的**proto**（也就是对应构造函数的 prototype）中去找，直到找到 Object。

## 2. 原型链继承

正确的继承要做到以下几点：

1. 拿到父类原型链上的方法和属性
2. 不能让构造函数执行 2 次
3. 引用的原型链不能是按地址传递
4. 修正子类的 constructor
