import pkg from "contentful";
const { createClient } = pkg;
import { SPACE_ID, CONTENT_DELIVERY_API } from "$env/static/private"

const ContentfulClient = createClient({
    space: SPACE_ID,
    accessToken: CONTENT_DELIVERY_API,
})

export default ContentfulClient