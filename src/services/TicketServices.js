import axios from 'axios'

const URL = 'http://localhost:8080/api/';

class TicketService{
    
    getTickets(){
        return axios.get(URL+"getTickets");
    }

}

export default new TicketService();