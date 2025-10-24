// ******************************Gestion d’une Bibliothèque************************************
const prompt = require("prompt-sync")();

let livers = [];
let emprunts = [];

// *******Introduire un livre********

    function Introduireunlivre(){
        let Titre = prompt("donner un titre : ");
        let Auteur = prompt("donner un Auteur : ");
        let Annee_de_publication = prompt("donner annee de publication  : ");

        let addoneliver={
             Id_livre: livers.length+1,
             Titre : Titre,
             Auteur : Auteur,
             Annee_de_publication : Annee_de_publication,
             Disponible : true
        }
        livers.push(addoneliver)
        return addoneliver
    }

 function Ajouter_plusieurs_livres(){
    let number_de_livers=prompt("Ajouter combien de livres tu veux ajouter :  ")
  for(let i = 0; i < number_de_livers ;i++){
     Introduireunlivre() 
  }

 }

//  **********Opérations sur les livres ***************

 function Afficher_les_livres(){
    livers.forEach(liver => {
        console.log(
            " ID : "+liver.Id_livre+"\n"+
            " liver title : "+liver.Titre+"\n"+
            " liver auteur : "+liver.Auteur+"\n"+
            " Annee de publication : "+liver.Annee_de_publication)
    });

 }
function Trierleslivrespartitre(){
    let choise =prompt("Voulez-vous trier les livres par date de publication en ordre croissant ou décroissant ? (asc/desc) : ");
    if (choise == "asc"){
        console.log(livers.sort((a,b) => a.Titre.localeCompare(b.Titre) ))
    }else if(choise =="desc"){
        console.log(livers.sort((a,b) => b.Titre.localeCompare(a.Titre)))
    }
  
    
} 

function livres_par_annee_de_publication (){
    console.log(livers.sort((a,b) => b.Annee_de_publication - a.Annee_de_publication ));
} 


function affich_uniquement_livers(){
    livers.forEach(book => {
        if(book.Disponible == true){
             console.log(" les livres disponibles est : "+book.Titre+" par Auteur :"+book.Auteur)
        }
            
        
    });
}


function Rechercher(){
let id = prompt("donner un liver ID pour Rechercher : ")
let shown = false
    livers.forEach(book => {
        if(book.Id_livre == id){
            if(!shown){
                console.log(" le liver chercher est : "+book.Titre+"\n")
                shown= true;
            }
        }
        
    });
   
}

//  **********Gestion des abonnés ***************
let abonnes = [];

function Ajouter_abboner(){

let nom = prompt('enter Nom : ') ;
let prenom = prompt('enter  prenom : ') ;
let email = prompt('enter email : ');

    let add_abonner={
        ID : abonnes.length +1,
        nom : nom,
        prenom : prenom,
        email : email
    }
    abonnes.push(add_abonner)
    
}

function Affichertouslesabonnes(){
    abonnes.forEach(follower => {
        console.log(
            " ID : "+follower.ID+"\n"+
            " nom : "+follower.nom+"\n"+
            " prenom :"+follower.prenom+"\n"+
            " email :"+follower.email)
    });
}

// ****************Gestion des emprunts *******************

   function enregistrer_un_emprunt(){

    let abonneId =prompt("donner un abonner ID : ")
    let Id_livre =prompt("donner un liver ID : ")
    let dateEmprunt = new Date()

    let find_id_follower = abonnes.find((follower) => follower.ID == abonneId );
    let find_id_liver = livers.find((liver) => liver.Id_livre == Id_livre );
    
    let enregistrer_emprunt = {
        abonneId : find_id_follower ,
        Id_livre : find_id_liver ,
        dateEmprunt : dateEmprunt.toLocaleDateString()
    }

   if(find_id_follower && find_id_liver) {
   if(find_id_liver.Disponible){
        find_id_liver.Disponible = false;
        console.log(find_id_follower.nom +" a emprunté le livre "+find_id_liver.Titre);
     }
     emprunts.push(enregistrer_emprunt);

}else{
    console.log("c'est follower est introvable!!!")
}
   };
  

 

// ******************Enregistrer_un_retour******************

