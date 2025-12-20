import React, { useContext } from "react"
import { Modal } from "../Modal/Modal.tsx"
import { SettingsHeader } from "./SettingsHeader.tsx"
import { SettingsTimerSection } from "./SettingsTimerSection.tsx"
import { SettingsThemeSection } from "./SettingsThemeSection.tsx"
import { SettingsFooter } from "./SettingsFooter.tsx"
import { Divider } from "../Modal/Divider.tsx"
import { SettingsBox } from "./SettingsBox.tsx"
import { useForm, FormProvider} from "react-hook-form";
import { SettingsContext } from "../../logic/contexts/useSettingsContext.tsx"
import { SettingsModalForm } from "../../types/types.ts"
import { handleSettingsForm } from "../../logic/forms/handleSettingsForm.ts"

export const SettingsModal = ({ setIsOpen } :  any) => {

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
                    <form onSubmit={formMethods.handleSubmit(data => {
                        changeSettings(handleSettingsForm(data));
                        setIsOpen(false);

                    })}>
                        <SettingsHeader />
                        <SettingsTimerSection />
                        <Divider />
                        <SettingsThemeSection />
                        <SettingsFooter />
                    </form>
                </FormProvider>
            </SettingsBox>
        </Modal>
    )
}