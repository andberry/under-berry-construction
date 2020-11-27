<template>
    <article>
        <header class="bg-black py-8">
            <div class="container mx-auto px-4 text-white text-center">
                Under Berry Construction Pages
            </div>
        </header>

        <section class="container mx-auto px-4 max-w-screen-lg py-16 sm:grid grid-cols-3 gap-8">
            <nuxt-link v-for="(p, k) in pages" :key="k" class="block hover:opacity-75 mb-16 sm:mb-0" :to="p">
                <img :src="require('~/assets/images/' + p + '.jpg')" alt="" class="border border-gray">
                <div class="text-center font-bold uppercase font-2xl mt-2">{{ p }}</div>
            </nuxt-link>
        </section>
    </article>
</template>

<script>
export default {
    data () {
        return {
            pages: [
                'uc1', 'uc2', 'uc3'
            ]
        }
    }
}
</script>
