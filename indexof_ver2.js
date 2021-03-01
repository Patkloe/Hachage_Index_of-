function decalage(str){
 var newstr = '';
 var dict_nbre = {0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9};
 var dict_alph = {0:'a',1:'b',2:'c',3:'d',4:'e',5:'f',6:'g',7:'h',8:'i',9:'j',10:'k',11:'l',12:'m',13:'n',14:'o',15:'p',16:'q',17:'r',18:'s',19:'t',20:'u',21:'v',22:'w',23:'x',24:'y',25:'z'};
 var keys_nbre = Object.values(dict_nbre);
 var conv;
  for(var j in keys_nbre)
     alert(j);
  var decouv = keys_nbre.indexOf(5);
     alert("index" + " " + decouv);
     alert(keys_nbre[decouv]);
 var keys_alph = Object.values(dict_alph);
 for(var i = 0; i < str.length; i++){
      alert("string en entree : " + " " + str[i]);
      conv = Number(str[i]);
      if(!isNaN(str[i]))
          alert("this a number");
      else
          alert("this is an alphabetic caracter");
   /** if(keys_nbre.indexOf(str[i])){
      alert("trouve" + " " + keys_nbre.indexOf(Number(str[i])));
      var ind_num = keys_nbre.indexOf(Number(str[i]));
          alert(keys_nbre[ind_num]);
          newstr = newstr + keys_nbre[ind_num + 1];
    }**/
 /** else if(keys_alph.indexOf(str[i])){
      alert("trouve" + " " + keys_alph.indexOf(str[i]));
      var ind_alph = keys_alph.indexOf(str[i]);
          newstr = newstr + keys_alph[ind_alph + 1];
    } **/
 }
return newstr;
}
decalage('123a');
