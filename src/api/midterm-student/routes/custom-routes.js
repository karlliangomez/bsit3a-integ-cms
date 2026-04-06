'use strict';

module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/midterm-students/filter-by-age-status',
            handler: 'custom-controller.getStudentsbyAgeStatus'
        }
    ],
}