<template>
  <!-- Vue3 já permite ter +1 elemento no root/template da aplicação -->
  <custom-header
    @create-account="handleCreateAccount"
    @login="handleLogin"
  />
  <contact-view />
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">Feedbacker © 2023</p>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CustomHeader from './CustomHeader.vue'
import ContactView from './ContactView.vue'
import useModal from '../../hooks/useModal'

export default {
  components: { CustomHeader, ContactView },
  setup () {
    // No Vue2 utilizava-se o router (this.$router.metodos). Na composition API não existe this, então foi usado Hooks.
    // Foi criado a constante "router" para isso, usando o useRouter que está dentro do próprio Vue Router.
    const router = useRouter()
    const modal = useModal()

    onMounted(() => { // Quando o componente for montado...
      const token = window.localStorage.getItem('token')

      if (token) {
        router.push({ name: 'Feedbacks' })
      }
    })

    function handleLogin () {
      modal.open({
        component: 'ModalLogin'
      })
    }

    function handleCreateAccount () {
      modal.open({
        component: 'ModalCreateAccount'
      })
    }

    return { handleLogin, handleCreateAccount }
  }
}
</script>
