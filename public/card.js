const card = document.querySelector('#card');

if (card) {
    card.addEventListener('click', event => {
        if (event.target.classList.contains('card-item-remove')) {
            const id = event.target.dataset.id;
            fetch(`/card/remove/${id}`, {
                method: 'delete',
            })
                .then(res => res.json())
                .then(card => {
                    if (card.courses.length) {
                        const cardCourses = card.courses.map(course => {
                            return `
                         <tr>
                            <td>${course.title}</td>
                            <td>${course.count}</td>
                            <td><button class="btn btn-sm btn-danger card-item-remove" data-id="${course.id}">Delete</button></td>
                        </tr>
                        `;
                        }).join('');
                        document.querySelector('tbody').innerHTML = cardCourses;
                        document.querySelector('.price').textContent = convertCurrency(card.price);
                    } else {
                        document.querySelector('#card').innerHTML = `<p class="text-warning"> Card is empty</p>`
                    }
                });
        }
    });
}

