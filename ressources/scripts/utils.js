function  getWords(){

   const file = "https://mrwebsmile.github.io/generateWords/ressources/divers/liste_francais.txt";
   let parentNode = document.getElementById('words');

   deleteChild(parentNode,{tag:'p',type:''});
   fetch(file).then(function(response){
       return response.text();
   })
   .then(function(data){
       //console.log(data);
       let words = data.split('\n');
       let randT = getRandomNumber(words.length,6);
       for(let i = 0; i <randT.length;i++){
           let n = randT[i];
           let word = words[n];
           display(word);
           //console.log(word);
       }
   });
}

function getRandomNumber(long,n){
    let rand = -1;
    let randTable =[];
    for(let i = 0; i<n;i++){
       rand = Math.floor(Math.random()*(long-0)+0);
       randTable.push(rand);
    }
    return randTable;
}

 function display(value){

    let wordsDiv = document.getElementById("words");
    let wordP = document.createElement('p');
    wordP.innerText = value;
    wordsDiv.appendChild(wordP);

}

function deleteChild(parentNode,optionTag){
   
     
    let tag = optionTag.tag;
    let typeTag = optionTag.type;
    let nodeChild = "";
    switch (typeTag) {
        case "name":
            document.getElementsByName(tag);
            break;
        case "id":
            nodeChild = document.getElementById(tag);
            break;
        case "class":
            nodeChild = document.getElementsByClassName(tag);
            break;    
        default:
            nodeChild = document.getElementsByTagName(tag);
            break;
    }

    for(let i = 0;i<nodeChild.length;i++){
      
        parentNode.removeChild(nodeChild[i]);
    }
    
}

