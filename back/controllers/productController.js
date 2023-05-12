import { PrismaClient } from "@prisma/client";
import generarCod from "../helpers/generarCodProducto.js";
import { getFilePath } from "../helpers/getFilePath.js";

const prisma = new PrismaClient();

const getAllProducts = async (req, res, next) => {
  try {
    const products = await prisma.producto.findMany({
      where: { eliminado: false },
      select: {
        idproducto: true,
        nombreproducto: true,
        descripcion: true,
        precio: true,
        img1: true,
        codproducto: true,
        categoria: {
          select: {
            idcategoria: true,
            nombrecategoria: true,
          },
        },
        subcategoria: {
          select: {
            idsubcategoria: true,
            nombresub: true,
          },
        },
      },
    });
    return res.status(200).json(
      products.map((product) => ({
        key: product.idproducto,
        nombreproducto: product.nombreproducto,
        descripcion: product.descripcion,
        precio: product.precio,
        img1: product.img1,
        codproducto: product.codproducto,
        idcategoria: product.categoria.idcategoria,
        nombrecategoria: product.categoria.nombrecategoria,
        idsubcategoria: product.subcategoria.idsubcategoria,
        nombresub: product.subcategoria.nombresub,
      }))
    );
  } catch (error) {
    console.log(error);
  }
};

const getProductsbyCategory = async (req, res, next) => {
  const { id } = req.params;
  try {
    const category = await prisma.categoria.findUnique({
      where: {
        idcategoria: Number(id),
      },
    });
    if (!category) {
      return res.status(404).json({ msg: "cateogory not found" });
    }
    const products = await prisma.producto.findMany({
      where: {
        idcategoria: Number(id),
        AND: {
          eliminado: false,
        },
      },
    });

    return res.status(200).json(
      products.map((product) => ({
        key: product.idproducto,
        nombreproducto: product.nombreproducto,
        descripcion: product.descripcion,
        precio: product.precio,
        img1: product.img1,
        codproducto: product.codproducto,
      }))
    );
  } catch (error) {
    console.log(error);
  }
};
const getProductsbySubCategory = async (req, res, next) => {
  const { id } = req.params;
  try {
    const sub = await prisma.subcategoria.findUnique({
      where: {
        idsubcategoria: Number(id),
      },
    });

    if (!sub) {
      return res.status(404).json({ msg: "subcategory not found" });
    }

    const products = await prisma.producto.findMany({
      where: {
        idsubcategoria: Number(id),
        AND: {
          eliminado: false,
        },
      },
    });
    return res.status(200).json(
      products.map((product) => ({
        key: product.idproducto,
        nombreproducto: product.nombreproducto,
        descripcion: product.descripcion,
        precio: product.precio,
        img1: product.img1,
        codproducto: product.codproducto,
      }))
    );
  } catch (error) {
    console.log(error);
  }
};

const createProduct = async (req, res, next) => {
  const { nombreproducto, descripcion, precio, idcategoria, idsubcategoria } =
    req.body;
  const img = req.file;

  try {
    let productCount = await prisma.producto.count();
    productCount += 1;

    const iterador = generarCod(productCount);
    const codigo = iterador.next().value;

    await prisma.producto.create({
      data: {
        nombreproducto,
        descripcion,
        codproducto: codigo,
        precio: Number(precio),
        img1: getFilePath(req.protocol, req.get("host"), img.filename),
        idcategoria: Number(idcategoria),
        idsubcategoria: Number(idsubcategoria),
      },
    });

    return res.status(200).json({ msg: "Producto creado correctamente" });
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res, next) => {
  const { id } = req.params;

  try {
    const productbd = await prisma.producto.findFirst({
      where: {
        AND: [
          {
            idproducto: {
              equals: Number(id),
            },
          },
          {
            eliminado: {
              equals: false,
            },
          },
        ],
      },
    });

    if (!productbd) {
      return res.status(404).json({ msg: "product not found" });
    }

    const product = await prisma.producto.update({
      where: {
        idproducto: Number(id),
      },
      data: {
        eliminado: true,
      },
    });

    return res
      .status(200)
      .json({ product, msg: "Producto eliminado correctamente" });
  } catch (error) {
    console.log(error);
  }
};
const updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const { nombreproducto, descripcion, precio, idcategoria, idsubcategoria } =
    req.body;
  const img = req.file;

  try {
    const productbd = await prisma.producto.findUnique({
      where: {
        idproducto: Number(id),
      },
    });

    if (!productbd) {
      return res.status(404).json({ msg: "Product not found" });
    }

    const product = await prisma.producto.update({
      where: {
        idproducto: Number(id),
      },
      data: {
        nombreproducto: nombreproducto || productbd.nombreproducto,
        descripcion: descripcion || productbd.descripcion,
        precio: Number(precio) || productbd.precio,
        img1: img
          ? getFilePath(req.protocol, req.get("host"), img.filename)
          : productbd.img1,
        idcategoria: Number(idcategoria) || productbd.idcategoria,
        idsubcategoria: Number(idsubcategoria) || productbd.idsubcategoria,
      },
    });

    return res
      .status(200)
      .json({ product, msg: "Producto editado correctamente!" });
  } catch (error) {
    console.log(error);
  }
};

const getOneProduct = async (req, res, next) => {
  const { id } = req.params;

  try {
    const product = await prisma.producto.findFirst({
      where: {
        AND: [
          {
            idproducto: {
              equals: Number(id),
            },
          },
          {
            eliminado: {
              equals: false,
            },
          },
        ],
      },
    });
    if (!product) {
      return res.status(404).json({ msg: "product not found" });
    }
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
};
const countProduct = async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

export {
  createProduct,
  getAllProducts,
  getOneProduct,
  getProductsbyCategory,
  getProductsbySubCategory,
  updateProduct,
  deleteProduct,
};
