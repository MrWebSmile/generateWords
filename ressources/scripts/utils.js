function  getFile(){

   const file = "https://mrwebsmile.github.io/generateWords/ressources/divers/liste_francais.txt";

   fetch(file).then(function(response){
       return response.text();
   })
   .then(function(data){
       //console.log(data);
       let tab = data.split('\n');
       console.log(tab);
   });
}

function getRandomNumber(long,n){
    let rand = -1;
    let randTable =[];
    for(var i = 0; i<n;i++){
       rand = Math.floor(Math.random()*(long-0)+0);
       randTable.push(rand);
    }
    return randTable;
}