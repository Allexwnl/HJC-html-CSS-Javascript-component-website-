<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/Supabase/supabase'
import '@/assets/css/sugestion.css'

const suggestion = ref('')
const user = ref(null)
const message = ref('')
const router = useRouter()

onMounted(async () => {
  const { data: { user: currentUser } } = await supabase.auth.getUser()
  if (!currentUser) {
    router.push('/login') // Redirect als niet ingelogd
  } else {
    user.value = currentUser
  }
})

const submitSuggestion = async () => {
  if (!suggestion.value) {
    message.value = 'Vul een suggestie in.'
    return
  }

  const { error } = await supabase.from('suggesties').insert([
    {
      user_id: user.value.id,
      content: suggestion.value
    }
  ])

  if (error) {
    message.value = 'Er ging iets mis: ' + error.message
  } else {
    message.value = 'Suggestie verzonden, bedankt!'
    suggestion.value = ''
  }
}
</script>

<template>
  <main class="suggestie-container">
    <h1>Dien een suggestie in</h1>
    <textarea v-model="suggestion" placeholder="Typ je suggestie hier..."></textarea>
    <button class="--button-login-register" @click="submitSuggestion">Verstuur</button>
    <p>{{ message }}</p>
  </main>
</template>
