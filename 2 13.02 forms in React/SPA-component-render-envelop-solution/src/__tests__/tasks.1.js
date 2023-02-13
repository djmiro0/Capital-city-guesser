import React from 'react';
import '@testing-library/jest-dom';
import { render, cleanup } from '@testing-library/react';
import App from '../App';
import Envelope from '../Components/Envelope';

afterEach(cleanup);

describe('Envelope Component', () => {
    it("`Envelope` Component is defined as default export in `src/Components/Envelope.jsx`", () => {
        expect(Envelope).toBeDefined();
    });
    it("Should render and accept `toPerson` and `fromPerson` props", () => {
        const { fromPerson, toPerson } = {
            fromPerson: {
                fullName: 'Micheal Doe',
                address: '123 Blank Street',
                cityStateZip: 'Columbus, OH 43203',
            },
            toPerson: {
                fullName: 'Jane Doe',
                address: '321 Blank Street',
                cityStateZip: 'San Francisco, CA 43204',
            } 
        }
        const { getByText } = render(<Envelope fromPerson={fromPerson} toPerson={toPerson} />);
        expect(getByText('Micheal Doe')).toBeInTheDocument();
    });
});
describe('Stamp', () => {
    it('`App` component exists in `src/App.js`', async () => {
        expect(App).toBeDefined();
    });
    it('Component should contain an image', async () => {
        render(<App />)
        const images = document.querySelectorAll('img');
        expect(images.length).toBe(1);
    });
});