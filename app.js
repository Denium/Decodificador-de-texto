const textArea = document.querySelector("#textarea__apresentacao");
const inputResultDecrypt = document.querySelector("#textarea__resultado");
const btn_criptografar = document.querySelector(".criptografarBtn");
const btn_descriptografar = document.querySelector(".descriptografarBtn");
const btn_copy = document.querySelector("#btn_copy");

function onChangeTextAreaResultado() {
  let textAreaResultado = document.getElementById("textarea__resultado");
  let imgLupa = document.getElementById("imgLupa");
  let msgNenhuma = document.getElementById("msgNenhuma");

  if (textAreaResultado.value && textAreaResultado.value !== textAreaResultado.defaultValue) {
    imgLupa.style.display = "none";
    msgNenhuma.style.display = "none";
  } else {
    imgLupa.style.display = "block";
    msgNenhuma.style.display = "block";
  }
}

function criptografar(string) {
  const result = string
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  return result;
}

function descriptografar(string) {
  const result = string
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  return result;
}

btn_criptografar.addEventListener("click", () => {
  const result = criptografar(textArea.value);
  inputResultDecrypt.value = result;
  onChangeTextAreaResultado();
});

btn_descriptografar.addEventListener("click", () => {
  const result = descriptografar(textArea.value);
  inputResultDecrypt.value = result;
  onChangeTextAreaResultado();
});

btn_copy.addEventListener("click", () => {
  try {
    navigator.clipboard.writeText(inputResultDecrypt.value);
    console.log("texto copiado!");
  } catch {
    console.log("falha");
  }
});
