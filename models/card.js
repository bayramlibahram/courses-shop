const fs = require('fs');
const path = require('path');

class Card {
    static async add(course) {
        try {
            const card = await Card.fetch();

            const idx = card.courses.findIndex(c => c.id === course.id);

            const candidate = card.courses[idx];

            if (candidate) {
                candidate.count++;
                card.courses[idx] = candidate;
            } else {
                course.count = 1;
                card.courses.push(course);
            }

            card.price += parseInt(course.price);
            return new Promise((resolve, reject) => {
                fs.writeFile(
                    path.join(__dirname, '..', 'data', 'card.json'),
                    JSON.stringify(card),
                    err => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve();
                        }
                    }
                )
            });
        } catch (e) {
            console.log(e);
        }
    }

    static async fetch() {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, '..', 'data', 'card.json'),
                'utf-8',
                (err, content) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(JSON.parse(content));
                    }
                }
            );
        });
    }
}

module.exports = Card;