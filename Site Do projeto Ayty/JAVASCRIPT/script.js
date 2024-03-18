const switchButton = document.querySelector(".switch-corpo");
let boolTransition = true;

function MudarModo(){
    
    if(boolTransition == true){
        boolTransition = false;
        switchButton.style = `justify-content: flex-end;`;
        document.body.style.setProperty('--cor-base', '#d9d9d9');
        document.body.style.setProperty('--azul-claro-gradiente', '#4CA7C5');
        document.body.style.setProperty('--azul-gradiente', '#3C7486');
        document.body.style.setProperty('--azul-base', '#3C7486');
        document.body.style.setProperty('--cor-texto', '#3C7486');
        document.body.style.setProperty('--cor-base-two', '#C9CFD1');
    }
    else{
        boolTransition = true;
        switchButton.style = `justify-content: flex-start;`;
        document.body.style.setProperty('--cor-base', '#141718');
        document.body.style.setProperty('--azul-claro-gradiente', '#3C7486');
        document.body.style.setProperty('--azul-gradiente', '#203947');
        document.body.style.setProperty('--azul-base', '#203947');
        document.body.style.setProperty('--cor-texto', '#4CA7C5');
        document.body.style.setProperty('--cor-base-two', '#182023');


    }
}