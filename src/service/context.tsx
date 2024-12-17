import { createContext, useContext, useState, ReactNode } from "react";
import { HubData } from "@/type/dataType";
import { data as dadas } from "./data";

// Define the structure of your context
interface DataContextType {
  data: HubData[];
  overlayVisible: boolean;
  toggleOverlay: () => void;
}

// Create the context with a default placeholder value
const DataContext = createContext<DataContextType | undefined>(undefined);

// Provider component props
interface DataProviderProps {
  children: ReactNode;
}

// DataProvider component
export const DataProvider = ({ children }: DataProviderProps): JSX.Element => {
  const [data, setData] = useState<HubData[]>(dadas);
  const [overlayVisible, setOverlayVisible] = useState(true);

  const toggleOverlay = () => {
    console.log("items should be visible");
    console.log(overlayVisible);
    setOverlayVisible(!overlayVisible);
  };

  return (
    <DataContext.Provider value={{ data, overlayVisible, toggleOverlay }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to access the context
export const useDataContext = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};
