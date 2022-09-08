function currency(value: number) {
    return value.toLocaleString('pt', { maximumFractionDigits: 2, minimumFractionDigits: 2 })
}

export default currency