
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
    // for (let i = 1; i <= 3; i++) {
    //     // console.log(MultiplicationTablefor$i);
    //     for (let j = 1; j <= 10; j++) {
    //       let product = i * j;
    //       console.log( ixj );
    //     }
    //     console.log();
    //   }


    //   Lab 2
    // sum
    function getSum(a, b) {
        return a + b;
    }
    x = getSum(3, 5);
    console.log(x);

    // sub
    function sub(a, b) {
        return a - b;
    }
    y= sub(8, 5);
    console.log(y);

    // mul
    var mul =function(a,b){
        return a*b;
    }
    z=mul(5,5);
    console.log(z);

    // division
    function  division(a, b) {
        return a / b;
    }
    y= division(10, 2);
    console.log(y);


    //buzz 
     function add(num){
       if (num % 3==0 && num % 5==0){
        return("fuzz and buzz")
       }else if (num % 3 == 0){
        return("buzz")
       }else if (num % 5 == 0){
        return(" fuzz")
       }else{
        return("non")
       }
     }

     console.log(add(10));
           