import { useRouteError } from "react-router";

import PageContent from "./PageContent";
import NavBar from "./navbar/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred";
  let message = "Something went wrong.";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found";
    message = "Could not find resource or page.";
  }

  return (
    <div>
      <NavBar />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </div>
  );
};

export default ErrorPage;
