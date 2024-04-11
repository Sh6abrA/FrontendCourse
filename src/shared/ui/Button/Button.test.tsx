/* eslint-disable i18next/no-literal-string */

import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";
import React from "react";

describe('Button', () => {
    test('Children props test', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('Theme test', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);//render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });

})