#!/usr/bin/env zx
await $({ stdio: 'inherit' })`npx cdk deploy -c env=DEV -c namespace="" -c storybookreleasepath=${process.env.STORYBOOK_RELEASE_PATH} --require-approval never`;