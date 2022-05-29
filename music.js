





    m1  = new Audio('audio/1.mp3');
    m2 = new Audio('audio/2.mp3');
    m3 = new Audio('audio/3.mp3');
    m4 = new Audio('audio/4.mp3');
    m5 = new Audio('audio/5.mp3');
    m6 = new Audio('audio/6.mp3');
    m7 = new Audio('audio/7.mp3');
    m8 = new Audio('audio/8.mp3');








    let count= 0
    let intId = setInterval(counter,1000);
    function counter(){
        count++


         if(count==1)
         {randomM()}

         else if (count==250){
             count=0
             counter(this)
         }

        console.log(count)
    }





    function randomM(){
        const random = Math.floor(Math.random()*8+1)

        if(random==1){
            m1.play()
        }
       else if (random==2){
            m2.play()
        }
       else if(random==3){
            m3.play()
        }
       else if(random==4){
            m4.play()
        }
       else if(random==5){
            m5.play()
        }
       else if(random==6){
            m6.play()
        }
       else if(random==7){
            m7.play()
        }
       else if(random==8){
            m8.play()
        }

    console.log('random is: '+random)
    }
