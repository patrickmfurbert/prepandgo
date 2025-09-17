import { useState } from 'react';

export enum PopupType {
  NONE,
  ON_DEMAND,
  DAILY,
}

interface UsePopupState {
  visible: boolean;
  type: PopupType;
  showPopup: (type: PopupType) => void;
  hidePopup: () => void;
  confirmPopup: () => void;
}

export const usePopup = (): UsePopupState => {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState<PopupType>(PopupType.NONE);

  const showPopup = (popupType: PopupType) => {
    setType(popupType);
    setVisible(true);
  };

  const hidePopup = () => {
    setVisible(false);
  };

  const confirmPopup = () => {
    // In a real app, this would handle logic based on the type of popup
    // For example, starting a medication cycle, logging to a database, etc.
    console.log(`Confirmed popup of type: ${PopupType[type]}`);
    
    // Here we can add additional logic based on which button was pressed
    if (type === PopupType.ON_DEMAND) {
      console.log('Starting On Demand cycle with 2 pills');
      // Add On Demand specific logic here
    } else if (type === PopupType.DAILY) {
      console.log('Starting Daily cycle with 1 pill');
      // Add Daily cycle specific logic here
    }
    
    hidePopup();
  };

  return {
    visible,
    type,
    showPopup,
    hidePopup,
    confirmPopup,
  };
};