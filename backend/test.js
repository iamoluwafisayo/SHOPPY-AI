import usrSchema from './models/UserModel.js';
import validation from './utils/validator.js';

const userData = {
    firstname: 'John',
    lastname: 'Doe',
    email: 'daa',
    password: 'password'
};

   async function valite() {
       const isValide = await validation(usrSchema, userData);
       if(isValide === true)
       {
           console.log(isValide);
       }
   }
valite()
