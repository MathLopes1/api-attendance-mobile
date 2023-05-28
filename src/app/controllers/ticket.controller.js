const ticketService = require("../services/ticket.service");

class TicketController {
    async createTicket(req, res) {
        const newTicket = await ticketService.createTicket(req.body);
        res.status(201).json(newTicket);
    } 

    async getAllTickets(req, res) {
        const newTicket = await ticketService.getAllTickets();
        res.status(200).json(newTicket);
    } 

    async getTicketById(req, res) {
        const ticketId = parseInt(req.params.id);
        const ticket = await ticketService.getTicketById(ticketId);
        res.status(200).json(ticket);
    } 

    async updateTicketById(req, res) {
        const ticketId = parseInt(req.params.id);
        const payload = req.body;
        const ticket = await ticketService.updateTicketById(ticketId, payload);
        res.status(200).json(ticket);
    }
    
    async deleteTicketById(req, res) {
        const ticketId = parseInt(req.params.id);
        const ticket = await ticketService.deleteTicketById(ticketId);
        res.status(200).json(ticket);
    } 
}

const ticketController = new TicketController();
module.exports = ticketController;