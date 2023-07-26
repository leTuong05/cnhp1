import React, { useState } from 'react'
import { Wrapper } from './styles'
import { Button } from 'antd'
import { useEffect } from 'react'
import { GetListTicket, UpdateTicket } from '../../../../../services/apis/Service'

const ListButton = ({ id, listTicket, setListTicket,type }) => {
    const [showReceive, setShowReceive] = useState(true)
    const [showComplete, setShowComplete] = useState(true)

    const filteredListTicket = listTicket?.filter((ticket) => id.includes(ticket.TicketListID));
    const filterListTicketReceive = filteredListTicket.filter((ticket) => ticket.TicketStatus === 1)
    const filterListTicketComplete = filteredListTicket.filter((ticket) => ticket.TicketStatus === 2)


    console.log('listID', id);
    useEffect(() => {
        if (filterListTicketReceive.length === 0) {
            setShowReceive(true);
        }
        if (filterListTicketComplete.length === 0) {
            setShowComplete(true);
        }
        if (filterListTicketReceive.length !== 0) {
            setShowReceive(false);
        }
        if (filterListTicketComplete.length !== 0) {
            setShowComplete(false);
        }

    }, [id, filteredListTicket, filterListTicketReceive, filterListTicketComplete])

    const handleRecive = async () => {
        const ticketIds = filterListTicketReceive.map((ticket) => ticket.TicketListID);
        await UpdateTicket({
            listTicket: ticketIds,
            StatusTicket: 2
        }
        );
        const response = await GetListTicket({
            PageSize: 50,
            CurrentPage: 1,
            TextSearch:  "",
            Date:  "",
            TicketType: type 
        })
        
        if (response.Object) {
            setListTicket(response.Object);
        }

    }

    const handleComplete = async () => {
        const ticketIds = filterListTicketComplete.map((ticket) => ticket.TicketListID);
        await UpdateTicket({
            listTicket: ticketIds,
            StatusTicket: 3
        }
        );
        const response = await GetListTicket({
            PageSize: 50,
            CurrentPage: 1,
            TextSearch:  "",
            Date:  "",
            TicketType: type 
        })
        
        if (response.Object) {
            setListTicket(response.Object);
        }
    }

    return (
        <Wrapper>
            <Button onClick={handleRecive} disabled={showReceive}>
                Tiếp nhận
            </Button>
            <Button onClick={handleComplete} disabled={showComplete}>
                Hoàn thành
            </Button>
        </Wrapper>
    )
}

export default React.memo(ListButton)