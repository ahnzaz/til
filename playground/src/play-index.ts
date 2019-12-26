function (decorators, target, key, desc) {
    var argumentLegnth = arguments.length, prototype_descriptor = argumentLegnth < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, currentDecorator;
    
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function"){
      prototype_descriptor = Reflect.decorate(decorators, target, key, desc)
    };
    else {
      for (var i = decorators.length - 1; i >= 0; i--){
        if (currentDecorator = decorators[i]) {
          prototype_descriptor = (argumentLegnth < 3 ? currentDecorator(prototype_descriptor) : argumentLegnth > 3 ? currentDecorator(target, key, prototype_descriptor) : currentDecorator(target, key)) || prototype_descriptor
        }
      }
    }
    return argumentLegnth > 3 && prototype_descriptor && Object.defineProperty(target, key, prototype_descriptor), prototype_descriptor;
};