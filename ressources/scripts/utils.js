function  getFile(){
var file = "../ressources/divers/liste_francais.txt"
   fetch(file).then(function(response){
       console.log(response.text)
   });
}