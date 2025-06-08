import React from 'react';
import {Button, Theme, Heading, Text} from '../lib/components';
function App() {
  return (
    <Theme >
      <Heading as='h1' size="7">Radix React UI</Heading>
      <Text>You've started the development server for testing components within the library. To view the Storybook documentation, please use the command npm run storybook.</Text>
      <Button data-testid="button">Default</Button>
      <Button color="gray">Gray</Button>
    </Theme>
  );
}
export default App
