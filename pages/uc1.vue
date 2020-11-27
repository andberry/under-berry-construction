<template>
    <main id="main" class="min-h-screen flex items-center justify-center text-center">
        <div class="px-8 max-w-screen-sm">
            <img class="w-50vw md:w-40 inline-block" :src="logo.src" :alt="logo.alt">
            <h1 class="title leading-none text-3xl lg:text-huge font-bold mt-8">
                {{ data.title }}
            </h1>
            <h2 class="subtitle leading-none text-xl lg:text-huge2 font-bold mt-2">
                {{ data.subtitle }}
            </h2>
            <div class="content mt-8" v-html="data.content" />
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
