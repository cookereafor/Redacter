document.addEventListener("DOMContentLoaded", function () {
  const textInput = document.getElementById("text-input");
  const redactInput = document.getElementById("redact-input");
  const redactButton = document.getElementById("redact-button");
  const redactedText = document.getElementById("redacted-text");

  redactButton.addEventListener("click", function () {
    const text = textInput.value;
    const wordsToRedact = redactInput.value
      .split(",")
      .map((word) => word.trim());

    const redactedTextContent = redactWords(text, wordsToRedact);
    redactedText.textContent = redactedTextContent;
  });

  function redactWords(text, wordsToRedact) {
    let redactedText = text;
    wordsToRedact.forEach((word) => {
      const regex = new RegExp(word, "gi"); // "gi" for case-insensitive global search
      redactedText = redactedText.replace(regex, "*****");
    });
    return redactedText;
  }
});
