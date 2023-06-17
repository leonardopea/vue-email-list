const {createApp} = Vue;

createApp({
    data(){
        return{
            random_mail: '',
            array_mail:[]
        }
    },
    mounted(){
        
    },
    methods: {
        generate_ten_mail(){
            for (let i=0; i<10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    this.array_mail.push(result.data.response);
            });

            }
        }
    },
    
}).mount('#app');