// takes in the message and the user and creates the html

export const messageHTMLCreator=(messageObj,userObj)=>{
    const user=parseInt(sessionStorage.getItem("activeUser"))
    // if you are the user, then render a delete button so you can delete your own messages
    if (messageObj.userId===user){
        return`

            <div>
            <p class= "myMessages" id="myMessages--${messageObj.id}">  ${messageObj.message} </p>
            <div class="displayButtons--${messageObj.id} displayButtons">
            <button id="messageDelete--${messageObj.id}">delete</button> <button id="messageEdit--${messageObj.id}">Edit</button>
            </div>
            </div>
            `

    }
    else{
        return `<p class="otherMessages" ><strong id="addFriend--${userObj.id}--${userObj.username}">${userObj.username}</strong> ${messageObj.message} </p>`
    }

}

const eventHub=document.querySelector(".container")
// this part below makes it so the delete and edit buttons are hidden unless you click on a message
eventHub.addEventListener("click",event=>{
     
    if (event.target.id.startsWith("myMessages")){
        let [prefix,id]=event.target.id.split("--")
        console.log(id)
        myFunction(id)    
    }

})


function myFunction(id) {
    let x = document.querySelector(`.displayButtons--${id}`);
    console.log(x.style.display)
    if(!(x.style.display)){
        x.style.display="none"
    } 
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

