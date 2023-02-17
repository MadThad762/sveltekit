import { CONTENTFUL_SPACE_ID, CONTENT_ACCESS_TOKEN } from '$env/static/private';
import { GraphQLClient } from 'graphql-request';

export { gql } from 'graphql-request';

const contentful = new GraphQLClient(
	`https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}` as string,
	{
		headers: {
			Authorization: `Bearer ${CONTENT_ACCESS_TOKEN}` as string
		}
	}
);

export default contentful;
