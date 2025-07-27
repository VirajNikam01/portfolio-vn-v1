import React from "react";
import Banner from "../components/Atoms/Banner/Banner";


export type AlertType = 'success' | 'info' | 'error';


interface AlertBannerContextProps {
    isAlertBannerVisible: boolean;
    type: AlertType;
    message: string;
    showAlertBanner: (type: AlertType, message: string) => void;
    hideAlertBanner: () => void;
}

export const AlertBannerContext = React.createContext<AlertBannerContextProps>({
    isAlertBannerVisible: false,
    type: 'info',
    message: '',
} as AlertBannerContextProps);


const AlertBannerProvider = ({ children }: { children: React.ReactNode }) => {
    const [isAlertBannerVisible, toggleAlertBannerVisibility] = React.useState(false);
    const [type, setType] = React.useState<AlertType>('info');
    const [message, setMessage] = React.useState('');

    const showAlertBanner = (type: AlertType, message: string) => {
        setType(type);
        setMessage(message);
        toggleAlertBannerVisibility(true);
    };

    const hideAlertBanner = () => {
        toggleAlertBannerVisibility(false);
    };

    return (
        <AlertBannerContext.Provider value={{ isAlertBannerVisible, type, message, showAlertBanner, hideAlertBanner }}>
            <Banner />
            {children}
        </AlertBannerContext.Provider>
    );
}


export default AlertBannerProvider;
export const useAlertBanner = () => {
    const context = React.useContext(AlertBannerContext);
    if (!context) {
        throw new Error("useAlertBanner must be used within an AlertBannerProvider");
    }
    return context;
}

