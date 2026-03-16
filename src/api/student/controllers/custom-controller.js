'use strict';

const course = require("../../course/controllers/course");
const student = require("./student");

module.exports = {

    async getStudents(ctx) {
        try {
            const students = await strapi
            .documents('api::student.student')
            .findMany({
                filters: {
                    student_status: "active",
                    course: {
                        course_code: "BSIT"
                    }
                },
                populate: {
                    course: true,
                }
            })
            ctx.body = students;
            ctx.status = 200;
        } catch (error) {
            ctx.throw(500, error);

        }
    }
}