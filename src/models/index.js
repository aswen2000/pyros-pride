// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, Tag } = initSchema(schema);

export {
  Product,
  Tag
};