# Immer

Immutable 한 값을 편하게 만들어주는 라이브러리

<br>
<br>

## 사용법

Immutable한 값을 return

```js
import produce from "immer";

const complicatedObj = {
  a: {
    b: {
      c: 3,
    },
  },
};

produce(complicatedObj, (draft) => {
  draft.a.b.c = 4;
});
```

update 함수를 return

```js
import produce from "immer";

const complicatedObj = {
  a: {
    b: {
      c: 3,
    },
  },
};

const update = produce((draft) => {
  draft.a.b.c = 4;
});
update(complicated);
```

<br><br>

## 리액트에 적용

update 함수를 return하는 방식을 이용하면, useState에서 유용하게 사용이 가능하다.

```js
// component code ...
const nextId = useRef(1);
const [form, setForm] = useState({ name: "", username: "" });
const [data, setData] = useState({
  array: [],
  uselessValue: null,
});

const onSubmit = useCallback(
  (e) => {
    e.preventDefault();

    const info = {
      name: form.name,
      username: form.username,
    };

    setData(
      // 성능최적화 참고
      // produce(data, (draft) => {
      //   draft.array.push(info);
      // })
      produce((draft) => {
        draft.array.push(info);
      })
    );
  },
  // [data, form.name, form.username] -- 성능최적화 참고
  [form.name, form.username]
);
// component code ...
```
