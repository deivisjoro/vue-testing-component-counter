<script setup>
    import { computed, ref } from 'vue';

    const props = defineProps({
        inicio: {
            default: 1,
            type: Number
        }
    })

    const counter = ref(props.inicio);

    const incrementar = () => {
        counter.value++;
    }

    const decrementar = () => {
        counter.value--;
    }

    const squareCounter = computed(()=>{
        return counter.value * counter.value
    })

</script>

<template>
    <h2>Counter App</h2>
    <div>
        <h3>{{ counter }} <sup>2</sup> = {{ squareCounter }} </h3>
        <p data-testid="counter">{{ counter }}</p>
        <div class="buttons">
            <button @click="decrementar" data-testid="button-decrementar"> - </button>
            <button @click="incrementar" data-testid="button-incrementar"> + </button>
        </div>
    </div>
  
</template>

<style scoped>
    button{
        padding: 3px 5px;
        margin-right: 10px;
    }
</style>