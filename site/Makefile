build:
	$$(npm bin)/tsc
	cp src/issue.gql dist

test:
	$$(mocha) -r $$(npm bin)/ts-node/register src/**/*.test.ts

run:
	$$(npm bin)/ts-node src/entries/$(entry).ts
