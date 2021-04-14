export default function ({ store, redirect }) {
  if (!store.getters.isAuthenticated || store.state.auth.user.role !== 99) {
    return redirect('/login')
  }
}
