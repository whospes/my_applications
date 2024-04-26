import AplicationsClose from "./AplicationsClose";
import parse from "html-react-parser";
import { useEffect, useRef } from "react";

function ApplicationsInfoTable(props) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedId = event.target.getAttribute("data-id");
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        (!clickedId || clickedId !== props.requestsId)
      ) {
        props.setOpenmenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props.requestsId]);

  return (
    <div className="aplication_info_table" ref={menuRef}>
      <AplicationsClose
        setOpenmenu={props.setOpenmenu}
        openmenu={props.openmenu}
      />
      {props.customfields && props.customfields.field ? (
        props.customfields.field.map((field, index) => {
          const value = props.customElem.find(
            (elem) => elem.name === field.name
          )?.value;
          const isBold = field.title === "№ микрозайма";
          return (
            <div key={index}>
              {field && field.title && (
                <div className="info_application">
                  <div className="info_tittle">{field.title}</div>
                  <div
                    className="info_value"
                    style={{ fontWeight: isBold ? "bold" : "normal" }}
                  >
                    {value ? parse(value) : "Нет информации"}
                  </div>
                </div>
              )}
            </div>
          );
        })
      ) : (
        <div>Нет информации</div>
      )}
    </div>
  );
}

export default ApplicationsInfoTable;
