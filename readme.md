# Rxjs 创建型操作符 defer vs iif

创建一个Observable，在订阅时调用Observable工厂，为每个新的观察者创建一个Observable。

## type

`defer<R extends ObservableInput<any>>(observableFactory: () => R): Observable<ObservedValueOf<R>>`

### 参数：

- observableFactory: () => R	

要为订阅输出Observable的每个观察者调用的Observable工厂函数。还可以返回任何ObservableInput，这些输入将在飞行中转换为Observable。

### Returns

`Observable<ObservedValueOf<R>>`: 其观察者的订阅触发对给定Observable工厂函数的调用的Observable。.

## 例子 1

```typescript

import { defer, fromEvent, interval } from 'rxjs';
 
const clicksOrInterval = defer(() => {
  return Math.random() > 0.5
    ? fromEvent(document, 'click')
    : interval(1000);
});
clicksOrInterval.subscribe(x => console.log(x));
 
```
