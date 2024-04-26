import ApplicationsButtonsAll from "./ApplicationsButtonsAll"
import ApplicationsFilterAll from "./ApplicationsFilterAll"

function ApplicationsButtonAndFilter (props) {
    
    return (
        <div className="button_and_filter">
            <ApplicationsButtonsAll setBtnMyApp ={props.setBtnMyApp} btnMyApp ={props.btnMyApp} btnactive = {props.btnactive} btnactive2 = {props.btnactive2}/>
            <ApplicationsFilterAll arrApplications = {props.arrApplications} setArrFilterApplications = {props.setArrFilterApplications}/>
        </div>
    )
}

export default ApplicationsButtonAndFilter