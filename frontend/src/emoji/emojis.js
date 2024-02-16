// Exporting the getRandomEmoji function
export function getRandomEmoji() {
    // Array of emojis
    const emojis = ['😀', '😊', '😎', '😍', '🥳', '🎉', '🌟', '🚀', '💡', '❤️', '🌈', '🍀', '🍕', '🎈', '🎶', '👍'];

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * emojis.length);

    // Return the emoji at the random index
    return emojis[randomIndex];
}
