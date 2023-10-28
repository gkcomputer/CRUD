export function generateUniqueID() {
  // Generate a random number between 100000 and 999999 (inclusive)
  const uniqueID = Math.floor(Math.random() * 900000) + 100000;
  return uniqueID;
}
