
class highScore{
    constructor(highScores, dict){
        this.highScores = highScores;
        this.dict = dict;
    }
    addScore(name, score){
       
        if(this.highScores.length < 5){
            this.highScores.push(score);
            this.dict[score] = name;
            
        }
        else if (this.highScores.length == 5 && score> this.highScores[4]){
            delete this.dict[this.highScores[4]];
            this.highScores.splice(4,1);
            
            this.highScores.push(score);
            this.dict[score] = name;
        }
       this.highScores.sort(function(a, b){return b - a});
    }
    getHighScores(){return this.highScores;}
    getDict(){return this.dict;}
    getNames(){ 
        var temp = [];
        for(var i =0 ; i< this.highScores.length; i++){
            temp.push(this.dict[this.highScores[i]]);
        }
        return temp;
    }      
}

    