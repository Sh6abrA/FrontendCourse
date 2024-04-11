
import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";

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