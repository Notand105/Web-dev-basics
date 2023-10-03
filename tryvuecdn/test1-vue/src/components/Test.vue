<template>
    <div class="container">
        <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, iure!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut mollitia, maxime fugit placeat labore ratione, quis error voluptate necessitatibus nihil inventore dignissimos accusantium, est dolores debitis magni quo tempore totam?</p>
    </div>
    <div class="component">
        <h1 v-if="isVisible">{{ message }}</h1>
        <button v-on:click="$event => isVisible = !isVisible">ocultar/mostar</button>
        <button v-on:click="alertar">alerta</button>
    </div>
    <div>
        <div v-for="item in datos" :key="item.animal">
            <h4>{{ item.animal }} come {{ item.come }}</h4>
        </div>
    </div>
    <div v-bind:class="{red : RedActive}">
        <h3>Prueba color rojo</h3>
        <button @click="cambiarRedActive">ponerRojo</button>
    </div>
</template>
<script>
export default{
    name:'test',
    data(){
        return {
            message:'Pruebas',
            isVisible: false,
            datos: [
                {
                animal:'perro',
                come:'gato'
                },
                {animal:'gato',
                come:'ratón'
                },
                {
                    animal:'ratón',
                    come:'queso'
                }
            ],
            RedActive:false
        }
    },
    methods:{
        alertar(){
            alert('alertando...')
        },
        cambiarRedActive(){
            this.RedActive = !this.RedActive
        }
    }

}
</script>

<style scoped>
    .container{
        background-color: #242424;

    }
    .red{
        background-color: red;
    }
</style>