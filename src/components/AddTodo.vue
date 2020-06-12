
<template>
   <div class="add__todo__container">
       <form @submit.prevent="handleSubmit" >
         <input type='text' v-model="name"  placeholder="Add something todo" required>
          <button type="submit" >Add Todo</button>
       </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'AddTodo',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    ...mapActions(['addNewTodo']),
    handleSubmit () {
      const todo = {
        id: uuidv4(),
        name: this.name,
        completed: false,
        edit: false

      }
      this.addNewTodo(todo)
      this.name = ''
    }

  }
}
</script>

<style scoped>
.add__todo__container{
     max-width: 60rem;
    margin: 0 auto;
    padding: 2rem 0;
}
input {
    border: none;
    font-size: 1.4rem;
    font-weight: 300;
    height: 3rem;
    margin-right: 1.6rem;
    padding: .4rem .8rem;
}
button {
    background: #7044a0;
    border: none;
    border-bottom: 2px solid #603a88;
    color: white;
    font-size: 1.4rem;
    font-weight: 300;
    padding: .8rem;
    transition: background .3s ease, color .3s ease;
}

</style>
