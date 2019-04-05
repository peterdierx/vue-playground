<template>
  <div class='box'>
    <h5 class='title is-5 has-text-success'>Vue Ecosystem</h5>
    <ul>
      <li v-for='item in vue' :key='item.id'>
        <router-link :to="{ name: 'namedview', params: { id: item.id, info: item.info } }">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'VueEco',
    data() {
      return {
        vue: [
          { id: 1, name: 'Vue CLI',      info: 'Vue CLI is a full system for rapid Vue development'        },
          { id: 2, name: 'Vue Loader',   info: 'Loader for webpack to work with SFCs'                      },
          { id: 3, name: 'Vue Router',   info: 'Official router for Vue'                                   },
          { id: 4, name: 'Vuex',         info: 'State Management for your store'                           },
          { id: 5, name: 'Vue Devtools', info: 'Browser devtools extension for debugging Vue applications' }
        ]
      }
    }
  }
</script>
