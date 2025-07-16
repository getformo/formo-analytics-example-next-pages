import { FC } from "react";
import { FormoAnalyticsProvider } from "@formo/analytics";

type FormoAnalyticsProviderProps = {
  writeKey: string;
  children: React.ReactNode;
};

export const AnalyticsProvider: FC<FormoAnalyticsProviderProps> = ({
  writeKey,
  children,
}) => {
  return (
    <FormoAnalyticsProvider writeKey={writeKey} options={{ tracking: true }}>
      {children}
    </FormoAnalyticsProvider>
  );
};

export default AnalyticsProvider;
