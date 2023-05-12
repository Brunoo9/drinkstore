import { PrismaClient } from "@prisma/client";
import createHttpError from "http-errors";

const prisma = new PrismaClient();

const getCategories = async (req, res, next) => {
  try {
    const categories = await prisma.categoria.findMany();

    // const categories = await prisma.subcategoria.findMany({
    //   select: {
    //     idsubcategoria: true,
    //     nombresub: true,
    //     categoria: {
    //       select: {
    //         idcategoria: true,
    //         nombrecategoria: true,
    //       },
    //     },
    //   },
    // });
    return res.status(200).json(categories);
  } catch (error) {
    const httpError = createHttpError(
      error.statusCode,
      `[Error get categories] - [index - GET]: ${error.message}`
    );
    next(httpError);
  }
};
const getSubCategories = async (req, res, next) => {
  const { idcategoria } = req.body;
  try {
    const subCategories = await prisma.subcategoria.findMany({
      where: {
        idcategoria,
      },
    });

    return res.status(200).json(subCategories);
  } catch (error) {
    const httpError = createHttpError(
      error.statusCode,
      `[Error get subcategories] - [index - GET]: ${error.message}`
    );
    next(httpError);
  }
};

export { getCategories, getSubCategories };
