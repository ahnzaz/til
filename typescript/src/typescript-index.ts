import Bar from "./Bar";

(window as any).Bar = Bar;
(window as any).foo = new Bar('asdf');