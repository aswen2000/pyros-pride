/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
      id
      product_number
      product_name
      box_per_case
      product_per_box
      pieces_per_product
      category
      available
      tags {
        id
        tag
        createdAt
        updatedAt
      }
      description
      image
      video_link
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
      id
      product_number
      product_name
      box_per_case
      product_per_box
      pieces_per_product
      category
      available
      tags {
        id
        tag
        createdAt
        updatedAt
      }
      description
      image
      video_link
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
      id
      product_number
      product_name
      box_per_case
      product_per_box
      pieces_per_product
      category
      available
      tags {
        id
        tag
        createdAt
        updatedAt
      }
      description
      image
      video_link
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
      id
      tag
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
      id
      tag
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
      id
      tag
      createdAt
      updatedAt
    }
  }
`;
