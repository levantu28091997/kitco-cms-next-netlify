# kitco-cms-next

start the project.
we're just a script from the package.json
all env vars are in both the circle config as well .env.development

```
cd next/
yarn dev
```

or if you're so inclined to use local k8s

```
./start-local-k8s.sh
```

We're using [gql-codegen](https://graphql-code-generator.com/docs/getting-started/index) in order to get generated types and hooks for more declarative code.
All data fetches to be stored in factory objects like so:
(Please take note of the empty Generic for `args`)

Step 1. create query i.e.

```typescript
// src/lib/news-factory.lib-ts

const news = {
	categoriesTree: (args: <>) => {
		return {
			...args?.options,
			queryKey: ["categoriesTree", args?.variables],
			queryFn: gql`
				query CategoriesTree {
					categoriesTree {
						id
						name
						urlAlias
					}
				}
			`
		}
	}
}
`;
```

Step 2.

```bash
yarn generate
```

Step 3.
Add the generated types to the query

```typescript
// src/lib/news-factory.lib-ts
import type { CategoriesTreeQuery, CategoriesTreeQueryVariables } from '~/src/core/generated'

const news = {
	categoriesTree: (args: <CategoriesTreeQuery, CategoriesTreeQueryVariables>) => {
		return {
			...args?.options,
			queryKey: ["categoriesTree", args?.variables],
			queryFn: gql`
				query CategoriesTree {
					categoriesTree {
						id
						name
						urlAlias
					}
				}
			`
		}
	}
}
`;
```

Step 4. (pt 1.)
Usage on the client

```typescript
import { useQuery } from "react-query";
import { news } from "~/src/lib/news-factory.ts";

const { data } = useQuery(
  news.categoriesTree({
		variables: { ...incoming?.vars }
	})
);
```


Step 4. (pt 2.)
Usage on the server

```typescript
import { QueryClient } from 'react-query'
import { news } from "~/src/lib/news-factory.ts";

export const getServerSideProps: GetServerSideProps = async () => {
	const client = new QueryClient()

	const { queryKey, queryFn } = news.categoriesTree()

	await client.prefetch(queryKey, queryFn)

	return {
		props: {
			// why all the stringify shenanigans? Well its because nextjs sucks at handling types that arent easily serialized
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
		}
	}
}
```
