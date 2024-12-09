export function toCamelCase(str) {
    return str
        .split(/[^a-zA-Z0-9]+/) // Split the string by non-alphanumeric characters
        .map((word, index) => {
            if (index === 0) {
                return word.toLowerCase(); // Lowercase the first word
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize the first letter of subsequent words
        })
        .join(''); // Join the words back together
}

export const parsePrice = (price) => parseFloat(price.replace(/[₹,]/g, ""));