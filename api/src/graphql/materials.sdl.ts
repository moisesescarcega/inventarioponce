export const schema = gql`
  type Material {
    id: String!
    descripcion: String!
    tipo: String!
    entradas: Int!
    salidas: Int!
    existencias: Int!
    propiedad: String!
    notas: String!
    registro: DateTime!
  }

  type Query {
    materials: [Material!]! @requireAuth
    material(id: String!): Material @requireAuth
  }

  input CreateMaterialInput {
    descripcion: String!
    tipo: String!
    entradas: Int!
    salidas: Int!
    existencias: Int!
    propiedad: String!
    notas: String!
    registro: DateTime!
  }

  input UpdateMaterialInput {
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
    createMaterial(input: CreateMaterialInput!): Material! @requireAuth
    updateMaterial(id: String!, input: UpdateMaterialInput!): Material!
      @requireAuth
    deleteMaterial(id: String!): Material! @requireAuth
  }
`
