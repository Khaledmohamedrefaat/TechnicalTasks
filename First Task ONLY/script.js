let idx = 1;
let add_btn = document.getElementById('btn');
let text_box = document.getElementById('input');
let unord_list = document.querySelector('ul');
const addListItem = () => {
  if ( text_box.value.length === 0 ){
    alert("Please Enter The Name Of The Task !");
    return;
  }
  let tmp = document.createElement('li');
  tmp.textContent = text_box.value ;
  tmp.setAttribute("class",""+idx);

  let tmp_edit = document.createElement("button");
  tmp_edit.textContent = "Edit";
  tmp_edit.setAttribute("class",""+idx);
  tmp_edit.addEventListener("click",(event) => {
    let change = prompt("Enter The Edited Name");
    editListItem(event.originalTarget.getAttribute("class"), change);
  });

  let tmp_done = document.createElement("button");
  tmp_done.textContent = "Done";
  tmp_done.setAttribute("class",""+idx);
  tmp_done.addEventListener("click",(event) => {
    let delID = event.originalTarget.getAttribute("class");
    for ( let i = 0 ; i < 3 ; ++i )
      document.querySelector("ul").removeChild(document.getElementsByClassName(delID)[0]);
  });

  ++idx;
  unord_list.appendChild(tmp);
  unord_list.appendChild(tmp_edit);
  unord_list.appendChild(tmp_done);
  text_box.value = "";
};
const editListItem = (editID, txt) => {
  document.getElementsByClassName(editID)[0].textContent = txt;
};
add_btn.addEventListener("click", () => {
  addListItem();
});
text_box.addEventListener("keypress", (event) => {
  if(event.keyCode === 13) addListItem();
});
