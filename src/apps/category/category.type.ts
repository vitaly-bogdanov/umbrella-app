import { Document } from 'mongoose';

export type TCategoryCreate = {
  title: string
};

export type TCategoryUpdate = {
  title?: string
};

export interface ICategory extends Document {
  title: string
}
