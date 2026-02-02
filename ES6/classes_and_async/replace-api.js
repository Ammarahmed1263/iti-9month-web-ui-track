const handlers = {
  /**
   * calls a target function with arguments as specified
   * @param {Function} target target function to call
   * @param {Object} thisArg value of `this` provided for the call to target
   * @param {ArrayLike} argArray array-like object specifying the arguments
   * @return {any} result of the function call
   * @example
   * function greet(val) { return `Hello ${this.name}${val}`; }
   * const user = { name: 'Alice' };
   * Reflect.apply(greet, user, ['!']); // "Hello Alice!"
   */
  apply(target, thisArg, argArray) {
    return Reflect.apply(target, thisArg, argArray);
  },

  /**
   * acts as the `new` operator as a function
   * @param {Function} target constructor to invoke
   * @param {ArrayLike} argArray arguments to be passed to the constructor
   * @param {Function} newTarget constructor whose prototype should be used (optional)
   * @return {Object} new instance of the target or newTarget
   * @example
   * class Shape { constructor() { this.type = 'Shape'; } }
   * class Circle {}
   * const obj = Reflect.construct(Shape, [], Circle);
   * console.log(obj instanceof Circle); // true
   */
  construct(target, argArray, newTarget) {
    return Reflect.construct(target, argArray, newTarget);
  },

  /**
   * defines a new property or modifies an existing one
   * @param {Object} target object in which to look for the property
   * @param {string | number | symbol} property name of the property
   * @param {Object} attributes descriptor for the property
   * @return {boolean} true if defined successfully false otherwise
   */
  defineProperty(target, property, attributes) {
    return Reflect.defineProperty(target, property, attributes);
  },

  /**
   * removes property from target object
   * @param {Object} target object in which to look for the property
   * @param {string | number | symbol} propertyKey The name or `Symbol` of the property to delete.
   * @returns {boolean} true if deleted successfully and false otherwise
   * @example
   * const obj = { x: 1, y: 2 };
   * Reflect.deleteProperty(obj, 'x'); // true
   */
  deleteProperty(target, propertyKey) {
    return Reflect.deleteProperty(target, propertyKey);
  },

  /**
   * returns value of property from target
   * @param {Object} target object in which to look for the property
   * @param {string | number | symbol} propertyKey The name or `Symbol` of the property to get.
   * @param {unknown} receiver object that `this` should point to inside the getter. (optional)
   * @return {any} value of the property
   */
  get(target, propertyKey, receiver) {
    return Reflect.get(target, propertyKey, receiver);
  },

  /**
   * returns property descriptor for existing in the object only
   * @param {Object} target object in which to look for the property
   * @param {string | number | symbol} propertyKey The name of the property whose description should be retrieved.
   * @return {Object | undefined} property descriptor if exists and undefined otherwise
   * @example
   * const obj = { x: 10 };
   * Reflect.getOwnPropertyDescriptor(obj, 'x'); 
   */
  getOwnPropertyDescriptor(target, propertyKey) {
    return Reflect.getOwnPropertyDescriptor(target, propertyKey);
  },

  /**
   * return prototype of object
   * @param {Object} target object in which to look for the property
   * @return {Object | null} prototype of target `can be null`
   */
  getPrototypeOf(target) {
    return Reflect.getPrototypeOf(target);
  },

  /**
   * similar to using in operator 'returns keys of the object'
   * @param {Object} target object in which to look for the property
   * @param {string | number | symbol} propertyKey name of the property to check
   * @return {boolean} if target contains propertyKey or not
   */
  has(target, propertyKey) {
    return Reflect.has(target, propertyKey);
  },

  /**
   * returns boolean to check if target can have new property or not
   * @param {Object} target object in which to look for the property
   * @return {boolean} true if target can be extended
   * @example
   * const obj = {};
   * Object.preventExtensions(obj);
   * Reflect.isExtensible(obj); // false
   */
  isExtensible(target) {
    return Reflect.isExtensible(target);
  },

  /**
   * returns array of `target` properties
   * @param target object in which to look for the property
   * @return {(string | number | symbol)[]}  array of keys
   */
  ownKeys(target) {
    return Reflect.ownKeys(target);
  },

  /**
   * prevents new properties from being added to an object
   * @param target object in which to look for the property
   * @return {boolean} if `prevent extensions` was successfully set on the target
   */
  preventExtensions(target) {
    return Reflect.preventExtensions(target);
  },

  /**
   * sets the property value.
   * @param {Object} target object in which to look for the property
   * @param {string | number | symbol} propertyKey name of the property
   * @param {any} newValue the value to assign
   * @param {unknown} receiver object that `this` should point to inside the getter. (optional)
   * @return {boolean} true if property was set correctly
   */
  set(target, propertyKey, newValue, receiver) {
    return Reflect.set(target, propertyKey, newValue, receiver);
  },

  /**
   * sets the prototype of target to object proto or null
   * @param {Object} target object in which to look for the property
   * @param {Object | null} newPrototype The object's new prototype or `null`
   * @return {boolean} true of prototype was successfully set
   */
  setPrototypeOf(target, newPrototype) {
    return Reflect.setPrototypeOf(target, newPrototype);
  }
};

const proxy = new Proxy({}, handlers);
