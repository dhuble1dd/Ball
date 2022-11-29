const button = document.querySelector('.button');

const showMessage200 = props => alert(200);

button.addEventListener('click', showMessage200);

class MovingObject{
    constructor(x, y, backgroundColor = 'red'){
        const square = document.createElement('div');
        square.style.position = 'absolute';
        square.style.width = '40px';
        square.style.height = '40px';
        square.style.backgroundColor = backgroundColor;

       this.x = x;
       this.y = y;
       this.element = square
    }
    showObject(){
        document.querySelector('body').appendChild(this.element);
        console.log(this.element.style.top)
        this.element.style.top = this.y + 'px';
        this.element.style.left = this.x + 'px';
    }
};


const hereMeOut = ()=>({
    a: 1,
    b: 'hello'
})

const {a:aa, b} = hereMeOut();


const massive = [400, 500, 600, 700, 800];
const colors = ['blue', 'black', 'gray', 'green', 'gold']

massive.forEach((item, index) => {
    const movObj = new MovingObject(item, item, colors[index]);
    movObj.showObject();
})

