type-gen:
	$$(npm bin)/apollo client:codegen --endpoint=https://api.github.com/graphql \
		--header "Authorization: bearer 0159f88b2ff67decd686a779d8551b84e2628875" \
		--target typescript \
		--includes='src/queries/*' \
		--outputFlat \
		src/queries/types

# Development Build
build:
	$$(npm bin)/tsc
	mkdir -p dist/queries
	cp src/queries/*.gql dist/queries

# Production Build
build-prod: type-gen build

test:
	$$(mocha) -r $$(npm bin)/ts-node/register src/**/*.test.ts

run-entry:
	$$(npm bin)/ts-node src/entries/$(e).ts

run:
	$$(npm bin)/ts-node src/entries/express.ts
