document.querySelector('#clickMe').addEventListener('click', makeReq)

function makeReq(){

  const userText = document.querySelector("#userText").value;

  fetch(`/api?text=${userText}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("#result").textContent = data.answer
    });

}

// function palinCheck(str){
// 	if(!str){
//     return
//   }else if(str.toLowerCase().split("").reverse().join("") == str.toLowerCase()){
//     return It is a palindrome
//   }else{
//     return Not a palindrome
//   }
// }





// document.getElementById("clickMe").onclick = makeReq;
//
// function makeReq(){
//
//   var userName = document.getElementById("userName").value;
//
//   var request = new XMLHttpRequest();
//   request.open('GET', '/api?student='+userName, true);
//
//   request.onload = function() {
//       console.log("works")
//       if (request.status >= 200 && request.status < 400) {
//         // Success!
//         var data = JSON.parse(request.responseText);
//         console.log(data)
//         document.getElementById("personName").innerHTML = data.name
//         document.getElementById("personStatus").innerHTML = data.status
//         document.getElementById("personOccupation").innerHTML = data.currentOccupation
//
//       } else {
//         // We reached our target server, but it returned an error
//
//       }
//     };
//
//     request.onerror = function() {
//       // There was a connection error of some sort
//     };
//
//     request.send();
// }
