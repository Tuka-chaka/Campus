function sortMonths (data) {
    const months = ['Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек', 'Янв']

    return months.map((month) => data.find((item) => item.month === month))
}

export default sortMonths