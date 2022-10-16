const setOfWords=[
    "My name is Vachan Gungewale and I am Frontend Developer.",
    "My name is Mayur Ambalgi and I am Software Engineer.",
     "Hope you are havinng fun this is simple speed test program",
     "so you can create your own version of this challenge"
     ];

  const msg=document.getElementById('msg');
  const  typewords=document.getElementById('mywords');
  const btn=document.getElementById('btn');
  let starttime,endtime;

  const playGame=()=>{
    let randomNumber=Math.floor(Math.random()*setOfWords.length);
    msg.innerText=setOfWords[randomNumber];
    let date=new Date();
    starttime=date.getTime();
    btn.innerText="Done";
  }

  const endplay=()=>{
    let date=new Date();
    endtime=date.getTime();
    let totaltime=((endtime-starttime)/1000);
    console.log(totaltime);
    let totalstr=typewords.value;
    let wordcount=wordcounter(totalstr);
      
    let speed=Math.floor((wordcount/totaltime)*60);
    let final="You typed total at "+ speed +" words per minute";
    final+=comparewords(msg.innerText,totalstr);
    msg.innerText=final;


  }

  const wordcounter=(str)=>{
    let response=str.split(' ').length;
    console.log(response);
    return response;
  }

  const comparewords=(str1,str2)=>{
    let words1=str1.split(" ");
    let words2=str2.split(" ");
    let cnt =0;

    words1.forEach(function(item,index){
        if(item==words2[index]){
            cnt++
        }
    })
    let errorwords=(words1.length-cnt);
    return (cnt + " Correct out of "+words1.length+" words and the total no of error are "+errorwords+'.');
  }



  btn.addEventListener('click',function(){
    if(this.innerText=='Start'){
        typewords.disable=false;
        playGame();
    }else if(this.innerText=="Done"){
        typewords.disabled=true;
        btn.innertext="start";
        endplay();
    }
  })