function ValidMotPass(password, objretour) {
  var lower = false;
  var upper = false;
  var numbers = false;
  var special = false;

  if (password.length < 8) {
    objretour["errmess"] =
      "Le mot de passe doit-être supérieur ou égal à 8 caractères";
    return objretour;
  }

  if (password.length > 100) {
    objretour["errmess"] =
      "Le mot de passe ne doit pas dépasser 100 caractères";
    return objretour;
  }

  let strings = password;
  let i = 0;
  let character = "";
  let nbMaj = 0;
  let nbMin = 0;
  let nbDigit = 0;
  let nbBlanc = 0;
  //
  // charAt(i) retourne le caractère i de la chaine
  // La méthode Number.isNaN() permet de déterminer si la valeur passée
  // en argument est un nombre
  //
  while (i <= strings.length) {
    character = strings.charAt(i);

    if (character == " ") {
      // caractère blanc
      nbBlanc = nbBlanc + 1;
    } else {
      if (!isNaN(character * 1)) {
        // character is numeric
        nbDigit = nbDigit + 1;
      } else {
        if (character == character.toUpperCase()) {
          // upper case true
          nbMaj = nbMaj + 1;
        }
        if (character == character.toLowerCase()) {
          // lower case true
          nbMin = nbMin + 1;
        }
      }
    }
    i++;
  }

  nbDigit = nbDigit - 1;

  if (nbMaj < 1) {
    objretour["errmess"] =
      "Le mot de passe doit comporter au moins une Majuscule";
    return objretour;
  }

  if (nbMin < 1) {
    objretour["errmess"] =
      "Le mot de passe doit comporter au moins une minuscule";
    return objretour;
  }

  if (nbDigit < 2) {
    objretour["errmess"] =
      "Le mot de passe doit comporter au moins deux digits";
    return objretour;
  }

  if (nbBlanc > 0) {
    objretour["errmess"] = "Le mot de passe ne doit pas comporter de blancs";
    return objretour;
  }
  //
  // Le mot de passe est valide
  //
  objretour["trtOk"] = true;
}
export default ValidMotPass;
