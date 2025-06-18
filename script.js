
const glossary = {
  "AGI": {
    definition: "Artificial General Intelligence — an AI that can learn anything a human can. Not just good at one task, but *all* of them.",
    why: "It’s the holy grail of AI — and also what scares people the most.",
    misha: "AGI isn’t just tech. It’s a mirror. What kind of intelligence do we want to reflect?"
  },
  "LLM": {
    definition: "Large Language Model — a machine trained on *massive* amounts of text to predict the next word, and the next… like a super autocomplete.",
    why: "LLMs power ChatGPT, Gemini, Claude — they’re the brains behind the bots.",
    misha: "They don’t think. They predict. But prediction is powerful when you wrap it in a human voice."
  },
  "zk-rollup": {
    definition: "Zero-Knowledge Rollup — a way to bundle many blockchain transactions and prove they’re valid *without revealing* all the details.",
    why: "It makes blockchains faster and more private at the same time.",
    misha: "Proof without exposure — this is privacy as performance art."
  },
  "middleware": {
    definition: "Software that connects two other things — like glue between your app and a database.",
    why: "Invisible, but essential. It makes systems talk to each other.",
    misha: "Middleware is like stage crew. Without it, the show doesn’t run — even if no one claps for it."
  }
};

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
