import { z, defineCollection } from "astro:content";

const teamCollection = defineCollection({

	designation: z.string(),
	image: z.string(),
	name: z.string(),
	twitter: z.string(),

})

export const collections = {

	"team": teamCollection,

}
