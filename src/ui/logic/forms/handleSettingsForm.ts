import { Settings } from "../../../data/types";
import { SettingsModalForm } from "../../types/types";

export const handleSettingsForm = (data : SettingsModalForm): Settings => {
    return {
        
        timer: {
            productivity: data.timerProductivity,
            short: data.timerShort,
            long: data.timerLong
        },

        theme: {
            productivity: data.themeProductivity,
            short: data.themeShort,
            long: data.themeLong
        }
    }
}