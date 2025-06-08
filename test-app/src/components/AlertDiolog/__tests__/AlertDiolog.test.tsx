import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {AlertDialog}  from 'radix-react-ui-lib';

describe("AlertDialog Rendering", () => {
  test("renders the default trigger button", () => {
    render(
      <AlertDialog
        title="Test Title"
        description="Test Description"
        actionButtonLabel="OK"
        cancelButtonLabel="Cancel"
      />
    )
    expect(screen.getByText("Open Alert Dialog")).toBeInTheDocument()
  })
});