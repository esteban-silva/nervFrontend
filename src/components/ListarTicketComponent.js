import userEvent from '@testing-library/user-event';
import React, {Component} from 'react';
import TicketServices from '../services/TicketServices';
import { Grid, Box, Button, CardHeader , Paper} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import main from '../assets/css/index.css';
import CardGrid from './Card.js'
import logo from '../assets/images/logo.jpg'

class TicketComponent extends Component{


     constructor(props){
         super(props)
        this.state = {
         tickets:[]
       }
    }
   
        
     componentDidMount(){    
         TicketServices.getTickets().then((response)  => {
            this.setState({tickets: response.data})
    
         });
     }  
    

    render(){
        return(       
            <div>
                   <div className='table-container'> 
                            <div style={{display:'flex'}}>
                                <div style={{margin:'auto'}}><p className='card-container-titulo'>Tickets</p></div> 
                               <img src={logo} style={{objectFit: 'cover'}}></img>
                            </div>   
                                {
                                    this.state.tickets.map((tickets)  => 
                                        <CardGrid
                                            ticketFrom = {tickets.fromWho}
                                            ticketDate= {tickets.date}
                                            ticketSubject = {tickets.subject}
                                            ticketBody = {tickets.body}
                                            ticketStatus = {tickets.status}
                                        />
                                    )}
                            <div className='card-space'></div>            
                    </div>
            </div>       
        )};
};

export default TicketComponent;