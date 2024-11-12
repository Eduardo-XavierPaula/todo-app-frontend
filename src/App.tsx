import { Theme, GlobalStyles, theme } from 'themes';
import { AppRoutes } from 'routes';

export const App = () => {
  return (
    <Theme>
      <GlobalStyles theme={theme} />
      <AppRoutes />
    </Theme>
  );
};
