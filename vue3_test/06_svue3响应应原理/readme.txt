Vue2.x的响应式：
  - 实现原理
    1. 对象类型：通过Object.defineProperty()对属性的读取、修改进行拦截（数据劫持）
    2. 数组类型：通过重写更新数组的一系列方法来实现拦截。（对数组变更方法进行了包裹）。
  - 存在问题：
    1. 新增属性、删除属性，界面不会更新。
    2. 直接通过下表修改数组，界面不会更新。
  - 解决：
    对象：
      - 添加：
          this.$set() & Vue.set()
      - 删除：
          this.$delete(this.person, 'name')
    数组：
      - unshift / filter / splice ...
      - this.$set()

Vue3.x的响应式：
  - 通过proxy代理
  - 通过reflect反射：对被代理对象的属性进行操作。

reactive 对比 ref:
- 从定义数据角度对比：
  1. ref用来定义：基本数据类型。
  2. reactive用来定义：对象or数组类型数据
  ps: ref也可以用来定义对象and数组类型数据，内部会自动通过reactive转为代理对象。
- 从原理角度：
  1. ref 通过 Object.defineProperty()
  2. reactive 通过 Proxy实现响应式，并通过Rflect操作原对象。
- 从使用角度：
....
