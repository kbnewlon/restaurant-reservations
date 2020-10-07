//Crate ajax request to obtain the waiting list info

$.get("/", function(response) {
    console.log(response);
    if (reseponse) {
        for(let i = 0; i < response.length; i++) {
        //Create the divs
            let container = $("div");
            let tableNumber = $("h1").addClass("tableNumber");
            let hr = $("hr");
            let id = $("h2").addClass("id");
            let name = $("h2").addClass("name");
            let email = $("h2").addClass("email");
            let phone = $("h2").addClass("phone");
        


        }


      $("#stats").show();
      $("#name").text(data.name);
      $("#role").text(data.role);
      $("#age").text(data.age);
      $("#force-points").text(data.forcePoints);
    } else {
      $("#name").text(
        "The force is not strong with this one. Your character was not found.");
      $("#stats").hide();
    }
  });
});
