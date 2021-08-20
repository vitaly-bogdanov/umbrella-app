import { TCategoryCreate } from './category.type';

export class CategoryCreateDto {
  readonly title: string

  constructor(data: TCategoryCreate) {
    this.title = data.title;
  }
}
