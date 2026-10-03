export function truncateText(str: string, maxLength: number): string {

    if (str.length > maxLength) {
        return str.substring(0, maxLength) + '...';
    }
    return str;

}

export function formatDate(dateString: string): string {
    
    const dayNames = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ]
    
    const date = new Date(dateString);
    
    const dayName = dayNames[date.getDay()]
    const day = String(date.getUTCDate())
    const month = date.toLocaleString('en-US', { month: 'short', timeZone: 'UTC' });
    const year = date.getUTCFullYear();
    
    return `${dayName}, ${day} ${month}`;
}

export function formatMoney(value: number): string {
    if (!Number.isFinite(value)) {
        return '—';
    }
    return new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
    }).format(value);
}