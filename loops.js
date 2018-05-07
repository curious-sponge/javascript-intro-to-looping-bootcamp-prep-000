function forLoop(anArray){
    for (let i = 0; i < 25; i++){
      anArray[i] = `"I am ${i} strange loop${i === 1 ? '' : 's'}."`
    }
    return anArray;
  }
  
  function whileLoop(x){
      let x = 10;
      while(x > 0){
        console.log(--x);
      }
      return 'done';
  }