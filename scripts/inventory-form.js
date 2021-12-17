console.log("hello")
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
function SubForm (){
  $.ajax({
    url:'https://api.apispreadsheets.com/data/Buvk4PaGh1x69ysd/',
    //type post to post the data
    type:'post',
    data:$("#inventoryForm").serializeArray(),

    //success id called if the function call is successful otherwise error
    success: function(){
      alert("Form Data Submitted :)")
    },
    error: function(){
      alert("There was an error :(")
    }
  });

  }