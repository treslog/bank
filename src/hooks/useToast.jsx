export default function useToast (err = 'Error desconocido') {
  const toast = document.querySelector('.toast')
  document.querySelector('#toast-message').innerHTML = err
  toast.classList.remove('hidden')
  toast.classList.add('flex')
  toast.classList.add('active')

  setTimeout(() => {
    toast.classList.remove('active')
    setTimeout(() => {
      toast.classList.add('hidden')
      toast.classList.remove('flex')
    }, 1000)
  }, 5000) // 1s
}
