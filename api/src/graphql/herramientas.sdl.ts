export const schema = gql`
  type Herramienta {
    id: String!
    descripcion: String!
    tipo: String!
    entradas: Int!
    salidas: Int!
    existencias: Int!
    propiedad: String!
    notas: String!
    registro: DateTime
  }

  type Query {
    herramientas: [Herramienta!]! @requireAuth
    herramienta(id: String!): Herramienta @requireAuth
  }

  input CreateHerramientaInput {
    descripcion: String!
    tipo: String!
    entradas: Int!
    salidas: Int!
    existencias: Int!
    propiedad: String!
    notas: String!
    registro: DateTime
  }

  input UpdateHerramientaInput {
    descripcion: String
    tipo: String
    entradas: Int
    salidas: Int
    existencias: Int
    propiedad: String
    notas: String
    registro: DateTime
  }

  type Mutation {
    createHerramienta(input: CreateHerramientaInput!): Herramienta! @requireAuth
    updateHerramienta(
      id: String!
      input: UpdateHerramientaInput!
    ): Herramienta! @requireAuth
    deleteHerramienta(id: String!): Herramienta! @requireAuth
  }
`
