export default class PropertyNotFoundException extends Error
{
    constructor() {
        super('Unable to find the property requested.');
    }
}