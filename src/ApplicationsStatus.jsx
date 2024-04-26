import { RequestsContext } from "./Context/RequestsContext";
import { useContext } from "react";


function ApplicationsStatus() {
  const {setSelectedFilter} = useContext(RequestsContext)
    
    return (
        <select onChange={(e) => setSelectedFilter(e.target.value)} name="status_applications" id="application_status">
            <option value="all">Все статусы</option>
            <option value="active">Активна</option>
            <option value="close">Закрыта</option>
            <option value="ignore">Отклонена</option>
        </select>
    )
}

export default ApplicationsStatus