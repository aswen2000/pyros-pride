/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      product_number
      product_name
      packing_num
      box_per_case
      product_per_box
      tags
      description
      image
      video_link
      createdAt
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        product_number
        product_name
        packing_num
        box_per_case
        product_per_box
        tags
        description
        image
        video_link
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
