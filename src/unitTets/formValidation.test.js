import calculateAge from "../module";
import { checkBirthDate, checkEmail, checkString, checkZip } from "../validations/formValidation";

describe("formValidation test", () => {
  it("should return the age", () => {
    const loise = {
      birth: new Date(Date.now() - 33 * 365 * 24 * 60 * 60 * 1000),
    };
    expect(calculateAge(loise)).toEqual(32);
  });

  it("Vous êtes trop jeune", () => {
    const date = new Date(Date.now())
    const result = checkBirthDate(date)
    expect(result.message.value).toEqual("Vous êtes trop jeune");
  })

  it("Veuillez rentrer un code postal à 5 chiffre", () => {
    const zip = 123457
    const result = checkZip(zip)
    expect(result.message.value).toEqual("Veuillez rentrer un code postal à 5 chiffre");
  })

  it("Le nom est correcte", () => {
    const name = "Lucas"
    const result = checkString(name, "nom", "lastName");
    expect(result.message.value).toEqual("");
  })

  it("Le nom ne doit pas contenir de chiffre", () => {
    const name = "Lucas4"
    const result = checkString(name, "nom", "lastName");
    expect(result.message.value).toEqual("Le nom ne doit pas contenir de chiffre ou de caractère spécial");
  })

  it("Le nom ne doit pas contenir de caractère spécial", () => {
    const name = "Lucas-_"
    const result = checkString(name, "nom", "lastName");
    expect(result.message.value).toEqual("Le nom ne doit pas contenir de chiffre ou de caractère spécial");
  })

  it("Le nom ne doit pas contenir de caractère spécial", () => {
    const email = "Lucasgmail.com"
    const result = checkEmail(email);
    expect(result.message.value).toEqual("Le format de l'email n'est pas valide, il manque un arobase");
  })

  it("Le nom ne doit pas contenir de caractère spécial", () => {
    const email = "Lucasgmail.com"
    const result = checkEmail(email);
    expect(result.message.value).toEqual("Le format de l'email n'est pas valide, il manque un arobase");
  })

  it("Le nom ne doit pas contenir de caractère spécial", () => {
    const email = "Lucasgmail.com"
    const result = checkEmail(email);
    expect(result.message.value).toEqual("Le format de l'email n'est pas valide, il manque un arobase");
  })
});
