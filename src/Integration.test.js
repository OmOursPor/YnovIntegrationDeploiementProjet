const { render, fireEvent, screen } = require("@testing-library/react");
const { default: App } = require("./App");

describe("RegistrationForm Integration Tests", () => {
  test("check form", () => {
    render(<App />);

    // const button = screen.getByRole("button");
    // expect(button).toBeDisabled();

    // let email = screen.getByLabelText("Email");
    // fireEvent.change(email, { target: { value: "lucas@gmail" } });

    // let firstName = screen.getByLabelText("Prénom");
    // fireEvent.change(firstName, { target: { value: "dalisson" } });

    // let lastName = screen.getByLabelText("Nom");
    // fireEvent.change(lastName, { target: { value: "lucas" } });

    // let birthDate = screen.gFetByLabelText("Date de naissance");
    // fireEvent.change(birthDate, { target: { value: "2009-01-01" } });

    // let city = screen.getByLabelText("Ville");
    // fireEvent.change(city, { target: { value: "fréjus" } });

    // let zip = screen.getByLabelText("Code postal");
    // fireEvent.change(zip, { target: { value: "18250" } });

    // expect(button).not.toBeDisabled();
  });

  test("check form", () => {
    render(<App />);

    // const button = screen.getByRole("button");

    // let lastName = screen.getByLabelText("Nom");
    // fireEvent.change(lastName, { target: { value: "lucas" } });

    // let firstName = screen.getByLabelText("Prénom");
    // fireEvent.change(firstName, { target: { value: "dalisson" } });

    // let email = screen.getByLabelText("Email");
    // fireEvent.change(email, { target: { value: "lucas@gmail" } });

    // let birthDate = screen.getByLabelText("Date de naissance");
    // fireEvent.change(birthDate, { target: { value: "2009-01-01" } });

    // let city = screen.getByLabelText("Ville");
    // fireEvent.change(city, { target: { value: "fréjus" } });

    // let zip = screen.getByLabelText("Code postal");
    // fireEvent.change(zip, { target: { value: "18250" } });

    // console.log(screen.getByLabelText("Prénom").value);

    // fireEvent.click(button);

    // expect(localStorage.getItem("firstName")).toEqual("lucas");
    // expect(localStorage.getItem("lastName")).toEqual("dalisson");
    // expect(localStorage.getItem("email")).toEqual("lucas@gmail");
    // expect(localStorage.getItem("birthDate")).toEqual("2009-01-01");
    // expect(localStorage.getItem("city")).toEqual("fréjus");
    // expect(localStorage.getItem("zip")).toEqual("18250");
  });
});
