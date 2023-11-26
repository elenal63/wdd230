const darkmode = document.querySelector('#dark-mode');
const bodyelt = document.querySelector("body");

darkmode.addEventListener('click',()=>{
    if (darkmode.textContent == 'DARK' ){
        document.documentElement.style.setProperty('--text-color', 'white');        
        document.documentElement.style.setProperty('--background-color', 'black');    
        document.documentElement.style.setProperty('--hover-background-color', '#B8E6F3');    
        document.documentElement.style.setProperty('--hover-color', '#0C6279');                
        bodyelt.style.backgroundColor = 'black';
        darkmode.textContent = 'LIGHT'
    }
    else{
        document.documentElement.style.setProperty('--text-color', '#543034');        
        document.documentElement.style.setProperty('--background-color', '#F8F3DF');        
        document.documentElement.style.setProperty('--hover-background-color', '#B8E6F3');    
        document.documentElement.style.setProperty('--hover-color', '#0C6279');        
        bodyelt.style.backgroundColor = '#fefae0';
        darkmode.textContent = 'DARK'
    }
})