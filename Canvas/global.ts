import {Canvas} from './index';
import {Point} from './Point';
import {Circle, Rectangle} from './Shapes';

// Set globals here.

let w = window as any;

w.Canvas = Canvas;
w.Point = Point;
w.Circle = Circle;
w.Rectangle = Rectangle;