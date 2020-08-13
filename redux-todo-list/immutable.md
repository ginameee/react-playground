# Immutable
Javascript의 불변성 데이터를 다룰 수 있도록 도와주는 라이브러리

--- 
## 기본
### Immutable.Map
불변성 데이터를 Immutable객체로 변환
<br><br>


### Immutable.fromJS
불변성 데이터 뿐만 아니라 내부의 불변성 데이터들까지도 Immutable 객체로 변환 <br>
( 데이터구조가 복잡할 경우 fromJS쓰면 됨 )
<br><br>


### new Immutable({}).toJS
Immutable객체를 Javascript 객체로 변환
<br><br>

```javascript
const { Map, fromJS } = Immutable;


// const data = Map({
//   a: 1,
//   b: 2,
//   c: Map({
//     d: 3,
//     e: 4,
//     f: 5
//   })
// });

// this is the same as above
const data = fromJS({
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
    f: 5
  }
});

let result;

// result = data.get('a') // 1
// result = data.getIn(['c', 'd']) // 3
// result = data.setIn(['c', 'd'], 6).getIn(['c', 'd']) // 6
console.log(result);
```

---

## List
Immutable에서 사용하는 Array

```javascript
const { Map, List, fromJS } = Immutable;

// const list = List([0, 1, 2, 3, 4]);
// const list = fromJS([0, 1, 2, 3, 4]);



// const list = List(
//   [
//     Map({ value: 0 }),
//     Map({ value: 1 }),
//     Map({ value: 2 })
//   ]
// );
const list = fromJS(
  [
    { value: 0 },
    { value: 1 },
    { value: 2 }
  ]
)

let result;
// result = list.get(0).toJS(); // { value: 0 }
// result = list.getIn([0, 'value']) // 0

// result = list.set(0, Map({value: 10})).get(0).toJS(); // { value: 10 }
// result = list.setIn([0, 'value'], 20).get(0).toJS(); // { value: 20 }
// result = list.update(1, item => item.set('value', item.get('value') * 5)).get(1).toJS(); // { value: 5 }

// result = list.push(Map({ value: 9 })).get(3).toJS(); // { value: 9 }
// result = list.unshift(Map({ value: -1 })).get(0).toJS(); // { value: -1 }
// result = list.delete(0).get(0).toJS(); // { value: 1 }

// result = list.isEmpty(); // false
// result = list.size; // 3


console.log(result);
```