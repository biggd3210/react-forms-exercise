import React from "react";
import { render, screen, fireEvent, wait } from '@testing-library/react';
import BoxList from './BoxList';

function addBox(boxList, height = "2", width = "2", color = "peachpuff") {
    const heightInput = boxList.getByLabelText("Height");
    const widthInput = boxList.getByLabelText("Width");
    const backgroundInput = boxList.getByLabelText("Color");
    fireEvent.change(backgroundInput, { target: { value: color } });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });
    const button = boxList.getByText("Add a new box!");
    fireEvent.click(button);
}
it('should render without crashing', () => {
    render(<BoxList />);
});

it('should match the snapshot', () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", function() {
    const boxList = render(<BoxList />);

    //no boxes yet
    expect(boxList.queryByText("Remove The Box!")).not.toBeInTheDocument();

    addBox(boxList);

    // expect to see a box
    const removeButton = boxList.getByText("Remove The Box!");
    expect(removeButton).toBeInTheDocument;
    expect(removeButton.previousSibling).toHaveStyle(`
        width: 2px;
        height: 2px;
        background-color: peachpuff
    `);
    // expect form to be empty
    expect(boxList.getAllByDisplayValue("")).toHaveLength(1);

    // expect(asFragment()).toMatchSnapshot();
});

it("can remove a box", function() {
    const boxList = render(<BoxList />);

    addBox(boxList);

    const removeButton = boxList.getByText("Remove The Box!");

    //click the remove button and the box should be gone
    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
});