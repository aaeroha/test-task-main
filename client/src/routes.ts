const prefix: string = process.env.PREFIX || ""; // ! create process.env with variables 

interface Route {
  path: string;
  componentPath: string;
  exact?: boolean;
  component?: React.FC;
  componentProps?: object;
}

const routes: Route[] = [
  {
    path: `${prefix}/`,
    componentPath: "/Main",
  },
  {
    path: `${prefix}/:id`,
    componentPath: "/Car",
  },
];

export default routes;

export const getMainPath = () => `${prefix}/`;
export const getCarPath = () => `${prefix}/api/auction/:id`;

export { prefix };
