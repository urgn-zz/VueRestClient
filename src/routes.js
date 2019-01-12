import ListView from './views/ListView'
import AddView from './views/AddView'
import EditView from './views/EditView'

export default [
  { path: '/', component: ListView, name: 'list' },
  { path: '/add', component: AddView, name: 'add' },
  { path: '/edit/:id', component: EditView, name: 'details' }
]
