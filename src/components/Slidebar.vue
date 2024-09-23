<script setup>
import { onMounted, ref } from 'vue';
/**
 * This component is an animated sliding bar. You must provide it with one of four strings as the prop 'size': 
 * 'nothing', 'small', 'medium', 'half', 'full' or 'high'.
 * Also you can provide a string in CSS-like format for its barColor and backgroundColor props.
 * ---------
 * Esse componente eh uma barra com animacao de deslizar da esquerda pra direita. Deve ser provida de
 * um dos valores [nothing, small, medium, half, full, high] no prop 'size'.
 * Adicionalmente, pode informar strings CSS-like pra cor da barra na prop barColor e pro fundo na prop backgroundColor.
 */

const props = defineProps({
    name: {
        type: String,
        required: false,
        default() {
            return "";
        }
    },
    size: {
        type: String,
        required: true,
        validator(value) {
            return ["small","medium","high","half"].includes(value);
        }
    },
    barColor: {
        type: String,
        required: false,
        default: () => "#ED872D",
        validator(value) {
            //Checks if its CSS-like in a very simple way
            return /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(value) || /^rgba?\(\s*.*\s*\)$/i.test(value);
        }
    },
    backgroundColor: {
        type: String,
        required: false,
        default: () => "#272629",
        validator(value) {
            //Checks if its CSS-like in a very simple way
            return /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(value) || /^rgba?\(\s*.*\s*\)$/i.test(value);
        }
    },
});

const barra = ref(null);

onMounted(() => {

    // Applies styling from the props to the bar
    barra.value.querySelector(".fundo-barra").style.backgroundColor = props.backgroundColor;
    barra.value.querySelector(".linha-barra").style.backgroundColor = props.barColor;

    // Animation Observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelector(".linha-barra").classList.add(props.size);
            observer.unobserve(entry.target); // Para de observar quando animacao comecou
        }
      });
    }, { threshold: 1 }); // Indica a porcentagem do elemento que deve estar visivel para chamar o callback

    // Associa o observer aos elementos da barra.
    observer.observe(barra.value);
});
</script>

<template>
    <div class="barra" ref="barra">
        <h2 v-if="name.length > 0" class="above-text">{{ name }}</h2>
        <div class="fundo-barra">
            <div class="linha-barra">

            </div>
        </div>
    </div>
</template>

<style setup>
.above-text{
    color: white;
    font-size: large;
    padding-left: 10px;
}
.fundo-barra{
    width: 100%;
    height: 30px;
    border-radius: 30px;
    overflow: hidden;
}
.linha-barra{
    width: 0%;
    height: 100%;
}
.empty{
    width: 0%;
}
.small{
    animation: grow-basic 1.5s forwards;
}
.half{
    animation: grow-half 1.5s forwards;
}
.medium{
    animation: grow-inter 1.5s forwards;
}
.high{
    animation: grow-advanced 1.5s forwards;
}
.full{
    animation: grow-full 1.5s forwards;
}

@keyframes grow-basic {
    from {
        width: 0%;
    }
    to {
        width: 30%;
    }
}
@keyframes grow-half {
    from {
        width: 0%;
    }
    to {
        width: 50%;
    }
}
@keyframes grow-inter {
    from {
        width: 0%;
    }
    to {
        width: 60%;
    }
}
@keyframes grow-advanced {
    from {
        width: 0%;
    }
    to {
        width: 90%;
    }
}
@keyframes grow-full {
    from {
        width: 0%;
    }
    to {
        width: 100%;
    }
}
</style>