
for( let index = 24; index >= 0 ; index -=2){

    console.log(index );

}
   


// 2
for (let i = 1; i<=10 ; i++){
    let square = i*i;
    console.log(square);

}

// 3
for (let i=1; i<=20 ; i+=2){
    console.log(i);
}

// 4

function printFibonacciSequence(n) {
    let a = 0, b = 1, nextTerm;
    console.log("Fibonacci Sequence:");
  
    for (let i = 0; i < n; i++) {
      console.log(a);
      nextTerm = a + b;
      a = b;
      b = nextTerm;
    }
  }
  
  printFibonacciSequence(10)


    // 5
    for (let i = 1; i <= 3; i++) {
        // console.log(MultiplicationTablefor$i);
        for (let j = 1; j <= 10; j++) {
          let product = i * j;
          console.log( ixj );
        }
        console.log();
      }