import React, { ReactNode } from 'react';
import { AlertDialog as AlertDialogTheme, Button, Flex } from '@radix-ui/themes';

export interface AlertDialogProps {
  trigger: ReactNode;
  title: string;
  description: string;
  cancelText?: string;
  actionText?: string;
  onAction?: () => void;
  maxWidth?: string;
  color?: 'tomato' | 'red' | 'ruby' | 'crimson' | 'pink' | 'plum' | 'purple' | 'violet' | 'iris' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'jade' | 'green' | 'grass' | 'brown' | 'orange' | 'gold' | 'bronze';
  variant?: 'solid' | 'soft' | 'surface' | 'outline' | 'ghost';
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
  trigger,
  title,
  description,
  cancelText = 'Cancel',
  actionText = 'Confirm',
  onAction,
  maxWidth = '450px',
  color,
  variant = 'solid',
}) => {
  return (
    <AlertDialogTheme.Root>
      <AlertDialogTheme.Trigger>
        {trigger}
      </AlertDialogTheme.Trigger>
      <AlertDialogTheme.Content maxWidth={maxWidth}>
        <AlertDialogTheme.Title>
          {title}
        </AlertDialogTheme.Title>
        <AlertDialogTheme.Description size="2">
          {description}
        </AlertDialogTheme.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialogTheme.Cancel>
            <Button variant="soft" color="gray">
              {cancelText}
            </Button>
          </AlertDialogTheme.Cancel>
          <AlertDialogTheme.Action>
            <Button variant={variant} color={color} onClick={onAction}>
              {actionText}
            </Button>
          </AlertDialogTheme.Action>
        </Flex>
      </AlertDialogTheme.Content>
    </AlertDialogTheme.Root>
  );
}; 