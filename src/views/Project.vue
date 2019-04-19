<template>
  <div class="prjects">
    <v-container class="my-5">
    <h1 class="subheading grey--text">Prjects</h1>
      <v-expansion-panel>
        <v-expansion-panel-content v-for="project in myProjects" :key="project.title">
          <div slot="header" class="black--text">
           {{project.title}}
          </div>
          <v-card>
            <v-card-text class="px-4 black--text">
              <div class="font-weight-bold">{{project.due}}</div>
              <div>{{project.content}}</div>
            </v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-container>
  </div>
</template>
<script>
import db from '@/firebase'
export default {
  data(){
    return {
      projects:[]
    }
  },
  computed:{
    myProjects(){
       return this.projects.filter(pro=>{
         return pro.person === 'The Net Ninja'
       })
    }
  },
   created(){
      db.collection('projects').onSnapshot(res=>{
        const changes = res.docChanges();
        changes.forEach(change => {
          if(change.type === 'added'){
            this.projects.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        });
      })
    }
}
</script>
