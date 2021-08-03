import gql from 'graphql-tag';

export default gql`
mutation ($input: CreatePictureInput!) {
  createPicture(input: $input) {
    id
    skid
    name
    visibility
    owner
    createdAt
    file {
      region
      bucket
      key
    }
  }
}`;
