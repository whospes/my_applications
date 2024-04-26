import { useState } from "react"


function ButtonApplicationsForMe (props) {

    return (
        <button onClick = {() =>props.setBtnMyApp(true)}  className={"button_applications_for_me" + (props.btnMyApp ? "selected" : "")} id={props.btnactive2} >
            Заявки на мне
        </button>
    )
}

export default ButtonApplicationsForMe