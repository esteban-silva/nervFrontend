import React from 'react';
import  '../assets/css/Card.css';
import Chip from '@material-ui/core/Chip';

function setearColor({ticketStatus, color}){
    if (ticketStatus == 'NEW'){
        return (color="crimson")
    
    }else{
        return(color="darkcyan")
    }
}

function formatDate(string){
    var options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}

function Card({ticketFrom, ticketDate, ticketSubject ,ticketBody , ticketStatus}){
    return(
        <>  
        <hr className='card-line'/>    
            <div className = 'card-container'>
                <div className = 'card-header'>
                    <div className='align-left'>De: {ticketFrom}</div> 
                    <div className='align-right'>Enviado: {formatDate(ticketDate)}</div>
                </div>                
                <div className='card-body'>
                    <div style={{textOverflow: 'ellipsis', overflow:'hidden',whiteSpace: 'nowrap',  maxWidth: '600px'}}> 
                        <a className='card-status' style={{backgroundColor: setearColor({ticketStatus})}}> {ticketStatus}  </a> 
                        <a className='card-font-body'> {ticketSubject}</a> 
                    </div> 
                </div>
                <div className='card-footer'>
                    <div> {ticketBody} </div> 
                </div>
            </div>
        </>
    
    )
}

export default Card;