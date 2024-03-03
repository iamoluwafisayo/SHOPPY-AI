const Joi = require('joi');

// Définition d'un schéma de validation pour un utilisateur
const userSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    birthdate: Joi.date().max('now').required(),
    isAdmin: Joi.boolean().default(true)
});

// Données à valider
const userData = {
    username: "123",
    email: 'john.doe@example.com',
    password: 'password123',
    birthdate: '1990-01-01',
   
};

// Validation des données
const validationResult = userSchema.validate(userData);

if (validationResult.error) {
    console.error(validationResult.error.details[0].message.replace(/"/g, ''));
} else {
    console.log("Données valides :", validationResult.value);
}

