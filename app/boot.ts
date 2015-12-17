import {bootstrap}    from 'angular2/platform/browser'
import {App} from './app'
import {ItemStore} from "./services/ItemStore";

bootstrap(App, [ItemStore]);
