var express = require('express');
var app = express();

app.set('view engine', 'ejs');

const familyMembers = [
  {
    name: 'Ethel',
    about: "Ethel is a retired computer programmer who started her career at IBM in the 1960's. At IBM she had to keep her weeding ring at home in order to maintain her job. She loves growing roses and is a fantastic baker.",
  },
  {
    name: 'Harold',
    about: "Harold is a retired computer programmer who started her career at IBM in the 1960's. At IBM she had to keep her weeding ring at home in order to maintain her job. She loves growing roses and is a fantastic baker.",
  },
  {
    name: 'Paul',
    about: "Paul is a retired computer programmer who started her career at IBM in the 1960's. At IBM she had to keep her weeding ring at home in order to maintain her job. She loves growing roses and is a fantastic baker.",
  },
  {
    name: 'Rich',
    about: "Rich is a retired computer programmer who started her career at IBM in the 1960's. At IBM she had to keep her weeding ring at home in order to maintain her job. She loves growing roses and is a fantastic baker.",
  },
]

app.get('/', (req, res) => {
  res.render('./pages/home')
})
app.get('/:memberName', (req, res) => {
  let member = familyMembers.find(m => m.name.toLowerCase() == req.params.memberName.toLowerCase())
  if(!member) res.status(400).send('Member not found')
  res.render('./pages/member', {member, familyMembers})
})

app.listen(5000)