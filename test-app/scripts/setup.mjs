#!/usr/bin/env zx
await $`cd .. && npm run build`
await $`mkdir -p node_modules/radix-react-ui-lib`
await $`cp -r ../dist node_modules/radix-react-ui-lib`
await $`cp ../package.json node_modules/radix-react-ui-lib`