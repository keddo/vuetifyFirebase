<template>
    <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" color="green" top>
        <span>Awesome you added a new project!</span>
        <v-btn flat color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-toolbar flat app>
    <v-toolbar-side-icon @click="drawer=!drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase grey--text">
          <span class="font-weight-light">Todo</span>
          <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <!-- drop down menu -->
        <v-menu offset-y>
            <v-btn flat slot="activator" color="grey">
                <v-icon>expand_more</v-icon>
                <span>Menu</span>
            </v-btn>
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route"> 
                 <v-list-tile-title>
                     {{link.text}}
                 </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
      <v-btn flat color="grey">
          <span>Sign Out</span>
          <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="primary">
     <v-layout column align-center>
        <v-flex class="mt-5">
         <v-avatar size="100">
             <img src="/img/avatar-1.png">
         </v-avatar>
         <p class="white--text subheading mt-1">
             The Net Ninja
         </p>
        </v-flex>
        <v-flex class="mt-4 mb-3">
            <Popup @projectAdded="snackbar = true"/>
        </v-flex>
     </v-layout>
     <v-list>
         <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
             <v-list-tile-action>
                 <v-icon class="white--text">{{link.icon}}</v-icon>
             </v-list-tile-action>
           <v-list-tile-content>
               <v-list-tile-title class="white--text">{{link.text}}</v-list-tile-title>
           </v-list-tile-content>
         </v-list-tile>
     </v-list>
    </v-navigation-drawer>
 </nav>
</template>

<script>
import Popup from './Popup';
export default {
    components:{
       Popup
    },
      data(){
          return {
              drawer: false,
      links:[
          {icon:'dashboard', text:'Dashboard', route:'/'},
          {icon:'folder', text:'Projects', route:'/projects'},
          {icon:'person', text:'Team', route:'/team'}
      ],
      snackbar: false
          }
      },
      
}
</script>

<style>

</style>
