import { defineMock } from "vite-plugin-mock-dev-server";

export default defineMock({
  url: "/api/anagram/:word1/:word2",
  delay: 500,
  body: ({ params }) => {
    return isAnagram(params.word1, params.word2);
  },
});

function isAnagram(word1: string, word2: string): boolean {
  return word1.split("").sort().join() === word2.split("").sort().join();
}
