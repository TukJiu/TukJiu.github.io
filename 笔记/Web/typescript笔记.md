## TS

ts即typescript，后缀`ts`,需要“编译”成js使用

## 安装和编译

```shell
npm install -g typescript
```

```shell
tsc helloworld.ts
```

## 语法

语法上是js添加了类型

```typescript
let j: {name: string} & {age: number}; //j = {name: '李白'， age = 2022}
let k: 1|2|3|4|5; //类型的别名
```

```typescript
let i: {name: string, age: number};
i = {
    name: 'LiHua',
    age: 800
}
console.log(i.age === 800);
```

```typescript
enum Gender {
    Male   0,
    FeMale 1
}
```

```typescript
let h: [string, number];
h = ['hello', 1230];
```

```typescript
let e: string[];
e = ['a','b','c'];

let g = Array<number>;
g = [1,2,3];
```

```typescript
funcion abc(a: number, b: number): number {
    return a+b;
}
```

```typescript
let c: {name?: string, [propName: string]:any} //数组归属于最高级any，？代表可有可无
```

```typescript
a as string; //断言
let b: "a" | "b";
b="a"
b="b"
b="c" //报错
```

|  类型   |    例子    |             描述             |
| :-----: | :--------: | :--------------------------: |
| number  | 1,-33,2.5  |           任意数字           |
| string  |  "dwadad"  |          任意字符串          |
| boolen  | true,false |            布尔值            |
| 字面量  |   其本身   | 限制变量的值就是该字面量的值 |
|   any   |     *      |           任意类型           |
| unknown |     *      |        类型安全的any         |
|  void   |  undefind  |            没有值            |
|  never  |   没有值   |         不能是任何值         |
| object  |     {}     |      任意的JS对象array       |
|  array  |  [1,2,3]   |          任意JS数组          |
|  tuple  |   [4,5]    |    元素/固定长度数组(TS)     |
|  enum   | eunm{A,B}  |           枚举(TS)           |

若不写类型直接赋值，会在第一次赋值时确定类型