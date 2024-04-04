import { render, screen } from '@testing-library/react';
import Box from './Box';

it("should render without crashing", () => {
    render(<Box color="black" height="20" width="25"/>);
});

it("should match the snapshot", () => {
    const { asFragment } = render(<Box color="black" height="20" width="25"/>);
    expect(asFragment()).toMatchSnapshot();
})