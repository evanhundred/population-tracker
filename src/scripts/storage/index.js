const person = {
  name: 'Chris',
  mood: ':D'
};

window.localStorage.setItem('mood', JSON.stringify(person));
