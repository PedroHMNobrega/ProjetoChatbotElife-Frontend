import {request} from "./requests.js";
import {apiUrl} from "../config/constants.js";

async function validarPin(pin) {
    await request.postRequest({pin}, apiUrl + '/pin');
}

export const authApi = {
    validarPin
}
