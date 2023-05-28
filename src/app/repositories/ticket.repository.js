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

    async findAllByDateOfAttendance() {
        return await prismaService.tickets.findMany({
            where: {
                isAttendance: true
            },
            orderBy: [{
                createdAt: 'asc',
            }]
        });
    }

    async findLastAttendanceIsTrue() {
        return await prismaService.tickets.findFirst({
            where: {
                isAttendance: true
            },
            orderBy: [{
                createdAt: 'desc',
            }]
        });
    }

    async callAttendance(id) {
        return await prismaService.tickets.update({
            where: {
                id: id
            },
            data: {
                isAttendance: true
            }
        })
    }

    async findLastTicketAttendanceInQueue() {
        return await prismaService.tickets.findFirst({
            where: {
                isAttendance: false
            },
            orderBy: [{
                createdAt: 'asc',
            }]
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