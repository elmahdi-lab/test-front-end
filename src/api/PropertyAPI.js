import data from '../data.json';
import PropertyNotFoundException from "../exceptions/PropertyNotFoundException.js";


function search(keyword) {
    return data.biens.filter( (bien) => {
        return bien.address_line1.includes(keyword);
    });
}

function findOne(address) {
    let result = data.biens.filter( (bien) => {
        return bien.address_line1 === address;
    });

    if (result.length === 1) {
        return result[0];
    }

    throw PropertyNotFoundException();
}

export default { search, findOne }
