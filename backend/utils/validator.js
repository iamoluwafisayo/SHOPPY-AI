const validation = async (Schema, data) => {
    try{
        const isValide = await Schema.validateAsync(data)
        return Boolean(isValide)
    } catch(err){
        return err.details[0].message.replace(/"/g, '')

    }

};

export default validation;
