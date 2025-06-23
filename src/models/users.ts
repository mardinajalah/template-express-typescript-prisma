import prisma from "../config/prisma";

interface NewDataType {
    nama: string
    email: string
    password: string
}

const getDataUsers = async () => {
    return await prisma.user.findMany()
}

const createDataUser = async (newData: NewDataType) => {
    return await prisma.user.create({
        data: newData
    })
}

const getDataUserById = async (idUser: number) => {
    return await prisma.user.findUnique({
        where: { id: idUser }
    })
}

const updateDataUser = async (idUser: number, newData: NewDataType) => {
    return await prisma.user.update({
        data: newData,
        where: { id: idUser }
    })
}

const deleteDataUser = async (idUser: number) => {
    return await prisma.user.delete({
        where: { id: idUser }
    })
}

export default { getDataUsers, createDataUser, getDataUserById, updateDataUser, deleteDataUser }