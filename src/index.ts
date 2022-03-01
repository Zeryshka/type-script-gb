abstract class MyGraphicsPrimitive2D {
    protected x: number
    protected y: number

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    shiftPrimitive(x: number, y: number): void {
        this.x += x;
        this.y += y;
    }
}

abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
    figureArea(): number {
        return this.x * this.y;
    }
}

class MyCircle extends MyAreaPrimitive2D {
    circleCenter: number
    radius: number

    constructor(x: number, y: number, circleCenter: number, radius: number) {
        super(x, y);
        this.circleCenter = circleCenter
        this.radius = radius
    }
}

const circle = new MyCircle(10, 20, 5, 10); // экземпляр класса MyCircle
console.log('MyCircle');
console.log(circle.figureArea()); // 200
circle.shiftPrimitive(1, 1); // сдвигаем X и Y на +1
console.log(circle.figureArea()); // 231

class MyRectangle extends MyAreaPrimitive2D {
    width: number
    height: number

    constructor(x: number, y: number, width: number, height: number) {
        super(x, y);
        this.width = width
        this.height = height
    }
}

const rectangle = new MyRectangle(10, 20, 5, 10); // экземпляр класса MyRectangle
console.log('MyRectangle');
console.log(rectangle.figureArea()); // 200
rectangle.shiftPrimitive(1, 1); // сдвигаем X и Y на +1
console.log(rectangle.figureArea()); // 231

