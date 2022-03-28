const convertCurrency = text => {
    return new Intl
        .NumberFormat('en-En', {
            currency: 'USD',
            style: 'currency'
        })
        .format(text);
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.price').forEach(node => {
        node.textContent = convertCurrency(node.textContent)
    });
});




