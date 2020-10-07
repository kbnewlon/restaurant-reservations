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