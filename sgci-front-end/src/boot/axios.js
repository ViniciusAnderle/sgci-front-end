import { boot } from 'quasar/wrappers'
import axios from 'axios'
import validators from '../validators/validator-set'

const api = axios.create({ baseURL: 'https://api.example.com'})

export default boot(({ app }) => {
    app.config.globalProperties.$axios = axios
    app.config.globalProperties.$api = api

    app.mixin({ methods: validators })
})

export { api }
