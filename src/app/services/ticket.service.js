const TicketRepository = require("../repositories/ticket.repository.js");

class TicketService {
    async createTicket(ticket) {
        const lastAttendanceForPriority = await TicketRepository.findLastTicketAttendance(ticket.priority);

        let newTicket;
        let password;

        if (!lastAttendanceForPriority) {
            password = await this.generatePassword(ticket.password);
        } else {
            password = await this.generatePassword(lastAttendanceForPriority.password);
        }

        newTicket = await TicketRepository.create({ isAttendance: false, password, priority: ticket.priority });

        return newTicket;
    }

    async generatePassword(lastPassword = '') {
        if (lastPassword.length > 0) {
            lastPassword = lastPassword ? parseInt(lastPassword.slice(-2)) : 0;
        }

        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' }).replace(/\//g, '');
        const lastTicketNumber = lastPassword ? lastPassword : 0;
        const ticketNumber = (lastTicketNumber + 1).toString().padStart(2, '0');
        const password = `${formattedDate}-SP${ticketNumber}`;

        return password;
    }

    async getAllTickets() {
        const allTickets = await TicketRepository.getAll();
        return allTickets;
    }

    async getTicketById(id) {
        const ticket = await TicketRepository.getById(id);
        return ticket;
    }

    async updateTicketById(id, payload) {
        const ticketUpdated = await TicketRepository.updateById(id, payload);
        return ticketUpdated;
    }

    async deleteTicketById(id) {
        const ticket = await TicketRepository.deleteById(id);
        return ticket;
    }
}

const ticketService = new TicketService();
module.exports = ticketService;