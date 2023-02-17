import contentful, { gql } from '$lib/contentful';

/** @type {import('./$types').PageServerLoad} */

const GET_ALL_VEHICLES = gql`
	query myQuery {
		vehicleCollection {
			items {
				sys {
					id
				}
				title
				make {
					title
				}
				color {
					title
				}
				imagesCollection {
					items {
						url
					}
				}
			}
		}
	}
`;

export async function load() {
	const res = await contentful.request(GET_ALL_VEHICLES);

	if (res.vehicleCollection.items) {
		return {
			vehicles: res.vehicleCollection.items
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
