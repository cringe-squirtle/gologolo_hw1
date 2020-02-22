import AppsterController from '../appster/AppsterController.js'
import { GoLogoLoDefaults, GoLogoLoGUIClass, GoLogoLoGUIId, GoLogoLoText } from '../gologolo/GoLogoLoConstants.js'
import { AppsterCallback, AppsterGUIId, AppsterHTML } from '../appster/AppsterConstants.js'


export default class GoLogoLoController
    extends AppsterController {
    constructor() {
        super();
    }

    processEditText() {
        this.model.updateText();
    }

    registerAppsterEventHandlers() {
        super.registerAppsterEventHandlers();
        this.registerEventHandler(GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON, AppsterHTML.CLICK, this[AppsterCallback.APPSTER_PROCESS_UPDATE_WORK_NAME]);
    }
}