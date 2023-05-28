const { PrismaClient } = require('@prisma/client')
const prismaService = new PrismaClient()

class TicketRepository {
    async create(ticket) {
        return await prismaService.tickets.create({
            data: ticket
        });
    }

    async findLastTicketAttendance(priority) {
        return await prismaService.tickets.findFirst({
            where: {
                priority: priority
            },
            orderBy: [{
                password: 'desc',
            }]
        })
    }

    async getAll() {
        return await prismaService.tickets.findMany();
    }

    async getById(id) {
        return await prismaService.tickets.findUnique({
            where: {
                id: id
            }
        })
    }

    async updateById(id, data) {
        return await prismaService.tickets.update({
            where: {
                id: id
            },
            data: data
        })
    }

    async deleteById(id) {
        return await prismaService.tickets.delete({
            where: {
                id: id
            }        
        })
    }
}

const ticketRepository = new TicketRepository();
module.exports = ticketRepository;