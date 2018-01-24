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