let globalid = "";
function adduser()
{
    let localdata = localStorage.getItem("users_data");
    if(localdata == null)
    {
        arr = [];
    }
    else{
        arr = JSON.parse(localdata);
    }
    let username = document.getElementById("nm").value;
    arr.push(username);
    localStorage.setItem("users_data", JSON.stringify(arr));
    //console.log(arr);
    document.getElementById("nm").value = "";
    showuser();
}
function showuser()
{
    let data =  JSON.parse(localStorage.getItem("users_data"));
    //console.log(data);
    let str = "";
    data.forEach((items, index)=>{
         str += `<tr><td>${items} <button class='btn btn-danger' onclick="deleteUser(${index})">Delete</button> <button class="btn btn-info ml-2" onclick="editModalUser(${index})" data-toggle="modal" data-target="#myModal">Edit</button></td> </tr>`
    });
    document.getElementById("records").innerHTML = str;
}
function deleteUser(id)
{
    let localdata = localStorage.getItem("users_data");
    if(localdata == null)
    {
        arr = [];
    }
    else{
        arr = JSON.parse(localdata);
    }
    let newarr = arr.filter((items,index)=>{
        return id != index;
    });
    //console.log(newarr);
    localStorage.setItem("users_data", JSON.stringify(newarr));
    showuser();
}
// edit user 

function editUser(uid){
    globalid = uid;
    //alert(uid);
    let localdata = localStorage.getItem("users_data");
    if(localdata == null)
    {
        arr = [];
    }
    else{
        arr = JSON.parse(localdata);
    }
    let newarr = arr.filter((data,id)=>{
        return globalid == id;
    });
    console.log(newarr);
    document.getElementById("nm").value = newarr[0];
}

function updateuser()
{
    console.log(globalid);
    let username = document.getElementById("nm").value;
    let localdata = localStorage.getItem("users_data");
    if(localdata == null)
    {
        arr = [];
    }
    else{
        arr = JSON.parse(localdata);
    }
    arr[globalid] = username;
    localStorage.setItem("users_data", JSON.stringify(arr));
    showuser();
}



// model edit 
function editModalUser(editid){
  globalid = editid;
    //console.log(editid);
    let localdata = localStorage.getItem("users_data");
    if(localdata == null)
    {
        arr = [];
    }
    else{
        arr = JSON.parse(localdata);
    }
    let newarr = arr.filter((items, index)=>{
        return editid == index;
    });
    //console.log(newarr);
    document.getElementById("nm1").value = newarr[0];
}

function  updateusermodal(){

  let localdata = localStorage.getItem("users_data");
    if(localdata == null)
    {
        arr = [];
    }
    else{
        arr = JSON.parse(localdata);
    }
  //console.log(globalid);
  let updatename = document.getElementById("nm1").value;
  arr[globalid] = updatename;
  localStorage.setItem("users_data", JSON.stringify(arr));
  showuser();
  //window.location= "todo.html";
}