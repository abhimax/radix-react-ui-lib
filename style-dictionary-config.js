import StyleDictionary from "style-dictionary";
import { register } from "@tokens-studio/sd-transforms";

// Register the custom transforms (if any)
register(StyleDictionary, { excludeParentKeys: true });

// Create the configuration
const config = {
    log: {
        verbosity: 'verbose' // Add this
      },
source: ["lib/tokens/figma/sync-based/**/*.json"], // Path to your token files
  preprocessors: ["tokens-studio"], // Use tokens-studio for preprocessing
  platforms: {
    css: {
      transforms: ["name/kebab", "attribute/cti"], // Ensure 'name/kebab' is applied for kebab-case
      buildPath: "lib/tokens/figma/sync-sd-css/",
      files: [
        {
          destination: "_variables.css",
          format: "css/variables", // Format the output as CSS variables
        },
      ],
    },
  },
};

// Execute the build process
(async () => {
  const sd = new StyleDictionary(config); // Use the config directly to initialize StyleDictionary
  await sd.cleanAllPlatforms();
  await sd.buildAllPlatforms();
  register(sd, {
    excludeParentKeys: false // Change to false (default is false)
  });
})();


