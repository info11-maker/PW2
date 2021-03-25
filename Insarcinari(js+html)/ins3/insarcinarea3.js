const login = prompt('Care este username', '');
const password =  prompt('Care este password', '');

if(login == 'Admin' && password == '1234') {	
    alert('Salut!');
} else if (login != 'Admin' && password != '1234') {
    alert('Greseala de validare')
} else if (login != 'Admin' && password == '1234') {
    alert ('Username incorect')
} else if (login == 'Admin' && password != '1234') {
    alert ('Password incorect')
}