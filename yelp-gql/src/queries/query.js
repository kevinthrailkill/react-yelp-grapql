const makeQuery = ({ zipcode, radius, category }) => {
  const radiusInMeters = 1609.34 * radius;

  return `
  query SearchYelp {
    search(radius: ${radiusInMeters} , location: "${zipcode}", categories: "${category}") {
      total
      business {
        id
        name
        price
        display_phone
        rating
        review_count
        categories {
          title
        }
        location {
          formatted_address
        }
      }
    }
  }
`;
};

export default makeQuery;
