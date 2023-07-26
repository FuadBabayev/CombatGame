new Vue({
el : "#container",

data : {
GameStart: false,
MHeal : 100,
AHeal : 100,
},

methods : {
Start() {
this.GameStart = true;
},
                    Attack() {   
                    let pointA = Math.ceil(Math.random()*10);         
                    let pointM = Math.ceil(Math.random()*15);
                    this.AHeal -= pointM;            
                    this.MHeal -= pointA;        
                    },
                                        Special(){
                                        let pointA = Math.ceil(Math.random()*25);         
                                        let pointM = Math.ceil(Math.random()*15);
                                        this.AHeal -= pointM;            
                                        this.MHeal -= pointA; 
                                        },
                                                            Defance(){       
                                                            let pointM = Math.ceil(Math.random()*15);
                                                            this.AHeal += pointM;            
                                                            },  
                                                                                Surrender(){
                                                                                this.AHeal = 0;            
                                                                                },
},

watch :{
AHeal(value){
if(value <= 0){
this.AHeal = 0;
Swal.fire({
position: 'top',
icon: 'error',
title: 'You Lose, Game start 4seconds',
showConfirmButton: false,
timer: 4000
})
this.AHeal = 100;
this.MHeal = 100;
// heal 0-da dirensin

}   else if(value >= 100){
    this.AHeal = 100;
    }
    // heal 100-de dirensin
    },
                                    MHeal(value){
                                    if(value <= 0){
                                    this.MHeal = 0;
                                    Swal.fire({
                                    title: 'YOU WIN! Try Again',
                                    width: 600,
                                    padding: '3em',
                                    background: '#fff url(gif2.png  )',
                                    backdrop: `
                                    rgba(0,100,123,0.4)
                                    url("gif1.gif")
                                    left top
                                    no-repeat
                                    `                                   
                                    })                                
                                    this.AHeal = 100;
                                    this.MHeal = 100;
                                    }
                                    }
}
})