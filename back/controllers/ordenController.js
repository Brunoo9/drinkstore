import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllOrders = async (req, res) => {
  try {
    const orders = await prisma.orden.findMany();
    res.json(orders);
  } catch (error) {
    console.log(error);
  }
};

export { getAllOrders };
