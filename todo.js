

let arr = []; 
display();
function add() {
  let ipelement = document.querySelector("#input");
  let ipdate = document.querySelector("#date");
  let todoitem = ipelement.value;
  let tododate = ipdate.value;
 arr.push({item:todoitem,duedate:tododate});
 ipelement.value = "";
 ipdate.value = "";
 display();
}
function display(){
  let dispitem = document.querySelector('#disp');
  let newhtml = '';
  dispitem.innerHTML = ''
  for(let i = 0;i<arr.length;i++){
    let{item,duedate} = arr[i]
  newhtml += `
  
  <span> ${item}</span>
  <span> ${duedate}</span>
  <button class="delete" onclick="
  arr.splice(${i},1);
display();
  
  " >delete</button>
  
  
  
  
  `;
    
  }
  dispitem.innerHTML = newhtml;
}
