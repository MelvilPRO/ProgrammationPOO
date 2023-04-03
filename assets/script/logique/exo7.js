var users = [
  {
    name: 'Jacques',
    age: 24,
    password: '123',
    online: false
  }, {
    name: 'Jean',
    age: 32,
    password: 'aaaaaa',
    online: true
  }, {
    name: 'Marie',
    age: 26,
    password: '',
    online: true
  }
];

for (var user of users) {
  if(user.password == '') {
    console.log(user.name + ' ne possède pas de mot de passe');
  }

  if(user.password != '' && user.password.length < 4) {
    console.log(user.name + ' a un mot de passe trop court');
  }

  if (user.online) {
    console.log(user.name + ' est en ligne');
  }
}