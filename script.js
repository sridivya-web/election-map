

var createcanditate = function(name,color){
var politician={};

politician.name=name;
politician.electionresults=null;
politician.totalvotes=0;
politician.partycolor=color;  
  
  politician.tallytotalvotes =function(){
  
  this.totalvotes=0;
  
 for(var i=0;i<this.electionresults.length;i++){
    this.totalvotes=(this.totalvotes + this.electionresults[i]);
           
  }     
  
  };   
  return politician;
 
};

/*ploiticians*/

var elect1= createcanditate("Joe William",[132, 17, 11]);
var elect2= createcanditate("Donald Jacob",[245, 141, 136]);

elect1.electionresults=[5,1,7,2,3,3,6,4,2,1,1,4,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
elect1.electionresults[9]=1;
elect1.electionresults[4]=17;
elect1.electionresults[43]=11;


elect2.electionresults=[4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];
elect2.electionresults[9]=28;
elect2.electionresults[4]=38;
elect2.electionresults[43]=27;



var setStateResults = function(state){
    
 
  
    theStates[state].winner = null;
  
        if (elect1.electionresults[state] > elect2.electionresults[state]) {
        
        theStates[state].winner = elect1; //set winner to the candidate object, not the candidate's name this time
 
    } else if (elect1.electionresults[state] < elect2.electionresults[state]) {
 
        theStates[state].winner = elect2;
 
    }
    
  console.log(theStates[state].winner);

  
  var stateWinner = theStates[state].winner;
     
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partycolor;
  } else {
    theStates[state].rgbColor = [11,32,57];
     }
  
var stateInfotable=document.getElementById('stateResults');
var header=stateInfotable.children[0];
var body = stateInfotable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];

  
  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText="(" +theStates[state].nameAbbrev + ")";
  candidate1Name.innerText=elect1.name;
  candidate2Name.innerText=elect2.name;
  candidate1Results.innerText=elect1.electionresults[state];
  candidate2Results.innerText=elect2.electionresults[state];
  
 

if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner.name;
}
  
  
}



elect1.tallytotalvotes();
elect2.tallytotalvotes();


var winnername="";

if(elect1.totalvotes>elect2.totalvotes){
  
   winnername=elect1.name;
  
}
else if(elect2.totalvotes>elect1.totalvotes){
 winnername=elect2.name;
}
else {winner="Draw..";}



console.log("The Winner is " + winnername);

var countryInfotable=document.getElementById('countryResults');
var row=countryInfotable.children[0].children[0];

row.children[0].innerText=elect1.name;
row.children[1].innerText=elect1.totalvotes;
row.children[2].innerText=elect2.name;
row.children[3].innerText=elect2.totalvotes;
row.children[5].innerText=winnername;





