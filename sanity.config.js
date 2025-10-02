import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'allthingslife',

  projectId: 'bvu37l8u',
  dataset: 'allthingslife',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
