class Shape {
    constructor(){
        this.color = '';
    }
    setColor(shapeColor) {
        this.color = shapeColor;
    }
}

class Triangle extends Shape {
    constructor(shapeColor) {
        super();
        this.setColor(shapeColor);
    }
    render() {
        return `<polygon points="50 15, 100 100, 0 100" fill="${this.color}"/>`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50 r="40" fill="${this.color}/>`;
    }
}

class Square extends Shape {
    constructor(shapeColor) {
        super();
        this.setColor(shapeColor);
    }
    render() {
        return `<rect x="50" y="20" width="150" height="150" fill="${this.color}>`
    }
}

module.exports = {Shape, Triangle, Circle, Square}