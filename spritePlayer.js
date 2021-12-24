class SpritePlayer{
	constructor(x, y=200, speed=1, image, frameWidth, frameHeight, numCells){
		this.x=x;
		this.y=y;
		this.speed=speed;
		this.image=image;
		this.frameW=frameWidth;
		this.frameH=frameHeight;
		this.frameX=0;
		this.frameY=1;
		this.dir=0;
		this.numCells=numCells;
		this.jump=false;
		this.shoot=0;
	}
	
	move(canvas, keys, timing){
		if(timing%6==0){
			this.frameX++;
			// shoot changes the frameY on the sprite sheet
			if(keys.shift)
				this.shoot=1;
			else
				this.shoot=0;
				

			if(!this.jump){
				this.numCells=8;
				this.frameY=1+this.dir+this.shoot;
			}
			if(keys.right){
				this.dir=0;
				this.x+=this.speed;
				this.numCells=8;
				this.frameY=3+this.shoot;
			}
			if(keys.left){
				this.x-=this.speed;
				this.numCells=8;
				this.dir=8;
				this.frameY=11+this.shoot;
			}
			if(keys.up || this.jump){
				this.numCells=9;
				this.frameY=5+this.dir;
				if(!this.jump){
					this.frameX=0;
					this.jump=true;
				}
				if(this.frameX<5)
					this.y-=this.speed*3;
				if(this.frameX>=5)
					this.y+=this.speed*3;
				if(this.frameX==this.numCells)
					this.jump=false;
			}
		}
		if(this.frameX==this.numCells)
			this.frameX=0;
	}
	
	draw(ctx){
		ctx.beginPath();
			ctx.drawImage(this.image, this.frameX*this.frameW, this.frameY*this.frameH, this.frameW, this.frameH, this.x, this.y, 100, 100);
		ctx.closePath();
	}
	
}
