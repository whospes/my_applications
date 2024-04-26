import ApplicationsTableBody from "./ApplicationsTableBody";
import { useEffect } from "react";

function ApplicationsTableAll(props) {
  return (
    <div className="table_block_all">
      <ApplicationsTableBody
        requestsCode={props.requestsCode}
        requestsCreateDate={props.requestsCreateDate}
        requestsObjectName={props.requestsObjectName}
        requestsStatusId={props.requestsStatusId}
        requestsTypeName={props.requestsTypeName}
        requestsId={props.requestsId}
        requestsLink={props.requestsLink}
        customElem={props.customElem}
        customfields={props.customfields}
      />
    </div>
  );
}

export default ApplicationsTableAll;
