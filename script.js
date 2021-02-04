
var mdp = document.getElementById('input');
var disp = document.getElementById('span');
/*function changetype()
{
    MDP.setAttribute('password', '');
}*/

document.getElementById('checkbox').addEventListener('click', function() {
   
    if(document.getElementById('checkbox').checked == true ){
        /*document.getElementById('span').innerHTML="Show";*/
        mdp.setAttribute('type', '');  
    }else{
        /*document.getElementById('span').innerHTML="Hide";*/
        console.log("c'est pas checked");
    }   
});

