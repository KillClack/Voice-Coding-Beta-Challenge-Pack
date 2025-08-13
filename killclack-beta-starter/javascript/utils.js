// Inconsistent naming and styles
function getData(users) {
  return users.map(u => ({name: u.username, score: u.score}));
}

function score_average(usersArray) {
  return usersArray.reduce((acc, u) => acc + u.score, 0) / usersArray.length;
}

function get_user_by_id(users, id) {
  return users.find(userObj => userObj.id === id);
}

// Not used anywhere (try finding it via search)
function unusedHelper() {
  return 'I am not being used!';
}
