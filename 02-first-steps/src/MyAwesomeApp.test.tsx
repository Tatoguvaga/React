import { describe, test } from "vitest";
import { render, screen } from '@testing-library/react'

import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp', () => {

    test('should render firsName and lastName', () => {
        render(<MyAwesomeApp/>);

        screen.debug();
        
    });
});