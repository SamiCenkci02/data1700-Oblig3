package oslomet.data1700_oblig3;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;


import java.util.List;


@org.springframework.stereotype.Repository
public class Repository {

    @Autowired
    private JdbcTemplate db;

    public void saveTicket(oslomet.data1700_oblig3.Ticket ticket) {
        String sql = "INSERT INTO Ticket (film, number, firstName, lastName, phone, email)" +
                " VALUES (?, ?, ?, ?, ?, ?)";

            db.update(sql, ticket.getFilm(), ticket.getNumber(),
                    ticket.getFirstName(), ticket.getLastName(), ticket.getPhone(),
                    ticket.getEmail());

        }



    public List<oslomet.data1700_oblig3.Ticket> getTickets() {
        String sql = "SELECT * FROM Ticket";

            List<oslomet.data1700_oblig3.Ticket> allTickets = db.query(sql,
                    new BeanPropertyRowMapper<>(oslomet.data1700_oblig3.Ticket.class));
            return allTickets;

    }

    public void deleteAllTickets() {
        String sql = "DELETE FROM Ticket";
        db.update(sql);
    }
}

