import Bar from "./Bar";

import Vue from 'vue';
import ace from 'ace';

(window as any).Bar = Bar;
(window as any).foo = new Bar('asdf');