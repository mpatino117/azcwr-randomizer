// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({6:[function(require,module,exports) {
const riskData = [{
    tier: '1',
    data: 'Roll a 4096 bit ssh key on your computer'
  },
  {
    tier: '1',
    data: 'Make sure there is a rolling kali repository in sources.list'
  },
  {
    tier: '1',
    data: 'Find the mac address of your computer'
  },
  {
    tier: '1',
    data: 'Find the IP address of your computer'
  },
  {
    tier: '1',
    data: 'Find the before and after hash (MD5, SHA1, SHA256) of a text file you modified'
  },
  {
    tier: '1',
    data: 'Install Atom/Sublime text editor from source or .deb'
  },
  {
    tier: '1',
    data: 'Install/Reimage a computer with a new linux distro'
  },
  {
    tier: '1',
    data: 'Console into a cisco switch and change the MOTD and hostname of the switch'
  },
  {
    tier: '1',
    data: 'Install OpenVAS'
  },
  {
    tier: '2',
    data: 'Secure the ssh service on your computer'
  },
  {
    tier: '2',
    data: 'Use nikto to scan a target and research potential exploits'
  },
  {
    tier: '2',
    data: 'Find the mac address of the wifi router'
  },
  {
    tier: '2',
    data: 'Deauth another laptop from the wifi network (an unused one)'
  },
  {
    tier: '2',
    data: 'Complete LMG forensicscontest.com puzzle #1 (Anns Bad AIM)'
  },
  {
    tier: '2',
    data: 'Complete LMG forensicscontest.com puzzle #2 (Ann Skips Bail)'
  },
  {
    tier: '2',
    data: 'Create a span/mirror port on a cisco switch'
  },
  {
    tier: '2',
    data: 'NMAP your subnet and determine what the open ports are for'
  },
  {
    tier: '3',
    data: 'Run a scan with OpenVAS'
  }, {
    tier: '3',
    data: 'Setup an apache web server with certificates'
  }, {
    tier: '3',
    data: 'Complete a range target CTF'
  }, {
    tier: '3',
    data: 'Install and configure snort'
  }, {
    tier: '3',
    data: 'Configure VLANs between 2 switches'
  }, {
    tier: '3',
    data: 'Configure OSPF between 3 routers'
  },
  {
    tier: '3',
    data: 'Create LACP bind on a server and switch'
  },

  {
    tier: '3',
    data: 'Write an Ansible playbook to update/upgrade and restart a server'
  },

  {
    tier: '3',
    data: 'Write a buffer overflow program which executes shell code (Assembly, C)'
  },

  {
    tier: '3',
    data: 'Mitigate a high/critical vulnerability from an openVAS scan'
  },
  {
    tier: '4',
    data: 'Create a report outlining the steps you took to complete a range target (formal)'
  },
  {
    tier: '4',
    data: 'Brief range staff on how you broke a target and recommended solutions for prevention'
  }
]



module.exports = riskData;


 
},{}],3:[function(require,module,exports) {
(function () {

  const riskData = require('./riskData.js')

  Vue.component('random-listing', {
    template: '#listing',
    data: function () {
      return {
        randomData: 0
      }
    },
    methods: {
      randomizer(num) {
        const filterData = riskData.filter(o => o.tier == num)
        const randomIndex = Math.floor(Math.random() * filterData.length)
        this.randomData = filterData[randomIndex]
      }
    }
  })

  new Vue({
    el: '#main'
  })
  
})()
},{"./riskData.js":6}],0:[function(require,module,exports) {
var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module() {
  OldModule.call(this);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

if (!module.bundle.parent && typeof WebSocket !== 'undefined') {
  var ws = new WebSocket('ws://' + window.location.hostname + ':43663/');
  ws.onmessage = function(event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        window.location.reload();
      }
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id)
  });
}
},{}]},{},[0,3])