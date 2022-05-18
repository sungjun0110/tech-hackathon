import sendRequest from './send-request';

export function getAll(animal) {
    return sendRequest('http://localhost:3001/dashboard/' + animal);
}

export function createDashboard(animal) {
    return sendRequest('http://localhost:3001/dashboard', 'POST', animal);
}