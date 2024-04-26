import { useState } from "react"

function ButtonMyApplications (props) {

    return (
        <button onClick = {() =>props.setBtnMyApp(false)} className={"button_applications_for_me" + (props.btnMyApp ? "" : "selected")} id={props.btnactive}>
            Мои заявки
        </button>
    )
}

export default ButtonMyApplications