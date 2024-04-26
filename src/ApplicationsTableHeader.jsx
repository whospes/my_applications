import { useContext, useState } from "react";
import ArrowDown from "./Arrowdown";
import ArrowUp from "./ArrowUP";
import { RequestsContext } from "./Context/RequestsContext";
import Pagination from "./Pagination";
import PagePreloading from "./PagePreloading";

function ApplicationsTableHeader(props) {
  const { fielDate, setfielDate } = useContext(RequestsContext);
  const Arrow = () => {
    return props.sortreverse ? <ArrowDown /> : <ArrowUp />;
  };
  const fieldSortRequests = (field) => {
    props.sortRequests(field);
    setfielDate(field);
  };
  return (
    <>
      <div className="applications_table_header">
        <div
          id="appli_cod"
          onClick={() => {
            fieldSortRequests("requestsCode");
          }}
        >
          Код {fielDate === "requestsCode" ? <Arrow /> : null}
        </div>
        <div
          id="appli_data"
          onClick={() => {
            fieldSortRequests("requestsCreateDate");
          }}
        >
          Дата создания {fielDate === "requestsCreateDate" ? <Arrow /> : null}
        </div>
        <div
          id="appli_type"
          onClick={() => {
            fieldSortRequests("requestsTypeName");
          }}
        >
          Тип {fielDate === "requestsTypeName" ? <Arrow /> : null}
        </div>
        <div
          id="appli_status"
          onClick={() => {
            fieldSortRequests("requestsStatusId");
          }}
        >
          Статус {fielDate === "requestsStatusId" ? <Arrow /> : null}
        </div>
      </div>
    </>
  );
}

export default ApplicationsTableHeader;
