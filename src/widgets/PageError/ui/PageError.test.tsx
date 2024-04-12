/* eslint-disable i18next/no-literal-string */
import { screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { PageError } from "widgets/PageError";

describe('PageError', () => {
    test('Children props test', () => {
        renderWithTranslation(
            <PageError/>
        )
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
})