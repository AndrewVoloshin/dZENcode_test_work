import moment from 'moment';

export function formatDate(dateString: string): { part: string; full: string } {
    return {
        part: moment(dateString).format('MM / YYYY'),
        full: moment(dateString).format('D / MMMM / YYYY')
    };
}
