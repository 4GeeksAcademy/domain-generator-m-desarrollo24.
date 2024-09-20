console.log("Generador de dominios");

let pronoun =["the", "our"];
let adj =["great", "big"];
let noun = ["jogger", "racoon", "jugar", "conectar"];
let extensions = [".com", ".net", ".us", ".io"];
let domainHacks = [".es", ".it", ".me", ".us" , ".ar"];

function generateDomains() {
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        // Domains
        for (let e of extensions) {
          console.log(`${n}${e}`);
        }
        // "Domain hacks"
        for (let d of domainHacks) {
          // Lenght of n
          if (n.endsWith(d.replace(".", ""))) {
            // Hack
            console.log(`${n.substring(0, n.length - d.replace(".", "").length)}${d}`);
          }
        }
      }
    }
  }
}

generateDomains();