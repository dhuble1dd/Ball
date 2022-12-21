//// const button = document.querySelector('.button');

//// const showMessage200 = props => alert(200);

//// button.addEventListener('click', showMessage200);

//// class MovingObject{
////     constructor(x, y, backgroundColor = 'red'){
////         const square = document.createElement('div');
////         square.style.position = 'absolute';
////         square.style.width = '40px';
////         square.style.height = '40px';
////         square.style.backgroundColor = backgroundColor;

////        this.x = x;
////        this.y = y;
////        this.element = square
////     }
////     showObject(){
////         document.querySelector('body').appendChild(this.element);
////         console.log(this.element.style.top)
////         this.element.style.top = this.y + 'px';
////         this.element.style.left = this.x + 'px';
////     }
//// };


//// const hereMeOut = ()=>({
////     a: 1,
////     b: 'hello'
//// })

//// const {a:aa, b} = hereMeOut();


//// const massive = [400, 500, 600, 700, 800];
//// const colors = ['blue', 'black', 'gray', 'green', 'gold']

//// massive.forEach((item, index) => {
////     const movObj = new MovingObject(item, item, colors[index]);
////     movObj.showObject();
//// })


//const hello = document.querySelector('.helo')

//const bcr = hello.getBoundingClientRect();

//console.log('bcr is ', bcr)

//// this.top = this.position.y;
//// this.bottom = this.top + this.position.height;
//// this.left = this.position.x;
//// this.right = this.left + this.position.width;

//let promise = new Promise((resolve, reject) => {
//    setTimeout(() => resolve('done'), 1000);
//    //setTimeout(() => reject(new Error('Whoooops!!!')), 1000);
//});

//promise.then(
//    result => alert(result),
//    error => alert(error)
//)
//promise.then(alert);
//promise.then(null, alert)
//promise.catch(alert);

//new Promise((resolve, reject) => {
//    //setTimeout(() => resolve('value'), 2000);
//    throw new Error('error');
//})

//.finally(() => alert('Промис завершен'))
////.then(alert);
//.catch(alert)

//function loadScript(src) {
//    return new Promise((resolve, reject) => {
//        let script = document.createElement('script');
//        script.src = src;

//        script.onload = () => resolve(script);
//        script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

//        document.head.append(script);
//    })
//}

//let promise = loadScript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js");

//promise.then(
//    script => alert(`${script.src} загружен!`),
//    error => alert(`Ошибка: ${error.message}`)
//)

//promise.then(script => alert('Еще один обработчик...'));

//function delay(ms) {
//    return new Promise(resolve => setTimeout(resolve, ms));
//}

//delay(3000).then(() => alert('выполнилось через 3 секунды'));

//function go() {
//    showCircle(300, 300, 100).then(div => {
//      div.classList.add('message');
//      div.append("Hello, world!");
//    });
//  }

//  function showCircle(cx, cy, radius) {
//    let div = document.createElement('div');
//    div.style.width = 0;
//    div.style.height = 0;
//    div.style.left = cx + 'px';
//    div.style.top = cy + 'px';
//    div.className = 'circle';
//    document.body.append(div);

//    return new Promise(resolve => {
//      setTimeout(() => {
//        div.style.width = radius * 2 + 'px';
//        div.style.height = radius * 2 + 'px';

//        div.addEventListener('transitionend', function handler() {
//          div.removeEventListener('transitionend', handler);
//          resolve(div);
//        });
//      }, 0);
//    })
//  }

//new Promise(function(resolve, reject) {

//    setTimeout(() => resolve(1), 1000); 
  
//  }).then(function(result) { 
  
//    alert(result); 
//    return result * 2;
  
//  }).then(function(result) { 
  
//    alert(result); 
//    return result * 2;
  
//  }).then(function(result) {
  
//    alert(result); 
//    return result * 2;
  
//  });

//new Promise(function(resolve, reject) {

//    setTimeout(() => resolve(1), 1000);
  
//  }).then(function(result) {
  
//    alert(result); 
  
//    return new Promise((resolve, reject) => { 
//      setTimeout(() => resolve(result * 2), 1000);
//    });
  
//  }).then(function(result) { 
  
//    alert(result); 
  
//    return new Promise((resolve, reject) => {
//      setTimeout(() => resolve(result * 2), 1000);
//    });
  
//  }).then(function(result) {
  
//    alert(result); 
  
//  });

//Promise.any([
//    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Ошибка!")), 1000)),
//    new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
//    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
//  ]).then(alert); 

//fetch('https://jsonplaceholder.typicode.com/todos/1')
//  .then(response => response.json())
//  .then(json => console.log(json))

//axios.get("https://jsonplaceholder.typicode.com/todos/1")
//  .then(response => console.log("response", response.data))

//fetch("https://jsonplaceholder.typicode.com/posts", {
//  method: "POST",
//  body: JSON.stringify({
//    title: "Title of post",
//    body: "Post Body"
//  })
//})
//  .then(response => {
//    if (!response.ok) throw Error(response.statusText);
//    return response.json();
//  })
//  .then(data => console.log(data))
//  .catch(error => console.log(error));

//axios
//  .post("https://jsonplaceholder.typicode.com/posts", {
//    title: "Title of post",
//    body: "Body of post"
//  })
//  .then(response => console.log(response.data))
//  .catch(error => console.log(error))


