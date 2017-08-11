// App
import {MyApp} from './app.component';
// Components
import { DetoxComponent } from './components/detox/detox.component';
import { QuoteComponent } from './components/quote/quote.component';

// Pages
import { HomePage } from './pages/home/home';
import { TabsPage } from './pages/tabs/tabs';
import { DetoxFormPage } from './pages/detox/detox_form';

// Services
import { SharedService } from './services/shared.service';

export const CORE_DECLARATIONS = [
  MyApp,
  DetoxComponent,
  QuoteComponent,
  HomePage,
  DetoxFormPage,
  TabsPage
]
export const CORE_ENTRIES = [
      MyApp,
      HomePage,
      TabsPage,
      DetoxFormPage,
]

export const CORE_PROVIDERS = [
  SharedService
]
export {DetoxFormPage}
