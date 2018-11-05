<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 lg5 mb-3>
                <v-expansion-panel popout>
                    <v-expansion-panel-content
                            v-for="(note, index) of notes"
                            :key="index">
                        <div slot="header">{{note.title}}</div>
                        <v-card>
                            <v-card-text>{{note.body}}</v-card-text>
                        </v-card>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
     export default {
       data() {
          return {
            notes: []
          }
       },

       methods: {
         refreshData() {
           this.$http.get('/api/blog/list').then(res => {
             // get body data
             this.notes = res.body;
           }, error => {
           });
         }
       },

       created() {
         this.refreshData();
       }
     }
</script>