import React, { useContext } from "react"
import { Modal } from "./Modal.tsx"
import { SettingsHeader } from "./SettingsHeader.tsx"
import { SettingsTimerSection } from "./SettingsTimerSection.tsx"
import { SettingsThemeSection } from "./SettingsThemeSection.tsx"
import { SettingsFooter } from "./SettingsFooter.tsx"
import { Divider } from "./Divider.tsx"
import { SettingsBox } from "./SettingsBox.tsx"
import { useForm, FormProvider} from "react-hook-form";
import { SettingsContext } from "../../logic/contexts/useSettingsContext.tsx"

type SettingsModalForm = {

    timerProductivity : number,
    timerShort : number,
    timerLong: number,

    themeProductivity : string,
    themeShort: any,
    themeLong: string,
}

export const SettingsModal = ({ setIsOpen }) => {

    const { settings, changeSettings } = useContext(SettingsContext);
    
    const formMethods = useForm<SettingsModalForm>({
        defaultValues: {
            timerProductivity: settings.timer.productivity,
            timerShort: settings.timer.short,
            timerLong: settings.timer.long,

            themeProductivity: settings.theme.productivity,
            themeShort: settings.theme.short,
            themeLong: settings.theme.long
        }
    });

    return (
        <Modal>
            <SettingsBox>
                <FormProvider {...formMethods}>
                    <SettingsHeader />
                    <SettingsTimerSection />
                    <Divider />
                    <SettingsThemeSection />
                    <SettingsFooter setIsOpen={setIsOpen} />
                </FormProvider>
            </SettingsBox>
        </Modal>
    )
}