const convertCurrency = text => {
    return new Intl
        .NumberFormat('az-AZ', {
            currency: 'AZN',
            style: 'currency'
        })
        .format(text);
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.price').forEach(node => {
        node.textContent = convertCurrency(node.textContent)
    });
});




