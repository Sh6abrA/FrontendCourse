/* eslint-disable i18next/no-literal-string */
import { screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { PageLoader } from "./PageLoader";


describe('PageError', () => {
    test('Children props test', () => {
        renderWithTranslation(
            <PageLoader/>
        )
        expect(screen.getByTestId('page-loader')).toBeInTheDocument();
    });
})