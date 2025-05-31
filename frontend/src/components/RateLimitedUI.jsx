// ui component displayed when user hits rate limit
import { ZapIcon } from "lucide-react";

const ratelimitedui = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-success/10 border border-success/30 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center p-6">
          {/* icon container */}
          <div className="flex-shrink-0 bg-success/20 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
            <ZapIcon className="size-10 text-success" />
          </div>
          {/* message container */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">rate limit reached</h3>
            <p className="text-base-content mb-1">
              you've made too many requests in a short period. please wait a
              moment.
            </p>
            <p className="text-sm text-base-content/70">
              try again in a few seconds for the best experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ratelimitedui;
