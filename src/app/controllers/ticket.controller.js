const ticketService = require("../services/ticket.service");

class TicketController {
    async createTicket(req, res) {
        const newTicket = await ticketService.createTicket(req.body);
        res.status(201).json(newTicket);
    } 

    async findAllByDateOfAttendance(req, res) {
        const newTicket = await ticketService.findAllByDateOfAttendance();
        res.status(200).json(newTicket);
    } 

    async findLastAttendanceIsTrue(req, res) {
        const ticket = await ticketService.findLastAttendanceIsTrue();
        res.status(200).json(ticket);
    } 

    async callAttendance(req, res) {
        const ticket = await ticketService.callAttendance();
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