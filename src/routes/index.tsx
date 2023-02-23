import { useRoutes, useLocation } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import { ROUTES } from "./routes";

const Wrapper = () => {
  const routes = useRoutes(ROUTES);
  return routes;
};
const Pages = () => {
  const location = useLocation();
  return (
    <PageLayout>
      <Wrapper key={location.pathname} />
    </PageLayout>
  );
};

export default Pages;
