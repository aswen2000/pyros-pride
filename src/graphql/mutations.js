/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      product_number
      product_name
      box_per_case
      product_per_box
      pieces_per_product
      category
      available
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          productTagsId
        }
        nextToken
      }
      description
      image
      video_link
      createdAt
      updatedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      product_number
      product_name
      box_per_case
      product_per_box
      pieces_per_product
      category
      available
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          productTagsId
        }
        nextToken
      }
      description
      image
      video_link
      createdAt
      updatedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      product_number
      product_name
      box_per_case
      product_per_box
      pieces_per_product
      category
      available
      tags {
        items {
          id
          tag
          createdAt
          updatedAt
          productTagsId
        }
        nextToken
      }
      description
      image
      video_link
      createdAt
      updatedAt
    }
  }
`;
export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      tag
      product {
        id
        product_number
        product_name
        box_per_case
        product_per_box
        pieces_per_product
        category
        available
        tags {
          nextToken
        }
        description
        image
        video_link
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      productTagsId
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      tag
      product {
        id
        product_number
        product_name
        box_per_case
        product_per_box
        pieces_per_product
        category
        available
        tags {
          nextToken
        }
        description
        image
        video_link
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      productTagsId
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      tag
      product {
        id
        product_number
        product_name
        box_per_case
        product_per_box
        pieces_per_product
        category
        available
        tags {
          nextToken
        }
        description
        image
        video_link
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      productTagsId
    }
  }
`;
