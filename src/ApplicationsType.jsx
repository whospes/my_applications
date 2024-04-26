import { useContext} from "react";
import { RequestsContext } from "./Context/RequestsContext";


function ApplicationsType() {
    const {setSelectedTypefilter} = useContext (RequestsContext)

    return (
        <select onChange={(e) => setSelectedTypefilter(e.target.value)} name="type_applications" id="application_type">
            <option value="all_type">Тип</option>
            <option value="selection_type">Подбор персонала</option>
            <option value="external_training_type">Внешнее обучение</option>
            <option value="gift_type">Заявка на подарок</option>
            <option value="bring_friend_type">Приведи друга</option>
            <option value="Others_type">Остальные заявки</option>
        </select>
    )
}

export default ApplicationsType