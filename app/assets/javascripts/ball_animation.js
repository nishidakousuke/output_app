window.addEventListener('turbolinks:load', function(){
  var NBALL = 10; //ボールの数
  var R = 40; //ボールの半径
  var TIME_INTERVAL = 33; //アニメーションの時間間隔
  var BACK_ALPHA = 0.3; //背景のα値
  //canvasコンテキストを得る
  var canvas = document.getElementById('mycanvas');
  var ctx = canvas.getContext('2d');
  //壁を表すオブジェクト
  var wall = {left: 0, right: canvas.width, top: 0, bottom: canvas.height};
  //ボールオブジェクトをNBALL個作成し、配列ballsに格納
  var balls = [];
  for(var i = 0; i < NBALL; i++){
    balls[i] = new Ball(wall.right / 2, wall.bottom / 2, R);
    balls[i].setVelocityAsRandom(2, 7).setColorAsRandom(50, 255);
  }
  // アニメーションを行う：TIME_INTERVAL(ms)ごとにdrawFrameを実行
  this.setInterval(drawFrame, TIME_INTERVAL);
  //アニメーションのフレームを描画
  function drawFrame(){
    ctx.fillStyle = 'rgba(30, 30, 30,' + BACK_ALPHA + ')';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //ボールの位置を更新して描画
    for(i = 0; i < balls.length; i++){
      balls[i].move().collisionWall(wall).draw(ctx);
    }
  }
});
//Ballコンストラクタ
function Ball(x, y, r, vx, vy, color){
  this.x = x;
  this.y = y;
  this.r = r;
  this.vx = vx;
  this.vy = vy;
  this.color = color;
}
//Ballコンストラクタのプロトタイプ
Ball.prototype = {
  //速度をランダムに決定する
  setVelocityAsRandom: function(vmin, vmax){
    var v = vmin + Math.random() * (vmax - vmin);
    var t = 2 * Math.PI * Math.random();
    this.vx = v * Math.cos(t);
    this.vy = v * Math.sin(t);
    return this;
  },
  //色をランダムに決定する
  setColorAsRandom: function(lmin, lmax){
    var R = Math.floor(lmin + Math.random() * (lmax - lmin));
    var G = Math.floor(lmin + Math.random() * (lmax - lmin));
    var B = Math.floor(lmin + Math.random() * (lmax - lmin));
    this.color = 'rgb('+ R + ',' + G + ',' + B + ')';
    return this;
  },
  //ボールを描く
  draw: function(ctx){
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, true);
    ctx.fill();
    return this;
  },
  //位置を更新
  move: function(){
    this.x += this.vx;
    this.y += this.vy;
    return this;
  },
  //壁との衝突
  collisionWall: function(wall){
    if(this.x - this.r < wall.left){ //左方向の壁と衝突
      this.x = wall.left + this.r;
      if(this.vx < 0) this.vx *= -1;
    }
    if(this.x + this.r > wall.right){ //右方向の壁と衝突
      this.x = wall.right - this.r;
      if(this.vx > 0) this.vx *= -1;
    }
    if(this.y - this.r < wall.top) { //上方向の壁と衝突
      this.y = wall.top + this.r;
      if(this.vy < 0) this.vy *= -1;
    }
    if(this.y + this.r > wall.bottom) { //下方向の壁と衝突
      this.y = wall.bottom - this.r;
      if(this.vy > 0) this.vy *= -1;
    }
    return this;
  }
};
