var number = 1;
let count = 2;

function doSomething() {
  for (let i=0; i<5; i++) {
    console.log(i);
  }

  console.log("Finally: " + i);
}

doSomething();