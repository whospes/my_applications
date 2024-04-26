import ApplicationsStatus from "./ApplicationsStatus"
import ApplicationsType from "./ApplicationsType"

function ApplicationsFilterAll (props) {
    return (
        <div className="applications_filter_all">
            <ApplicationsStatus arrApplications = {props.arrApplications} setArrFilterApplications = {props.setArrFilterApplications}/>
            <ApplicationsType arrApplications = {props.arrApplications} setArrFilterApplications = {props.setArrFilterApplications}/>
        </div>
    )
}

export default ApplicationsFilterAll