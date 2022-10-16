import {ref} from "vue";
import PropertyAPI from "../api/PropertyAPI.js";
import Property from "../model/Property.js";


export let properties = ref([])
export let keyword = ref('')
export let selectedProperty = ref(null);

export function search() {
    properties.value = [];

    if (keyword.value.length <= 0) {
        return;
    }

    let result = PropertyAPI.search(keyword.value);
    if (result.length > 0) {
        result.forEach( (r) =>  {
            properties.value.push(new Property(r))
        });
    }
}

export function showOne(address) {
    let result = PropertyAPI.findOne(address)
    selectedProperty.value = new Property(result);
}

export function resetProperty()
{
    selectedProperty.value = null;
}