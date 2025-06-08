#!/usr/bin/env zx
import path from 'path'

const env = process.env.ENV

// Read the environment variable values from the JSON file
const envVarsPath = path.join(__dirname, `../configurations/${env}.config.json`)

// Set up env variables
const envVarsData = require(envVarsPath)
for (const key in envVarsData) {
    if (envVarsData.hasOwnProperty(key)) {
        const value = envVarsData[key]
        if (key && value) {
            process.env[key.trim()] = value.trim()
        }
    }
}
await $({ stdio: 'inherit' })`npx cdk deploy -c env=${process.env.ENV} -c namespace=${process.env.NAMESPACE} -c storybookreleasepath=${process.env.STORYBOOK_RELEASE_PATH} --require-approval never`;