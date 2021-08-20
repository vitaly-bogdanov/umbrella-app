import { categoryModel } from './category.model';
import { ICategory } from './category.interface';

export const getAllCategoriesService = async (): Promise<ICategory[]> => categoryModel.find();
