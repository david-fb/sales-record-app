import { useContext } from "react";
import { AppCtx } from "@context/AppCtx";

const useAppCtx = () => {
  return useContext(AppCtx);
};

export default useAppCtx;
