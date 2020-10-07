// Grab divs to append json data into
const reservationsDiv = $(".currentReservations");
const waitlistDiv = $(".waitinglist");

$.get("/api/reservations/", function(data) {
    reservationsDiv.append($("<h3>").text("Reservations"))
    for (table of data) {
    const tableDiv = $("<div style='border: solid 1px; border-radius: 5px;'>")
    let customerName = $("<p>").text(`Customer Name: ${table.customerName}`)
    let phoneNumber = $("<p>").text(`Phone Number: ${table.phoneNumber}`)
    let customerEmail = $("<p>").text(`Customer Email: ${table.customerEmail}`)
    let customerID = $("<p>").text(`Customer ID: ${table.customerID}`)
    
    tableDiv.append(customerName)
    tableDiv.append(phoneNumber)
    tableDiv.append(customerEmail)
    tableDiv.append(customerID)
    reservationsDiv.append(tableDiv)
    reservationsDiv.append($("<br>"))
    }
});

$.get("/api/waitlist/", function(response) {
    //console.log(response);
    reservationsDiv.append($("<h3>").text("Waiting List"))
        for(let i = 0; i < response.length; i++) {
        //Create the divs
            const container = $("<div style='border: solid 1px; border-radius: 5px;'>>");
            let tableNumber = $("<h1>").addClass("tableNumber");
            let hr = $("<hr>");
            let id = $("<p>").addClass("id");
            let name = $("<p>").addClass("name");
            let email = $("<p>").addClass("email");
            let phone = $("<p>").addClass("phone");
        //setting values
            let number = i + 1;
            tableNumber.text(`Table #${number}`);
            name.text(`Customer Name: ${response.customerName}`);
            phone.text(`Phone Number: ${response.phoneNumber}`);
            email.text(`Email: ${response.customerEmail}`);
            id.text(`Customer ID: ${response.customerID}`);
        //appending values to div
            container.append(tableNumber);
            container.append(hr);
            container.append(name);
            container.append(phone);
            container.append(email);
            container.append(id);
            waitlistDiv.append(container);  
    }});