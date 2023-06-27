# toQueryString

Функция toQueryString служит для преобразования объектов любой вложенности в строку специального формата

- @param {object} object - Объект, который необходимо преобразовать.
- @param {array} prevKeys - Предыдущие значения ключей для передачи в рекурсию.


## Примеры использования
**Пример 1:**
```
const objData1 = {
  name: "petya",
  age: 20
}
console.log(toQueryString(objData1));
```
**Result:**
```
name=petya&age=20
```
---
**Пример 2:** 
```
const objData2 = {
  mealTypes: [0, 1]
}
console.log(toQueryString(objData2));
```
**Result:**
```
mealTypes[]=0&mealTypes[]=1
```
---

**Пример 3:**
```
const objData3 = {
  traveller: { name: "petya" }
}
console.log(toQueryString(objData3));
```
**Result:**
```
traveller[name]=petya
```
---

**Пример 4:**
```
const objData4 = {
  traveller: {
    name: "petya",
    kids: [5, 7]
  },
  history: {
    "2020-01-01": {
      resort: "sochi"
    }
  }
}
console.log(toQueryString(objData4));
```
**Result:**
```
traveller[name]=petya&traveller[kids][]=5&traveller[kids][]=7&history[2020-01-01][resort]=sochi
```
---
