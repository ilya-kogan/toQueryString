/**
 * Функция toQueryString служит для преобразования объектов любой вложенности в строку специального формата
 *
 * @param {object} object - Объект, который необходимо преобразовать.
 * @param {array} prevKeys - Предыдущие значения ключей для передачи в рекурсию.
 */
function toQueryString(object, prevKeys = []) {
  // Определяем к какому типу относится значение (string или number)
  if (typeof object === "string" || typeof object === "number") {
    const stringData = prevKeys.map((key, i) => {
      if (!i) return key;
      if (!key) return "[]";

      return `[${key}]`;
    })

    return stringData.join("") + "=" + object;
  }

  // Определяем относится ли значение к Массиву.
  // Если да, то запускаем рекурсию, чтобы пробежаться по массиву.
  if (Array.isArray(object)) {
    const arrayData = object.map((item) => {
      return toQueryString(item, prevKeys.concat([null]))
    })

    return arrayData.join("&");
  }

  // Определяем относится ли значение к Объекту.
  // Если да, то запускаем рекурсию, чтобы пробежаться по объекту.
  if (typeof object === "object") {
    const objData = Object.keys(object).map((key) => {
      return toQueryString(object[key], prevKeys.concat([key]))
    })

    return objData.join("&");
  }
}


/*
* Примеры выполнения:
*/

//// Тест 1: "name=petya&age=20"
const objData1 = {
  name: "petya",
  age: 20
}
console.log(toQueryString(objData1));

//// Тест 2:  mealTypes[]=0&mealTypes[]=1
const objData2 = {
  mealTypes: [0, 1]
}
console.log(toQueryString(objData2));

//// Тест 3:  traveller[name]=petya
const objData3 = {
  traveller: { name: "petya" }
}
console.log(toQueryString(objData3));

//// Тест 4:  traveller[name]=petya&traveller[kids][]=5&traveller[kids][]=7&history[2020-01-01][resort]=sochi
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
