const {createApp} = Vue;

createApp({
    data(){
        return{
            random_mail: ''
        }
    },
    mounted(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {

        this.random_mail = result.data.response

        

        });
        
    }
    
}).mount('#app');