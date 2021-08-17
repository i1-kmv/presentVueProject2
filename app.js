const App = {
    data:() => ({
        title: 'Hello Vue',
        myHtml: '<h3>Vue3 app<h3>',
        person: {
            firstName: 'Ivan',
            lastName: 'Yarovoy',
            age: 30
        },
        items: [1,2,3,4,5,6]
    }),
    methods: {
        stopPropagation(e) {
            e.stopPropagation()
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0  )
        }
    }
}

Vue.createApp(App).mount('#app')

