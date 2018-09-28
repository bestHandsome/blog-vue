<template>
    <v-footer dark height="auto">
        <div class="box-container">
             &copy;2018 — <strong>思思小主</strong>
        </div>
    </v-footer>
</template>

<script>
     export default {
         name: 'footer',
         data: () => ({
             icons: [
                 'call',
                 'email',
             ]
         })
     }
</script>