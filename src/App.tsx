import "./App.css";

// [ ] 1) Implement the isAnagram function
// [ ] 2) Update the App component to allow 'word1' and 'word2' to be editable
// [ ] 3) Update the App component to test 3 words
// [ ] 4) Refactor, generalize to accept an arbitrary number of words
// [ ] 5) Improve the UX

function App() {
  const word1 = "wolf";
  const word2 = "fowl";

  const result = isAnagram(word1, word2);

  return (
    <>
      <h1>Anagrams?</h1>
      <div className="card">
        <p className="word-field">
          <input type="text" placeholder="enter word1" />
        </p>
        <p className="word-field">
          <input type="text" placeholder="enter word2" />
        </p>
        <h2 className={result ? "success" : "failure"}>
          {result ? "YES" : "NO"}
        </h2>
      </div>
    </>
  );
}

/**
 * Checks if two strings are anagrams of each other.
 * An anagram is a word formed by rearranging the letters of another word,
 * using all the original letters exactly once.
 *
 * @param word1 - The first string to compare
 * @param word2 - The second string to compare
 * @returns True if the strings are anagrams of each other, false otherwise
 */
function isAnagram(word1: string, word2: string): boolean {
  return false;
}

export default App;
