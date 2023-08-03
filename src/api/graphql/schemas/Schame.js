import { gql } from '@apollo/client'

const ExampleQuery = gql`
 query GetBooks {
    getClothes {
     productID
     name
	 slug
	 price
	 imageUrl
	 categoryID
	 
    }
  }
`
const getClothesOnly = gql`
	query getClothesOnly($id: ID!) {
		getClothesOnly(id: $id) {
			productID
			name
            imageUrl			
		}
	}
`
export { ExampleQuery, getClothesOnly }
