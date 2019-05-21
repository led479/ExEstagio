<template>
  <div>
    <b-navbar variant="dark" type="dark" toggleable="lg">
      <b-navbar-brand to="/">AuxProfessores</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/alunos">Alunos</b-nav-item>
          <b-nav-item to="/professores">Professores</b-nav-item>
          <b-nav-item to="/disciplinas">Disciplinas</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <!-- <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right> -->
        <!-- Using 'button-content' slot -->
        <!-- <template slot="button-content"
              ><em>User</em></template
            >
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav> -->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped></style>
