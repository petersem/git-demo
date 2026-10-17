// Check if any arguments are provided
if (process.argv.length <= 2) {
  console.log("No arguments provided.");
  process.exit(1);
}

// Ignore the node and index.mjs arguments and get the passed arguments
const args = process.argv.slice(2);

// List of insults to choose from
const insults = [
  "You're the human equivalent of a participation award.",
  "I've seen dial-up internet connections that are sharper than you.",
  "You bring everyone so much joy... when you leave the room.",
  "Your code has more bugs than an abandoned warehouse.",
  "You have the emotional range of a teaspoon.",
  "I'd agree with you, but then we'd both be wrong.",
  "You're like a cloud—when you disappear, it's a beautiful day.",
  "Your secrets are always safe with me, mostly because I wasn't listening.",
  "You're proof that even mistakes can be made with a lot of confidence.",
  "If laughter is the best medicine, your face is curing the world."
];

// Pick a random insult
const randomIndex = Math.floor(Math.random() * insults.length);
const randomInsult = insults[randomIndex];

// clear the screen
console.clear();
// Output the insult to the console
console.log(args[0] + ", " + randomInsult);
