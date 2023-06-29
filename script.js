let string="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='='){
      string=eval(string);
      document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=='C'){
      string="";
      document.querySelector('input').value=string;
    }
    else if(e.target.innerHTML=='!'){
      let a=1;
      var n=Number(string);
      for(var i=2;i<=n;i++)
      {
        a=a*i;
      }
      string=a.toString();
      document.querySelector('input').value=string;
    }
    else{
      console.log(e.target);
      string=string+e.target.innerHTML;
      document.querySelector('input').value=string;
    }
  })
})