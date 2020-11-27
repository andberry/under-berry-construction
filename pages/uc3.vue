<template>
    <main id="main" class="min-h-screen lg:grid lg:grid-cols-lombizlg xl:grid-cols-lombizxl 2xl:grid-cols-lombiz2xl">
        <div class="image bg-cover bg-no-repeat bg-center lg:col-start-1 lg:col-end-8"></div>
        <div class="content min-h-screen lg:min-h-0 flex items-center lg:col-start-8 lg:col-end-14 px-16 py-16">
            <div>
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
        background-image: url('~assets/images/tech1.jpg');
    }
</style>
