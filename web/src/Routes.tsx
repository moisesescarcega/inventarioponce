// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import MaterialsLayout from 'src/layouts/MaterialsLayout'

import HerramientasLayout from 'src/layouts/HerramientasLayout'
import InventarioLayout from 'src/layouts/InventarioLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MaterialsLayout}>
        <Route path="/materials/new" page={MaterialNewMaterialPage} name="newMaterial" />
        <Route path="/materials/{id}/edit" page={MaterialEditMaterialPage} name="editMaterial" />
        <Route path="/materials/{id}" page={MaterialMaterialPage} name="material" />
        <Route path="/materials" page={MaterialMaterialsPage} name="materials" />
      </Set>
      <Set wrap={HerramientasLayout}>
        <Route path="/herramientas/new" page={HerramientaNewHerramientaPage} name="newHerramienta" />
        <Route path="/herramientas/{id}/edit" page={HerramientaEditHerramientaPage} name="editHerramienta" />
        <Route path="/herramientas/{id}" page={HerramientaHerramientaPage} name="herramienta" />
        <Route path="/herramientas" page={HerramientaHerramientasPage} name="herramientas" />
      </Set>
      <Set wrap={InventarioLayout}>
        <Route path="/" page={InicioPage} name="inicio" />
        <Route path="/herramienta" page={HerramientaPage} name="herramienta" />
        <Route path="/material" page={MaterialPage} name="material" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
