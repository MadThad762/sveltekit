import ContentfulClient from "$lib/ContentfulClient";
 
/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const response = await ContentfulClient.getEntries({ content_type: 'vehicle'})
  
    if (response) {
      return {
        vehicles: response.items
      };
    }
    return {
      status: 500,
      body: new Error("Internal Server Error")
    };
  }
