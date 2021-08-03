import gql from 'graphql-tag';

export const listPictures = gql`
query {
  listPictures(limit: 100) {
    items {
      id
      skid
      name
      visibility
      owner
      createdAt
      file {
        bucket
        region
        key
      }
    }
  }
}`;
