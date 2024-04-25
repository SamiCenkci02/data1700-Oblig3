package oslomet.data1700_oblig3;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class Controller {

    @Autowired
    oslomet.data1700_oblig3.Repository rep;

    @GetMapping("/getTickets")
    public List<oslomet.data1700_oblig3.Ticket> getTickets()  {

        return rep.getTickets();
    }

    @PostMapping("/saveTicket")
    public void saveTicket(oslomet.data1700_oblig3.Ticket ticket)  {
        rep.saveTicket(ticket);

            }

    @DeleteMapping("/deleteAllTickets")
    public void deleteAllTickets() {
        rep.deleteAllTickets();
    }
}
