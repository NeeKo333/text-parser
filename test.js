const formatText = (inputText) => {
  let sentences = inputText.split(/([.!?]|(?:\r?\n))\s*/);
  for (let i = 0; i < sentences.length; i++) {
    sentences[i] =
      sentences[i].charAt(0).toUpperCase() +
      sentences[i].slice(1).toLowerCase();
  }

  for (let i = sentences.length - 1; i >= 0; i--) {
    if (sentences[i] === "") {
      continue;
    }

    if (i < sentences.length - 1 && sentences[i + 1] === "\n") {
      sentences[i] = "\n\n" + sentences[i];
      sentences[i + 1] = sentences[i + 1] + "\n";
    }
  }

  let formattedText = sentences.join("").replaceAll(".", ". ");
  return formattedText.replaceAll(/\*\*(?:\d+)?\.|\*(?:\d+)?\.|\d+\./g, "");
};

const textArea = document.querySelector(".textarea");
const submit = document.querySelector(".submit");

submit.addEventListener("click", (e) => {
  textArea.value = formatText(textArea.value);
});
