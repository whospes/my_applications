import ButtonMyApplications from "./ButtonMyApplications"
import ButtonApplicationsForMe from "./ButtonApplicationsForMe"

function ApplicationsButtonsAll (props) {
    return (
        <div className="applications_buttons_all">
            <ButtonMyApplications setBtnMyApp ={props.setBtnMyApp} btnMyApp ={props.btnMyApp} btnactive = {props.btnactive}/>
            <ButtonApplicationsForMe setBtnMyApp ={props.setBtnMyApp} btnMyApp ={props.btnMyApp} btnactive2 = {props.btnactive2}/>
        </div>
    )
}

export default ApplicationsButtonsAll