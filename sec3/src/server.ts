import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { CustomerCommRoute } from '@routes/customer-communication.route';
import { CustomerProfileRoute } from '@routes/customer-profile.route';
import { KYCRoute } from '@routes/kyc.route';
import { PortfolioRoute } from '@routes/portfolio.route';
import { ReportingRoute } from '@routes/reporting.route';
import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();

const app = new App([
  new AuthRoute(),
  new UserRoute(),
  new CustomerCommRoute(),
  new CustomerProfileRoute(),
  new KYCRoute(),
  new PortfolioRoute(),
  new ReportingRoute(),
]);

app.listen();
