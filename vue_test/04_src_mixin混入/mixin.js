export const mixin = {
    methods: {
        showName(){
            console.log(this.name)
        }
    }
}

export const datamixin = {
    data(){
        return {
            a: 1,
            b: 2
        }
    }
}
