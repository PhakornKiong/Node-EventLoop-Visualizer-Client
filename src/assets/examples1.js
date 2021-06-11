export default [
{
  name: 'Call Stack',
  value:`
function tenth() { }

function ninth() { tenth() }

function eigth() { ninth() }

function seventh() { eigth() }

function sixth() { seventh() }

function fifth() { sixth() }

function fourth() { fifth() }

function third() { fourth() }

function second() { third() }

function first() { second() }

first();
`.trim(),
},
{
  name: 'Task Queue',
  value: `
setTimeout(function a() {}, 1000);

setTimeout(function b() {}, 500);

setTimeout(function c() {}, 0);

function d() {}

d();
`.trim(),
},
{
  name: 'Microtask Queue',
  value: `
fetch('https://www.google.com')
  .then(function a() {});

Promise.resolve()
  .then(function b() {});

Promise.reject()
  .catch(function c() {});
`.trim(),
},
{
  name: 'Tasks vs Microtasks',
  value: `
setTimeout(function a() {}, 0);

Promise.resolve().then(function b() {});
`.trim(),
},
{
  name: 'Timeout vs SetImmediate vs NextTick',
  value: `
  setImmediate(function immediate1() {
    console.log('this is set immediate 1');
  });
  setImmediate(function immediate2() {
    console.log('this is set immediate 2');
  });
  setImmediate(function immediate3() {
    console.log('this is set immediate 3');
  });
  console.log('1');
  setTimeout(function timeout1() {
    console.log('this is set timeout 1');
  }, 0);
  setTimeout(function timeout2() {
    console.log('this is set timeout 2');
    process.nextTick(function timeout2NextTick() {
      console.log('this is process.nextTick added inside setTimeout');
    });
  }, 0);
  setTimeout(function timeout3() {
    console.log('this is set timeout 3');
  }, 100);
  setTimeout(function timeout4() {
    console.log('this is set timeout 4');
  }, 100);
  setTimeout(function timeout5() {
    console.log('this is set timeout 5');
  }, 100);
  console.log('2');
  process.nextTick(function nextTick1() {
    console.log('this is process.nextTick 1');
  });
  process.nextTick(function nextTick2() {
    process.nextTick(
      console.log.bind(console, 'this is the inner next tick inside next tick')
    );
  });
  process.nextTick(function nextTick3() {
    console.log('this is process.nextTick 3');
  });
  process.nextTick(function nextTick4() {
    console.log('this is process.nextTick 4');
  });
  process.nextTick(function nextTick5() {
    console.log('this is process.nextTick 5');
  });
  
`.trim(),
},
];
