function forLoop(anArray){
    for (let i = 0; i < 25; i++){
      anArray[i] = `"I am ${i} strange loop${i === 1 ? '' : 's'}."`
    }
    return anArray;
  }
  
  function whileLoop(countdown){
        while(countdown > 0){
        console.log(--countdown);
      }
      return 'done';
  }
  
  function maybeTrue() {
  return Math.random() >= 0.5
}
  
  function doWhileLoop(anArray){
    do{
      anArray.pop();
    }while(array.length > 0 && maybeTrue());
  }