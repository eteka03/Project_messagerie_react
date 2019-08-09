
/*****Les données des utilisateurs en format json****/
const data_users = [
{
    id_user: 'user1',
    username:'claver',
    password:'clav',
    login: false, 
    messages:[
    {
        id_message: 'm1',
        from:'user3',
        message:'hello claver!',
        statut: false
    },
      {
        id_message: 'm2',
        from:'user2',
        message:'coucou papa',
        statut: true
    },

    ]
} , 

{
    id_user: 'user2',
    username:'lucia',
    password:'akpaki',
    login: false, 
    messages:[
    {
        id_message: 'm1',
        from:'user3',
        message:'bonne journee ma fille.Mom.',
        statut: false
    },
     
    ]
} , 

{
    id_user: 'user3',
    username:'naomi',
    password:'nao',
    login: false, 
    messages:[
    {
        id_message: 'm1',
        from:'user1',
        message:'naomi hahaha',
        statut: true
    },
     
    ]
} 


] ;


/**** Les donnees des 3 postes de connexion ****/

const data_postes = [
{
    id_poste:"p1",
    statut:false
},
{
    id_poste:"p2",
    statut:false,
}
{
    id_poste:"p3",
    statut:false,
}


]