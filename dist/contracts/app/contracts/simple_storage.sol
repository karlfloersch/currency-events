contract SimpleStorage {
  uint public articleCount;
  struct Article {
    bytes32 headline;
    uint score;
  }
  Article[] public articles;

  function SimpleStorage(bytes32 _name) {
    articleCount = 0;
  }

  function addArticle(uint s, bytes32 h, bytes32 u) {
    articles.push(Article({
      score: s,
      headline: h,
    }));
    articleCount = articleCount + 1;
  }


  uint public storedData;
  function set(uint x) {
    storedData = x;
  }
  function get() constant returns (uint retVal) {
    return storedData;
  }
}

