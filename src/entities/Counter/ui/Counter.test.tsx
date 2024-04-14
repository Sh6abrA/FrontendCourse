/* eslint-disable i18next/no-literal-string */
import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Counter } from "./Counter";

describe('Counter', () => {
    test('Children props test', () => {
        componentRender(<Counter/>, {
            initialState: {
                counter: {
                    value: 10
                }
            }
        })
        expect(screen.getByTestId('value-title')).toHaveTextContent('value = 10');
    });
    test('incremented', () => {
        componentRender(<Counter/>, {
            initialState: {
                counter: {
                    value: 10
                }
            }
        })
        fireEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('value = 11');
    });
    test('decremented', () => {
        componentRender(<Counter/>, {
            initialState: {
                counter: {
                    value: 10
                }
            }
        })
        fireEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('value = 9');
    });
   
})