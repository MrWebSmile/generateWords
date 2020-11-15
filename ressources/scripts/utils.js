function  getFile(file){
   fetch(file).then(function(response){
       return response.text;
   });
}