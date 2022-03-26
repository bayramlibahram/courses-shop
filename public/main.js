document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.price').forEach(node => {
        const formattedPrice = new Intl
            .NumberFormat('az-AZ', {
                currency: 'AZN',
                style: 'currency'
            })
            .format(node.textContent);
        node.textContent = formattedPrice;
    });
});