'use client';

import { Copy } from "@/Components/Icon";
import { op1, op2, op3 } from "@/libs/payroll";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { useState } from "react";


const page = () => {

  const options = [
    {id: 1, name: "GET PAYROLL FROM ACCOUNT"},
    {id: 2, name: "COMPARE ACCOUNT"},
    // role under maintainance
    // {id: 3, name: "COMPARE PAYROLL & ACCOUNT"},
  ]
  const [payroll, setPayroll] = useState<string>("");
  const [account, setAccount] = useState<string>("");
  const [option, setOption] = useState(options[0]);
  const [result, setResult] = useState<string[]>([]);

  const resolved = () => {
    if(option.name === options[0].name) {
      const data: string[] = op1(payroll, account);
      setResult(data);
    }

    if(option.name === options[1].name) {
      const merge: string[] = op2(payroll, account);
      setResult(merge);
    }

    // if(option.name === options[2].name) {
    //   const data: string[] = op3(payroll, account);
    //   setResult(data)
    // }

  }

  return (
    <div className="min-h-screen">
      <div className="px-6 py-20 max-w-3xl mx-auto">
        <h1 className="text-2xl font-light tracking-tight text-center mb-8">Payroll</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-xs text-neutral-500 mb-1">Payroll</label>
            <textarea name="payroll" id="payroll"
              className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-600 outline-none focus:border-neutral-500 transition-colors" 
              placeholder="Payroll Information" 
              rows={5}
              defaultValue={payroll}
              onChange={e => setPayroll(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-xs text-neutral-500 mb-1">Account</label>
            <textarea name="account" id="account"
              className="w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 text-sm text-neutral-200 placeholder:text-neutral-600 outline-none focus:border-neutral-500 transition-colors" 
              placeholder="Account Information" 
              rows={5}
              defaultValue={account}
              onChange={e => setAccount(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-xs text-neutral-500 mb-1">Operation</label>
            <Listbox value={option} onChange={setOption}>
              <ListboxButton className='w-full bg-transparent border border-neutral-800 rounded-md px-3 py-2 text-sm text-neutral-200 text-left outline-none focus:border-neutral-500 transition-colors'>
                {option.name}
              </ListboxButton>
              <ListboxOptions anchor="bottom" className='z-50 mt-1 bg-neutral-900 border border-neutral-800 rounded-md overflow-hidden min-w-[200px]'>
                {options.map((val) => (
                  <ListboxOption key={val.id} value={val} 
                    className="py-2 px-4 text-xs text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer">
                    {val.name}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Listbox>
          </div>

          <div className="flex items-end gap-2">
            <button type="button" 
              onClick={resolved}
              className="px-4 py-2 text-sm border border-neutral-700 rounded-md text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors">
              Resolve
            </button>
          </div>
        </section>

        {result.length > 0 && (
          <section className="mt-6 border border-neutral-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-neutral-500">Results ({result.length})</span>
              <button type="button" 
                onClick={() => navigator.clipboard.writeText(result.join("\n"))}
                className="p-1.5 text-neutral-500 hover:text-white border border-neutral-800 rounded-md hover:border-neutral-600 transition-colors">
                <Copy />
              </button>
            </div>
            <div className="flex flex-col gap-1 text-sm text-neutral-300">
              {result.map((e, i) => (
                <div key={i}>{e}</div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default page