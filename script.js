(() => {
  //#region Ex 1.1:
  const numbers = [1, 5, 3, 7, 4, 3, 7];
  const names = ["Arsen", "Maria", "Vladimir", "Benjamin"];
  function getFirstValue(array) {
    // typeof(array[0]) === 'number' ? return array[0] : return ('NaN');
    if (typeof array[0] === "number") {
      return array[0];
    } else {
      return "Not a number array";
    }
  }
  console.log(`result of getFirstValue(numbers): ${getFirstValue(numbers)}`);
  console.log(`result of getFirstValue(names) ${getFirstValue(names)}`);
  //#endregion

  //#region Ex 1.2:
  function makePair(par1, par2) {
    return [par1, par2];
  }
  console.log(`result of makePair(1,2) below:`);
  console.log(makePair(1, 2));
  //#endregion

  //#region Ex 1.3:

  function drop(arr, dropNum) {
    return arr.slice(dropNum);
  }

  console.log(
    `result of drop(["first element", "second element", "third element"], 2) below:`
  );
  console.log(drop(["first element", "second element", "third element"], 2));

  //#endregion

  //#region Ex 1.4:

  function reverse(arr) {
    let temp;
    const iterations = Math.floor(arr.length / 2);
    for (i = 0; i < iterations; i++) {
      temp = arr[i];
      arr[i] = arr[arr.length - (i + 1)];
      arr[arr.length - (i + 1)] = temp;
    }
    return arr;
  }

  console.log(`result of reverse([1,2,3,4,5,6,7,8]) below:`);
  console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8]));
  console.log(
    `result of reverse(['first','second','third','firth','fifth']) below:`
  );
  console.log(reverse(["first", "second", "third", "firth", "fifth"]));

  //#endregion

  //#region Ex 1.5:

  function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (const num of arr) {
      if (min > num) {
        min = num;
      }
      if (max < num) {
        max = num;
      }
    }
    return [min, max];
  }

  console.log(`result of minMax([1, 2, 3, 4, 5]) below:`);
  console.log(minMax([1, 2, 3, 4, 5]));
  console.log(`result of minMax([2334454, 5]) below:`);
  console.log(minMax([2334454, 5]));
  console.log(`result of minMax([1]) below:`);
  console.log(minMax([1]));

  //#endregion

  //#region Ex 1.6:

  function search(arr, item) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  }

  console.log(`result of search([1, 5, 3], 5) below:`);
  console.log(search([1, 5, 3], 5));
  console.log(`result of search([9, 8, 3], 3) below:`);
  console.log(search([9, 8, 3], 3));
  console.log(`result of search([1, 2, 3], 4) below:`);
  console.log(search([1, 2, 3], 4));

  //#endregion

  //#region Ex 1.7:

  function canNest(arr1, arr2) {
    if (
      minMax(arr1)[0] > minMax(arr2)[0] &&
      minMax(arr1)[1] < minMax(arr2)[1]
    ) {
      return true;
    } else {
      return false;
    }
  }

  console.log(`result of canNest([1, 2, 3, 4], [0, 6]) below:`);
  console.log(canNest([1, 2, 3, 4], [0, 6]));
  console.log(`result of canNest([3, 1], [4, 0]) below:`);
  console.log(canNest([3, 1], [4, 0]));
  console.log(`result of canNest([9, 9, 8], [8, 9]) below:`);
  console.log(canNest([9, 9, 8], [8, 9]));
  console.log(`result of canNest([1, 2, 3, 4], [2, 3]) below:`);
  console.log(canNest([1, 2, 3, 4], [2, 3]));

  //#endregion

  //#region Ex 2.1:

  function countTrue(arr) {
    let numOfTrues = 0;
    for (const item of arr) {
      if (item === true) {
        numOfTrues++;
      }
    }
    return numOfTrues;
  }

  console.log(`Result of countTrue([true, false, false, true, false]) below:`);
  console.log(countTrue([true, false, false, true, false]));
  console.log(`Result of countTrue([false, false, false, false]) below:`);
  console.log(countTrue([false, false, false, false]));
  console.log(`Result of countTrue([]) below:`);
  console.log(countTrue([]));

  //#endregion

  //#region Ex 2.2:

  function toArray(obj) {
    let objArr = [];
    for (const key in obj) {
      objArr.push([key, obj[key]]);
    }
    return objArr;
  }

  console.log(`Result of toArray({ a: 1, b: 2 }) below:`);
  console.log(toArray({ a: 1, b: 2 }));
  console.log(`Result of toArray({ shrimp: 15, tots: 12 }) below:`);
  console.log(toArray({ shrimp: 15, tots: 12 }));
  console.log(`Result of toArray({}) below:`);
  console.log(toArray({}));

  //#endregion

  //#region Ex 2.3:

  function changeEnough(change, cost) {
    const money =
      change[0] * 0.25 + change[1] * 0.1 + change[2] * 0.05 + change[3] * 0.01;
    if (money >= cost) {
      return true;
    } else {
      return false;
    }
  }

  console.log(`Result of changeEnough([2, 100, 0, 0], 14.11) below:`);
  console.log(changeEnough([2, 100, 0, 0], 14.11));
  console.log(`Result of changeEnough([0, 0, 20, 5], 0.75) below:`);
  console.log(changeEnough([0, 0, 20, 5], 0.75));
  console.log(`Result of changeEnough([30, 40, 20, 5], 12.55) below:`);
  console.log(changeEnough([30, 40, 20, 5], 12.55));
  console.log(`Result of changeEnough([10, 0, 0, 50], 3.85) below:`);
  console.log(changeEnough([10, 0, 0, 50], 3.85));
  console.log(`Result of changeEnough([1, 0, 5, 219], 19.99) below:`);
  console.log(changeEnough([1, 0, 5, 219], 19.99));

  //#endregion

  //#region Ex 2.4:

  function arrayOfMultiples(num, length) {
    let arr = [];
    for (i = 1; i <= length; i++) {
      arr.push(num * i);
    }
    return arr;
  }

  console.log(`Result of arrayOfMultiples(7, 5) below:`);
  console.log(arrayOfMultiples(7, 5));
  console.log(`Result of arrayOfMultiples(12, 10) below:`);
  console.log(arrayOfMultiples(12, 10));
  console.log(`Result of arrayOfMultiples(17, 6) below:`);
  console.log(arrayOfMultiples(17, 6));

  //#endregion
})();
