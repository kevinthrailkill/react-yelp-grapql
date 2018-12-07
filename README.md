# Yelp GraphQL Front End

Using the public GraphQL API provided by Yelp to
build a client-side application that lists the top businesses around a specified location.

# START APPLICATION + PROXY

- you need to run npm install twice. once in the proxy dir and then once in the client.

- npm run dev when in the main proxy dir

## Requirements

- Use the public GraphQL API provided by Yelp, for more information, see [here](https://www.yelp.com/developers/graphql/guides/intro).
- Provide way for the user to specify a location by zip code and distance.
- Display a list (or table) of businesses that match the search parameters.
- Allow filtering of businesses by category.
- Add a way for users to "favorite" certain businesses (state should be completely client-side)
- Show an alphabetically ordered list of favorite businesses. This should update as businesses are starred / unstarred.
- Persist the favorite list locally and regenerate the view on page refresh.
- In a README note any required setup to be able to run the app

## Additions if I would of had more time

- Add in animations for searching (ie loading bar)
- Add in testing suite
- fix up categories more to include location based ones
