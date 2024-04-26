import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { RequestsContext } from "./Context/RequestsContext";
import ApplicationsTittle from "./ApplicationsTittle";
import ApplicationsTableHeader from "./ApplicationsTableHeader";
import ApplicationsButtonAndFilter from "./ApplicationsButtonAndFilter";
import ApplicationsTableAll from "./ApplicationsTableAll";
import RequestsPreloading from "./RequestsPreloading";
import ReactPaginate from "react-paginate";
import PagePreloading from "./PagePreloading";
import PaginateButtonNext from "./PaginateButtonNext";
import PaginateButtonPrevious from "./PaginateButtonPrevious";

function ApplicationsBlockAll() {
  useEffect(() => {}, [arrApplications]);
  const {
    arrApplications,
    setArrApplications,
    filteredTypeRequests,
    setfilteredTypeRequests,
    setfielDate,
  } = useContext(RequestsContext);

  const [btnMyApp, setBtnMyApp] = useState(false);
  const [massiveAdd, setAddmassive] = useState(
    "custom_web_template.html?object_code=request_ajax_d2"
  );
  const [btnactive, setBtnActive] = useState("button_applications_for_me");
  const [btnactive2, setBtnActive2] = useState("button_applications_for_me");
  const [requestsPreloading, setRequestsPreloading] = useState(true);
  const [paginationPreloading, setPaginationPreloading] = useState(false);
  const [sortreverse, setSortrevers] = useState(true);
  const controller = new AbortController();
  const [currentPage, setCurrentPage] = useState(0);
  const [applecationPerPage] = useState(50);
  const [countRequest, setCountRequest] = useState(0);

  const sortRequests = (field) => {
    const copyArrApp = filteredTypeRequests.slice();
    let sortArr;

    sortArr = copyArrApp.sort((a, b) => {
      let valueA = a[field];
      let valueB = b[field];

      if (field === "requestsCreateDate") {
        const dateA = new Date(valueA);
        const dateB = new Date(valueB);
        return sortreverse
          ? dateA <= dateB
            ? 1
            : -1
          : dateA >= dateB
          ? 1
          : -1;
      } else if (field === "requestsCode") {
        return sortreverse
          ? parseInt(valueA) <= parseInt(valueB)
            ? 1
            : -1
          : parseInt(valueA) >= parseInt(valueB)
          ? 1
          : -1;
      } else if (field === "requestsTypeName" || field === "requestsStatusId") {
        return sortreverse
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      } else {
        return sortreverse
          ? valueA <= valueB
            ? 1
            : -1
          : valueA >= valueB
          ? 1
          : -1;
      }
    });

    setfilteredTypeRequests(sortArr);
    setSortrevers(!sortreverse);
  };

  useEffect(() => {
    switch (btnMyApp) {
      case true:
        setBtnActive2("button_applications_for_me_clear2");
        break;
      case false:
        setBtnActive2("button_applications_for_me2");
        break;
    }
  }, [btnMyApp]);

  useEffect(() => {
    switch (btnMyApp) {
      case true:
        setBtnActive("button_applications_for_me");
        break;
      case false:
        setBtnActive("button_applications_for_me_clear");
        break;
    }
  }, [btnMyApp]);

  useEffect(() => {
    switch (btnMyApp) {
      case true:
        setRequestsPreloading(true);
        setPaginationPreloading(true);
        setSortrevers(true);
        setAddmassive(
          "custom_web_template.html?object_code=vidjet_my_requestssql2_ajax",
          { signal: controller.signal }
        );
        setCurrentPage(0);
        controller.abort();
        break;
      case false:
        setRequestsPreloading(true);
        setPaginationPreloading(true);
        setSortrevers(true);
        setAddmassive("custom_web_template.html?object_code=request_ajax_d2", {
          signal: controller.signal,
        });
        setCurrentPage(0);
        controller.abort();
        break;
    }
  }, [btnMyApp]);

  useEffect(() => {
    axios
      .get(massiveAdd, { params: { page: currentPage + 1 } })
      .then((result) => {
        setArrApplications(result.data);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error);
      })
      .finally(() => {
        setRequestsPreloading(false);
        setPaginationPreloading(false);
      });
  }, [massiveAdd, currentPage]);

  useEffect(() => {
    const countURL = btnMyApp
      ? "custom_web_template.html?object_code=request_ajax_countSQL"
      : "custom_web_template.html?object_code=request_ajax_count";

    axios
      .get(countURL)
      .then((result) => {
        setCountRequest(result.data);
      })
      .catch((error) => {
        console.error(
          "Ошибка при получении данных с сервера для подсчета:",
          error
        );
      });
  }, [btnMyApp]);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const startIndex = currentPage * applecationPerPage;
  const endIndex = startIndex + applecationPerPage;

  const currentApplications = filteredTypeRequests.slice(startIndex, endIndex);

  const pageCount = Math.ceil(countRequest.count / applecationPerPage);

  useEffect(() => {
    setCurrentPage(0);
  }, [btnMyApp]);

  useEffect(() => {
    setRequestsPreloading(true);
  }, [currentPage]);

  return (
    <div className="applications_block_all">
      <ApplicationsTittle />
      <ApplicationsButtonAndFilter
        arrApplications={arrApplications}
        setBtnMyApp={setBtnMyApp}
        btnMyApp={btnMyApp}
        btnactive={btnactive}
        btnactive2={btnactive2}
      />
      <ApplicationsTableHeader
        sortRequests={sortRequests}
        sortreverse={sortreverse}
        totalApplications={countRequest.count}
        applecationPerPage={applecationPerPage}
        requestsPreloading={requestsPreloading}
      />
      <div className="table_all_requests">
        {requestsPreloading && (
          <div className="table_all_requests_preloading">
            <RequestsPreloading />
            <RequestsPreloading />
            <RequestsPreloading />
            <RequestsPreloading />
          </div>
        )}
        {filteredTypeRequests.length > 0 &&
          !requestsPreloading &&
          filteredTypeRequests.map((application) => (
            <ApplicationsTableAll
              requestsId={application.requestsId}
              requestsCode={application.requestsCode}
              requestsStatusId={application.requestsStatusId}
              requestsObjectName={application.requestsObjectName}
              requestsCreateDate={application.requestsCreateDate}
              requestsTypeName={application.requestsTypeName}
              requestsLink={application.requestsLink}
              key={application.requestsId}
              customElem={application.customElem}
              customfields={application.customfields}
            />
          ))}
      </div>

      {filteredTypeRequests.length === 0 && !requestsPreloading && (
        <div className="no_requests">Нет заявок</div>
      )}

      {paginationPreloading && (
        <div className="Page_preload_all">
          <PagePreloading />
          <PagePreloading />
          <PagePreloading />
          <PagePreloading />
          <PagePreloading />
          <PagePreloading />
          <PagePreloading />
        </div>
      )}
      {!paginationPreloading && (
        <ReactPaginate
          previousLabel={<PaginateButtonPrevious />}
          nextLabel={<PaginateButtonNext />}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount > 0 ? pageCount : 1}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
          disabledClassName={"disabled"}
          pageClassName={"page_application"}
          activeLinkClassName={"active_link"}
          disabledLinkClassName={"button_disabled_link"}
          pageLinkClassName={"disabled_link"}
          forcePage={currentPage < pageCount ? currentPage : 0}
        />
      )}
    </div>
  );
}

export default ApplicationsBlockAll;
