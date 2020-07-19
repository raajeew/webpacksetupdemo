import "./style.scss";
//const getUserModule = () => import("./common/usersAPI");
const getUserModule = () => import(/* webpackChunkName: "usersAPI" */ "./common/usersAPI");


const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    document.getElementById('users').innerHTML = "Loading..";  
  getUserModule().then(({ getUsers }) => {
    getUsers().then(json => {
        document.getElementById('users').innerHTML = "";  
        console.log(json);
        json.forEach((item)=>{
            document.getElementById('users').innerHTML +='<p><b>Name</b>: '+item.name+', <b>Email</b>:'+item.email+', <b>Company</b>:'+item['company'].name+', <b>Address</b>:'+item['address'].city+'</p>';
        });
    });
  });
});