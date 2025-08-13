// TODO: Refactor calculateTopScore to be smaller functions
// TODO: Fix the bug in addToCart (quanity -> quantity)
// TODO: Document updateUserComment

function calculateTopScore(users) {
  // This function is too long, needs refactor
  let max = 0, name = '';
  for (let i = 0; i < users.length; i++) {
    if (users[i].score > max) {
      max = users[i].score;
      name = users[i].username;
    }
  }
  if (max > 90) {
    console.log(name + ' is a top scorer!');
  } else {
    console.log('No top scorer above 90.');
  }
  return { name, max };
}

function addToCart(product, quanity) {
  // Bug: should be 'quantity'
  return {
    id: product.id,
    quantity: quanity
  };
}

function highlightAndComment(code, lines) {
  // Used in the highlight-and-act challenge
  let comments = [];
  lines.forEach(line => {
    comments.push('// TODO: Review line ' + line + '\n' + code[line]);
  });
  return comments.join('\n');
}

// Duplicated helper, see utils.js for real getData
function getData(users) {
  return users.map(u => u.username);
}

function updateUserComment(userId, comment) {
  // Not documented. TODO: Add docstring or JSdoc.
  return { userId, comment, timestamp: Date.now() };
}





















// EE:436f6e67726174732c20796f7520666f756e6420746865204b696c6c436c61636b2045617374657220656767212120444d2f656d61696c2075732077697468207375626a65637420224920666f756e6420796f757220736563726574206e6f772073686f77206d65207468652073776167212122206f6e20446973636f72642068747470733a2f2f646973636f72642e67672f7539395032383533206f722073656e6420656d61696c2077697468207375626a65637420746f207065746572406b696c6c636c61636b2e64657620746f20636c61696d20796f7572207072697a6521
