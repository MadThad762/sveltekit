import prisma from "$lib/Prisma";
 
/** @type {import('./$types').PageServerLoad} */
export async function load() {
      try {
        const response = await prisma.star.findMany()

        if (response) {
          return {
            stars: response
          };
        }
        return {
          status: 500,
          body: new Error("Internal Server Error")
        };
      } catch (e) {
        console.error('Request error', e)
        return {
          status: 500,
          body: new Error("Internal Server Error")
        };
      }
}
