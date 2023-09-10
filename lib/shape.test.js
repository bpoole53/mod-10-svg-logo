const { Triangle } = require('./shape');

describe('Triangle', () => {
    test('fill should be filled in by the argument passed to Triangle and Triangle should be using polygon points to render properly', () => {
      const triangle = new Triangle('green');
      const svgGenerate = triangle.render();
      expect(svgGenerate).toMatch(/^<polygon points=".+" fill="green"\/>$/);
    });
  });