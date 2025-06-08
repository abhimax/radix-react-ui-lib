// types/index.d.ts
declare module 'radix-react-ui-lib' {
    import {
      Button as RadixButton,
      Text as RadixText,
      Heading as RadixHeading,
      Theme as RadixTheme,
    } from '@radix-ui/themes'
  
    export const Button: React.FC<React.ComponentProps<typeof RadixButton>>
    export const Text: React.FC<React.ComponentProps<typeof RadixText>>
    export const Heading: React.FC<React.ComponentProps<typeof RadixHeading>>
    export const Theme: React.FC<React.ComponentProps<typeof RadixTheme>>
    export const AgendaComponent: React.FC<React.ComponentProps>
  }
  