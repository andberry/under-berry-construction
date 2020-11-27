<template>
    <main id="main" class="lg:min-h-screen lg:grid lg:grid-cols-2">
        <div class="image hidden lg:block bg-cover bg-no-repeat bg-center"></div>
        <div class="content min-h-screen lg:min-h-0 flex items-center justify-center p-12 2xl:p-40">
            <div class="text-center">
                <img class="w-50vw md:w-40 inline-block" :src="logo.src" :alt="logo.alt">
                <h1 class="content__title leading-none text-3xl lg:text-huge font-bold mt-8">
                    {{ data.title }}
                </h1>
                <h2 class="content__subtitle leading-none text-xl lg:text-huge2 font-bold mt-2">
                    {{ data.subtitle }}
                </h2>
                <div class="content__text mt-8" v-html="data.content" />
            </div>
        </div>
    </main>
</template>

<script>
import data from '~/assets/data.json'
export default {
    data () {
        return {
            data,
            logo: {
                src: require('~/assets/images/logo.svg?inline'),
                alt: ''
            }
        }
    },

    head: {
        title: data.meta.title,
        meta: [
            {
                name: 'description',
                hid: 'description',
                content: data.meta.description
            }
        ]
    }
}
</script>

<style scoped>
    .image{
        background-image: url('~assets/images/tech2.jpg?inline');
    }
</style>
