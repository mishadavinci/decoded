
let glossary = {};

fetch('glossary.json')
  .then(response => response.json())
  .then(data => {
    glossary = data;
  });

function decodeTerm() {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();
  const output = document.getElementById("outputArea");
  output.innerHTML = "";

  const termKey = Object.keys(glossary).find(key => key.toLowerCase() === input);

  if (termKey) {
    const entry = glossary[termKey];
    output.innerHTML = `
      <div class="term">${termKey}</div>
      <p><strong>What it means:</strong> ${entry.definition}</p>
      <p><strong>Why it matters:</strong> ${entry.why}</p>
      <p><strong>Misha’s take:</strong> <em>${entry.misha}</em></p>
    `;
  } else {
    output.innerHTML = `<p class="not-found">Hmm… that term isn't in our decoder (yet). Try another or suggest one to add.</p>`;
  }
}
