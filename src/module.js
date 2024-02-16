/**
 *
 * @param {object} p An object representing a person, implementing a function returning age
 * @returns {number}
 */
export function calculateAge(p) {
    if (!p) throw new Error("missing param p");
    if (p && typeof p !== "object") throw new Error("it's not an object");
    if (p.birth === undefined)
      throw new Error("object doesn't contain input birth");
    if (!(p.birth instanceof Date)) throw new Error("input birth isn't a date");
  
    const birthDate = p.birth instanceof Date ? p.birth : new Date(p.birth);
  
    if (isNaN(birthDate.getTime())) {
      throw new Error("date is false");
    }
  
    let dateDiff = new Date(Date.now() - p.birth.getTime());
    let age = Math.abs(dateDiff.getUTCFullYear() - 1970);
    return age;
  }
  
  // Créez un objet avec une propriété 'birth' contenant la date de naissance
  let person = { birth: new Date("1990-01-01") };
  
  // Appelez la fonction calculateAge en passant l'objet créé
  let age = calculateAge(person);
  
  export default calculateAge;
  