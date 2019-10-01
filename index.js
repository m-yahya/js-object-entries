// sample object
const testObj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3,
            f: {
                g: 4
            }
        }
    }
};

/* expected object
const expectedObject= {
  a: '1 a',
  b: {
    c: '2 a',
    d: {
      e: '3 a',
      f: {
        g: '4 a'
      }
    }
  }
};
*/
let expectedObject = {};
const newObject = object => {
    Object.entries(object).forEach(([key, value]) => {
        if (typeof value === "object") {
            Object.keys(value).map(key => {
                value[key] = value[key] + " a";
                return value;
            });

            expectedObject[key] = value;
            //return newTest;
        } else {
            expectedObject[key] = value;
            return expectedObject;
        }
    });
    return expectedObject;
};
console.log(newObject(testObj));
