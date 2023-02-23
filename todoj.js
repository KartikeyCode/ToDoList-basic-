//Kartikey sees you looking at his code 👀
function create(){
    document.getElementById("error").innerHTML=""; //on clicking button with text error message goes away 
    let name = document.getElementById("taska").value; //gets data from text box
    if(name==''){
        document.getElementById("error").innerHTML="Please Enter Value";
        //displays error if text box is empty and you click button
    }
    else{
        let box = document.getElementById('list');//gets list
        let li=document.createElement('li');//creating list item
        li.className="lick"
        li.textContent=name;//adding text from text box to list item
        let a = document.createElement('a');
        a.textContent="x";
        a.href="javascript:void(0)";
        a.className="remove";
        li.appendChild(a);
        let pos = box.firstElementChild; // defining first list item as a variable
        if(pos==null){
            box.appendChild(li);//adds the first li
        }
        else{
            box.insertBefore(li,pos);//adds before the li above
        }
}
let butt1 = document.querySelector('ul');
butt1.addEventListener('click',function(e){
    let box = document.getElementById('list');//getting list 
    let li = e.target.parentNode;//targeting the list element
    box.removeChild(li);//deletes the list element
})
}