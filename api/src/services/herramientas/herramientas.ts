import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const herramientas: QueryResolvers['herramientas'] = () => {
  return db.herramienta.findMany()
}

export const herramienta: QueryResolvers['herramienta'] = ({ id }) => {
  return db.herramienta.findUnique({
    where: { id },
  })
}

export const createHerramienta: MutationResolvers['createHerramienta'] = ({
  input,
}) => {
  return db.herramienta.create({
    data: input,
  })
}

export const updateHerramienta: MutationResolvers['updateHerramienta'] = ({
  id,
  input,
}) => {
  return db.herramienta.update({
    data: input,
    where: { id },
  })
}

export const deleteHerramienta: MutationResolvers['deleteHerramienta'] = ({
  id,
}) => {
  return db.herramienta.delete({
    where: { id },
  })
}
