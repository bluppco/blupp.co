import { z, defineCollection } from "astro:content";
const benchmarkingCollection = defineCollection({

	schema: z.object({

		page: z.string(),
		other_technology: z.string(),
		pages: z.array(z.object({

			name: z.string(),
			type: z.array(z.object({
				name: z.string(),
				requests_blupp: z.number(),
				requests: z.number(),
				size_blupp: z.number(),
				size: z.number(),
				transfer_blupp: z.number(),
				transfer: z.number(),
			}))


		})),

	})

})
const teamCollection = defineCollection({

	designation: z.string(),
	image: z.string(),
	name: z.string(),
	twitter: z.string(),

})
const full_stack_indiaCollection = defineCollection({

	schema: z.object({

		title: z.string(),
		live: z.boolean(),
		url: z.string(),
		date: z.string(),
		image: z.string(),
		order: z.number(),
		category: z.string(),
		link: z.string(),
		seo_title: z.string(),
		seo_description: z.string(),
	})

})

export const collections = {

	"benchmarking": benchmarkingCollection,
	"team": teamCollection,
	"full-stack-india": full_stack_indiaCollection,

}
