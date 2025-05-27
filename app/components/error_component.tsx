export const ErrorComponent = ({
  code,
  title,
  message,
  action,
}: {
  code?: number;
  title: string;
  message: string;
  action?: boolean;
}) => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="mb-8">
          {code && (
            <h2 className="mt-6 text-9xl font-extrabold text-dark-100">
              {code}
            </h2>
          )}
          <p className="mt-2 text-3xl font-bold text-dark-100">{title}</p>
          <p className="mt-2 text-sm text-dark-100">{message}</p>
        </div>
        {action && (
          <div className="mt-8">
            <a
              href="/"
              className=" inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary-100 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <svg
                className="mr-2 -ml-1 h-5 w-5 rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12h18m-9-9l9 9-9 9"
                />
              </svg>
              Go back home
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
