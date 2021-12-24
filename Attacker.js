class Attacker{ 

    constructor(img, frameY, y=Math.floor(Math.random()*300),speed=6 ){
        this.img=img;
        var rand=Math.random();
        
        if(frameY == 1) this.type = 0;
        else if(frameY == 0) this.type =1;


        if(rand<=.5){
            this.x=0;
            this.dir=0;
        }
        else{
            this.x=640;
            this.dir=3;
        }
		this.y=y;
        this.frameX=0;
        this.frameY=this.dir+frameY;
        this.frameW=64;
        this.frameH=64;
        this.speed=speed;
        this.numCells=4;
    }
    getRight() {return this.x+32;}
    getLeft()  {return this.x;}
    getType()  {return this.type;}

    move(timing){
        if(timing%6 == 0){
            this.frameX++;
            if(this.dir == 0){
                this.x+=this.speed;
                if(this.y != 410)
                    this.y+=this.speed;
            }
            else if (this.dir == 3){
                this.x-=this.speed;
                if(this.y !=410)
                    this.y+=this.speed;
            }
            if(this.frameX == this.numCells)
                this.frameX=0;
        }
    }
    
    draw(ctx){
        ctx.beginPath();
        ctx.drawImage(this.img,this.frameX*this.frameW,this.frameY*this.frameH,this.frameW,this.frameH,this.x,this.y,72,72);
        
        ctx.closePath();
    }
}