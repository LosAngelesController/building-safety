import React from "react";
import classes from "./CaseTypes.module.css";

export function CaseTypes(props: any) {
  return (
    <>
      <div className={classes.legend}>
        <p className="my-2 text-xs text-[#41ffca]">
          <strong>Click on Case Type for more info:</strong>
        </p>
        <ul className="text-xs cursor-pointer">
          <li className="my-1" onClick={props.onCaseClicked}>
            FRP
          </li>
          <li className="my-1" onClick={props.onCaseClicked}>
            GENERAL
          </li>
          <li className="my-1" onClick={props.onCaseClicked}>
            CITATIONS
          </li>
          <li className="my-1" onClick={props.onCaseClicked}>
            PACE
          </li>
          <li className="my-1" onClick={props.onCaseClicked}>
            BILLBOARDS
          </li>
          <li className="my-1" onClick={props.onCaseClicked}>
            CNAP
          </li>
        </ul>
      </div>
    </>
  );
}
