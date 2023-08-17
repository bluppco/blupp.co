import { z, defineCollection } from "astro:content";
const benchmarkingCollection = defineCollection({

	schema: z.object({

		page: z.string(),
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

export const collections = {

	"benchmarking": benchmarkingCollection,

}
