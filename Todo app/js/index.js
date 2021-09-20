function add_task(){
  document.getElementById("error").innerHTML = "";

    let input=document.getElementById('input').value;
    if (input=='') {
       document.getElementById("error").innerHTML = "Please Enter Task";
    }else{
      let msj=document.getElementById('msj');

      let li=document.createElement('li');
      li.textContent=input;

      let a=document.createElement('a');
      a.textContent="X";
      a.href="javascript:void(0)";
      a.className="remove";
      li.appendChild(a);

      let pos=msj.firstElementChild;

      if (pos==null) {
        msj.appendChild(li);
      } else {
          msj.insertBefore(li,pos);
      }
    }
  document.getElementById('input').value="";
}

let btn=document.querySelector('ul');
btn.addEventListener('click',function(e) {
  let input=document.getElementById('input');
  let li=e.target.parentNode;
  msj.removeChild(li);
});