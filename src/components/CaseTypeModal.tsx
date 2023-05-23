import React from "react";

interface setModal {
  showModal: boolean;
  setShowModal: any;
  caseClicked: string;
}

export function CaseTypeModal(props: setModal) {
  const caseName = props.caseClicked;

  const cases: any = [
    {
      name: "FRP",
      description:
        "Foreclosure Registry Program - VBA unit conducts inspection on sites that are registered through LAHD as foreclosed.",
    },
    {
      name: "GENERAL",
      description:
        "Investigation of code violations in existing commercial buildings, hotels, motels, and single-family residential buildings",
    },
    {
      name: "CITATIONS",
      description:
        "Issuing of citations on transient types of violations such as open air vending, zoning regulations, noise violations, and nuisance lighting violations",
    },
    {
      name: "PACE",
      description:
        "Pro-Active Code Enforcement - LADBS' PACE program is focused on specific code enforcement problems in limited geographic regions in the City. Currently, LADBS is working to enforce City regulations related to seismic retrofits to ensure earthquake readiness in soft-story residential structures throughout the City.",
    },
    {
      name: "BILLBOARDS",
      description:
        "Off-site Sign Periodic Inspection Division (OSSPID) conducts 2-year periodic inspection of all billboard signs",
    },
    {
      name: "VEIP",
      description:
        "Vehicle Establishment Inspection Program - Fee-supported program, annually inspecting all auto repair garages (including smog test shops, window tinting and replacement shops, vinyl or similar covering materials, installation of parts/accessories and all similar uses) used vehicle sales areas, auto dismantling yards, junk yards, scrap metal or recycling materials processing yards, recycling collection and/or buyback centers, recycling materials sorting facilities and cargo container storage yards for violations of both building and land use ordinances",
    },
    {
      name: "SIGNS",
      description:
        "Sign Unit responds to complaints regarding signs constructed without a permit/approval.",
    },
    {
      name: "CNAP",
      description:
        "Contract Nuisance Abatement Program - The Contract Nuisance Abatement Division abates open, vacant, abandoned, and vandalized buildings, under a process known as Vacant Building Abatement (VBA). The VBA process includes declaring these properties a “Nuisance” and/or “Hazard” after a public hearing. When property owners fail to comply with orders requiring them to clean, secure, rehabilitate or demolish these buildings, VBA steps in and performs the physical abatement work of cleaning, securing, and if necessary, demolishing a building by way of an annually awarded contract to various private contractors.",
    },
    {
      name: "NAR",
      description:
        "PCUP unit on pro-actively inspecting facilities with entitlements approved by City Planning; inspects and verifies that the sites maintain or meet the conditions of approval",
    },
  ];

  return (
    <div>
      {props.showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-1 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col bg-zinc-900 w-content bg-opacity-90 outline-none focus:outline-none">
                <div className="flex items-start justify-between p-3 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-base font-semibold">{caseName}</h3>
                </div>
                <div className="relative p-3 flex-auto">
                  <p className="my-1 text-slate-50 text-sm leading-relaxed">
                    {cases.map((item: any) => {
                      if (item.name === caseName) {
                        return item.description;
                      }
                      return null;
                    })}
                  </p>
                </div>
                <div className="flex items-center justify-end p-3 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-1 text-sm outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
