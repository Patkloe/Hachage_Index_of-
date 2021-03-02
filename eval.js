function eval(test){
 var dict_nbre = {'0':'0',1:'1',2:'2',3:'3',4:'4',5:'5',6:'6',7:'7',8:'8',9:'9'};
 var recup_val = Object.values(dict_nbre);
 var recup_key = Object.keys(dict_nbre);
 var comp, key;
 for(var i = 0; i < test.length; i++){
     comp = recup_val.indexOf(test[i]); // les valeurs recuperes dependent du type des keys et des valeurs de l'object defini. si dans object, les keys et value sont des strings, la recherche ne sera fructueuse que si la valeur cherchee est un string
     //key = recup_key.indexOf(0);
     alert("val" + " " + comp + " " + "key " /**+ " "+ key **/);
 }
}
eval('1234');
