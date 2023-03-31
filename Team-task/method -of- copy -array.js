//method -1//
 let originalArray = [{ id: 1, name: 'visha' }, { id: 2, name: 'mahi' }];
 let  copiedArray = [].concat(originalArray);
 console.log(originalArray);
 
//method-2
 const abArray = [{ id: 1, name: 'mahi' }, { id: 2, name: 'viva' }];
 const cdArray = Object.assign([], abArray);
 console.log(cdArray);
//method-3//
  const vArray = [{ id: 1, name: 'viva' }, { id: 2, name: 'nina' }];
  const dArray = [...vArray];
  console.log(dArray);
    
    //method-4//
    const aArray = [{ id: 1, name: 'viva' }, { id: 2, name: 'nina' }];
    const bArray = aArray;
    console.log(bArray);
    //05
    const o1 = { a: 1, b: 1, c: 1 };
    const o2 = { b: 2, c: 2 };
    const o3 = { c: 4 };

    const obj = Object.assign({}, o1, o2, o3);
    console.log(obj); 

    //06
    const array1 = ['a', 'b', 'c'];
    const array2 = array1
    array2.forEach(element => console.log(element));
//07
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    const newanimals = [animals.slice()];
console.log(newanimals);