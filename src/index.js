

import * as serviceWorker from './serviceWorker';
import state from './redux/state'
import {rendererMainThree} from './render';


rendererMainThree(state);


serviceWorker.unregister();
