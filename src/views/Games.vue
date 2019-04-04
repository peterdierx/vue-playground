<template>
  <div class='box'>
    <h5 class='title is-5'>Games</h5>
    <ul>
      <Game v-for='game in games'
        :id='game.id'
        :name='game.name'
        :info='game.info' 
        :key='game.id'
      />
    </ul>
  </div>
</template>

<script>
  import Game from '@/components/Game'

  export default {
    name: 'GameList',
    components: { Game },
    data() {
      return {
        games: [
          { id: 1, name: 'Halo',           info: 'Combat Evolved'          },
          { id: 2, name: 'God of War',     info: 'Mythology Based Action'  },
          { id: 3, name: 'The Last of Us', info: 'Epic Zombie Adventure'   },
          { id: 4, name: 'Dark Souls',     info: 'Medieval Slaughter Fest' }
        ]
      }
    }
  }
</script>
