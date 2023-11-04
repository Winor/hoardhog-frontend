import { defineStore } from 'pinia'
import type {item} from "hoardhog-api"

export const useItemStore = defineStore('item', {
    state: () => {
      return {
        itemList: [] as typeof item[],
      }
    },
  })
