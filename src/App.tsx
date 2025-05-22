import "./App.css";

// [ ] 1) Troubleshoot the 'blank screen' issue
// [ ] 2) Implement the anagram function (see below)
// [ ] 3) Display the 'result' of the anagram function on screen
// [ ] 4) Update the App component to 'wire up' the inputs to the anagram function
// [ ] 5) Update the App component to test 3 words
// [ ] 6) Refactor, generalize to accept an arbitrary number of words
// [ ] 7) Improve the UI/UX

function App() {
  return (
    <>
      <h1>Anagrams?</h1>
      <div className="card">
        <p>
          <input type="text" name="word1" />
        </p>
        <p>
          <input type="text" name="word2" />
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
