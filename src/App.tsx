import "./App.css";

// [ ] 1) Implement the isAnagram function
// [ ] 2) Update the App component to allow 'word1' and 'word2' to be editable
// [ ] 3) Update the App component to test 3 words
// [ ] 4) Refactor, generalize to accept an arbitrary number of words
// [ ] 5) Improve the UX

function App() {
  const word1 = "wolf";
  const word2 = "fowl";

  return (
    <>
      <h1>Anagrams?</h1>
      <div className="card">
        <p>
          <input type="text" />
        </p>
        <p>
          <input type="text" />
        </p>
      </div>
      <p>{result}</p>
    </>
  );
}

export default App;

/**
 * The following function checks if two strings are anagrams of each other.
 * An anagram is a word formed by rearranging the letters of another word,
 * using all the original letters exactly once.
 *
 * @param word1 - The first string to compare
 * @param word2 - The second string to compare
 * @returns True if the strings are anagrams of each other, false otherwise
 */
// TODO: implement anagram function
