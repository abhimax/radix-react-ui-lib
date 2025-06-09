await $({ stdio: 'inherit' })`aws codeartifact login --tool npm --repository ui --domain radix-react-ui --region us-east-1`;
await $({ stdio: 'inherit' })`npm ci`;