# Radix React UI Library

The **Radix React UI Library** Demo serves as a comprehensive showcase of the UI library design-to-development process. This demo library demonstrates how to build, maintain, and release UI components in a structured, efficient manner. By centralizing the management of UI components, it ensures a consistent look and feel across different systems and applications. The library enforces UI/UX standards and simplifies development, reducing redundant tasks and streamlining maintenance.

**Storybook** plays an essential role in the development workflow, allowing developers to create, test, and document UI components in isolation. It fosters team collaboration by providing an interactive visual reference for components, along with testing and documentation capabilities.

Built on atomic design principles, this library primarily utilizes Radix UI theme components. A design token system and syncing mechanism have been implemented to facilitate smooth collaboration between developers and designers.

This demo UI library also highlights key modern development practices, such as an automated release process using Semantic Release, unit testing, and static Storybook deployment. It provides a fully automated environment for continuous integration and deployment, helping teams to maintain a reliable and consistent UI component library effortlessly.

## Prerequisites

- NodeJS v20
- NPM

## How to Set up Locally

1. Run `npm install` to install the dependencies.
2. Run `npm run storybook` to start the Storybook locally.

## How to Add a New Component

1. **Create a Folder**:

- Navigate to lib/components/primitives for Radix components or lib/components/extended for components from other UI libraries. Create a new folder for your component within the appropriate directory.

Based on the complexity of your component, there are two types of primitives:

**Raw Components**: These components are used without customization, exported as-is. We only apply style overrides based on the design tokens to ensure consistency.

**Custom Components**: These components include customizations, but still leverage Radix UI components as building blocks. We create composite components that simplify development by combining Radix elements into a cohesive structure.

2. **Folder Structure**:
   Inside the newly created component folder, set up the following structure:

- **tests** folder for unit tests specific to your component.
- styles folder to store component-specific styles.
- \*.tsx file for the component's implementation.
- index.ts file to export the component for easy access throughout the project.

3. **Develop the Component**:

- Add any custom styles in the `styles` folder as needed.
- Define TypeScript type definitions in the corresponding `*.d.ts` file.
- Write unit tests for the component using Vitest in the `__tests__` folder.
- Document the component using Storybook. Create a `*.stories.tsx` file and include examples for all possible UI states of the component.

4. **Export the Component**:

- Export the component from `src/components/index.ts` to make it available for use across the library.

5. **Adding Integration Tests**

- Import the newly developed component into the `test-app/src/components` folder to integrate it into a React application.

- Write tests to verify the component’s behavior in a real-world app environment, ensuring it performs as expected.

The setup.mjs file contains a script that builds the root library and copies the compiled artifacts from the dist folder into the node_modules folder of the test-app. This setup simulates the process of installing the component library as an npm package, allowing you to test the component in a realistic environment.

### Design Tokens

This section outlines the folder structure and usage of design tokens.

1. **Figma**:

   - **sync-based**: Contains the `token.json` file, which is fetched from the Canopy UI Figma file. Note that this file does not update automatically. Developers can get the latest token updates using the Figma Token Studio plugin.
   - **sync-sd-css**: Contains the `_variables.css` file, which is generated using Styled Dictionary.

2. **theme-reset**:

   - **accent-colors.css**: Overrides all accent colors with synced CSS variables.
   - **background-colors.css**: Overrides background color tokens with synced values.
   - **gray-colors.css**: Replaces all gray color definitions with synced tokens.
   - **typography.css**: Overrides font styles with synced tokens.
   - **token-main.css**: Imports all of the above CSS files. This file will be included in the build process and added to the final bundle.

   ### CI/CD

   TODO..