function Enregistrer_un_retour(){

    let abonner_id =prompt("Entre Abonner ID : ");
    let id_liver =prompt("Entre liver ID : ");

    let find_id_follower = abonnes.find((follower) => follower.ID == abonner_id);
    let find_id_liver = livers.find((idliver) => idliver.Id_livre == id_liver);

    if(find_id_follower && find_id_liver){
        if(!find_id_liver.Disponible){
         find_id_liver.Disponible = true ;
         console.log("'"+find_id_follower.nom+"' a retourné le livre '"+find_id_liver.Titre+"'")
         console.log("Le livre est maintenant disponible :", find_id_liver.Disponible);
        }
       
    }else{
        console.log(
            abonner_id +" OU "+ id_liver
             +" est introvable !!!"
        )}
}  
// ******************Afficher les livres empruntés par un abonné donné. ******************

    function empruntes_livers(){
        let abonner_id =prompt(" donner un abooner ID : ");
        let find_id_follower = abonnes.find((follower) => follower.ID == abonner_id);
        let shown = false;

        emprunts.forEach(emprunt => {
            
            if(emprunt.abonneId == find_id_follower ){
                if (!shown){
            console.log("les livres empruntés par '"+find_id_follower.nom+"' est :")
            shown =true;
                }
                console.log("'"+emprunt.Id_livre.Titre+"'")
         
        }
        });



    }




function menu(){
    console.log('=================================================================')
    console.log('================== Gestion d’une Bibliothèque ===================')
    console.log('=================================================================')
    console.log('1. Opérations sur les livres : ')
    console.log("2. Gestion des abonnés       : ")
    console.log("3. Gestion des emprunts      : ")
    console.log('0. Quitter ')

    let choises = prompt('Choisissez dans le menu =>  ');
    return choises;
}

function menu2(){
    console.log('  ================ Opérations sur les livres =============')
    console.log('1. Introduire un livre. ')
    console.log('2. Ajouter plusieurs livres. ')
    console.log('3. Afficher tous les livres ')
    console.log('4. Trier les livres par titre (ascendant/descendant).')
    console.log('5. Trier les livres par année de publication. ')
    console.log('6. Afficher uniquement les livres disponibles.')
    console.log('7. Rechercher un livre par ID_livre.')
    console.log('8. Retour <--- .')
    let choises = prompt('Choisissez dans le menu =>  ');
    return choises;
}

function menu3(){
     console.log("  ================== Gestion des abonnés ====================")
    console.log('1. Ajouter un abonné (ID, Nom, Prénom, Email).')
    console.log('2. Afficher tous les abonnés.')
    console.log('3. Retour <--- .')
    let choises = prompt('Choisissez dans le menu =>  ');
    return choises;
}
function menu4(){
    console.log("   ================== Gestion des emprunts ===================")
    console.log('1. Enregistrer un emprunt.')
    console.log('2. Enregistrer un retour.')
    console.log('3. Afficher les livres empruntés par un abonné donné.')
    console.log('4. Retour <--- .')
    let choises = prompt('Choisissez dans le menu =>  ');
    return choises;
}




function Bibliotheque(){

    let m;
    
do{
   
    m=menu();

    switch (m) {
        // ================ Opérations sur les livres =============
                case ('1'): let m2 = menu2();
                switch (m2) {

                    case ('1'):Introduireunlivre();break;
                    case ('2'):Ajouter_plusieurs_livres();break;
                    case ('3'):Afficher_les_livres();break;
                    case ('4'):Trierleslivrespartitre();break;
                    case ('5'):livres_par_annee_de_publication();break;
                    case ('6'):affich_uniquement_livers();break;
                    case ('7'):Rechercher();break;
                    case ('8'):break;

                        }
                break;
                     // **************Gestion des abonnés***************
                    case ('2'):let m3 = menu3();
                        switch (m3) {

                            case ('1'):Ajouter_abboner();break;
                            case ('2'):Affichertouslesabonnes();break;
                            case ('3'):break;
                         }
                        break;
                        // *************** Gestion des emprunts ***************
                        case ('3'):let m4 =menu4();
                          switch (m4) {

                            case ('1'):enregistrer_un_emprunt();break;
                            case ('2'):Enregistrer_un_retour();break;
                            case ('3'):empruntes_livers();break;
                            case ('4'):break;
                            
                            }
                             break;
case ('0'):
console.log("fin !!")
break;      
            default:
            console.log('errore')
            break;
    }
}while( m != 0)
}
Bibliotheque()


