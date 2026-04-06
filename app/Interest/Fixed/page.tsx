'use client';

import Column from "@/Components/Column";
import { defaultDate, formatDate } from "@/libs/helper";
import React, { useState } from "react";

const page = () => {

  const [principal, setPrincipal] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [tenor, setTenor] = useState<number>(0);
  const [start, setStart] = useState<Date>(new Date());
  const [days, setDays] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [monthly, setMonthly] = useState<{from: Date, until: Date, days: number, interest: number}[]>([]);
  const [total_monthly, setTotalMonthly] = useState<number>(0);



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
    let begin = new Date(start);
    const new_monthly = [];
    let monthly_calc = 0;

    do{

      const from = new Date(begin);
      const until = new Date(begin.setMonth(begin.getMonth() + 1))
      const diff = daysBetween(from, until);

      if(da <= diff) {

        const end_date = new Date(until);

        for(let i=0; i<da; i++) {
          end_date.setDate(end_date.getDate() + 1)
        }

        const interest = ((principal*(rate/100))/tenor)*da;
        monthly_calc = monthly_calc + parseFloat(interest.toFixed(2));

        new_monthly.push({from: from, until: end_date, days: da, interest: interest})

        break;
      }

      const interest = ((principal*(rate/100))/tenor)*diff;
      monthly_calc = monthly_calc + parseFloat(interest.toFixed(2));

      new_monthly.push({from: from, until: new Date(until), days: diff, interest: interest})

      console.log(da);

      da = da - diff

      begin = until;
    

    } while(da > 0);

    // if (da > 0) {

    // }
    

    setMonthly(new_monthly);
    setTotalMonthly(monthly_calc);
      

  }


  

  return (
    <div className="min-h-screen">
      <div className="px-6 py-20 max-w-3xl mx-auto">
        <h1 className="text-2xl font-light tracking-tight text-center mb-8">Fixed Interest</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          
          <div>
            <label className="block text-xs text-neutral-500 mb-1">Principal</label>
            <input type="text" name="principal" id="principal"
              className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-600 outline-none focus:border-neutral-500 transition-colors" 
              placeholder="Initial money" 
              defaultValue={principal.toString()}
              onChange={e => setPrincipal(parseFloat(e.target.value))}
            />
          </div>

          <div>
            <label className="block text-xs text-neutral-500 mb-1">Tenor</label>
            <input type="text" name="tenor" id="tenor"
              className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-600 outline-none focus:border-neutral-500 transition-colors" 
              onChange={e => setTenor(parseFloat(e.target.value))}
              defaultValue={tenor.toString()}
              placeholder="Days" />
          </div>

          <div>
            <label className="block text-xs text-neutral-500 mb-1">Start Date</label>
            <input type="date" name="start" id="start"
              className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 text-sm text-neutral-200 outline-none focus:border-neutral-500 transition-colors" 
              onChange={e => setStart(new Date(e.target.value))}
              defaultValue={defaultDate()} />
          </div>

          <div>
            <label className="block text-xs text-neutral-500 mb-1">Days</label>
            <input type="text" name="days" id="days"
              className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-600 outline-none focus:border-neutral-500 transition-colors" 
              onChange={e => setDays(parseFloat(e.target.value))}
              defaultValue={days.toString()}
              placeholder="Days Interest" />
          </div>
          
          <div>
            <label className="block text-xs text-neutral-500 mb-1">Rate</label>
            <input type="text" name="rate" id="rate"
              className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-600 outline-none focus:border-neutral-500 transition-colors" 
              onChange={e => setRate(parseFloat(e.target.value))}
              defaultValue={rate.toString()}
              placeholder="Percentage" />
          </div>

          <div>
            <label className="block text-xs text-neutral-500 mb-1">Tax</label>
            <input type="text" name="tax" id="tax"
              className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-600 outline-none focus:border-neutral-500 transition-colors" 
              onChange={e => setTax(parseFloat(e.target.value))}
              defaultValue={tax.toString()}
              placeholder="Percentage" />
          </div>

          <div className="sm:col-span-2">
            <button type="button" 
              onClick={interestRate}
              className="px-4 py-2 text-sm border border-neutral-700 rounded-md text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors">
              Calculate
            </button>
          </div>
          
        </section>

        <section className="mt-6 flex items-center gap-6 text-sm text-neutral-400">
          <span>With Tax: {total.toFixed(4)}</span>
          <span>Without Tax: {(total * ( 1 - (tax/100))).toFixed(4)}</span>
        </section>
        
        <section className="grid grid-cols-5 gap-px mt-6 border border-neutral-800 rounded-md overflow-hidden">
          <Column content="From" title={true} />
          <Column content="To" title={true} />
          <Column content="Days" title={true} />
          <Column content="With Tax" title={true} />
          <Column content="W/O Tax" title={true} />
          {
            monthly.map((e, index) => {
              return (
                <React.Fragment key={index}>
                  <Column content={formatDate(e.from)} title={false} />
                  <Column content={formatDate(e.until)} title={false} />
                  <Column content={`${e.days} days`} title={false} />
                  <Column content={`${e.interest.toFixed(4)} $`} title={false} />
                  <Column content={`${(e.interest * ( 1 - (tax/100))).toFixed(4)} $`} title={false} />
                </React.Fragment>
              )
            })
          }
        </section>
        
        {total_monthly > 0 && <p className="mt-4 text-sm text-neutral-500">Total: {total_monthly.toFixed(4)}</p>}
        
      </div>
    </div>
  )
}

export default page