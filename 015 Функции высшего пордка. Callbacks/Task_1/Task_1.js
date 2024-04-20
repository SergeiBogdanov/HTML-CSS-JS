function firstFunc(array, handler) {
    return "New value: " + array.map(handler).join('');
  }
  
  function handler1(item) {
    return item[0].toUpperCase() + item.slice(1);
  }
  
  function handler2(item) {
    return item * 10 + ', ';
  }
  
  function handler3(item) {
    return `${item.name} is ${item.age}` + ', ';
  }
  
  function handler4(item) {
    return item.split('').reverse().join('') + ', ';
  }
  
  // Примеры использования:
  console.log(firstFunc(['my', 'name', 'is', 'Trinity'], handler1));
  // "New value: MyNameIsTrinity"
  
  console.log(firstFunc([10, 20, 30], handler2));
  // "New value: 100200300"
  
  console.log(firstFunc([{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}], handler3));
  // "New value: Jhon is 45Aaron is 20"
  
  console.log(firstFunc(['abc', '123'], handler4));
  // "New value: cba321"
  