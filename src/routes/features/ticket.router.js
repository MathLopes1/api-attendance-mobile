const ticketController = require("../../app/controllers/ticket.controller");

module.exports = (server, routes, prefix = '/api/v1/ticket') => {
    routes.post('/', ticketController.createTicket);
    routes.get('/', ticketController.getAllTickets);
    routes.get('/:id', ticketController.getTicketById);
    routes.put('/:id', ticketController.updateTicketById);
    routes.delete('/:id', ticketController.deleteTicketById);

    server.use(prefix, routes);
};
  