// ******************************   e************************************
const prompt = require("prompt-sync")();

let livers = [
    {Id_livre:1,Titre : "Book3",Auteur: "John",Annee_de_publication:2002,Disponible:false },
    {Id_livre:2,Titre : "zook3",Auteur: "John",Annee_de_publication: 2032,Disponible:true },
    {Id_livre:3,Titre : "sjer",Auteur: "John",Annee_de_publication: 2013,Disponible:true }
];
let emprunts = [];

// *******Introduire un livre*******

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
    return Introduireunlivre() 
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
    livers.sort((a,b) => a.Titre.localeCompare(b.Titre) )
} 

function livres_par_annee_de_publication (){
    livers.sort((a,b) => a.Annee_de_publication - b.Annee_de_publication )
} 


function affich_uniquement_livers(){
    livers.forEach(book => {
        if(book.Disponible == true){
            return console.log(" les livres disponibles est : "+book.Titre+"\n")
        }
            
        
    });
}


function Rechercher(){
let id = prompt("donner un liver ID pour Rechercher : ")
    livers.forEach(book => {
        if(book.Id_livre === id){
            return console.log(" le liver chercher est : "+book.Titre+"\n")
        }
        
    });
}

//  **********Gestion des abonnés ***************
let abonnes = [{ID:1, nom : "ayoub",prenom: "hadi",email:"ayoubhadi3@gmail.com" }];

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
    let dateEmprunt =prompt("donner le date de emprunt : ")

    let find_id_follower = abonnes.find((follower) => follower.ID == abonneId );
    let find_id_liver = livers.find((liver) => liver.Id_livre == Id_livre );
    
    let enregistrer_emprunt = {
        abonneId : find_id_follower ,
        Id_livre : find_id_liver ,
        dateEmprunt : dateEmprunt
    }

   if(emprunts.push(enregistrer_emprunt)) {
    livers.forEach(liver => {
         liver.Disponible = false;
    });
   };

   }

// ******************Afficher les livres empruntés par un abonné donné******************

// function aff_livers_empruntes(){

//     emprunts.forEach(emprunt => {
//    emprunt.
        
//     });
// }


function menu(){
    console.log('=================================================================')
    console.log('================== Gestion d’une Bibliothèque ===================')
    console.log('=================================================================')
    console.log('1. Introduire un livre. ')
    console.log('2. Ajouter plusieurs livres. ')
    console.log('3. ================ Opérations sur les livres =============')
    console.log('1. Afficher tous les livres ')
    console.log('2. Trier les livres par titre (ascendant/descendant).')
    console.log('3. Trier les livres par année de publication. ')
    console.log('4. Afficher uniquement les livres disponibles.')
    console.log('5. Rechercher un livre par ID_livre.')
    console.log("4. ================== Gestion des abonnés ====================")
    console.log('1. Ajouter un abonné (ID, Nom, Prénom, Email).')
    console.log('2. Afficher tous les abonnés.')
    console.log("5. ================== Gestion des emprunts ===================")
    console.log('1. Enregistrer un emprunt.')
    console.log('2. Afficher les livres empruntés par un abonné donné.')
    console.log('0. Quitter')

    let choises = prompt('Choisissez dans le menu =>  ');
    return choises;
}

function menu2(){
    console.log('3. ================ Opérations sur les livres =============')
    console.log('1. Afficher tous les livres ')
    console.log('2. Trier les livres par titre (ascendant/descendant).')
    console.log('3. Trier les livres par année de publication. ')
    console.log('4. Afficher uniquement les livres disponibles.')
    console.log('5. Rechercher un livre par ID_livre.')
    let choises = prompt('Choisissez dans le menu =>  ');
    return choises;
}

function menu3(){
     console.log("4. ================== Gestion des abonnés ====================")
    console.log('1. Ajouter un abonné (ID, Nom, Prénom, Email).')
    console.log('2. Afficher tous les abonnés.')
    let choises = prompt('Choisissez dans le menu =>  ');
    return choises;
}
function menu4(){
    console.log("5. ================== Gestion des emprunts ===================")
    console.log('1. Enregistrer un emprunt.')
    console.log('2. Afficher les livres empruntés par un abonné donné.')
     let choises = prompt('Choisissez dans le menu =>  ');
    return choises;
}
let m;
let m2;
let m3;
let m4;


function Bibliotheque(){



do{
    m = menu();

    switch (m) {
        case ('1'):
                        // **************Introduire un livre*************
                Introduireunlivre()
            break;
            case ('2'):
                     // **************Ajouter plusieurs livres*************
                Ajouter_plusieurs_livres()
                break;
                case ('3'):

                    // **************Opérations sur les livres*************
         m2 = menu2();
                switch (m2) {
                    case ('1'):
                        Afficher_les_livres()
                        break;
                          case ('2'):
                        Trierleslivrespartitre()
                        break;
                          case ('3'):
                        livres_par_annee_de_publication ()
                        break;
                          case ('4'):
                        affich_uniquement_livers();
                        break;
                        case ('5'):
                        Rechercher();
                        break;
                        }
                    break;
                    case ('4'): 
                   // **************Gestion des abonnés***************
                m3 = menu3();
                        switch (m3) {
                            case ('1'):
                                Ajouter_abboner();
                                break;
                             case ('2'):
                                Affichertouslesabonnes();
                                break;
                         }
                        break;
                        case ('5'):

                    // *************** Gestion des emprunts ***************
                  m4 = menu4();
                          switch (m4) {
                            case ('1'):
                                enregistrer_un_emprunt();
                                break;
                          }
                            break;
                                case ('0'):
                                    console.log("fin !!")
                                    break;
    
        default:
            console.log('errore')
            break;
    }
}while(m != 0 || m2 != 0 || m3 != 0 || m4 != 0)
}
Bibliotheque()