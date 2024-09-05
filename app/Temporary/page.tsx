'use client';

import { useState } from "react";

export type payroll_type = {
  branch: number,
  account: string,
  salary: string
}


const page = () => {

  const [payroll, setPayroll] = useState<string>();
  const [account, setAccount] = useState<string>();
  const [payrollcut, setPayrollcut] = useState<payroll_type[]>([]);


  function insertPayroll(text: string) {
    const convert = text.split("\n");
    const array: payroll_type[] = [];

    convert.map((value) => {
      const test = value.split(",");
      const newArray: payroll_type = {
        branch: parseInt(test[0]),
        account: test[1],
        salary: test[2],
      }
      array.push(newArray);
    })

    setPayroll(text);
    setPayrollcut(array);

    console.log(array);
  }

  return (
    <div className="min-h-screen bg-[#0f1b31] text-[#7cc7d4]">
      <div className="p-8 md:py-20 md:px-32 max-w-7xl mx-auto">
        <section className="pt-8 lg:pt-4 w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="mt-2">
            <div className="flex flex-row-reverse rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <textarea name="payroll" id="payroll" autoComplete="payroll" 
                className="block flex-1 peer border-0 outline-none bg-transparent py-1.5 px-3 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                placeholder="Payroll Information" 
                rows={6}
                defaultValue={payroll}
                onChange={e => {
                  insertPayroll(e.target.value)
                }}
              >

              </textarea>
              <span className="flex select-none items-center px-3 sm:text-sm border-r border-white peer-focus:border-r-2 peer-focus:border-indigo-600" >Payroll</span>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex flex-row-reverse rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <textarea name="account" id="account" autoComplete="account" 
                className="block flex-1 peer border-0 outline-none bg-transparent py-1.5 px-3 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" 
                placeholder="Account Information" 
                rows={6}
                defaultValue={account}
                onChange={e => {
                  setAccount(e.target.value)
                }}
              >

              </textarea>
              <span className="flex select-none items-center px-3 sm:text-sm border-r border-white peer-focus:border-r-2 peer-focus:border-indigo-600" >Account</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default page