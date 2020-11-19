function  getFile(){

   var file = "https://mrwebsmile.github.io/generateWords/ressources/divers/liste_francais.txt";

   fetch(file).then(function(response){
       return response.text();
   })
   .then(function(data){
       console.log(data);
   });
}