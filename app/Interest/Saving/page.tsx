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
    <div className="min-h-screen bg-[#0f1b31] text-[#7cc7d4]">
      <div className="p-8 md:py-20 md:px-32 max-w-7xl mx-auto">
        <section className="pt-8 lg:pt-4 w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-2">

          <div className="mt-2">
            <div className="flex flex-row-reverse rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input type="date" name="start" id="start" autoComplete="start" 
              className="block flex-1 peer border-0 outline-none bg-transparent py-1.5 px-3 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
              onChange={e => setStart(new Date(e.target.value))}
              defaultValue={defaultDate()}
              placeholder="Date" />
              <span className="flex select-none items-center px-3 sm:text-sm border-r border-white peer-focus:border-r-2 peer-focus:border-indigo-600">Start Date</span>
            </div>
          </div>

          <div className="mt-2">
            <div className="flex flex-row-reverse rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input type="text" name="tax" id="tax" autoComplete="tax" 
                className="block flex-1 peer border-0 outline-none bg-transparent py-1.5 px-3 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                placeholder="Government Tax" 
                defaultValue={tax.toString()}
                onChange={e => {
                  setTax(parseFloat(e.target.value))
                }}
              />
              <span className="flex select-none items-center px-3 sm:text-sm border-r border-white peer-focus:border-r-2 peer-focus:border-indigo-600" >Gov Tax</span>
            </div>
          </div>

          <div className="mt-2">
            <div className="flex flex-row-reverse rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <textarea name="Rate" id="Rate" autoComplete="Rate" 
                className="block flex-1 peer border-0 outline-none bg-transparent py-1.5 px-3 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                placeholder="Rate Information" 
                rows={6}
                defaultValue={rate.join("\n")}
                onChange={e => {
                  setRate(e.target.value.split("\n"))
                }}
              >
              </textarea>
            </div>
          </div>

          <div className="mt-2 sm:max-w-md">
            <button type="button" 
              onClick={calc}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Calculate Date
            </button>
          </div>

        </section>

        <section className="grid grid-cols-4 gap-0.5 p-0.5 bg-white content-center mt-6" >
          <Column content="Principal" title={true} />
          <Column content="Date" title={true} />
          <Column content="with tax interest" title={true} />
          <Column content="w/o tax interest" title={true} />
          {
            info.map((e, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="text-center bg-[#0f1b31]" >
                    <input type="number" name={`p_${index}`} id={index.toString()}
                      className="w-full h-full bg-transparent outline-none px-2 number_wo_arrow"
                      defaultValue={e.principal}
                      onChange={(e) => {
                        setPrincipalVal(e, index);
                      }}
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
          <section >
              <div className="mt-2 sm:max-w-md">
                <button type="button" 
                  onClick={sumVal}
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Calculate Sum In Month
                </button>
              </div>
              <div>{sum?.full}</div>
              <div>{sum?.tax}</div>
          </section>
        }
      </div>
    </div>
  )
}

export default page