const { Triangle, Circle, Square } = require('./shape');

describe('Triangle', () => {
    test('fill should be filled in by the argument passed to Triangle and Triangle should be using <polygon points /> to render properly', () => {
        const triangle = new Triangle('green');
        const svgGenerate = triangle.render();
        expect(svgGenerate).toMatch(/^<polygon points=".+" fill="green"\/>$/);
    });
});

describe('Circle', () => {
    test('fill should be filled in by the argument passed to Circle and Circle should be using <circle /> to render properly', () => {
        const circle = new Circle('green');
        const svgGenerate = circle.render();
        expect(svgGenerate).toMatch(/^<circle cx=".+" cy=".+" r=".+" fill="green"\/>$/);
    });
});

describe('Square', () => {
    test('fill should be filled in by the argument passed to Square and Square should be using <rect /> to render properly', () => {
        const square = new Square('green');
        const svgGenerate = square.render();
        expect(svgGenerate).toMatch(/^<rect x=".+" y=".+" width=".+" height=".+" fill="green"\/>$/);
    });
});