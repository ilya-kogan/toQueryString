import toQueryString from "./toQueryString"

describe("toQueryString", () => {
  test("simple key value", () => {
    expect(
      toQueryString({
        name: "petya",
        age: 20
      })
    ).toEqual("name=petya&age=20");
  });

  test("inner array", () => {
    expect(
      toQueryString({
        mealTypes: [0, 1]
      })
    ).toEqual("mealTypes[]=0&mealTypes[]=1");
  });

  test("inner object", () => {
    expect(
      toQueryString({
        traveller: { name: "petya" }
      })
    ).toEqual("traveller[name]=petya");
  });

  test("compound", () => {
    expect(
      toQueryString({
        traveller: {
          name: "petya",
          kids: [5, 7]
        },
        history: { "2020-01-01": { resort: "sochi" } }
      })
    ).toEqual(
      "traveller[name]=petya&traveller[kids][]=5&traveller[kids][]=7&history[2020-01-01][resort]=sochi"
    );
  });
});
