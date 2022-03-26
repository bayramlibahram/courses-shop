const {v4: uuid} = require('uuid');
const fs = require('fs');
const path = require('path');

class Course {
    constructor(title, price, url) {
        this._id = uuid();
        this._title = title;
        this._price = price;
        this._url = url;
    }

    async save() {
        try {
            const courses = await Course.getAll();
            courses.push(this.toJson());
            return new Promise((resolve, reject) => {
                fs.writeFile(
                    path.join(__dirname, '..', 'data', 'courses.json'),
                    JSON.stringify(courses),
                    (err) => {
                        if (err) reject(err);
                        else {
                            resolve();
                        }
                    }
                );
            });
        } catch (e) {
            console.log(e)
        }
    }

    toJson() {
        return {
            id: this._id,
            title: this._title,
            price: this._price,
            url: this._url
        }
    }

    static async getAll() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '../data', 'courses.json'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve((JSON).parse(content));
                    }

                }
            );
        });
    }

    static async getById(id) {
        const courses = await Course.getAll();
        return courses.find(course => course.id === id);

    }

    static async update(course) {
       try {
           const courses = await Course.getAll();

           const index = courses.findIndex(c => c.id === course.id);

           courses[index] = course;

           return new Promise((resolve, reject) => {
               fs.writeFile(
                   path.join(__dirname, '..', 'data', 'courses.json'),
                   JSON.stringify(courses),
                   (err => {
                       if (err) reject(err);
                       else resolve();
                   })
               );
           });
       }
       catch (e) {
           console.log(e)
       }
    }
}

module.exports = Course;