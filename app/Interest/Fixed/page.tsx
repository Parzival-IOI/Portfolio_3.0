'use client';

import { useState } from "react";

const page = () => {

  const [principal, setPrincipal] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [tenor, setTenor] = useState<number>(0);
  const [start, setStart] = useState<Date>(new Date());
  const [days, setDays] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [monthly, setMonthly] = useState<{from: Date, until: Date, days: number, interest: number}[]>([]);


  const interestRate = () => {

    const val : number = ((principal*(rate/100))/tenor)*days;

    setTotal(val);

    monthlyInterest()

  }

  function treatAsUTC(date: Date) {
    var result = new Date(date);
    result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
    return result;
  }

  function daysBetween(startDate: Date, endDate: Date) {
      var millisecondsPerDay = 24 * 60 * 60 * 1000;
      return (treatAsUTC(endDate).valueOf() - treatAsUTC(startDate).valueOf()) / millisecondsPerDay;
  }

  const monthlyInterest = () => {

    let da = days;
    let begin = start;
    const new_monthly = [];

    do{

      const from = new Date(begin);
      const until = new Date(begin.setMonth(begin.getMonth() + 1))

      const diff = daysBetween(from, until);

      new_monthly.push({from: from, until: new Date(until), days: diff, interest: ((principal*(rate/100))/tenor)*diff})

      da = da - diff

      begin = until;

    } while(da>0)

      setMonthly(new_monthly);
      

  }

  function formatDate(date : Date) {
    return `${date.getDate()}-${date.toLocaleString('default', { month: 'short' })}-${date.getFullYear()}`
  }

  return (
    <div className="min-h-screen bg-[#0f1b31] text-[#7cc7d4]">
      <div className="p-8 md:py-20 md:px-32 max-w-7xl mx-auto">
        <section className="pt-8 lg:pt-4 w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-2">
          
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span className="flex select-none items-center px-3 sm:text-sm border-r-2">Principal</span>
              <input type="text" name="principal" id="principal" autoComplete="principal" 
                className="block flex-1 border-0 bg-transparent py-1.5 px-3 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                placeholder="initial money" 
                defaultValue={principal.toString()}
                onChange={e => {
                  setPrincipal(parseFloat(e.target.value))
                }}
              />
            </div>
          </div>

          
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span className="flex select-none items-center px-3 sm:text-sm border-r-2">Tenor</span>
              <input type="text" name="tenor" id="tenor" autoComplete="tenor" 
              className="block flex-1 border-0 bg-transparent py-1.5 px-3 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
              onChange={e => setTenor(parseFloat(e.target.value))}
              defaultValue={tenor.toString()}
              placeholder="Days" />
            </div>
          </div>

          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span className="flex select-none items-center px-3 sm:text-sm border-r-2">Start Date</span>
              <input type="date" name="start" id="start" autoComplete="start" 
              className="block flex-1 border-0 bg-transparent py-1.5 px-3 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
              onChange={e => setStart(new Date(e.target.value))}
              defaultValue={formatDate(start)}
              placeholder="Date" />
            </div>
          </div>

          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span className="flex select-none items-center px-3 sm:text-sm border-r-2">Days</span>
              <input type="text" name="days" id="days" autoComplete="days" 
              className="block flex-1 border-0 bg-transparent py-1.5 px-3 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
              onChange={e => setDays(parseFloat(e.target.value))}
              defaultValue={days.toString()}
              placeholder="Days Interest" />
            </div>
          </div>
          
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span className="flex select-none items-center px-3 sm:text-sm border-r-2">Rate</span>
              <input type="text" name="rate" id="rate" autoComplete="rate" 
              className="block flex-1 border-0 bg-transparent py-1.5 px-3 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
              onChange={e => setRate(parseFloat(e.target.value))}
              defaultValue={rate.toString()}
              placeholder="Percentage" />
            </div>
          </div>

          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <span className="flex select-none items-center px-3 sm:text-sm border-r-2">Tax</span>
              <input type="text" name="rate" id="rate" autoComplete="rate" 
              className="block flex-1 border-0 bg-transparent py-1.5 px-3 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
              onChange={e => setTax(parseFloat(e.target.value))}
              defaultValue={tax.toString()}
              placeholder="Percentage" />
            </div>
          </div>



          <div className="mt-2 sm:max-w-md">
            <button type="submit" 
            onClick={interestRate}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Calculate
            </button>
          </div>
          
        </section>
        <section className="py-4 flex justify-center items-center gap-4">
          <div>
            With Tax: {total}
          </div>
          <div>
            Without Tax: {total * ( 1 - (tax/100))}
          </div>
        </section>
        
        <section className="grid grid-cols-5 gap-0.5 p-0.5 bg-white content-center">
          <Column content="From" title={true} />
          <Column content="To" title={true} />
          <Column content="Days" title={true} />
          <Column content="with tax interest" title={true} />
          <Column content="w/o tax interest" title={true} />
          {
            monthly.map((e, ind) => {
              return (
                <>
                  <Column content={formatDate(e.from)} title={false} />
                  <Column content={formatDate(e.until)} title={false} />
                  <Column content={`${e.days} days`} title={false} />
                  <Column content={`${e.interest.toFixed(4)} $`} title={false} />
                  <Column content={`${(e.interest * ( 1 - (tax/100))).toFixed(4)} $`} title={false} />
                </>
              )
            })
          }
        </section>
          
        
        
      </div>
    </div>
  )
}

export default page



const Column = (props:{content: string, title: boolean}) => {
  return (
    <div className={` p-1 text-center ${props.title ? 'bg-[#23427b]' : 'bg-[#0f1b31]'}`} >{props.content}</div>
  )
}