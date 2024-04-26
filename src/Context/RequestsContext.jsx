import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const RequestsContext = createContext();

export function RequestsProvider({ children }) {
  const [arrApplications, setArrApplications] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedTypefilter, setSelectedTypefilter] = useState("all_type");
  const [filteredTypeRequests, setfilteredTypeRequests] =
    useState(arrApplications);
  const [fielDate, setfielDate] = useState("requestsCreateDate");

  useEffect(() => {
    setfilteredTypeRequests(arrApplications);
    setfielDate("requestsCreateDate");
  }, [arrApplications]);

  useEffect(() => {
    setfilteredTypeRequests(
      arrApplications.filter((requesttype) => {
        if (selectedTypefilter === "all_type" && selectedFilter === "all") {
          return true;
        } else if (
          selectedTypefilter === "selection_type" &&
          selectedFilter !== "all"
        ) {
          return (
            (requesttype.requestsTypeID === "768614336404564683" ||
              requesttype.requestsTypeID === "6997729746606428269" ||
              requesttype.requestsTypeID === "7086406823955744795") &&
            requesttype.requestsStatusId === selectedFilter
          );
        } else if (
          selectedTypefilter === "external_training_type" &&
          selectedFilter !== "all"
        ) {
          return (
            requesttype.requestsTypeID === "6618815478626201256" &&
            requesttype.requestsStatusId === selectedFilter
          );
        } else if (
          selectedTypefilter === "gift_type" &&
          selectedFilter !== "all"
        ) {
          return (
            requesttype.requestsTypeID === "7090480147213416736" &&
            requesttype.requestsStatusId === selectedFilter
          );
        } else if (
          selectedTypefilter === "bring_friend_type" &&
          selectedFilter !== "all"
        ) {
          return (
            requesttype.requestsTypeID === "7096131433298075679" &&
            requesttype.requestsStatusId === selectedFilter
          );
        } else if (
          selectedTypefilter === "Others_type" &&
          selectedFilter !== "all"
        ) {
          return (
            requesttype.requestsTypeID !== "768614336404564683" &&
            requesttype.requestsTypeID !== "6618815478626201256" &&
            requesttype.requestsTypeID !== "7090480147213416736" &&
            requesttype.requestsTypeID !== "7096131433298075679" &&
            requesttype.requestsTypeID !== "6997729746606428269" &&
            requesttype.requestsTypeID !== "7086406823955744795" &&
            requesttype.requestsStatusId === selectedFilter
          );
        } else if (
          selectedTypefilter === "selection_type" &&
          selectedFilter === "all"
        ) {
          return (
            requesttype.requestsTypeID === "768614336404564683" ||
            requesttype.requestsTypeID === "6997729746606428269" ||
            requesttype.requestsTypeID === "7086406823955744795"
          );
        } else if (
          selectedTypefilter === "external_training_type" &&
          selectedFilter === "all"
        ) {
          return requesttype.requestsTypeID === "6618815478626201256";
        } else if (
          selectedTypefilter === "gift_type" &&
          selectedFilter === "all"
        ) {
          return requesttype.requestsTypeID === "7090480147213416736";
        } else if (
          selectedTypefilter === "bring_friend_type" &&
          selectedFilter === "all"
        ) {
          return requesttype.requestsTypeID === "7096131433298075679";
        } else if (
          selectedTypefilter === "Others_type" &&
          selectedFilter === "all"
        ) {
          return (
            requesttype.requestsTypeID !== "768614336404564683" &&
            requesttype.requestsTypeID !== "6618815478626201256" &&
            requesttype.requestsTypeID !== "7090480147213416736" &&
            requesttype.requestsTypeID !== "7096131433298075679" &&
            requesttype.requestsTypeID !== "6997729746606428269" &&
            requesttype.requestsTypeID !== "7086406823955744795"
          );
        } else if (
          selectedTypefilter === "all_type" &&
          selectedFilter !== "all"
        ) {
          return requesttype.requestsStatusId === selectedFilter;
        }
      })
    );
  }, [selectedTypefilter, selectedFilter, arrApplications]);

  return (
    <RequestsContext.Provider
      value={{
        arrApplications,
        setArrApplications,
        selectedFilter,
        setSelectedFilter,
        selectedTypefilter,
        setSelectedTypefilter,
        filteredTypeRequests,
        setfilteredTypeRequests,
        fielDate,
        setfielDate,
      }}
    >
      {children}
    </RequestsContext.Provider>
  );
}
