import ListView from './views/ListView'
import AddView from './views/AddView'
import EditView from './views/EditView'
import RemoveView from './views/RemoveView'

export default [
  { path: '/', component: ListView, name: 'list' },
  { path: '/add', component: AddView, name: 'add' },
  { path: '/edit/:id', component: EditView, name: 'edit' },
  { path: '/remove/:id', component: RemoveView, name: 'remove' }
]
