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
    <FormoAnalyticsProvider
      writeKey={writeKey}
      options={{
        tracking: true,
        flushInterval: 500 * 10, // 5 secs
        logger: {
          enabled: true,
          levels: ["debug", "info", "error", "warn", "trace"],
        },
      }}
    >
      {children}
    </FormoAnalyticsProvider>
  );
};

export default AnalyticsProvider;
