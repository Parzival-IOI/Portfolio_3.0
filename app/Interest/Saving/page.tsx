'use client';

import Column from "@/Components/Column";
import { daysInMonth, defaultDate, formatDate } from "@/libs/helper";
import { saving_info } from "@/libs/type_support";
import React, { useState } from "react";


const page = () => {

  const [start, setStart] = useState<Date>(new Date());
  const [rate, setRate] = useState<string[]>([]);
  const [tax, setTax] = useState<number>(0);
  const [info, setInfo] = useState<saving_info[]>([]);
  const [sum, setSum] = useState<{full:number, tax: number}>();


  const calc = () => {

    const t2: saving_info[] = [];
    
    for(let i=0; i< daysInMonth(start.getMonth() + 1, start.getFullYear()); i++ ) {
      const t1: saving_info = {
        principal: 0,
        date: `${(i+1).toString()} / ${start.toLocaleString('default', { month: 'short' })} / ${start.getFullYear().toString()}`,
        withTax: 0,
        woTax: 0
      }

      t2.push(t1);

    }

    setInfo(t2);

  }

  const setPrincipalVal = (e: any, index: number) => {
    const t3: saving_info = info[index];

    if(e.target.value === "") {
      t3.principal = 0;
    } else {
      t3.principal = parseFloat(e.target.value);
    }

    const t4: saving_info[] = info;

    t4.splice(index, 1, t3);
    setInfo( JSON.parse(JSON.stringify(t4)) );
  }

  const getRate = (number: number) => {

    let num = 0;

    for(let i=0; i<rate.length; i++) {
        const ind = rate[i].split(",");

        if(ind[0] === "<") {
        if( number < parseFloat(ind[1]) ) {
            num = parseInt(ind[2])
            break;
          } 
        } else if(ind[0] === ">") {
        if( number > parseFloat(ind[1]) ) {
            num = parseInt(ind[2])
            break;
          } 
        } else if(ind[0] === "=") {
          if( number == parseFloat(ind[1]) ) {
            num = parseInt(ind[2])
            break;
          } 
        }
      }

    return num;
  }

  const sumVal = async () => {

    const t5: saving_info[] = []
    let sum_count = 0;

    info.forEach((e) => {
      const t3: saving_info = e;

      const ra = getRate(t3.principal)/100;

      t3.withTax = JSON.parse(JSON.stringify(t3.principal*ra));
      t3.woTax =  JSON.parse(JSON.stringify(t3.withTax * ( 1 - (tax/100))));

      sum_count += t3.withTax;

      t5.push(t3);
    })

    setInfo( JSON.parse(JSON.stringify(t5)) );
    setSum({
      full: sum_count,
      tax: JSON.parse(JSON.stringify(sum_count * ( 1 - (tax/100))))
    })

  }

  return (
    <div className="min-h-screen">
      <div className="px-6 py-20 max-w-3xl mx-auto">
        <h1 className="text-2xl font-light tracking-tight text-center mb-8">Saving Interest</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">

          <div>
            <label className="block text-xs text-neutral-500 mb-1">Start Date</label>
            <input type="date" name="start" id="start"
              className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 text-sm text-neutral-200 outline-none focus:border-neutral-500 transition-colors" 
              onChange={e => setStart(new Date(e.target.value))}
              defaultValue={defaultDate()} />
          </div>

          <div>
            <label className="block text-xs text-neutral-500 mb-1">Gov Tax</label>
            <input type="text" name="tax" id="tax"
              className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-600 outline-none focus:border-neutral-500 transition-colors" 
              placeholder="Government Tax" 
              defaultValue={tax.toString()}
              onChange={e => setTax(parseFloat(e.target.value))}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-xs text-neutral-500 mb-1">Rate Rules</label>
            <textarea name="Rate" id="Rate"
              className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-600 outline-none focus:border-neutral-500 transition-colors" 
              placeholder={"<,1000,5\n>,1000,10\n=,1000,10"}
              rows={4}
              defaultValue={rate.join("\n")}
              onChange={e => setRate(e.target.value.split("\n"))}
            />
          </div>

          <div>
            <button type="button" 
              onClick={calc}
              className="px-4 py-2 text-sm border border-neutral-700 rounded-md text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors">
              Calculate Date
            </button>
          </div>

        </section>

        <section className="grid grid-cols-4 gap-px mt-6 border border-neutral-800 rounded-md overflow-hidden">
          <Column content="Principal" title={true} />
          <Column content="Date" title={true} />
          <Column content="With Tax" title={true} />
          <Column content="W/O Tax" title={true} />
          {
            info.map((e, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="text-center bg-neutral-900/50">
                    <input type="number" name={`p_${index}`} id={index.toString()}
                      className="w-full h-full bg-transparent outline-none px-2 text-xs text-neutral-300 number_wo_arrow"
                      defaultValue={e.principal}
                      onChange={(e) => setPrincipalVal(e, index)}
                    />
                  </div>
                  <Column content={e.date} title={false} />
                  <Column content={`${e.withTax.toFixed(4)} $`} title={false} />
                  <Column content={`${(e.woTax * ( 1 - (tax/100))).toFixed(4)} $`} title={false} />
                </React.Fragment>
              )
            })
          }
        </section>
        {
          info.length !== 0 &&
          <section className="mt-4 space-y-2">
            <button type="button" 
              onClick={sumVal}
              className="px-4 py-2 text-sm border border-neutral-700 rounded-md text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors">
              Calculate Sum
            </button>
            {sum && (
              <div className="flex gap-6 text-sm text-neutral-400">
                <span>Full: {sum.full?.toFixed(4)}</span>
                <span>After Tax: {sum.tax?.toFixed(4)}</span>
              </div>
            )}
          </section>
        }
      </div>
    </div>
  )
}

export default page