import React from "react";
import { useRef } from "react";
import ReactPrint from "react-to-print";

function Service() {
  const ref = useRef();
  return (
    <div className="print">
      <div className="sss">
        <div ref={ref} className="a">
          <div class="my-3 p-3">
            <h4 class="text-xl font-semibold underline">Applicaton</h4>
            <div class="border">
              <div class="bg-backgroundVariant p-2">
                <div class="font-semibold">
                  Describe below how you fit into this position (max 100 words,
                  please refer specifically to the Job Requirements)
                </div>
                <div class="text-primary hover:text-onSurface">
                  A passionate person, seeking for an opportunity where I can
                  excel my knowledge in a reputed organization. A passionate
                  person, seeking for an opportunity where I can excel my
                  knowledge in a reputed organization. A passionate person,
                  seeking for an opportunity where I can excel my knowledge in a
                  reputed organization. A passionate person, seeking for an
                  opportunity where I can excel my knowledge in a reputed
                  organization. A passionate person, seeking for an opportunity
                  where I can excel my knowledge in a reputed organization.
                </div>
              </div>
              <div class="mt-3 bg-backgroundVariant p-2">
                <table class="mt-3 table w-full border">
                  <thead class="">
                    <tr class="sticky -top-0 table-row h-16 w-full bg-surface text-onSurface shadow-sm">
                      <th class="p-2 text-left">
                        <p>Current Employment Status</p>
                      </th>
                      <th class="p-2 text-left">
                        <p>Required Notice Period</p>
                      </th>
                      <th class="p-2 text-left">
                        <p>Expected Salary</p>
                      </th>
                    </tr>
                  </thead>

                  <tbody class="h-16 flex-1 bg-backgroundVariant">
                    <tr class="table-row w-full flex-col flex-wrap border-t first:border-t-0 even:bg-red-50">
                      <td class="p-2">
                        <label class="hidden" for="">
                          {" "}
                          Current Employment Status
                        </label>
                        <p class="font-normal">Employed</p>
                      </td>
                      <td class="p-2">
                        <label class="hidden" for="">
                          Required Notice Period
                        </label>
                        <p class="font-normal">1 Months</p>
                      </td>
                      <td class="p-2">
                        <label class="hidden" for="">
                          {" "}
                          Expected Salary
                        </label>
                        <p class="font-normal">30000</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="my-3 p-3">
            <h4 class="text-xl font-semibold underline">Dependents</h4>

            <div class="mt-5 grid grid-cols-4 gap-3 border bg-backgroundVariant p-2">
              <div class="mt-0 grid-cols-1">
                <div class="">Name</div>
                <div class="font-bold text-primary hover:text-onSurface">
                  Sondip Peter Palma
                </div>
              </div>

              <div class="mt-0 grid-cols-1">
                <div class="">Age</div>
                <div class="font-bold text-primary hover:text-onSurface">
                  48
                </div>
              </div>
              <div class="mt-0 grid-cols-1">
                <div class="">Relation</div>
                <div class="font-bold text-primary hover:text-onSurface">
                  Father
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReactPrint
        trigger={() => <button>print</button>}
        content={() => ref.current}
      />
    </div>
  );
}

export default Service;
