// types/global.d.ts

declare module '*.css' {
    const content: string;
    export default content;
  }
  
  declare module '@radix-ui/themes/tokens.css';
  declare module '@radix-ui/themes/components.css';
  declare module '@radix-ui/themes/utilities.css';
  declare module 'tokens/custom-main.css';
  