import { Schema, model } from 'mongoose';

import { ICategory } from './category.interface';
import { MODEL_NAME } from './category.constant';

export const categoryModel = model<ICategory>(
  MODEL_NAME,
  new Schema<ICategory>({
    title: { type: String, required: true },
  }),
);
