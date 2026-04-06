'use strict';



module.exports = {
    async getStudentsbyAgeStatus(ctx) {
        try {
            const students = await strapi
                .documents('api::midterm-student.midterm-student')
                .findMany({
                    filters: {
                        student_status: "inactive",
                        age: {
                            $between: [18, 21],
                        },
                    },
                    populate: {
                        midterm_course: true,
                    }

                })
            ctx.body = students;
            ctx.status = 200;
        } catch (error) {
            ctx.throw(500, error);

        }
    }

}