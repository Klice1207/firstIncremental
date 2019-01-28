var things = 0;
var money = 0;

function thingClick(num){
    things += num;
    document.getElementById("things").innerHTML = things;
};

function sellThings(){
	money = things;
	things = 0;
	document.getElementById("things").innerHTML = things;
	document.getElementById("money").innerHTML = money;
};

var thingers = 0;

function buyThinger(){
    var cost = Math.floor(10 * Math.pow(1.1, thingers));     //works out the cost of this Thinger
    if(things >= cost){                                   //checks that the player can afford the Thinger
        thingers += 1;                                   //increases number of Thingers
    	things -= cost;                          //removes the things spent
        document.getElementById('thingers').innerHTML = thingers;  //updates the number of Thingers for the user
        document.getElementById('things').innerHTML = things;  //updates the number of things for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1, thingers));       //works out the cost of the next Thinger
    document.getElementById('thingerCost').innerHTML = nextCost + " things";  //updates the Thinger cost for the user
};

var bigThingers = 0;

function buyBigThinger(){
    var cost = Math.floor(100 * Math.pow(1.1, bigThingers));
    if(money >= cost){       
        bigThingers += 1;                                   
    	money -= cost;                          
        document.getElementById('bigThingers').innerHTML = bigThingers; 
        document.getElementById('money').innerHTML = money; 
    };
    var nextCost = Math.floor(100 * Math.pow(1.25, bigThingers));       
    document.getElementById('bigThingerCost').innerHTML = nextCost + " money";  
};

setInterval(function(){ 
	thingClick(thingers);
	thingClick(bigThingers * 5);
}, 3000);