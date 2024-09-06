'use client';

import { Copy } from "@/Components/Icon";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { useState } from "react";

export type payroll_type = {
  branch: number,
  account: string,
  salary: string
}


const page = () => {

  const options = [
    {id: 1, name: "PAYROLL"},
    {id: 2, name: "Compare"},
    {id: 3, name: "TESTING2"},
  ]
  const [payroll, setPayroll] = useState<string>();
  const [account, setAccount] = useState<string>();
  const [option, setOption] = useState(options[0]);
  const [result, setResult] = useState<string[]>([]);

  


  function insertPayroll(text: string) {
    
  }

  function resolved() {
    const data: string[] = [];
    
    
    if(option.name === options[0].name) {
      const convert = payroll?.split("\n");
      const payrollcut: payroll_type[] = [];
      convert?.map((value) => {
        if(value == "") {
          return;
        }
        const each_val = value.split(",");
        const combine_object: payroll_type = {
          branch: parseInt(each_val[0]),
          account: each_val[1],
          salary: each_val[2],
        } 
        payrollcut.push(combine_object);
      })
      const accounts = account?.split('\n');
      payrollcut.forEach((information) => {
        accounts?.map(e => {
          if(e === information.account) {
            data.push(`${information.branch},${information.account},${information.salary}`)
          }
        })
      })
      setResult(data);
    }

    if(option.name === options[1].name) {

      const payrolls: string[] = payroll!.split("\n");
      const accounts: string[] = account!.split("\n");

      const merge: string[] = arrayUnique(payrolls.concat(accounts));
      
      payrolls.forEach((pr) => {
        accounts.forEach((ac) => {
          if(pr == ac) {
            const index = merge.indexOf(ac);
            if (index > -1) {
              merge.splice(index, 1);
            }
          }
        })
      })

      setResult(merge);
    }

  }
  function arrayUnique(array: string[]) {
    let a = array.concat();
    for(let i=0; i<a.length; ++i) {
        for(let j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
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
                  setPayroll(e.target.value)
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
          <div className="mt-2">
            <div className="flex flex-row-reverse rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <Listbox value={option} onChange={setOption}>
                <ListboxButton className={'block flex-1 peer border-0 outline-none bg-transparent py-1.5 px-3 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'}>{option.name}</ListboxButton>
                <ListboxOptions anchor="bottom" className={'bg-indigo-800/20 text-inherit rounded-md overflow-hidden'}>
                  {options.map((val) => (
                    <ListboxOption key={val.id} value={val} 
                    className="py-2 px-8 hover:bg-indigo-700/90 transition duration-500">
                      {val.name}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Listbox>
              <span className="flex select-none items-center px-3 sm:text-sm border-r border-white peer-focus:border-r-2 peer-focus:border-indigo-600" >Account</span>
            </div>
          </div>



          <div className="mt-2 sm:max-w-md">
            <button type="button" 
            onClick={resolved}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Resolved
            </button>
          </div>

          
        </section>
        <section className="py-4">
          <div className="mt-2 sm:max-w-md">
            <button type="button" 
            onClick={() => {
              navigator.clipboard.writeText(result.join("\n"))
            }}
            className="rounded-md bg-indigo-600/40 p-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <Copy />
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 mt-4">
            {result.map((e, i) => {
              return (
                <div key={i}>
                  {e}
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}

export default page