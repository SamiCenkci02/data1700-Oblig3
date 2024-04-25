const text = /^[a-zA-Z\s]*$/;
const number = /^[0-9]+$/;
const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validateInput = ticket => {
    // Check for empty fields
    if (!ticket.film || !ticket.number || !ticket.firstName ||
        !ticket.lastName || !ticket.phone || !ticket.email) {
        return false;
    }

    // Validate data types
    if (!text.test(ticket.film) || !number.test(ticket.number) ||
        !text.test(ticket.firstName) || !text.test(ticket.lastName) || !email.test(ticket.email)) {
        return false;
    }
    return true;
};

$(() => {
    $("#ticketsButton").click(() => {
        const film = $("#film");
        const number = $("#number");
        const firstName = $("#firstName");
        const lastName = $("#lastName");
        const phone = $("#phone");
        const email = $("#email");

        const ticket = {
            film: film.val(),
            number: number.val(),
            firstName: firstName.val(),
            lastName: lastName.val(),
            phone: phone.val(),
            email: email.val()
        };

        if (validateInput(ticket)) {
            $.post("/saveTicket", ticket, () => hent());
            film.val("");
            number.val("");
            firstName.val("");
            lastName.val("");
            phone.val("");
            email.val("");
        } else {


            if (!text.test(ticket.film) || !ticket.film) {
                alert("Please choose a film.");
            }

            if (!number.test(ticket.number) || !ticket.number) {
                alert("Please enter a valid number of tickets.");
            }

            if (!text.test(ticket.firstName) || !ticket.firstName) {
                alert("Please enter a valid first name.");
            }

            if (!text.test(ticket.lastName) || !ticket.lastName) {
                alert("Please enter a valid last name.");
            }

            if (!number.test(ticket.phone) || !ticket.phone) {
                alert("Please enter a valid phone number.");
            }

            if (!email.test(ticket.email) || !ticket.email) {
                alert("Please enter a valid email address.");
            }
        }
    });

    $("#deleteAllTickets").click(() => {
        $.ajax("/deleteAllTickets", {
            type: 'DELETE',
            success: () => hent(),
            error: (jqXhr, textStatus, errorMessage) => console.log(errorMessage)
        });
    });
});

const hent = () => $.get("/getTickets", ticket => format(ticket));

const format = tickets => {

    let output = `
        <table>
            <tr>
                <th>Film</th>
                <th>tickets</th>
                <th>Last name</th>
                <th>Phone</th>
                <th>Phone</th>
                <th>Email</th>
            </tr>`;

    for (let ticket of tickets) {
        output += `
            <tr>
                <td>${ticket.film}</td>
                <td>${ticket.number}</td>
                <td>${ticket.firstName}</td>
                <td>${ticket.lastName}</td>
                <td>${ticket.phone}</td>
                <td>${ticket.email}</td>   
            </tr>`;
    }

    output += "</table>";
    $("#tickets").html(output);
}
