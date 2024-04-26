import { useEffect, useState, useRef } from "react";
import ApplicationsInfo from "./ApplicationsInfo";
import ApplicationsInfoTable from "./ApplicationsInfoTable";
import {
  Transition,
  CSSTransition,
  TransitionGroup,
} from "react-transition-group";

function ApplicationsTableBody(props) {
  const [openmenu, setOpenmenu] = useState(false);
  const [statusIDApp, setstatusIDApp] = useState("");
  useEffect(() => {
    switch (props.requestsStatusId) {
      case "close":
        setstatusIDApp("Закрыта");
        break;
      case "active":
        setstatusIDApp("Активная");
        break;
      case "ignore":
        setstatusIDApp("Отклонена");
        break;
      default:
        setstatusIDApp("Отсутствует");
        break;
    }
  }, [props.requestsStatusId]);
  const [typeNameApp, settypeNameApp] = useState("");
  useEffect(() => {
    switch (props.requestsObjectName) {
      case "":
        settypeNameApp(props.requestsTypeName);
        break;
      case undefined:
        settypeNameApp(props.requestsTypeName);
        break;
      default:
        settypeNameApp(props.requestsObjectName);
        break;
    }
  }, [props.requestsObjectName]);

  return (
    <div className="applications_table_body" href={props.requestsLink}>
      <div id="appli_body_cod">{props.requestsCode}</div>
      <div id="appli_body_data">{props.requestsCreateDate}</div>
      <div id="appli_body_type">
        <a href={props.requestsLink}>{typeNameApp}</a>
        <ApplicationsInfo
          setOpenmenu={setOpenmenu}
          openmenu={openmenu}
          requestsId={props.requestsId}
        />
      </div>
      <CSSTransition
        in={openmenu}
        timeout={200}
        className="application_info_table_ts"
      >
        <ApplicationsInfoTable
          customElem={props.customElem}
          customfields={props.customfields}
          setOpenmenu={setOpenmenu}
          openmenu={openmenu}
        />
      </CSSTransition>
      <div id="appli_body_status">{statusIDApp}</div>
    </div>
  );
}

export default ApplicationsTableBody;
