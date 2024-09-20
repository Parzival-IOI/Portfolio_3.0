export function arrayUnique(array: string[]) {
  let a = array.concat();
  for(let i=0; i<a.length; ++i) {
      for(let j=i+1; j<a.length; ++j) {
          if(a[i] === a[j])
              a.splice(j--, 1);
      }
  }
  return a;
}

export function defaultDate(): string {
  const today = new Date();
  const numberOfDaysToAdd = 3;
  const date = today.setDate(today.getDate() + numberOfDaysToAdd);
  return new Date(date).toISOString().split('T')[0]
}

export function daysInMonth (month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

export function formatDate(date : any) {
  return `${date.getDate()}-${date.toLocaleString('default', { month: 'short' })}-${date.getFullYear()}`
}