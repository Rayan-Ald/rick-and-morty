// import React from "react";
// import Login from "../../../src/Components/Login/Login";
// import { logInWithEmailAndPassword, signInWithGoogle } from "../../../firebase";

import { expect } from "@jest/globals";
import { it } from "node:test";
import { describe } from "yargs";

describe('assert hellouser', () => {
    it('when name isnull it should print anon', function () {
        expect(helloUser()).toEqual('something')
    })
})
// jest.mock("../../firebase", () => ({
//     logInWithEmailAndPassword: jest.fn(),
//     signInWithGoogle: jest.fn()
// }));

// test("it should not allow to submit the form if email is invalid", () => {
//     const { getByPlaceholderText, getByText } = render(<Login />);
//     const emailInput = getByPlaceholderText("E-mail Address");
//     const passwordInput = getByPlaceholderText("Password");
//     const submitButton = getByText("Login");

//     fireEvent.change(emailInput, { target: { value: "invalid_email" } });
//     fireEvent.change(passwordInput, { target: { value: "valid_password" } });

//     expect(submitButton).toBeDisabled();
// });

// test("it should not allow to submit the form if password is too short", () => {
//     const { getByPlaceholderText, getByText } = render(<Login />);
//     const emailInput = getByPlaceholderText("E-mail Address");
//     const passwordInput = getByPlaceholderText("Password");
//     const submitButton = getByText("Login");

//     fireEvent.change(emailInput, { target: { value: "valid_email@domain.com" } });
//     fireEvent.change(passwordInput, { target: { value: "short" } });

//     expect(submitButton).toBeDisabled();
// });

// test("it should allow to submit the form if email and password are valid", () => {
//     const { getByPlaceholderText, getByText } = render(<Login />);
//     const emailInput = getByPlaceholderText("E-mail Address");
//     const passwordInput = getByPlaceholderText("Password");
//     const submitButton = getByText("Login");

//     fireEvent.change(emailInput, { target: { value: "valid_email@domain.com" } });
//     fireEvent.change(passwordInput, { target: { value: "valid_password" } });

//     fireEvent.click(submitButton);

//     expect(logInWithEmailAndPassword).toHaveBeenCalledWith("valid_email@domain.com", "valid_password");
// });

// test("it should call signInWithGoogle function when clicking on the Google button", () => {
//     const { getByText } = render(<Login />);
//     const googleButton = getByText("Login with Google");

//     fireEvent.click(googleButton);

//     expect(signInWithGoogle).toHaveBeenCalled();
// });