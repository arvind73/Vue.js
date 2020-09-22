
new Vue({
    el:'#app',
    data:{
        state:true,
        inputName:'',
        names:[],
        showError:false,
        result:''
    },
    methods: {
        addNametoList(){
            console.log(this.names);
            if(this.validate(this.inputName)){
                this.names.push(this.inputName);
                this.inputName='';
                this.showError=false;
            } else {
                this.showError = true;
            }
        },
        validate(value){
            if(value !== ''){
                return true;
            } else {
                return false;
            }
        },
        showResults(){
            let rand = this.names[Math.floor(Math.random() * this.names.length)]
            this.result = rand;
            this.state = false;
        },
        resetApp(){
            this.state = true;
            this.names = [];
            this.result = ''
        },
        removeName(index){
            this.name.splice(index,1);
        }
        
    }
});