const formatterNumber = number => {
    return new Intl.NumberFormat('en', {
        style: 'currency',
        currency: 'GBP',
    }).format(number);
}

export default formatterNumber;