const bcrypt = require('bcryptjs');

const password = 'mypassword';

const hashMyPasword = async ()=>{

    // Hashing passwords

    const hashedPassword = await bcrypt.hash(password, 8);

    console.log(password);
    console.log(hashedPassword);


    // checking 

    const isMatch = await bcrypt.compare(password, hashedPassword);

    console.log(isMatch);

}

hashMyPasword();