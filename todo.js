var container=document.querySelector('.container');  //The document method queryselector() return the first element within 
var value1=document.querySelector('.input');         //the document that matches the specified selector,or a grooup of selectors
var add1=document.querySelector('.add');             //, if no matches are found, null is returned.


class item{     //constructor
    constructor(name)
    {
        this.create(name);
    }
    create(name)     //create a name function
   {
    var l1=document.createElement('div');

    l1.classList.add('item');  

    var input=document.createElement('input');  
    input.type="text";
    //input.disabled=false;
    input.value=name;
    input.classList.add('item_input');   

    var remove=document.createElement('button');    
    remove.classList.add('remove');
    remove.innerHTML='<i class="fa-solid fa-trash"></i>';
    remove.addEventListener('click',()=>this.remove(l1));

   /* var update=document.createElement('button');
    update.classList.add("update");
    0000iik
    update.addEventListener('click',()=>this.update(l2))*/

    container.appendChild(l1);
    l1.appendChild(input);     
    l1.appendChild(remove);
   // li.appendChild(update);

}

remove(l1){                        
container.removeChild(l1);
}

// update(l2){                        
//     container.updateChild(l2);
//     }
}



add1.addEventListener('click',check);
window.addEventListener('keydown',(e)=>{

    if(e.which==13){  
            check();
    }
})

function check()
{
    if(value1.value!="")
    {
        new item(value1.value);   //constructor
        value1.value="";
    }
    // else{
    //     const update={id: new Date().getTime().toString(), name: value}
    // }
}



function removeAll(){
    if(confirm("Do you want to remove all")){
    document.querySelector('.container').innerHTML="";
    
    }
}