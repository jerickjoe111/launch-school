(function() {
  let _ = function(collection) {
    const IS_METHODS = [
      'isElement', 'isArray', 'isObject', 
      'isFunction', 'isBoolean', 'isString', 'isNumber'
    ];

    let mainObject = {
      first() {
        return collection[0];
      },
      last() {
        return collection[collection.length - 1];
      },
      without(...elementsOut) {
        return collection.filter(e => !elementsOut.includes(e) );
      },
      range(numberA, numberB) {
        if (typeof numberB === 'number' && numberB !== Infinity) {
          let numbers = [];
          for (let i = numberA; i <= numberB; i += 1 ) numbers.push(i);
          return numbers;
        } else {
          return [...Array(numberA + 1).keys()];
        };
      },
      lastIndexOf(element) {
        return collection.lastIndexOf(element)
      },
      sample(quantity) {
        if (quantity === undefined) return collection[0];

        return [...new Set(collection)].slice(0, quantity)
      },
      findWhere(properties) {
        function propertiesMatch(objectToTest, propertiesTemplate) {
          let keys = Object.keys(propertiesTemplate);
          let matchCounter = 0;         
          for(let i = 0; i < keys.length; i += 1) {
            let key = keys[i];
            if (objectToTest[key] === propertiesTemplate[key]) matchCounter += 1;
            if (matchCounter === keys.length) break;
          }

          return matchCounter === keys.length;
        }

        return collection.find(e => propertiesMatch(e, properties))
      },
      where(properties) {
        function hasProperties(propertiesObject, objectToTest) {
          return Object.keys(propertiesObject).every( p => {
            return p in objectToTest && propertiesObject[p] === objectToTest[p];
          })
        }

        return collection.filter( e => hasProperties(properties, e ) )
      },
      pluck(key) {
        let valuesOutput = [];
        collection.forEach( e => {
          if (key in e ) valuesOutput.push(e[key])
        })
        return valuesOutput;
      },
      keys() {
        return Object.keys(collection);
      },
      values() {
        return Object.values(collection);
      },
      pick(...properties) {
        let output = {};
        properties.forEach(p => output[p] = collection[p] )
        return output;
      },
      omit(...propertiesToOmit) {
        let output = {};
        for (let property in collection) {
          if (!propertiesToOmit.includes(property)) {
            output[property] = collection[property]
          };
        };
        return output;
      },
      has(property) {
        return property in collection;
      },
    }

    IS_METHODS.forEach(method => {
      mainObject[method] = function() {
        return _[method].call(mainObject, collection);
      }; 
    });

    return mainObject;
  };

  _.range = function(start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    } 
    
    let numbers = [];
    for (let i = start; i < end; i += 1 ) numbers.push(i);
    return numbers;
  };

  _.extend = function(target, ...sources) {
    return Object.assign(target, ...sources)
  }

  _.isElement = function(argument) {
    return argument.tagName;
  }

  _.isArray = function(argument) {
    return Array.isArray(argument);
  };
  
  _.isObject = function(argument) {
    return argument !== null && typeof argument === 'object' || typeof argument === 'function';
  };

  ['Function', 'String', 'Number', 'Boolean'].forEach(type => {
    _['is' + type] = function(argument) {
      return typeof argument === type.toLowerCase() || argument.constructor.name === type;
    }
  })
  globalThis._ = _;
})()

// _ is a function that returns an collection with methods 

// we can add properties to the _ function as any other collection

// two modes to use this library:

/*
 - invoking the _ function, passing a collection as an argument:

      _(collection).method();

 - invoking a method of the function itself:

      _.method(arguments);
*/