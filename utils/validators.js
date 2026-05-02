export const validators = {
  email: (email) => {
    if (!email) return 'El correo es requerido'
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!regex.test(email)) return 'El correo no es válido'
    return null
  },

  password: (password) => {
    if (!password) return 'La contraseña es requerida'
    if (password.length < 6) return 'Mínimo 6 caracteres'
    return null
  },

  nombre: (nombre) => {
    if (!nombre) return 'El nombre es requerido'
    if (nombre.trim().length < 2) return 'El nombre es muy corto'
    return null
  },

  confirmPassword: (password, confirm) => {
    if (!confirm) return 'Confirma tu contraseña'
    if (password !== confirm) return 'Las contraseñas no coinciden'
    return null
  },
}