console.log("hello")

function SubForm (){
  $.ajax({
    url:'https://api.apispreadsheets.com/data/Buvk4PaGh1x69ysd/',
    //type post to post the data
    type:'post',
    //serialization array converts to object
    data:$("#inventoryForm").serializeArray(),


    //success id called if the function call is successful otherwise error
    success: function(){
      alert("Form Data Submitted :)")
      window.location.reload();
      // console.log($("#inventoryForm").serializeArray())
    },
    error: function(){
      alert("There was an error :(")
    }

  });

  }
