import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Product {
  readonly id: string;
  readonly product_number: string;
  readonly product_name?: string;
  readonly box_per_case?: number;
  readonly product_per_box?: number;
  readonly pieces_per_product?: number;
  readonly category?: string;
  readonly available?: boolean;
  readonly tags?: string[];
  readonly description?: string;
  readonly image?: string;
  readonly video_link?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class Tag {
  readonly id: string;
  readonly tag: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Tag, TagMetaData>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag, TagMetaData>) => MutableModel<Tag, TagMetaData> | void): Tag;
}