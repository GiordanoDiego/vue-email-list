/*
console.log('nomeVariabile', nomeVariabile, typeof nomeVariabile);

document.getElementById('idHtml').innerHTML = noveVariabileJS;

//valore input 
    userName = document.getElementById('userName');
    userNameValue = userName.value;

//controllare se il valore è Nan
    if(isNaN(kmValue))

*/
const { createApp } = Vue;

createApp({
    data() {
        return {
            url: 'https://flynn.boolean.careers/exercises/api/random/mail',
            emails: [], 
            finished: false,
        };
    },
    methods: {
        
    },
    mounted(){
        for(let i = 0; i<10; i++){
            axios
            .get(this.url)
            .then((res) => {
                console.log("Email nuova:",res.data.response);
                this.emails.push(res.data.response);

                if(this.emails.length == 10){ //devo mettere la condizione perchè non so quando         arriveranno le chiamate
                    this.finished = true;
                }
            })
        }
    }
}).mount('#app');
console.log(axios);