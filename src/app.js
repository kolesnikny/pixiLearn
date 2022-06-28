import { Application, Graphics } from 'pixi.js';
const app = new Application({
  width: 500,
  height: 500,
  transparent: false,
  antialias: true,
});

app.renderer.backgroundColor = 0x23395d;

app.renderer.resize(window.innerWidth, window.innerHeight);

app.render.view.style.position = 'absolute';

document.body.appendChild(app.view);

const rectangle = new Graphics();
rectangle.beginFill(0xaa33bb).drawRect(200, 200, 100, 120).endFill();

app.stage.addChild(rectangle);
