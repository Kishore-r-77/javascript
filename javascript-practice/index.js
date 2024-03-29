//practice closures in javascript
const outer = () => {
  let a = 0;
  const inner = () => {
    a++;
    console.log(a);
  };
  return inner;
};

fn = outer();
fn();
fn();
globalThis.name = "kishore";

function sayMyName() {
  console.log(this.name);
}

sayMyName();
