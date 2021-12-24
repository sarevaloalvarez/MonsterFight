class Bullet{
    constructor(x, y, dir){
        this.x=x;
        this.y=y;
        this.dir=dir;
        this.speed=12;
    }
    getX(){
        return this.x;
    }
    move(){
        this.x+=this.dir*this.speed;
    }
    
}