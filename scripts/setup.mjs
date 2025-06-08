#!/usr/bin/env zx
await $({ stdio: 'inherit' })`aws codeartifact login --tool npm --repository common-ts-libs --domain raintree-libs`;
await $({ stdio: 'inherit' })`npm ci`;