import { payroll_type } from "@/libs/temporaryType";
import { arrayUnique } from "./helper";

export function op1(payroll: string, account: string): string[] {
    const data: string[] = [];
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
    return data
}

export function op2(payroll: string, account: string): string[] {
    const payrolls: string[] = payroll.split("\n");
    const accounts: string[] = account.split("\n");
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
    return merge;
}

export function op3(payroll: string, account: string): string[] {
    const payrolls: string[] = payroll.split("\n");
    const accounts: string[] = account.split("\n");
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

    const data: string[] = [];

    //needed a way to mao out the account value with the array object payroll
    // merge.map((value, index) => {
    //   const index_payroll = merge.indexOf(``);
    //   if (index_payroll > -1) {
    //     merge.splice(index, 1);
    //   }
    // })

    return data;
}