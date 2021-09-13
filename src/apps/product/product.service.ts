import { PrismaClient } from '@prisma/client';

const { product } = new PrismaClient();

export const getProductsService = async () => product.findMany();

export const getProductService = async (where: any) => product.findUnique(where);

export const createProductService = async (data: any) => product.create(data);

export const updateProductService = async (where: any, data: any) => product.update({ where, data });

export const deleteProductService = async (where: any) => product.delete({ where });
