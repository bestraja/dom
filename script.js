
  var p=document.getElementsByClassName("like");
  for (let i=0;i<p.length;i++)
  { 
    let jaime= p[i];

    jaime.addEventListener("click", function()
    {
      if(jaime.style.color=="red")
       {
       jaime.style.color="black";
       }
      else
      {
       jaime.style.color="red";
      }
    })
  
  }
 
 
 var r=document.getElementsByClassName("Quant");
 var ba=document.getElementsByClassName("minus-btn");
    for(let i=0; i<r.length; i++)
    {
       let h=r[i];
       ba[i].addEventListener("click", function()
         {
            if(h.value>1)
               { h.value-=1;}
             else
               {h.value=1;} 
               somme();
   
             })
             
  }
  var p=document.getElementsByClassName("Quant");
  var a=document.getElementsByClassName("plus-btn");
     for(let i=0; i<p.length; i++)
     {
    
        a[i].addEventListener("click", function()
          {
           p[i].value = parseInt((p[i].value),10)+1;
           somme();
          })
 
   }
  
   var x=document.getElementsByClassName("delete");
   for(let i=0; i<x.length; i++)
   {
      let det=x[i];
      det.addEventListener("click", function()
        {
         det.parentElement.remove();
         somme();
        })
 
 }
 var items=document.getElementsByClassName("Item");
 var final=document.getElementById("finalPrice");
 function somme()
 {
  var som=0;
  for(var i=0;i<items.length;i++)
  {
    let item=items[i];
   som+= item.querySelector(".price").innerText*item.querySelector(".Quant").value;
  }
  return (final.value=som);
 }
 somme()














